"use client";

import React from 'react';
import Link from 'next/link';
import { TrendingUp, ShieldAlert, Gamepad2, Fingerprint, Landmark, Vote } from 'lucide-react';

export default function AIUseCasesPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        AI Use Cases on Ettios
      </h1>

      <p className="text-lg leading-7">
        As the first blockchain with AI at its core in Latin America, Ettios opens the door to intelligent
        applications that were not possible before. This page explores the most relevant use cases where
        artificial intelligence and the Ettios blockchain work together.
      </p>

      <div className="space-y-6 my-10">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">AI Agents in DeFi</h3>
          </div>
          <p className="mb-2">
            Autonomous agents that monitor markets, manage liquidity, and execute trading strategies directly
            on-chain. Thanks to Ettios' 2-second block times and low fees, agents can react to market movements
            in near real time without high operational costs.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>Automated portfolio rebalancing and yield optimization</li>
            <li>Arbitrage and market-making bots with on-chain execution</li>
            <li>AI-driven lending and dynamic interest rate strategies</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <ShieldAlert className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">Fraud Detection & Risk Analysis</h3>
          </div>
          <p className="mb-2">
            AI models can analyze transaction patterns to detect suspicious activity, and the results can be
            anchored on-chain for full transparency and auditability.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>Real-time anomaly detection on transactions and contracts</li>
            <li>On-chain, verifiable risk scores for wallets and protocols</li>
            <li>Compliance and reporting tools for exchanges and fintechs</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">Gaming & Intelligent NFTs</h3>
          </div>
          <p className="mb-2">
            AI-driven non-player characters (NPCs) and dynamic NFTs that evolve based on gameplay, with all
            ownership and state changes secured on Ettios.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>NPCs with adaptive, verifiable behavior</li>
            <li>Evolving NFTs whose attributes change through AI-driven events</li>
            <li>Player-owned economies with true digital asset ownership</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Fingerprint className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">Identity & Financial Inclusion</h3>
          </div>
          <p className="mb-2">
            In Latin America, millions of people remain outside the traditional financial system. AI-based
            identity and alternative credit scoring on Ettios can help close that gap.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>Decentralized identity with AI-assisted verification</li>
            <li>Alternative credit scoring for the unbanked and underbanked</li>
            <li>Remittances and micropayments with intelligent fraud prevention</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Landmark className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">Enterprise & Government</h3>
          </div>
          <p className="mb-2">
            Institutions can combine AI analytics with the transparency of Ettios for processes that require
            both intelligence and public verifiability.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>Supply chain tracking with AI-based anomaly alerts</li>
            <li>Transparent public procurement and subsidy distribution</li>
            <li>Auditable AI decisions for regulated industries</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Vote className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold m-0">Smart Governance & DAOs</h3>
          </div>
          <p className="mb-2">
            AI can assist communities in analyzing proposals, simulating outcomes, and summarizing discussions,
            while voting and execution remain transparent on-chain.
          </p>
          <ul className="list-disc pl-6 mb-0 space-y-1">
            <li>AI-assisted proposal analysis and impact simulation</li>
            <li>Automated treasury management within on-chain rules</li>
            <li>Sentiment and participation analytics for communities</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Start Building</h2>

      <p>
        All of these use cases can be built today on the Ettios Mainnet using standard EVM tooling.
        Follow our developer guides to get started:
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <Link href="/docs/developer-quickstart/development-environment" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Set Up Your Environment</h3>
          <p className="text-muted-foreground flex-grow">Configure Hardhat, Foundry, and your tools for Ettios.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>

        <Link href="/docs/developer-quickstart/first-smart-contract" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Deploy a Contract</h3>
          <p className="text-muted-foreground flex-grow">Deploy your first smart contract on the Ettios Mainnet.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>

        <Link href="/docs/token-standards/erc20" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Create a Token</h3>
          <p className="text-muted-foreground flex-grow">Launch an ERC-20 token for your AI-powered application.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
      </div>
    </div>
  );
}
