"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Code } from 'lucide-react';

// Environment variables
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettios.io';
const mainnetChainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';

export default function FrontendIntegrationPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Frontend Integration
      </h1>

      <p className="text-lg leading-7">
        This guide demonstrates how to connect your web application to smart contracts deployed on the Ettios blockchain
        using popular JavaScript libraries.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Prerequisites
        </h4>
        <p className="mb-0">
          Before you begin, ensure you have:
        </p>
        <ul className="list-disc pl-5 mt-2 mb-0">
          <li>A React, Vue, or similar frontend framework project set up</li>
          <li>A smart contract deployed on Ettios (see our <Link href="/docs/developer-quickstart/first-smart-contract" className="text-primary underline underline-offset-4">contract deployment guide</Link>)</li>
          <li>Basic knowledge of JavaScript/TypeScript and frontend development</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Choosing a Web3 Library</h2>

      <p>
        Several JavaScript libraries can help you interact with the Ettios blockchain. Here are the most popular options:
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">ethers.js</h3>
          <p className="mb-4">
            A complete, compact, and portable Ethereum library for interacting with the Ethereum Blockchain and its ecosystem.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>npm install ethers</code>
          </div>
          <a 
            href="https://docs.ethers.org/"
            className="inline-flex items-center gap-1 mt-4 text-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">wagmi</h3>
          <p className="mb-4">
            A set of React Hooks for working with Ethereum. Built on top of ethers.js, great for React applications.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>npm install wagmi viem</code>
          </div>
          <a 
            href="https://wagmi.sh/"
            className="inline-flex items-center gap-1 mt-4 text-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">viem</h3>
          <p className="mb-4">
            A lightweight TypeScript interface for Ethereum, with a focus on reliability, efficiency, and excellent developer experience.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>npm install viem</code>
          </div>
          <a 
            href="https://viem.sh/"
            className="inline-flex items-center gap-1 mt-4 text-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Integrating with ethers.js</h2>

      <p>
        Here's how to connect to the Ettios network and interact with a smart contract using ethers.js:
      </p>

      <div className="my-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">1. Connect to Ettios</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`import { ethers } from 'ethers';

// Connect to Ettios using a provider
const provider = new ethers.providers.JsonRpcProvider("${mainnetRpcUrl}");

// Or connect via MetaMask if available in the browser
async function connectToMetaMask() {
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return new ethers.providers.Web3Provider(window.ethereum);
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    console.error("MetaMask is not installed");
  }
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">2. Load a Contract</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// Contract ABI (Application Binary Interface)
const abi = [
  "function greet() view returns (string)",
  "function setGreeting(string _greeting)"
];

// Contract address (replace with your deployed contract address)
const contractAddress = "0x1234567890123456789012345678901234567890";

// Create a contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

// If you want to make state-changing calls, connect with a signer
async function getContractWithSigner() {
  const metaMaskProvider = await connectToMetaMask();
  const signer = metaMaskProvider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">3. Read Contract Data</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// Read data from the contract (view functions)
async function readGreeting() {
  try {
    const greeting = await contract.greet();
    console.log("Current greeting:", greeting);
    return greeting;
  } catch (error) {
    console.error("Error reading greeting:", error);
  }
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">4. Write to the Contract</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// Write data to the contract (state-changing functions)
async function setNewGreeting(newGreeting) {
  try {
    const contractWithSigner = await getContractWithSigner();
    const tx = await contractWithSigner.setGreeting(newGreeting);
    
    // Wait for the transaction to be mined
    console.log("Transaction sent, waiting for confirmation...");
    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt);
    return receipt;
  } catch (error) {
    console.error("Error setting greeting:", error);
  }
}`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Implementing with wagmi (React)</h2>

      <p>
        If you're using React, wagmi provides a more declarative way to interact with Ethereum. Here's how to set up and use it with Ettios:
      </p>

      <div className="my-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">1. Configure wagmi</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// src/wagmi.ts
import { configureChains, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Define the Ettios chain
const ettios = {
  id: ${mainnetChainId},
  name: 'Ettios',
  network: 'ettios',
  nativeCurrency: {
    name: 'ETTIA',
    symbol: 'ETTIA',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['${mainnetRpcUrl}'],
    },
    public: {
      http: ['${mainnetRpcUrl}'],
    },
  },
  blockExplorers: {
    default: {
      name: 'EttiosScan',
      url: 'https://explorer.ettios.io',
    },
  },
}

// Configure chains & providers
const { chains, publicClient } = configureChains(
  [ettios, mainnet, sepolia],
  [publicProvider()]
)

// Set up wagmi config
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
})

export { chains }`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">2. Wrap your app with WagmiConfig</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// src/App.tsx or _app.tsx
import { WagmiConfig } from 'wagmi'
import { config } from './wagmi'

function App() {
  return (
    <WagmiConfig config={config}>
      {/* Your app components */}
    </WagmiConfig>
  )
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">3. Use wagmi hooks to interact with contracts</h3>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// ContractInteraction.tsx
import { useContractRead, useContractWrite, useAccount, useConnect, useDisconnect } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

function ContractInteraction() {
  // Contract configuration
  const contractConfig = {
    address: '0x1234567890123456789012345678901234567890',
    abi: [
      "function greet() view returns (string)",
      "function setGreeting(string _greeting)"
    ],
  }

  // Connection state
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const { disconnect } = useDisconnect()

  // Read from contract
  const { data: greeting, isLoading: isLoadingGreeting } = useContractRead({
    ...contractConfig,
    functionName: 'greet',
  })

  // Write to contract
  const { write: setGreeting, isLoading: isWriting } = useContractWrite({
    ...contractConfig,
    functionName: 'setGreeting',
  })

  // Connect wallet button
  if (!isConnected) {
    return <button onClick={() => connect()}>Connect Wallet</button>
  }

  return (
    <div>
      <div>Connected to {address}</div>
      <button onClick={() => disconnect()}>Disconnect</button>
      
      <div>
        <h3>Current Greeting</h3>
        {isLoadingGreeting ? 'Loading...' : greeting}
      </div>
      
      <div>
        <h3>Update Greeting</h3>
        <input
          id="greeting"
          placeholder="New greeting"
          onChange={(e) => setNewGreeting(e.target.value)}
        />
        <button
          onClick={() => setGreeting({ args: [newGreeting] })}
          disabled={isWriting}
        >
          {isWriting ? 'Updating...' : 'Update'}
        </button>
      </div>
    </div>
  )
}`}</pre>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Handling Network Switching</h2>

      <p>
        It's important to handle cases where users need to switch to the Ettios network. Here's how to implement network switching:
      </p>

      <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto my-6">
        <pre>{`async function switchToEttios() {
  if (!window.ethereum) {
    alert("Please install MetaMask to use this feature");
    return;
  }

  try {
    // Try to switch to the Ettios network
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x${parseInt(mainnetChainId).toString(16)}' }], // Hexadecimal chain ID
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x${parseInt(mainnetChainId).toString(16)}',
              chainName: 'Ettios',
              nativeCurrency: {
                name: 'ETTIA',
                symbol: 'ETTIA',
                decimals: 18,
              },
              rpcUrls: ['${mainnetRpcUrl}'],
              blockExplorerUrls: ['https://explorer.ettios.io'],
            },
          ],
        });
      } catch (addError) {
        console.error("Error adding Ettios network:", addError);
      }
    } else {
      console.error("Error switching to Ettios network:", switchError);
    }
  }
}`}</pre>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Best Practices</h2>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Error Handling</h3>
          <p>Always implement proper error handling to provide feedback to users:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Catch and display transaction errors</li>
            <li>Handle network connection issues</li>
            <li>Show user-friendly error messages</li>
            <li>Add loading states during transactions</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Gas Optimization</h3>
          <p>Consider gas costs, especially for complex transactions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Estimate gas before sending transactions</li>
            <li>Allow users to adjust gas settings for important operations</li>
            <li>Batch transactions when possible to reduce overall gas costs</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Testing</h3>
          <p>Thoroughly test your dApp across different scenarios:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Test on both testnet and mainnet environments</li>
            <li>Implement end-to-end testing for critical user flows</li>
            <li>Test with different wallets (MetaMask, WalletConnect, etc.)</li>
            <li>Verify behavior when network is congested</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Security Reminder
        </h4>
        <p className="mb-0">
          Never store private keys or sensitive information in frontend code. Use secure authentication methods and backend services for handling sensitive operations.
        </p>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Ready to expand your dApp's capabilities?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/token-standards/erc20" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">ERC-20 Token Integration</h3>
            <p className="text-muted-foreground flex-grow">Learn how to interact with ERC-20 tokens in your dApp</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/advanced/events-and-indexing" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Events & Data Indexing</h3>
            <p className="text-muted-foreground flex-grow">Build responsive UIs with blockchain events and data indexing</p>
            <div className="text-primary mt-2 flex items-center gap-1">Explore <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
