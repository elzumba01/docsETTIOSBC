"use client"

import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@/components/mdx-components'

export function MDXContent({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="mdx-content">
        {children}
      </div>
    </MDXProvider>
  )
}
