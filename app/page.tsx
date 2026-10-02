import Link from "next/link"
import { ArrowRight, FileText, Code, Globe, Shield, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Ettios Blockchain Documentation
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Complete guides and resources for building on our EVM-compatible blockchain.
            Fast, secure, and developer-friendly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/docs/getting-started/introduction">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs/developer-quickstart/first-smart-contract">
                Deploy a Smart Contract
                <Code className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ettios is designed from the ground up to be powerful, efficient and easy to build on
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <Zap className="h-10 w-10 mb-3 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Sub-second finality with high throughput for 
                a smooth user experience.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <Shield className="h-10 w-10 mb-3 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Built with security first principles and rigorously tested.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <Code className="h-10 w-10 mb-3 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">EVM Compatible</h3>
              <p className="text-sm text-muted-foreground">
                Use all your favorite Ethereum tools and libraries.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <FileText className="h-10 w-10 mb-3 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Well Documented</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive guides and examples to get you building quickly.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <Globe className="h-10 w-10 mb-3 text-primary" />
            <div className="space-y-2">
              <h3 className="font-bold">Growing Ecosystem</h3>
              <p className="text-sm text-muted-foreground">
                Join a thriving community of developers and projects.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <svg
              className="h-10 w-10 mb-3 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Low Gas Fees</h3>
              <p className="text-sm text-muted-foreground">
                Keep transaction costs low for you and your users.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <Button asChild>
            <Link href="/docs/getting-started/introduction">
              Explore Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Ready to Start Building?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Get started with our developer quickstart, templates, and comprehensive documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/docs/getting-started/introduction">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link 
                href="https://github.com/ettios" 
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ettios Blockchain. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com/ettios"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              Twitter
            </Link>
            <Link
              href="https://discord.gg/ettios"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              Discord
            </Link>
            <Link
              href="https://github.com/ettios"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
