"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { languageOptions } from "@/lib/i18n/translations"
import { useLanguage } from "@/components/language-provider"

export function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const current = languageOptions.find((o) => o.code === lang) ?? languageOptions[0]

  React.useEffect(() => {
    if (!open) return
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Select language"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 h-9 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{current.flag} {current.label}</span>
        <span className="sm:hidden">{current.flag}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                setLang(option.code)
                setOpen(false)
              }}
              className={cn(
                "flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                option.code === lang && "bg-accent/50 font-medium"
              )}
            >
              <span>{option.flag}</span>
              <span className="flex-1 text-left">{option.label}</span>
              {option.code === lang && <Check className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
