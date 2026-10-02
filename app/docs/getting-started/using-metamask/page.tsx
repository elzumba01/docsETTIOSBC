"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Environment variables with fallbacks
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettios.io';
const mainnetChainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';
const testnetRpcUrl = process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://testnet-rpc.ettios.io';
const testnetChainId = process.env.NEXT_PUBLIC_TESTNET_CHAIN_ID || '2238';
const tokenSymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'ETTIA';
const testTokenSymbol = process.env.NEXT_PUBLIC_TESTNET_CURRENCY_SYMBOL || 'tETTIA';
const explorerUrl = process.env.NEXT_PUBLIC_EXPLORER_URL || 'https://explorer.ettios.io';
const testnetExplorerUrl = process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL || 'https://testnet-explorer.ettios.io';

export default function UsingMetamaskPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Connect to Ettios with MetaMask
      </h1>

      <p className="text-lg leading-7">
        MetaMask is a popular cryptocurrency wallet that allows you to interact with Ethereum-compatible blockchains like Ettios. 
        This guide will show you how to set up MetaMask to connect to the Ettios network.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Don&apos;t have MetaMask yet?
        </h4>
        <p className="mb-0">
          If you haven&apos;t installed MetaMask yet, you&apos;ll need to download and install it first. Visit{' '}
          <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
            metamask.io/download
          </a>{' '}
          and follow the installation instructions for your browser.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Method 1: Adding Ettios Automatically</h2>

      <p>The easiest way to add Ettios to MetaMask is by using our direct network add link:</p>

      <div className="my-8 flex flex-col sm:flex-row gap-4">
        <a 
          href={`https://metamask.io/add-network?chain_name=Ettios%20Mainnet&chain_id=${mainnetChainId}&rpc_url=${encodeURIComponent(mainnetRpcUrl)}&native_currency_name=ETTIA&native_currency_symbol=${tokenSymbol}&block_explorer_url=${encodeURIComponent(explorerUrl)}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Ettios Mainnet to MetaMask
          <ChevronRight className="h-5 w-5" />
        </a>
        
        <a 
          href={`https://metamask.io/add-network?chain_name=Ettios%20Testnet&chain_id=${testnetChainId}&rpc_url=${encodeURIComponent(testnetRpcUrl)}&native_currency_name=Test%20ETTIA&native_currency_symbol=${testTokenSymbol}&block_explorer_url=${encodeURIComponent(testnetExplorerUrl)}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors shadow-sm hover:shadow-md text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add Ettios Testnet to MetaMask
          <ChevronRight className="h-5 w-5" />
        </a>
      </div>

      <p>
        Clicking on either button will open MetaMask and prompt you to add the corresponding network. Simply review the network details and click &quot;Approve&quot; to add the network to your MetaMask wallet.
      </p>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Method 2: Adding Ettios Manually</h2>

      <p>
        If the automatic method doesn&apos;t work, you can add the Ettios network manually. Follow these steps:
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Step-by-Step Instructions</h3>
          <ol className="list-decimal pl-5 space-y-5">
            <li>
              <p>Open your MetaMask wallet by clicking on the extension icon in your browser</p>
              <img 
                src="/images/metamask-icon.png" 
                alt="MetaMask icon in browser toolbar" 
                className="border rounded-md shadow-sm my-2 max-w-[200px]"
              />
            </li>
            <li>
              <p>Click on the network selection dropdown at the top of the MetaMask window</p>
              <img 
                src="/images/metamask-network-dropdown.png" 
                alt="MetaMask network dropdown" 
                className="border rounded-md shadow-sm my-2"
              />
            </li>
            <li>
              <p>Click on &quot;Add network&quot; at the bottom of the dropdown menu</p>
            </li>
            <li>
              <p>Click on &quot;Add a network manually&quot; at the bottom of the networks page</p>
            </li>
            <li>
              <p>Fill in the network details using the parameters below</p>
            </li>
            <li>
              <p>Click &quot;Save&quot; to add the network</p>
            </li>
          </ol>
        </div>
        
        <div>
          <h3 className="text-xl font-bold">Network Configuration</h3>
          
          <div className="border rounded-lg p-6 bg-gradient-to-r from-primary/5 to-transparent shadow-sm mt-4">
            <h4 className="text-lg font-bold mb-3">Ettios Mainnet</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Network Name:</div>
                <div className="font-mono">Ettios Mainnet</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">New RPC URL:</div>
                <div className="font-mono text-sm break-all">{mainnetRpcUrl}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Chain ID:</div>
                <div className="font-mono">{mainnetChainId}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Currency Symbol:</div>
                <div className="font-mono">{tokenSymbol}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Block Explorer URL:</div>
                <div className="font-mono text-sm break-all">{explorerUrl}</div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-gradient-to-r from-secondary/5 to-transparent shadow-sm mt-6">
            <h4 className="text-lg font-bold mb-3">Ettios Testnet</h4>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Network Name:</div>
                <div className="font-mono">Ettios Testnet</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">New RPC URL:</div>
                <div className="font-mono text-sm break-all">{testnetRpcUrl}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Chain ID:</div>
                <div className="font-mono">{testnetChainId}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Currency Symbol:</div>
                <div className="font-mono">{testTokenSymbol}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-muted-foreground">Block Explorer URL:</div>
                <div className="font-mono text-sm break-all">{testnetExplorerUrl}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Switching Between Networks</h2>

      <p>
        Once you&apos;ve added the Ettios networks to MetaMask, you can easily switch between them:
      </p>

      <ol className="list-decimal pl-5 my-4 space-y-2">
        <li>Click on the network dropdown at the top of the MetaMask window</li>
        <li>Select either &quot;Ettios Mainnet&quot; or &quot;Ettios Testnet&quot; from the list</li>
      </ol>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Reminder
        </h4>
        <p className="mb-0">
          For development and testing, we recommend using the Testnet first. You can get free test tokens from our <Link href="/docs/getting-started/testnet-faucet" className="text-primary underline underline-offset-4">testnet faucet</Link>.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Using Ettios with MetaMask</h2>

      <p>
        After connecting to the Ettios network, you can use MetaMask to:
      </p>

      <ul className="list-disc pl-5 my-4 space-y-2">
        <li>View your ETTIA balance</li>
        <li>Send and receive ETTIA tokens</li>
        <li>Interact with decentralized applications (dApps) built on Ettios</li>
        <li>Sign transactions and deploy smart contracts</li>
        <li>Manage multiple accounts and assets</li>
      </ul>

      <p>
        MetaMask serves as your gateway to the Ettios ecosystem, allowing you to securely manage your digital assets and interact with blockchain applications.
      </p>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Troubleshooting</h2>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Connection Issues</h3>
          <p className="mb-2">If you&apos;re having trouble connecting to the Ettios network:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verify that you&apos;ve entered the correct RPC URL and Chain ID</li>
            <li>Check your internet connection</li>
            <li>Ensure your MetaMask extension is up to date</li>
            <li>Try refreshing the page or restarting your browser</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Transaction Failures</h3>
          <p className="mb-2">If your transactions are failing:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ensure you have enough ETTIA to cover the gas fees</li>
            <li>Check if you&apos;re using the correct network (Mainnet vs Testnet)</li>
            <li>Try increasing the gas limit for complex transactions</li>
            <li>Verify that the contract you&apos;re interacting with is deployed on the Ettios network</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you&apos;ve connected MetaMask to the Ettios network, you might want to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/getting-started/testnet-faucet" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Get Testnet Tokens</h3>
            <p className="text-muted-foreground flex-grow">Obtain free test tokens for development and testing</p>
            <div className="text-primary mt-2 flex items-center gap-1">Get test tokens <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/first-smart-contract" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Deploy Your First Contract</h3>
            <p className="text-muted-foreground flex-grow">Learn how to deploy a smart contract on Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">Start building <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
