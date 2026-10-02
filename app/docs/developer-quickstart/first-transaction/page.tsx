"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Send, Copy, CheckCircle, AlertCircle } from 'lucide-react';

export default function FirstTransactionPage() {
  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Creating Your First Transaction
      </h1>

      <p className="text-lg leading-7">
        This guide walks you through the process of creating and sending your first transaction on the Ettios blockchain.
        You'll learn how to create different types of transactions, estimate gas, and monitor transaction status.
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
          <li>A wallet with Ettios Testnet configured (see <Link href="/docs/getting-started/wallet-setup" className="text-primary underline underline-offset-4">Wallet Setup</Link>)</li>
          <li>Some test ETTIA tokens from the <Link href="/docs/getting-started/testnet-faucet" className="text-primary underline underline-offset-4">Ettios Faucet</Link></li>
          <li>Basic familiarity with JavaScript and blockchain concepts</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Understanding Transactions</h2>

      <p>
        A blockchain transaction is a data structure that represents a state change on the blockchain. There are three main types of transactions on Ettios:
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-10">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">ETTIA Transfers</h3>
          <p className="text-sm mb-0">
            Simple transactions that transfer ETTIA (the native currency) from one address to another.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Contract Deployments</h3>
          <p className="text-sm mb-0">
            Transactions that contain compiled smart contract bytecode for deployment on the blockchain.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Contract Interactions</h3>
          <p className="text-sm mb-0">
            Transactions that call functions on existing smart contracts to modify state or retrieve information.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Method 1: Sending a Transaction with MetaMask</h2>

      <p>
        The simplest way to send a transaction is through a wallet interface like MetaMask:
      </p>

      <div className="space-y-4 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Step 1: Open MetaMask</h4>
          <p className="mb-0">
            Make sure MetaMask is set to the Ettios Testnet network (Chain ID: 2238).
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Step 2: Click "Send"</h4>
          <p className="mb-0">
            Open MetaMask and click the "Send" button to initiate a transaction.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Step 3: Enter Recipient Address</h4>
          <p className="mb-0">
            Enter the recipient's Ethereum address. Double-check this address to avoid sending funds to the wrong recipient.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Step 4: Enter Amount</h4>
          <p className="mb-0">
            Specify the amount of ETTIA you want to send. You can also adjust the gas settings if needed.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Step 5: Confirm and Sign</h4>
          <p className="mb-0">
            Review the transaction details and click "Confirm" to sign and broadcast the transaction to the network.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Method 2: Using ethers.js</h2>

      <p>
        For more programmatic control, you can use ethers.js to send transactions:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ethers.js Transaction Example</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`// Import ethers.js
const { ethers } = require("ethers");

// Connect to Ettios Testnet
async function sendTransaction() {
  try {
    // For browser environments with MetaMask
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Check if connected to Ettios Testnet
      const network = await provider.getNetwork();
      if (network.chainId !== 2238) {
        console.error("Please connect to Ettios Testnet");
        return;
      }
      
      // Get sender's address and balance
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      console.log("Your address:", address);
      console.log("Your balance:", ethers.utils.formatEther(balance), "ETTIA");
      
      // Recipient address - REPLACE WITH ACTUAL RECIPIENT
      const recipient = "0xRecipientAddressHere";
      
      // Amount to send - 0.01 ETTIA
      const amount = ethers.utils.parseEther("0.01");
      
      // Check if we have enough balance
      if (balance.lt(amount)) {
        console.error("Insufficient balance");
        return;
      }
      
      // Prepare transaction
      const tx = {
        to: recipient,
        value: amount,
        // Optional: Specify gas limit and price
        // gasLimit: 21000, // Standard gas limit for transfers
        // gasPrice: ethers.utils.parseUnits("1", "gwei")
      };
      
      console.log("Sending transaction...");
      
      // Send transaction
      const txResponse = await signer.sendTransaction(tx);
      console.log("Transaction hash:", txResponse.hash);
      
      // Wait for transaction to be mined
      console.log("Waiting for confirmation...");
      const receipt = await txResponse.wait();
      
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Gas used:", receipt.gasUsed.toString());
      
      // Fetch updated balance
      const newBalance = await provider.getBalance(address);
      console.log("New balance:", ethers.utils.formatEther(newBalance), "ETTIA");
      
      return receipt;
    } else {
      console.error("MetaMask is not installed");
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransaction();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// Import ethers.js
const { ethers } = require("ethers");

// Connect to Ettios Testnet
async function sendTransaction() {
  try {
    // For browser environments with MetaMask
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Check if connected to Ettios Testnet
      const network = await provider.getNetwork();
      if (network.chainId !== 2238) {
        console.error("Please connect to Ettios Testnet");
        return;
      }
      
      // Get sender's address and balance
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      console.log("Your address:", address);
      console.log("Your balance:", ethers.utils.formatEther(balance), "ETTIA");
      
      // Recipient address - REPLACE WITH ACTUAL RECIPIENT
      const recipient = "0xRecipientAddressHere";
      
      // Amount to send - 0.01 ETTIA
      const amount = ethers.utils.parseEther("0.01");
      
      // Check if we have enough balance
      if (balance.lt(amount)) {
        console.error("Insufficient balance");
        return;
      }
      
      // Prepare transaction
      const tx = {
        to: recipient,
        value: amount,
        // Optional: Specify gas limit and price
        // gasLimit: 21000, // Standard gas limit for transfers
        // gasPrice: ethers.utils.parseUnits("1", "gwei")
      };
      
      console.log("Sending transaction...");
      
      // Send transaction
      const txResponse = await signer.sendTransaction(tx);
      console.log("Transaction hash:", txResponse.hash);
      
      // Wait for transaction to be mined
      console.log("Waiting for confirmation...");
      const receipt = await txResponse.wait();
      
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Gas used:", receipt.gasUsed.toString());
      
      // Fetch updated balance
      const newBalance = await provider.getBalance(address);
      console.log("New balance:", ethers.utils.formatEther(newBalance), "ETTIA");
      
      return receipt;
    } else {
      console.error("MetaMask is not installed");
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransaction();`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Using a Private Key (Node.js Environment)</h3>

      <p>
        For scripts running in a Node.js environment, you can use a private key to sign transactions:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>Private Key Transaction Example</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`// IMPORTANT: Never hardcode private keys in production code!
// This is for demonstration purposes only.

const { ethers } = require("ethers");

async function sendTransactionWithPrivateKey() {
  try {
    // Ettios Testnet RPC URL
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.ettiosblockchain.io");
    
    // Private key (NEVER hardcode in production)
    const privateKey = "YOUR_PRIVATE_KEY"; // Replace with your private key
    
    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);
    
    // Get sender's address and balance
    const address = wallet.address;
    const balance = await provider.getBalance(address);
    console.log("Your address:", address);
    console.log("Your balance:", ethers.utils.formatEther(balance), "ETTIA");
    
    // Recipient address - REPLACE WITH ACTUAL RECIPIENT
    const recipient = "0xRecipientAddressHere";
    
    // Amount to send - 0.01 ETTIA
    const amount = ethers.utils.parseEther("0.01");
    
    // Check if we have enough balance
    if (balance.lt(amount)) {
      console.error("Insufficient balance");
      return;
    }
    
    // Get current gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Current gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
    
    // Prepare transaction
    const tx = {
      to: recipient,
      value: amount,
      gasLimit: 21000, // Standard gas limit for transfers
      gasPrice: gasPrice
    };
    
    console.log("Sending transaction...");
    
    // Send transaction
    const txResponse = await wallet.sendTransaction(tx);
    console.log("Transaction hash:", txResponse.hash);
    
    // Wait for transaction to be mined
    console.log("Waiting for confirmation...");
    const receipt = await txResponse.wait();
    
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    console.log("Gas used:", receipt.gasUsed.toString());
    
    // Fetch updated balance
    const newBalance = await provider.getBalance(address);
    console.log("New balance:", ethers.utils.formatEther(newBalance), "ETTIA");
    
    return receipt;
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransactionWithPrivateKey();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// IMPORTANT: Never hardcode private keys in production code!
// This is for demonstration purposes only.

const { ethers } = require("ethers");

async function sendTransactionWithPrivateKey() {
  try {
    // Ettios Testnet RPC URL
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.ettiosblockchain.io");
    
    // Private key (NEVER hardcode in production)
    const privateKey = "YOUR_PRIVATE_KEY"; // Replace with your private key
    
    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);
    
    // Get sender's address and balance
    const address = wallet.address;
    const balance = await provider.getBalance(address);
    console.log("Your address:", address);
    console.log("Your balance:", ethers.utils.formatEther(balance), "ETTIA");
    
    // Recipient address - REPLACE WITH ACTUAL RECIPIENT
    const recipient = "0xRecipientAddressHere";
    
    // Amount to send - 0.01 ETTIA
    const amount = ethers.utils.parseEther("0.01");
    
    // Check if we have enough balance
    if (balance.lt(amount)) {
      console.error("Insufficient balance");
      return;
    }
    
    // Get current gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Current gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
    
    // Prepare transaction
    const tx = {
      to: recipient,
      value: amount,
      gasLimit: 21000, // Standard gas limit for transfers
      gasPrice: gasPrice
    };
    
    console.log("Sending transaction...");
    
    // Send transaction
    const txResponse = await wallet.sendTransaction(tx);
    console.log("Transaction hash:", txResponse.hash);
    
    // Wait for transaction to be mined
    console.log("Waiting for confirmation...");
    const receipt = await txResponse.wait();
    
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    console.log("Gas used:", receipt.gasUsed.toString());
    
    // Fetch updated balance
    const newBalance = await provider.getBalance(address);
    console.log("New balance:", ethers.utils.formatEther(newBalance), "ETTIA");
    
    return receipt;
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransactionWithPrivateKey();`}</code></pre>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-8">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          Security Warning
        </h4>
        <p className="mb-0">
          Never hardcode private keys in your code, especially in frontend applications. Always use secure key management or wallet connectors like MetaMask for production applications.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Method 3: Using web3.js</h2>

      <p>
        If you prefer web3.js, here's how to send a transaction:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>web3.js Transaction Example</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`// Import Web3
const Web3 = require('web3');

// Connect to Ettios Testnet
async function sendTransaction() {
  try {
    // For browser environments with MetaMask
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      
      // Check if connected to Ettios Testnet
      const networkId = await web3.eth.net.getId();
      if (networkId !== 2238) {
        console.error("Please connect to Ettios Testnet");
        return;
      }
      
      // Get accounts
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      
      // Get sender's balance
      const balance = await web3.eth.getBalance(sender);
      console.log("Your address:", sender);
      console.log("Your balance:", web3.utils.fromWei(balance, 'ether'), "ETTIA");
      
      // Recipient address - REPLACE WITH ACTUAL RECIPIENT
      const recipient = "0xRecipientAddressHere";
      
      // Amount to send - 0.01 ETTIA
      const amount = web3.utils.toWei('0.01', 'ether');
      
      // Check if we have enough balance
      if (Number(balance) < Number(amount)) {
        console.error("Insufficient balance");
        return;
      }
      
      // Get gas price
      const gasPrice = await web3.eth.getGasPrice();
      
      // Prepare transaction
      const tx = {
        from: sender,
        to: recipient,
        value: amount,
        gas: 21000, // Standard gas limit for transfers
        gasPrice: gasPrice
      };
      
      console.log("Sending transaction...");
      
      // Send transaction
      const receipt = await web3.eth.sendTransaction(tx);
      
      console.log("Transaction hash:", receipt.transactionHash);
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Gas used:", receipt.gasUsed);
      
      // Fetch updated balance
      const newBalance = await web3.eth.getBalance(sender);
      console.log("New balance:", web3.utils.fromWei(newBalance, 'ether'), "ETTIA");
      
      return receipt;
    } else {
      console.error("MetaMask is not installed");
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransaction();`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// Import Web3
const Web3 = require('web3');

// Connect to Ettios Testnet
async function sendTransaction() {
  try {
    // For browser environments with MetaMask
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      
      // Check if connected to Ettios Testnet
      const networkId = await web3.eth.net.getId();
      if (networkId !== 2238) {
        console.error("Please connect to Ettios Testnet");
        return;
      }
      
      // Get accounts
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];
      
      // Get sender's balance
      const balance = await web3.eth.getBalance(sender);
      console.log("Your address:", sender);
      console.log("Your balance:", web3.utils.fromWei(balance, 'ether'), "ETTIA");
      
      // Recipient address - REPLACE WITH ACTUAL RECIPIENT
      const recipient = "0xRecipientAddressHere";
      
      // Amount to send - 0.01 ETTIA
      const amount = web3.utils.toWei('0.01', 'ether');
      
      // Check if we have enough balance
      if (Number(balance) < Number(amount)) {
        console.error("Insufficient balance");
        return;
      }
      
      // Get gas price
      const gasPrice = await web3.eth.getGasPrice();
      
      // Prepare transaction
      const tx = {
        from: sender,
        to: recipient,
        value: amount,
        gas: 21000, // Standard gas limit for transfers
        gasPrice: gasPrice
      };
      
      console.log("Sending transaction...");
      
      // Send transaction
      const receipt = await web3.eth.sendTransaction(tx);
      
      console.log("Transaction hash:", receipt.transactionHash);
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Gas used:", receipt.gasUsed);
      
      // Fetch updated balance
      const newBalance = await web3.eth.getBalance(sender);
      console.log("New balance:", web3.utils.fromWei(newBalance, 'ether'), "ETTIA");
      
      return receipt;
    } else {
      console.error("MetaMask is not installed");
    }
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Call the function
sendTransaction();`}</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Tracking Transaction Status</h2>

      <p>
        After sending a transaction, you can track its status using the transaction hash:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>Transaction Status Tracking</span>
          <button className="text-gray-200 hover:text-white" onClick={() => handleCopyClick(`const { ethers } = require("ethers");

async function checkTransactionStatus(txHash) {
  try {
    // Connect to Ettios Testnet
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.ettiosblockchain.io");
    
    // Get transaction details
    const tx = await provider.getTransaction(txHash);
    
    if (!tx) {
      console.log("Transaction not found - it might be invalid or not yet broadcast");
      return null;
    }
    
    console.log("Transaction details:");
    console.log("From:", tx.from);
    console.log("To:", tx.to);
    console.log("Value:", ethers.utils.formatEther(tx.value), "ETTIA");
    console.log("Gas price:", ethers.utils.formatUnits(tx.gasPrice, "gwei"), "gwei");
    console.log("Gas limit:", tx.gasLimit.toString());
    
    // Check if transaction is confirmed
    if (tx.blockNumber) {
      console.log("Status: Confirmed in block", tx.blockNumber);
      
      // Get transaction receipt for more details
      const receipt = await provider.getTransactionReceipt(txHash);
      console.log("Gas used:", receipt.gasUsed.toString());
      console.log("Status:", receipt.status === 1 ? "Success" : "Failed");
      
      return receipt;
    } else {
      console.log("Status: Pending - not yet included in a block");
      
      // Optional: Wait for transaction to confirm
      console.log("Waiting for confirmation...");
      const receipt = await provider.waitForTransaction(txHash);
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Status:", receipt.status === 1 ? "Success" : "Failed");
      
      return receipt;
    }
  } catch (error) {
    console.error("Error checking transaction status:", error);
    return null;
  }
}

// Usage: Replace with your transaction hash
checkTransactionStatus("0xYourTransactionHashHere");`)}>
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const { ethers } = require("ethers");

async function checkTransactionStatus(txHash) {
  try {
    // Connect to Ettios Testnet
    const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.ettiosblockchain.io");
    
    // Get transaction details
    const tx = await provider.getTransaction(txHash);
    
    if (!tx) {
      console.log("Transaction not found - it might be invalid or not yet broadcast");
      return null;
    }
    
    console.log("Transaction details:");
    console.log("From:", tx.from);
    console.log("To:", tx.to);
    console.log("Value:", ethers.utils.formatEther(tx.value), "ETTIA");
    console.log("Gas price:", ethers.utils.formatUnits(tx.gasPrice, "gwei"), "gwei");
    console.log("Gas limit:", tx.gasLimit.toString());
    
    // Check if transaction is confirmed
    if (tx.blockNumber) {
      console.log("Status: Confirmed in block", tx.blockNumber);
      
      // Get transaction receipt for more details
      const receipt = await provider.getTransactionReceipt(txHash);
      console.log("Gas used:", receipt.gasUsed.toString());
      console.log("Status:", receipt.status === 1 ? "Success" : "Failed");
      
      return receipt;
    } else {
      console.log("Status: Pending - not yet included in a block");
      
      // Optional: Wait for transaction to confirm
      console.log("Waiting for confirmation...");
      const receipt = await provider.waitForTransaction(txHash);
      console.log("Transaction confirmed in block:", receipt.blockNumber);
      console.log("Status:", receipt.status === 1 ? "Success" : "Failed");
      
      return receipt;
    }
  } catch (error) {
    console.error("Error checking transaction status:", error);
    return null;
  }
}

// Usage: Replace with your transaction hash
checkTransactionStatus("0xYourTransactionHashHere");`}</code></pre>
        </div>
      </div>

      <p>
        You can also track transaction status using the Ettios block explorer:
      </p>

      <div className="p-4 border rounded-md bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 my-6">
        <h4 className="font-bold mt-0">Ettios Testnet Explorer</h4>
        <p className="mb-4">Visit the block explorer and search for your transaction hash:</p>
        <a 
          href="https://testnet-scan.ettiosblockchain.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Go to Explorer
        </a>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Gas and Transaction Fees</h2>

      <p>
        On Ettios, every transaction requires a small fee paid in ETTIA. This fee is calculated as:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 my-6 rounded-md border border-gray-300 dark:border-gray-700">
        <p className="text-center font-mono text-lg mb-0">
          Transaction Fee = Gas Used × Gas Price
        </p>
      </div>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Gas Used</h4>
          <p className="mb-0">
            The amount of computational work required to process the transaction. Standard ETTIA transfers use 21,000 gas, while contract interactions use variable amounts.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Gas Price</h4>
          <p className="mb-0">
            The price you're willing to pay per unit of gas, specified in gwei (1 gwei = 0.000000001 ETTIA). Higher gas prices mean faster transaction confirmation.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Estimating Gas</h3>

      <p>
        For contract interactions, it's recommended to estimate the gas required before sending a transaction:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
          <span>Gas Estimation Example</span>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const { ethers } = require("ethers");

async function estimateGas() {
  try {
    // Connect to provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    // Recipient address
    const recipient = "0xRecipientAddressHere";
    
    // Amount to send - 0.01 ETTIA
    const amount = ethers.utils.parseEther("0.01");
    
    // Prepare transaction object
    const tx = {
      to: recipient,
      value: amount,
    };
    
    // Estimate gas
    const estimatedGas = await provider.estimateGas(tx);
    console.log("Estimated gas:", estimatedGas.toString());
    
    // Get current gas price
    const gasPrice = await provider.getGasPrice();
    console.log("Current gas price:", ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");
    
    // Calculate estimated fee
    const estimatedFee = estimatedGas.mul(gasPrice);
    console.log("Estimated fee:", ethers.utils.formatEther(estimatedFee), "ETTIA");
    
    return estimatedGas;
  } catch (error) {
    console.error("Error estimating gas:", error);
  }
}

estimateGas();`}</code></pre>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you know how to create and send transactions, continue exploring:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/developer-quickstart/first-smart-contract" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Create Your First Smart Contract</h3>
            <p className="text-muted-foreground flex-grow">Learn how to deploy and interact with smart contracts on Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">Start coding <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/token-standards/erc20" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Create a Token</h3>
            <p className="text-muted-foreground flex-grow">Explore token standards and create your own ERC-20 token</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
