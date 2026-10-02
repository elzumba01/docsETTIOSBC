"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Terminal, Check, Copy } from 'lucide-react';

export default function ConnectEthersPage() {
  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Connect with ethers.js
      </h1>

      <p className="text-lg leading-7">
        This guide demonstrates how to connect to Ettios using ethers.js, a complete and compact library for interacting with
        the Ethereum Blockchain and its ecosystem.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Prerequisites
        </h4>
        <p className="mb-0">
          Before you begin, make sure you have:
        </p>
        <ul className="list-disc pl-5 mt-2 mb-0">
          <li>Node.js and npm installed</li>
          <li>A basic JavaScript/TypeScript project set up</li>
          <li>Basic understanding of Ethereum and smart contracts</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Installing ethers.js</h2>

      <p>
        First, install ethers.js in your project:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>Terminal</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick("npm install ethers")}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>npm install ethers</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Connecting to Ettios</h2>

      <p>
        You can connect to Ettios in two ways: using a JSON-RPC provider or through a user's wallet (like MetaMask).
      </p>

      <h3 className="text-2xl font-bold mt-8">Method 1: Connect to Ettios RPC Endpoint</h3>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>connect-provider.js</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`// Import ethers.js
const { ethers } = require("ethers");

// Ettios Mainnet RPC URL
const ETTIOS_MAINNET_RPC = "https://rpc.ettiosblockchain.io";

// Create a provider
const provider = new ethers.providers.JsonRpcProvider(ETTIOS_MAINNET_RPC);

async function main() {
  try {
    // Get the current block number
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number:", blockNumber);
    
    // Get network information
    const network = await provider.getNetwork();
    console.log("Network:", network.name);
    console.log("Chain ID:", network.chainId);
    
    // Get gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
  } catch (error) {
    console.error("Error connecting to Ettios:", error);
  }
}

main();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// Import ethers.js
const { ethers } = require("ethers");

// Ettios Mainnet RPC URL
const ETTIOS_MAINNET_RPC = "https://rpc.ettiosblockchain.io";

// Create a provider
const provider = new ethers.providers.JsonRpcProvider(ETTIOS_MAINNET_RPC);

async function main() {
  try {
    // Get the current block number
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number:", blockNumber);
    
    // Get network information
    const network = await provider.getNetwork();
    console.log("Network:", network.name);
    console.log("Chain ID:", network.chainId);
    
    // Get gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
  } catch (error) {
    console.error("Error connecting to Ettios:", error);
  }
}

main();`}</code></pre>
        </div>
      </div>

      <p>
        This example connects to the Ettios Mainnet and retrieves basic network information. To run it:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
          <span>Terminal</span>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>node connect-provider.js</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Method 2: Connect through MetaMask</h3>

      <p>
        In a browser environment, you can connect to Ettios through the user's MetaMask wallet:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>connect-metamask.js</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`// For browser environments
import { ethers } from "ethers";

async function connectToMetaMask() {
  // Check if MetaMask is installed
  if (!window.ethereum) {
    console.error("MetaMask is not installed!");
    return null;
  }

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    // Create a Web3Provider using the MetaMask provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get the signer (account)
    const signer = provider.getSigner();
    
    // Get the connected account address
    const address = await signer.getAddress();
    console.log("Connected account:", address);
    
    // Check if on the correct network
    const network = await provider.getNetwork();
    console.log("Connected to network:", network.name, "Chain ID:", network.chainId);
    
    // The expected Ettios Mainnet Chain ID
    const ETTIOS_MAINNET_CHAIN_ID = 2237;
    
    if (network.chainId !== ETTIOS_MAINNET_CHAIN_ID) {
      console.warn("Warning: Not connected to Ettios Mainnet!");
      
      // Optional: Prompt user to switch networks
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x8BD' }], // 0x8BD is hex for 2237
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x8BD',
                chainName: 'Ettios Mainnet',
                nativeCurrency: {
                  name: 'ETTIA',
                  symbol: 'ETTIA',
                  decimals: 18
                },
                rpcUrls: ['https://rpc.ettiosblockchain.io'],
                blockExplorerUrls: ['https://scan.ettiosblockchain.io'],
              }],
            });
          } catch (addError) {
            console.error("Error adding Ettios network:", addError);
          }
        } else {
          console.error("Error switching to Ettios network:", switchError);
        }
      }
    }
    
    return { provider, signer };
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return null;
  }
}

// Usage:
async function main() {
  const connection = await connectToMetaMask();
  if (connection) {
    const { provider, signer } = connection;
    // Now you can use the provider and signer to interact with Ettios
    console.log("Successfully connected to Ettios via MetaMask!");
  }
}

main();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// For browser environments
import { ethers } from "ethers";

async function connectToMetaMask() {
  // Check if MetaMask is installed
  if (!window.ethereum) {
    console.error("MetaMask is not installed!");
    return null;
  }

  try {
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    // Create a Web3Provider using the MetaMask provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get the signer (account)
    const signer = provider.getSigner();
    
    // Get the connected account address
    const address = await signer.getAddress();
    console.log("Connected account:", address);
    
    // Check if on the correct network
    const network = await provider.getNetwork();
    console.log("Connected to network:", network.name, "Chain ID:", network.chainId);
    
    // The expected Ettios Mainnet Chain ID
    const ETTIOS_MAINNET_CHAIN_ID = 2237;
    
    if (network.chainId !== ETTIOS_MAINNET_CHAIN_ID) {
      console.warn("Warning: Not connected to Ettios Mainnet!");
      
      // Optional: Prompt user to switch networks
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x8BD' }], // 0x8BD is hex for 2237
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x8BD',
                chainName: 'Ettios Mainnet',
                nativeCurrency: {
                  name: 'ETTIA',
                  symbol: 'ETTIA',
                  decimals: 18
                },
                rpcUrls: ['https://rpc.ettiosblockchain.io'],
                blockExplorerUrls: ['https://scan.ettiosblockchain.io'],
              }],
            });
          } catch (addError) {
            console.error("Error adding Ettios network:", addError);
          }
        } else {
          console.error("Error switching to Ettios network:", switchError);
        }
      }
    }
    
    return { provider, signer };
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return null;
  }
}

// Usage:
async function main() {
  const connection = await connectToMetaMask();
  if (connection) {
    const { provider, signer } = connection;
    // Now you can use the provider and signer to interact with Ettios
    console.log("Successfully connected to Ettios via MetaMask!");
  }
}

main();`}</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Interacting with Smart Contracts</h2>

      <p>
        Once connected to Ettios, you can interact with deployed smart contracts:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>interact-contract.js</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`const { ethers } = require("ethers");

// Connect to Ettios
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ettiosblockchain.io");

// Contract ABI and address
const contractABI = [
  "function greet() view returns (string)",
  "function setGreeting(string _greeting) returns (bool)"
];
const contractAddress = "0x123..."; // Replace with your contract address

async function interactWithContract() {
  try {
    // Create a read-only contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Call a read-only function
    const greeting = await contract.greet();
    console.log("Current greeting:", greeting);
    
    // To write to the contract, you need a signer
    // (This example uses a private key, but in a browser you'd use MetaMask)
    const privateKey = "0x123..."; // Replace with your private key (NEVER hardcode in production)
    const wallet = new ethers.Wallet(privateKey, provider);
    
    // Create a contract instance with the signer
    const contractWithSigner = contract.connect(wallet);
    
    // Call a state-changing function
    const tx = await contractWithSigner.setGreeting("Hello, Ettios!");
    
    // Wait for the transaction to be mined
    console.log("Transaction hash:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    
    // Verify the change
    const newGreeting = await contract.greet();
    console.log("New greeting:", newGreeting);
  } catch (error) {
    console.error("Error interacting with contract:", error);
  }
}

interactWithContract();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const { ethers } = require("ethers");

// Connect to Ettios
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ettiosblockchain.io");

// Contract ABI and address
const contractABI = [
  "function greet() view returns (string)",
  "function setGreeting(string _greeting) returns (bool)"
];
const contractAddress = "0x123..."; // Replace with your contract address

async function interactWithContract() {
  try {
    // Create a read-only contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Call a read-only function
    const greeting = await contract.greet();
    console.log("Current greeting:", greeting);
    
    // To write to the contract, you need a signer
    // (This example uses a private key, but in a browser you'd use MetaMask)
    const privateKey = "0x123..."; // Replace with your private key (NEVER hardcode in production)
    const wallet = new ethers.Wallet(privateKey, provider);
    
    // Create a contract instance with the signer
    const contractWithSigner = contract.connect(wallet);
    
    // Call a state-changing function
    const tx = await contractWithSigner.setGreeting("Hello, Ettios!");
    
    // Wait for the transaction to be mined
    console.log("Transaction hash:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    
    // Verify the change
    const newGreeting = await contract.greet();
    console.log("New greeting:", newGreeting);
  } catch (error) {
    console.error("Error interacting with contract:", error);
  }
}

interactWithContract();`}</code></pre>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-8">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Security Warning
        </h4>
        <p className="mb-0">
          Never store private keys in your code or frontend. The private key example above is for demonstration purposes only.
          In production, always use secure key management or wallet interfaces like MetaMask.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Working with Events</h2>

      <p>
        You can listen to contract events both retroactively and in real-time:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>listen-events.js</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`const { ethers } = require("ethers");

// Connect to Ettios
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ettiosblockchain.io");

// Contract ABI (just the events we're interested in) and address
const contractABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event GreetingChanged(address indexed changer, string newGreeting)"
];
const contractAddress = "0x123..."; // Replace with your contract address

async function queryPastEvents() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Get the current block number
    const currentBlock = await provider.getBlockNumber();
    
    // Query past events (last 10000 blocks)
    const fromBlock = Math.max(0, currentBlock - 10000);
    const events = await contract.queryFilter("GreetingChanged", fromBlock);
    
    console.log(\`Found \${events.length} GreetingChanged events in the last 10000 blocks:\`);
    
    // Process each event
    events.forEach((event, index) => {
      console.log(\`Event #\${index + 1}:\`);
      console.log(\` - Block: \${event.blockNumber}\`);
      console.log(\` - Transaction: \${event.transactionHash}\`);
      console.log(\` - Changer: \${event.args.changer}\`);
      console.log(\` - New Greeting: \${event.args.newGreeting}\`);
    });
  } catch (error) {
    console.error("Error querying past events:", error);
  }
}

function listenToEvents() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Listen for new events
    console.log("Listening for new GreetingChanged events...");
    
    contract.on("GreetingChanged", (changer, newGreeting, event) => {
      console.log("New GreetingChanged event detected!");
      console.log(\ - Changer: \${changer}\`);
      console.log(\ - New Greeting: \${newGreeting}\`);
      console.log(\ - Block: \${event.blockNumber}\`);
      console.log(\ - Transaction: \${event.transactionHash}\`);
    });
    
    // To stop listening:
    // contract.removeAllListeners("GreetingChanged");
  } catch (error) {
    console.error("Error setting up event listener:", error);
  }
}

// Query past events
queryPastEvents();

// Listen for new events
listenToEvents();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const { ethers } = require("ethers");

// Connect to Ettios
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ettiosblockchain.io");

// Contract ABI (just the events we're interested in) and address
const contractABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event GreetingChanged(address indexed changer, string newGreeting)"
];
const contractAddress = "0x123..."; // Replace with your contract address

async function queryPastEvents() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Get the current block number
    const currentBlock = await provider.getBlockNumber();
    
    // Query past events (last 10000 blocks)
    const fromBlock = Math.max(0, currentBlock - 10000);
    const events = await contract.queryFilter("GreetingChanged", fromBlock);
    
    console.log(\`Found \${events.length} GreetingChanged events in the last 10000 blocks:\`);
    
    // Process each event
    events.forEach((event, index) => {
      console.log(\`Event #\${index + 1}:\`);
      console.log(\` - Block: \${event.blockNumber}\`);
      console.log(\` - Transaction: \${event.transactionHash}\`);
      console.log(\` - Changer: \${event.args.changer}\`);
      console.log(\` - New Greeting: \${event.args.newGreeting}\`);
    });
  } catch (error) {
    console.error("Error querying past events:", error);
  }
}

function listenToEvents() {
  try {
    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    // Listen for new events
    console.log("Listening for new GreetingChanged events...");
    
    contract.on("GreetingChanged", (changer, newGreeting, event) => {
      console.log("New GreetingChanged event detected!");
      console.log(\` - Changer: \${changer}\`);
      console.log(\` - New Greeting: \${newGreeting}\`);
      console.log(\` - Block: \${event.blockNumber}\`);
      console.log(\` - Transaction: \${event.transactionHash}\`);
    });
    
    // To stop listening:
    // contract.removeAllListeners("GreetingChanged");
  } catch (error) {
    console.error("Error setting up event listener:", error);
  }
}

// Query past events
queryPastEvents();

// Listen for new events
listenToEvents();`}</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Using ethers.js in a React App</h2>

      <p>
        Here's a simple example of integrating ethers.js with a React component:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>EttiosConnector.jsx</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function EttiosConnector() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connectToMetaMask = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed!");
      }
      
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      
      const signer = provider.getSigner();
      setSigner(signer);
      
      // Get account address
      const account = await signer.getAddress();
      setAccount(account);
      
      // Get network information
      const network = await provider.getNetwork();
      setNetwork(network);
      
      // Get account balance
      const balance = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balance));
      
      // Check if on Ettios network
      const ETTIOS_MAINNET_CHAIN_ID = 2237;
      if (network.chainId !== ETTIOS_MAINNET_CHAIN_ID) {
        // Prompt to switch networks
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x8BD' }], // Hex for 2237
          });
        } catch (switchError) {
          // Handle error or add network
          console.error("Failed to switch network", switchError);
        }
      }
    } catch (error) {
      console.error("Connection error:", error);
      setError(error.message);
    } finally {
      setIsConnecting(false);
    }
  };

  // Handle account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          // User disconnected
          setAccount(null);
          setBalance(null);
        } else if (accounts[0] !== account) {
          // Account changed, update state
          setAccount(accounts[0]);
          if (provider) {
            provider.getBalance(accounts[0]).then(balance => {
              setBalance(ethers.utils.formatEther(balance));
            });
          }
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Clean up listener on component unmount
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [provider, account]);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">Ettios Connection</h2>
      
      {!account ? (
        <button
          onClick={connectToMetaMask}
          disabled={isConnecting}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isConnecting ? 'Connecting...' : 'Connect to MetaMask'}
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-24 font-semibold">Account:</span>
            <span className="font-mono">{account}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 font-semibold">Network:</span>
            <span>{network ? \`\${network.name} (Chain ID: \${network.chainId})\` : 'Unknown'}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 font-semibold">Balance:</span>
            <span>{balance ? \`\${balance} ETTIA\` : 'Loading...'}</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}
    </div>
  );
}

export default EttiosConnector;`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function EttiosConnector() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  const connectToMetaMask = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed!");
      }
      
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create provider and signer
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      
      const signer = provider.getSigner();
      setSigner(signer);
      
      // Get account address
      const account = await signer.getAddress();
      setAccount(account);
      
      // Get network information
      const network = await provider.getNetwork();
      setNetwork(network);
      
      // Get account balance
      const balance = await provider.getBalance(account);
      setBalance(ethers.utils.formatEther(balance));
      
      // Check if on Ettios network
      const ETTIOS_MAINNET_CHAIN_ID = 2237;
      if (network.chainId !== ETTIOS_MAINNET_CHAIN_ID) {
        // Prompt to switch networks
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x8BD' }], // Hex for 2237
          });
        } catch (switchError) {
          // Handle error or add network
          console.error("Failed to switch network", switchError);
        }
      }
    } catch (error) {
      console.error("Connection error:", error);
      setError(error.message);
    } finally {
      setIsConnecting(false);
    }
  };

  // Handle account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          // User disconnected
          setAccount(null);
          setBalance(null);
        } else if (accounts[0] !== account) {
          // Account changed, update state
          setAccount(accounts[0]);
          if (provider) {
            provider.getBalance(accounts[0]).then(balance => {
              setBalance(ethers.utils.formatEther(balance));
            });
          }
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      
      // Clean up listener on component unmount
      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [provider, account]);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">Ettios Connection</h2>
      
      {!account ? (
        <button
          onClick={connectToMetaMask}
          disabled={isConnecting}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isConnecting ? 'Connecting...' : 'Connect to MetaMask'}
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-24 font-semibold">Account:</span>
            <span className="font-mono">{account}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 font-semibold">Network:</span>
            <span>{network ? \`\${network.name} (Chain ID: \${network.chainId})\` : 'Unknown'}</span>
          </div>
          <div className="flex items-center">
            <span className="w-24 font-semibold">Balance:</span>
            <span>{balance ? \`\${balance} ETTIA\` : 'Loading...'}</span>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}
    </div>
  );
}

export default EttiosConnector;`}</code></pre>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you know how to connect to Ettios with ethers.js, explore these advanced topics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/developer-quickstart/first-transaction" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Creating Your First Transaction</h3>
            <p className="text-muted-foreground flex-grow">Learn how to send transactions on Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/first-smart-contract" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Deploying Smart Contracts</h3>
            <p className="text-muted-foreground flex-grow">Create and deploy your first smart contract</p>
            <div className="text-primary mt-2 flex items-center gap-1">Start building <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
