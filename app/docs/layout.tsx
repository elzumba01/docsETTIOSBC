import { MainNav } from "@/components/main-nav"
import { SidebarNav } from "@/components/sidebar-nav"
import { docsConfig } from "@/config/docs"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <div className="container flex-1">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 py-8">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
            <SidebarNav items={docsConfig.sidebarNav} />
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}
