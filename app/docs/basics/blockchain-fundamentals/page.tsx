"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Database, LockKeyhole, FileCode, Coins } from 'lucide-react';

export default function BlockchainFundamentalsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Blockchain Fundamentals
      </h1>

      <p className="text-lg leading-7">
        This guide provides an introduction to blockchain technology fundamentals for developers who are new to the space. 
        Understanding these core concepts will help you build more effectively on Ettios.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Database className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">What is Blockchain?</h3>
          <p className="flex-grow">
            A blockchain is a distributed, immutable ledger that records transactions across a network of computers. Each block contains a list of transactions and is linked to the previous block, forming a chain.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <FileCode className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
          <p className="flex-grow">
            Smart contracts are self-executing programs that run on the blockchain. They automatically enforce and execute the terms of an agreement when predefined conditions are met.
          </p>
        </div>
        
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <LockKeyhole className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Consensus Mechanisms</h3>
          <p className="flex-grow">
            Consensus mechanisms are protocols that ensure all nodes in the network agree on the state of the blockchain. Common mechanisms include Proof of Work (PoW) and Proof of Stake (PoS).
          </p>
        </div>
        
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex flex-col">
          <Coins className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Tokens & Assets</h3>
          <p className="flex-grow">
            Blockchain tokens represent digital assets or utilities that can be bought, sold, and traded. They can represent anything from currencies to voting rights to digital collectibles.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">How Blockchain Works</h2>

      <p>
        At its core, a blockchain is a chain of blocks, each containing a set of transactions. Here's a simplified explanation of how it works:
      </p>

      <div className="my-8 space-y-10">
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-bold mb-2">1. Transaction Initiation</h3>
          <p>
            A user initiates a transaction (e.g., sending tokens, deploying a smart contract, interacting with a contract).
            The transaction is signed with the user's private key to prove their identity.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-bold mb-2">2. Transaction Propagation</h3>
          <p>
            The signed transaction is broadcast to the network, where it enters a pool of pending transactions.
            Nodes (computers in the network) verify the transaction's validity by checking the signature and ensuring the sender has sufficient balance.
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-bold mb-2">3. Block Creation</h3>
          <p>
            Validators (miners in PoW or stakers in PoS) group multiple verified transactions into a block.
            The validator adds a reference to the previous block (creating the chain) and solves a computational puzzle (in PoW) or is selected based on their stake (in PoS).
          </p>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-bold mb-2">4. Consensus</h3>
          <p>
            Other nodes validate the new block according to the network's consensus rules.
            If the majority of nodes agree that the block is valid, it's added to the blockchain.
          </p>
        </div>
        
        <div className="relative pl-8">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-bold mb-2">5. Finality</h3>
          <p>
            Once a block is added to the chain, it becomes extremely difficult to alter (immutability).
            As more blocks are added on top, the older blocks become even more secure.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Understanding Smart Contracts</h2>

      <p>
        Smart contracts are the building blocks of blockchain applications. They're programs stored on the blockchain that run when predetermined conditions are met.
      </p>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Key Characteristics of Smart Contracts</h3>
        
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
            <h4 className="font-bold mb-2">Autonomy</h4>
            <p className="mb-0">
              Once deployed, smart contracts operate independently. No need for intermediaries to execute or enforce agreements.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
            <h4 className="font-bold mb-2">Transparency</h4>
            <p className="mb-0">
              Anyone can see the contract's code and verify how it works. The execution of the contract is also visible to all participants in the network.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
            <h4 className="font-bold mb-2">Immutability</h4>
            <p className="mb-0">
              Once deployed, the code cannot be changed (unless specifically designed to be upgradable), ensuring that the rules won't change unexpectedly.
            </p>
          </div>
          
          <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
            <h4 className="font-bold mb-2">Deterministic</h4>
            <p className="mb-0">
              Given the same input, a smart contract will always produce the same output, making its behavior predictable.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Ethereum Virtual Machine (EVM)</h3>

      <p>
        The Ethereum Virtual Machine (EVM) is a computation engine that serves as the runtime environment for smart contracts. 
        Ettios is EVM-compatible, meaning:
      </p>

      <ul className="list-disc pl-5 my-4 space-y-2">
        <li>Smart contracts written for Ethereum can run on Ettios without modification</li>
        <li>You can use the same development tools (Solidity, Hardhat, Truffle, etc.)</li>
        <li>Existing Ethereum libraries and patterns work seamlessly</li>
        <li>Developers familiar with Ethereum can easily transition to Ettios</li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Learning Solidity
        </h4>
        <p className="mb-0">
          Solidity is the most popular language for writing smart contracts. If you're new to Solidity, check out the <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">official Solidity documentation</a> or our <Link href="/docs/developer-quickstart/first-smart-contract" className="text-primary underline underline-offset-4">First Smart Contract guide</Link>.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Blockchain Tokens</h2>

      <p>
        Tokens are digital assets created and managed on a blockchain, often using smart contracts. There are several types of tokens:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Fungible Tokens (ERC-20)</h3>
          <p className="mb-4">
            Fungible tokens are interchangeable with one another. Each token has the same value and properties as any other token of the same type.
          </p>
          <p className="mb-4">
            Examples: Cryptocurrencies, utility tokens
          </p>
          <p className="text-sm text-muted-foreground">
            Standard: <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">ERC-20</a>
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Non-Fungible Tokens (ERC-721)</h3>
          <p className="mb-4">
            Non-fungible tokens (NFTs) are unique and cannot be exchanged on a one-to-one basis. Each token has unique properties and value.
          </p>
          <p className="mb-4">
            Examples: Digital art, collectibles, property deeds
          </p>
          <p className="text-sm text-muted-foreground">
            Standard: <a href="https://eips.ethereum.org/EIPS/eip-721" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">ERC-721</a>
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Semi-Fungible Tokens (ERC-1155)</h3>
          <p className="mb-4">
            Semi-fungible tokens combine features of both fungible and non-fungible tokens, allowing for batched operations and more efficient transfers.
          </p>
          <p className="mb-4">
            Examples: Gaming items, mixed asset collections
          </p>
          <p className="text-sm text-muted-foreground">
            Standard: <a href="https://eips.ethereum.org/EIPS/eip-1155" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">ERC-1155</a>
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Native Token (ETTIA)</h3>
          <p className="mb-4">
            ETTIA is the native token of the Ettios blockchain, used for paying transaction fees (gas) and participating in network governance.
          </p>
          <p className="mb-4">
            Unlike other tokens, ETTIA is built into the protocol itself and not implemented as a smart contract.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Gas and Transaction Fees
        </h4>
        <p className="mb-0">
          Every operation on the blockchain costs computational resources. Gas is the unit that measures this computational work. Users pay transaction fees in ETTIA to compensate validators for executing and securing these operations. Ettios offers significantly lower gas fees compared to Ethereum mainnet.
        </p>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Ready to Start Building?</h3>
        <p className="text-lg">
          Now that you understand the fundamentals of blockchain technology, you're ready to start building on Ettios:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/getting-started/using-metamask" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Set Up Your Wallet</h3>
            <p className="text-muted-foreground flex-grow">Connect MetaMask to the Ettios network</p>
            <div className="text-primary mt-2 flex items-center gap-1">Get started <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/first-smart-contract" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Deploy Your First Contract</h3>
            <p className="text-muted-foreground flex-grow">Write and deploy a smart contract on Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">Start building <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
