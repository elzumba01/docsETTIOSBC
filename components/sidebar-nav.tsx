"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    href: string
    items?: {
      title: string
      href: string
    }[]
  }[]
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <ScrollArea className="h-[calc(100vh-3.5rem)]">
      <div className="w-full p-4">
        <nav
          className={cn(
            "flex w-full flex-col space-y-2 lg:space-y-4",
            className
          )}
          {...props}
        >
          {items.map((item) => (
            <div key={item.href} className="space-y-3">
              <Link href={item.href}>
                <span
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "transparent"
                  )}
                >
                  {item.title}
                </span>
              </Link>
              {item.items?.length && (
                <div className="pl-4 space-y-1">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        pathname === subItem.href
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </ScrollArea>
  )
}
