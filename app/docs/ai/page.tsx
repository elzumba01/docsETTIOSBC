"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Brain, Cpu, Bot, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function AIOverviewPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        AI on Ettios
      </h1>

      <p className="text-lg leading-7">
        Ettios is the first blockchain with native artificial intelligence integration in Latin America.
        By combining a high-performance EVM-compatible network with AI-oriented infrastructure, Ettios enables
        a new generation of intelligent decentralized applications — from autonomous on-chain agents to
        AI-driven DeFi, gaming, and identity solutions.
      </p>

      <div className="my-8 p-6 border rounded-lg bg-gradient-to-r from-primary/10 to-transparent shadow-sm">
        <h3 className="text-xl font-bold mt-0 flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          Pioneering AI + Blockchain in Latin America
        </h3>
        <p className="mb-0">
          Ettios was born in Latin America with a clear mission: to make the region the epicenter of the
          convergence between artificial intelligence and blockchain technology. As the first blockchain
          with AI at its core in Latin America, Ettios provides developers, startups, and enterprises with
          the tools to build intelligent applications that are transparent, decentralized, and accessible to everyone.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Why AI Needs Blockchain</h2>

      <p>
        Artificial intelligence and blockchain are complementary technologies. AI brings intelligence,
        automation, and decision-making; blockchain brings transparency, verifiability, and trustless
        execution. Together on Ettios they unlock capabilities that neither can achieve alone:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Brain className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Verifiable Intelligence</h3>
          <p className="flex-grow">
            AI-driven decisions recorded on-chain become auditable and tamper-proof. Anyone can verify
            when, how, and why an intelligent system acted — critical for finance, governance, and compliance.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Bot className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Autonomous Agents</h3>
          <p className="flex-grow">
            AI agents can hold wallets, execute transactions, and interact with smart contracts on Ettios,
            enabling fully autonomous economic actors that operate 24/7 without intermediaries.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Cpu className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">AI-Ready Performance</h3>
          <p className="flex-grow">
            With high throughput, 2-second block times, and fast finality, Ettios provides the low-latency
            settlement layer that AI applications need to react to real-world events in real time.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <ShieldCheck className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Secure by Design</h3>
          <p className="flex-grow">
            The Nominated Proof of Stake (NPoS) consensus with Byzantine Fault Tolerance ensures that
            AI-driven transactions and data feeds are secured by a robust, decentralized validator network.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">What You Can Build</h2>

      <p>
        Ettios provides the foundation for intelligent applications across every industry:
      </p>

      <ul className="list-disc pl-6 space-y-2 my-6">
        <li><strong>AI trading and DeFi agents</strong> that analyze markets and execute strategies autonomously</li>
        <li><strong>Intelligent oracles</strong> that feed AI-processed, real-world data into smart contracts</li>
        <li><strong>Fraud detection and risk scoring</strong> with on-chain, auditable results</li>
        <li><strong>AI-powered gaming and NPCs</strong> with verifiable behavior and true digital ownership</li>
        <li><strong>Decentralized identity and credit scoring</strong> to expand financial inclusion in Latin America</li>
        <li><strong>Smart DAOs</strong> where AI assists in proposal analysis and governance decisions</li>
      </ul>

      <div className="my-8 p-4 rounded-lg border-l-4 border-primary bg-primary/5 shadow-sm">
        <p className="mb-0">
          <Zap className="inline h-5 w-5 mr-2 text-primary" />
          Ready to build? Start with the <Link href="/docs/getting-started/introduction" className="text-primary underline underline-offset-4">Introduction</Link>,
          connect with <Link href="/docs/developer-quickstart/connect-ethers" className="text-primary underline underline-offset-4">ethers.js</Link>,
          and deploy your first intelligent contract on the Ettios Mainnet.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Next Steps</h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <Link href="/docs/ai/use-cases" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">AI Use Cases</h3>
          <p className="text-muted-foreground flex-grow">Explore real-world applications of AI on Ettios across DeFi, gaming, identity, and more.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>

        <Link href="/docs/ai/building-ai-dapps" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Building AI dApps</h3>
          <p className="text-muted-foreground flex-grow">Step-by-step guide with code: build an AI oracle that publishes signals on-chain.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>

        <Link href="/docs/developer-quickstart/first-smart-contract" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Deploy a Contract</h3>
          <p className="text-muted-foreground flex-grow">Learn how to deploy your first smart contract on the Ettios Mainnet.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
      </div>
    </div>
  );
}
