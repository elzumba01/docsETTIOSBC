"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';

// Environment variables
const faucetUrl = process.env.NEXT_PUBLIC_FAUCET_URL || 'https://faucet.ettios.io';
const tokenSymbol = process.env.NEXT_PUBLIC_TESTNET_CURRENCY_SYMBOL || 'tETTIA';
const explorerUrl = process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL || 'https://testnet-explorer.ettios.io';

export default function TestnetFaucetPage() {
  const [address, setAddress] = useState('');
  
  const handleCopyClick = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };
  
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Ettios Testnet Faucet
      </h1>

      <p className="text-lg leading-7">
        The Ettios Testnet Faucet allows you to request free test {tokenSymbol} tokens for development and testing purposes. 
        These tokens have no real value and can only be used on the Ettios Testnet.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Before you begin
        </h4>
        <p className="mb-0">
          Make sure you have MetaMask configured to connect to the Ettios Testnet. If you haven&apos;t done this yet, follow our <Link href="/docs/getting-started/using-metamask" className="text-primary underline underline-offset-4">MetaMask setup guide</Link> first.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Requesting Test Tokens</h2>

      <p>
        You can request test tokens by visiting our official faucet website and following these steps:
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Step-by-Step Instructions</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p>Visit the <a href={faucetUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 inline-flex items-center">
                Ettios Testnet Faucet <ExternalLink className="h-4 w-4 ml-1" />
              </a></p>
            </li>
            <li>
              <p>Connect your MetaMask wallet by clicking the &quot;Connect Wallet&quot; button</p>
            </li>
            <li>
              <p>Ensure you&apos;re connected to the Ettios Testnet in MetaMask</p>
            </li>
            <li>
              <p>Submit your request for test tokens</p>
            </li>
            <li>
              <p>Wait for the transaction to be processed (this usually takes a few seconds)</p>
            </li>
            <li>
              <p>The test tokens will be sent to your wallet address</p>
            </li>
          </ol>
          
          <div className="mt-6">
            <a 
              href={faucetUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Testnet Faucet
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold">Alternative Method</h3>
          <p>
            If you prefer to request tokens manually or if the main faucet is unavailable, you can use our backup API:
          </p>
          
          <div className="border rounded-lg p-5 bg-muted/30 shadow-sm mt-4">
            <h4 className="text-lg font-bold mb-3">Manual Request</h4>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium mb-1">Your Ethereum Address</label>
              <div className="flex">
                <input
                  type="text"
                  id="address"
                  className="flex-1 px-3 py-2 border rounded-l-md bg-background"
                  placeholder="0x..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md font-medium hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    window.open(`${faucetUrl}/api/request?address=${address}`, '_blank');
                  }}
                  disabled={!address || address.length < 42}
                >
                  Request
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Enter a valid Ethereum address to receive test tokens
              </p>
            </div>
            
            <div className="mt-6">
              <h5 className="font-bold mb-2">API Endpoint</h5>
              <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto flex justify-between items-center">
                <span>{`${faucetUrl}/api/request?address=YOUR_ADDRESS`}</span>
                <button 
                  className="ml-2 p-1 text-muted-foreground hover:text-foreground"
                  onClick={() => handleCopyClick(`${faucetUrl}/api/request?address=YOUR_ADDRESS`)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                You can also access this endpoint directly from your code for automated testing
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Faucet Limits</h2>

      <p>
        To ensure fair distribution of test tokens, the faucet has the following limits:
      </p>

      <ul className="list-disc pl-5 my-4 space-y-2">
        <li>Each address can request tokens once every 24 hours</li>
        <li>Each request provides 10 {tokenSymbol} tokens</li>
        <li>The maximum amount per address is 50 {tokenSymbol}</li>
      </ul>

      <p>
        If you need additional tokens for complex testing scenarios, please contact our development team through our <a href="https://discord.gg/ettios" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Discord community</a>.
      </p>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Verifying Your Balance</h2>

      <p>
        After requesting tokens, you can verify your balance in several ways:
      </p>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Check in MetaMask</h3>
          <p>
            Open your MetaMask wallet while connected to the Ettios Testnet. Your {tokenSymbol} balance should be displayed on the main screen.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Using the Block Explorer</h3>
          <p className="mb-2">
            You can also check your balance and transaction history on the Ettios Testnet Explorer:
          </p>
          <a 
            href={explorerUrl}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Testnet Explorer
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Important Reminder
        </h4>
        <p className="mb-0">
          Testnet tokens ({tokenSymbol}) have no real-world value and are only for testing purposes. They are completely separate from mainnet ETTIA tokens, which do have value.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Troubleshooting</h2>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Not Receiving Tokens</h3>
          <p className="mb-2">If you requested tokens but haven&apos;t received them:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verify that your wallet is connected to the Ettios Testnet</li>
            <li>Check if you&apos;ve reached the daily request limit</li>
            <li>Ensure you entered the correct wallet address</li>
            <li>Wait a few minutes as transactions might be delayed during high traffic periods</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Faucet Unavailable</h3>
          <p className="mb-2">If the faucet is temporarily unavailable:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Try using the alternative API method</li>
            <li>Check our <a href="https://status.ettios.io" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">network status page</a> for any ongoing issues</li>
            <li>Join our <a href="https://discord.gg/ettios" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Discord community</a> to request assistance</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you have testnet tokens, you&apos;re ready to start developing on Ettios:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/developer-quickstart/development-environment" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Set Up Development Environment</h3>
            <p className="text-muted-foreground flex-grow">Configure your local environment for Ettios development</p>
            <div className="text-primary mt-2 flex items-center gap-1">Get started <ChevronRight className="h-4 w-4" /></div>
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
