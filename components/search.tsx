"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import Fuse from "fuse.js"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { docsConfig } from "@/config/docs"

export function Search() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [results, setResults] = React.useState<any[]>([])

  // Flatten doc items for search
  const items = React.useMemo(() => {
    const allItems: any[] = []
    docsConfig.sidebarNav.forEach((section) => {
      allItems.push({
        title: section.title,
        href: section.href,
      })
      if (section.items) {
        section.items.forEach((item) => {
          allItems.push({
            title: item.title,
            href: item.href,
          })
        })
      }
    })
    return allItems
  }, [])

  // Initialize Fuse search
  const fuse = React.useMemo(() => {
    return new Fuse(items, {
      keys: ["title"],
      threshold: 0.3,
    })
  }, [items])

  React.useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
    
    setResults(fuse.search(query).map((res) => res.item))
  }, [query, fuse])

  function onSelect(item: any) {
    setOpen(false)
    setQuery("")
    router.push(item.href)
  }

  return (
    <div className="relative w-full">
      <div className="relative flex w-full items-center">
        <SearchIcon className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search documentation..."
          className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 100)}
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-md border bg-popover p-2 shadow-md">
          <div className="space-y-1">
            {results.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start text-left"
                onClick={() => onSelect(item)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
