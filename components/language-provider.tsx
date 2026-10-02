"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { Lang, languageOptions, translations } from "@/lib/i18n/translations"

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = React.createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
})

export const useLanguage = () => React.useContext(LanguageContext)

const STORAGE_KEY = "ettios-language"

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "NOSCRIPT"])

function normalize(text: string): string {
  return text.replace(/\s+/g, " ").trim()
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en")
  const pathname = usePathname()
  // Remembers the original (English) value of every translated text node,
  // so switching languages always translates from the source text.
  const originals = React.useRef(new WeakMap<Text, string>())
  const placeholderOriginals = React.useRef(new WeakMap<Element, string>())

  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (saved && languageOptions.some((o) => o.code === saved)) {
      setLangState(saved)
    }
  }, [])

  const applyTranslations = React.useCallback(
    (target: Lang) => {
      if (typeof document === "undefined") return
      const dict = target === "en" ? null : translations[target]

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement
          if (!parent) return NodeFilter.FILTER_REJECT
          if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT
          if (parent.closest("code, pre, script, style, [translate='no'], .notranslate")) {
            return NodeFilter.FILTER_REJECT
          }
          return NodeFilter.FILTER_ACCEPT
        },
      })

      const nodes: Text[] = []
      let current = walker.nextNode()
      while (current) {
        nodes.push(current as Text)
        current = walker.nextNode()
      }

      for (const node of nodes) {
        if (!originals.current.has(node)) {
          originals.current.set(node, node.nodeValue ?? "")
        }
        const original = originals.current.get(node) ?? ""
        const key = normalize(original)
        if (!key) continue
        const leading = original.match(/^\s*/)?.[0] ?? ""
        const trailing = original.match(/\s*$/)?.[0] ?? ""
        const translated = dict?.[key]
        node.nodeValue = leading + (translated ?? key) + trailing
      }

      // Translate input placeholders
      document.querySelectorAll("[placeholder]").forEach((el) => {
        if (!placeholderOriginals.current.has(el)) {
          placeholderOriginals.current.set(el, el.getAttribute("placeholder") ?? "")
        }
        const original = placeholderOriginals.current.get(el) ?? ""
        const key = normalize(original)
        const translated = dict?.[key]
        el.setAttribute("placeholder", translated ?? key)
      })

      document.documentElement.lang = target
    },
    []
  )

  // Re-apply when the language or the route changes
  React.useEffect(() => {
    applyTranslations(lang)
  }, [lang, pathname, applyTranslations])

  // Translate content injected dynamically (search results, dropdowns, etc.)
  React.useEffect(() => {
    if (lang === "en") return
    const observer = new MutationObserver(() => applyTranslations(lang))
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [lang, applyTranslations])

  const setLang = React.useCallback((next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next)
    setLangState(next)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
