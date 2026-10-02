"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string
  filename?: string
  children: React.ReactNode
}

export function CodeBlock({
  children,
  className,
  language,
  filename,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const codeText =
    typeof children === "string"
      ? children
      : children
      ? String(children)
      : ""

  const copyToClipboard = () => {
    if (codeText) {
      navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const displayLanguage =
    language && language !== "none" ? language.toUpperCase() : null

  return (
    <div className="relative group mt-6 mb-8">
      {filename && (
        <div className="absolute top-0 left-0 right-12 rounded-t-md bg-muted px-4 py-2 text-xs font-medium border-t border-l border-r text-muted-foreground">
          {filename}
        </div>
      )}

      <pre
        className={`px-4 py-4 rounded-lg border border-muted bg-muted overflow-x-auto text-sm ${
          filename ? "pt-14" : ""
        } ${className || ""}`}
        {...props}
      >
        {children}
      </pre>

      {displayLanguage && (
        <div className="absolute top-3 right-14 text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-muted border">
          {displayLanguage}
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 h-8 w-8 text-muted-foreground hover:bg-muted-foreground/10"
        onClick={copyToClipboard}
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  )
}
