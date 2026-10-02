"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Updated environment variables
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettios.io';
const testnetRpcUrl = process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://testnet-rpc.ettios.io';
const mainnetChainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';
const testnetChainId = process.env.NEXT_PUBLIC_TESTNET_CHAIN_ID || '2238';
const tokenSymbol = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'ETTIA';
const testnetTokenSymbol = process.env.NEXT_PUBLIC_TESTNET_CURRENCY_SYMBOL || 'tETTIA';
const explorerUrl = process.env.NEXT_PUBLIC_EXPLORER_URL || 'https://explorer.ettios.io';
const testnetExplorerUrl = process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL || 'https://testnet-explorer.ettios.io';
const faucetUrl = process.env.NEXT_PUBLIC_FAUCET_URL || 'https://faucet.ettios.io';

export default function NetworkParametersPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Network Parameters
      </h1>

      <p className="text-lg">
        To connect to the Ettios blockchain, you'll need to use the correct network parameters. This page provides the details you need to connect wallets, development environments, and applications to both the Ettios Mainnet and Testnet.
      </p>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Mainnet Parameters</h2>

      <p>
        Use these parameters to connect to the Ettios Mainnet:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-primary/20 to-primary/5">
              <th className="border border-border p-3 text-left">Parameter</th>
              <th className="border border-border p-3 text-left">Value</th>
              <th className="border border-border p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Network Name</td>
              <td className="border border-border p-3 font-mono">Ettios Mainnet</td>
              <td className="border border-border p-3">The display name for the network</td>
            </tr>
            <tr>
              <td className="border border-border p-3">RPC URL</td>
              <td className="border border-border p-3 font-mono">{mainnetRpcUrl}</td>
              <td className="border border-border p-3">Endpoint for making JSON-RPC calls</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Chain ID</td>
              <td className="border border-border p-3 font-mono">{mainnetChainId}</td>
              <td className="border border-border p-3">Unique identifier for the blockchain</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Currency Symbol</td>
              <td className="border border-border p-3 font-mono">{tokenSymbol}</td>
              <td className="border border-border p-3">Native token symbol</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Block Explorer URL</td>
              <td className="border border-border p-3 font-mono">{explorerUrl}</td>
              <td className="border border-border p-3">URL to explore blocks, transactions, and accounts</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Decimals</td>
              <td className="border border-border p-3 font-mono">18</td>
              <td className="border border-border p-3">Number of decimal places for the native token</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Average Block Time</td>
              <td className="border border-border p-3 font-mono">2 seconds</td>
              <td className="border border-border p-3">Average time between blocks</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Consensus</td>
              <td className="border border-border p-3 font-mono">Proof of Stake</td>
              <td className="border border-border p-3">Consensus mechanism used</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Testnet Parameters</h2>

      <p>
        Use these parameters to connect to the Ettios Testnet:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-primary/20 to-primary/5">
              <th className="border border-border p-3 text-left">Parameter</th>
              <th className="border border-border p-3 text-left">Value</th>
              <th className="border border-border p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">Network Name</td>
              <td className="border border-border p-3 font-mono">Ettios Testnet</td>
              <td className="border border-border p-3">The display name for the testnet</td>
            </tr>
            <tr>
              <td className="border border-border p-3">RPC URL</td>
              <td className="border border-border p-3 font-mono">{testnetRpcUrl}</td>
              <td className="border border-border p-3">Endpoint for making JSON-RPC calls</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Chain ID</td>
              <td className="border border-border p-3 font-mono">{testnetChainId}</td>
              <td className="border border-border p-3">Unique identifier for the testnet blockchain</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Currency Symbol</td>
              <td className="border border-border p-3 font-mono">{testnetTokenSymbol}</td>
              <td className="border border-border p-3">Test token symbol</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Block Explorer URL</td>
              <td className="border border-border p-3 font-mono">{testnetExplorerUrl}</td>
              <td className="border border-border p-3">URL to explore blocks, transactions, and accounts</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Decimals</td>
              <td className="border border-border p-3 font-mono">18</td>
              <td className="border border-border p-3">Number of decimal places for the test token</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Faucet URL</td>
              <td className="border border-border p-3 font-mono">{faucetUrl}</td>
              <td className="border border-border p-3">URL to obtain test tokens</td>
            </tr>
            <tr>
              <td className="border border-border p-3">Average Block Time</td>
              <td className="border border-border p-3 font-mono">2 seconds</td>
              <td className="border border-border p-3">Average time between blocks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Adding to MetaMask</h2>

      <p>
        To manually add Ettios to your MetaMask wallet:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Step-by-Step Instructions</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open your MetaMask wallet</li>
            <li>Click on the network dropdown at the top of the MetaMask window</li>
            <li>Click "Add Network"</li>
            <li>Click "Add a network manually"</li>
            <li>Fill in the network details using the parameters above</li>
            <li>Click "Save"</li>
          </ol>
          <p className="text-muted-foreground">
            For a more detailed guide, see our <Link href="/docs/getting-started/using-metamask" className="text-primary underline">full MetaMask setup instructions</Link>.
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-muted/30">
          <div className="text-sm font-medium mb-3">MetaMask Network Configuration Example</div>
          <div className="space-y-3">
            <div className="grid grid-cols-2">
              <div className="text-muted-foreground">Network Name:</div>
              <div className="font-mono">Ettios Mainnet</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-muted-foreground">New RPC URL:</div>
              <div className="font-mono text-sm break-all">https://rpc.ettios.network</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-muted-foreground">Chain ID:</div>
              <div className="font-mono">9988</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-muted-foreground">Currency Symbol:</div>
              <div className="font-mono">ETT</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-muted-foreground">Block Explorer URL:</div>
              <div className="font-mono text-sm break-all">https://explorer.ettios.network</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Next Steps</h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">
        <Link href="/docs/getting-started/using-metamask" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Add to MetaMask</h3>
          <p className="text-muted-foreground flex-grow">Detailed instructions for setting up MetaMask with Ettios.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
        
        <Link href="/docs/getting-started/testnet-faucet" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Get Testnet Tokens</h3>
          <p className="text-muted-foreground flex-grow">Get free testnet tokens to start developing and testing.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
        
        <Link href="/docs/developer-quickstart/first-smart-contract" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Deploy a Contract</h3>
          <p className="text-muted-foreground flex-grow">Learn how to deploy your first smart contract.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
      </div>
    </div>
  );
}
