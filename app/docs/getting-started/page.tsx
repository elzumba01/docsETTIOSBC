"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Rocket, Server, Wallet, Code } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Getting Started with Ettios
      </h1>

      <p className="text-lg leading-7">
        Welcome to Ettios, the next-generation blockchain platform engineered for scalability, security, and developer experience.
        This guide will help you get started quickly with developing on the Ettios network.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg my-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          What is Ettios?
        </h4>
        <p className="mb-0">
          Ettios is a layer-1 blockchain designed to provide high throughput, low fees, and compatibility with existing Ethereum tooling.
          Our platform combines the best aspects of established blockchains with innovative solutions to common scalability and security challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Rocket className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Key Features</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>High throughput (5,000+ TPS)</li>
            <li>EVM compatibility</li>
            <li>Low gas fees</li>
            <li>Fast finality (2-3 seconds)</li>
            <li>Robust security model</li>
            <li>Seamless developer experience</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Server className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Network Details</h3>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">Mainnet:</div>
              <div className="col-span-2">Ettios Mainnet (Live)</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">Testnet:</div>
              <div className="col-span-2">Coming soon — late 2026</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">Chain ID:</div>
              <div className="col-span-2">2237</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">Currency:</div>
              <div className="col-span-2">ETTIA</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">RPC:</div>
              <div className="col-span-2 break-all">https://rpc.ettiosblockchain.io</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="font-bold">Explorer:</div>
              <div className="col-span-2 break-all">https://scan.ettiosblockchain.io</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Getting Started in 3 Steps</h2>

      <div className="space-y-12 my-10">
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
            1
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mt-0">Set Up Your Wallet</h3>
            <p>
              To interact with the Ettios blockchain, you'll need a wallet that supports EVM-compatible networks. 
              We recommend using MetaMask, which is widely supported and easy to configure.
            </p>
            <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
              <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
                <span>Add Ettios Mainnet to MetaMask</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Open MetaMask and click on the network dropdown at the top</li>
                  <li>Select "Add Network"</li>
                  <li>Click "Add Network Manually"</li>
                  <li>Fill in the following details:
                    <ul className="list-disc pl-5 mt-2">
                      <li><strong>Network Name:</strong> Ettios Mainnet</li>
                      <li><strong>RPC URL:</strong> https://rpc.ettiosblockchain.io</li>
                      <li><strong>Chain ID:</strong> 2237</li>
                      <li><strong>Currency Symbol:</strong> ETTIA</li>
                      <li><strong>Block Explorer URL:</strong> https://scan.ettiosblockchain.io</li>
                    </ul>
                  </li>
                  <li>Click "Save" to add the network</li>
                </ol>
              </div>
            </div>
            <Link href="/docs/getting-started/wallet-setup" className="text-primary inline-flex items-center">
              Learn more about wallet setup <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
            2
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mt-0">Get Test Tokens</h3>
            <p>
              To deploy contracts and interact with the Ettios testnet, you'll need some test ETTIA tokens. 
              You can get these from our testnet faucet without any charge.
            </p>
            <div className="my-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="h-5 w-5 text-primary" />
                <h4 className="font-bold text-lg m-0">Ettios Testnet Faucet</h4>
              </div>
              <p className="mb-3">Visit our faucet and connect your wallet to receive test tokens (available when the Ettios Testnet launches — late 2026):</p>
              <a 
                href="https://faucet.ettiosblockchain.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Go to Ettios Faucet
              </a>
            </div>
            <Link href="/docs/getting-started/testnet-faucet" className="text-primary inline-flex items-center">
              Learn more about the testnet faucet <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
            3
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mt-0">Start Building</h3>
            <p>
              With your wallet setup and tokens ready, you can now start building on Ettios! 
              We support all standard Ethereum development tools, making migration seamless.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 border rounded-md bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <Code className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-bold mt-0">Development Environment</h4>
                <p className="mb-2">Set up your local environment with Hardhat, Truffle, or Foundry.</p>
                <Link href="/docs/developer-quickstart/development-environment" className="text-primary text-sm inline-flex items-center">
                  Setup guide <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
              <div className="p-4 border rounded-md bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <Code className="h-5 w-5 text-primary mb-2" />
                <h4 className="font-bold mt-0">First Smart Contract</h4>
                <p className="mb-2">Deploy your first smart contract to the Ettios testnet.</p>
                <Link href="/docs/developer-quickstart/first-smart-contract" className="text-primary text-sm inline-flex items-center">
                  Deployment guide <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
            <Link href="/docs/developer-quickstart" className="text-primary inline-flex items-center">
              View the complete developer quickstart <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Explore Ettios Documentation</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        <Link 
          href="/docs/developer-quickstart" 
          className="flex flex-col p-5 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <h3 className="text-lg font-medium mb-2">Developer Quickstart</h3>
          <p className="text-muted-foreground flex-grow">Set up your development environment and build your first dApp on Ettios.</p>
          <div className="text-primary mt-2 flex items-center gap-1">Get started <ChevronRight className="h-4 w-4" /></div>
        </Link>
        
        <Link 
          href="/docs/token-standards" 
          className="flex flex-col p-5 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <h3 className="text-lg font-medium mb-2">Token Standards</h3>
          <p className="text-muted-foreground flex-grow">Learn about ERC-20, ERC-721, and ERC-1155 token standards on Ettios.</p>
          <div className="text-primary mt-2 flex items-center gap-1">Explore tokens <ChevronRight className="h-4 w-4" /></div>
        </Link>
        
        <Link 
          href="/docs/advanced" 
          className="flex flex-col p-5 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <h3 className="text-lg font-medium mb-2">Advanced Topics</h3>
          <p className="text-muted-foreground flex-grow">Dive into advanced concepts like metadata standards and token economics.</p>
          <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
        </Link>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Join the Ettios Community</h3>
        <p className="text-lg">
          Connect with other developers, get support, and stay updated on the latest Ettios news:
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://discord.gg/ettios" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5865F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Discord
          </a>
          <a 
            href="https://twitter.com/ettioschain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Follow on Twitter
          </a>
          <a 
            href="https://github.com/ettioschain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
