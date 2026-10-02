"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Terminal, Package, Code } from 'lucide-react';

// Environment variables with fallbacks
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettiosblockchain.io';
const testnetRpcUrl = process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://testnet-rpc.ettiosblockchain.io';
const mainnetChainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';
const testnetChainId = process.env.NEXT_PUBLIC_TESTNET_CHAIN_ID || '2238';

export default function DevelopmentEnvironmentPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Setting Up Your Development Environment
      </h1>

      <p className="text-lg leading-7">
        This guide will help you set up a complete development environment for building on the Ettios blockchain.
        We'll cover all the essential tools and configurations needed to start developing smart contracts and dApps.
      </p>

      {/* Prerequisites section */}
      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Prerequisites
        </h4>
        <p className="mb-0">
          Before proceeding, make sure you have:
        </p>
        <ul className="list-disc pl-5 mt-2 mb-0">
          <li>Basic knowledge of JavaScript/TypeScript</li>
          <li>Familiarity with terminal/command line interfaces</li>
          <li>
            <Link href="/docs/getting-started/using-metamask" className="text-primary underline underline-offset-4">
              MetaMask installed and configured
            </Link> for the Ettios network
          </li>
          <li>
            <Link href="/docs/getting-started/testnet-faucet" className="text-primary underline underline-offset-4">
              Testnet tokens
            </Link> for testing your contracts
          </li>
        </ul>
      </div>

      {/* Node.js section */}
      <h2 className="text-3xl font-bold mt-10 border-b pb-2">
        <Terminal className="inline h-8 w-8 mr-2 text-primary" />
        Installing Node.js and npm
      </h2>

      <p>
        Most Ethereum development tools require Node.js, a JavaScript runtime environment, and npm, its package manager.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h3 className="text-xl font-bold">Installation Steps</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <p>Visit the <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                official Node.js website
              </a></p>
            </li>
            <li>
              <p>Download and install the LTS (Long Term Support) version</p>
            </li>
            <li>
              <p>Verify your installation by running these commands in your terminal:</p>
              <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                <code>node -v</code><br />
                <code>npm -v</code>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Version Requirements</h3>
          <p className="mb-4">
            For optimal Ettios development, we recommend:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <span className="font-medium">Node.js:</span>
                <span className="text-muted-foreground ml-2">v16.0.0 or higher</span>
              </div>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <span className="font-medium">npm:</span>
                <span className="text-muted-foreground ml-2">v8.0.0 or higher</span>
              </div>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Note: Using a Node.js version manager like nvm is recommended for easily switching between Node.js versions.
          </p>
        </div>
      </div>

      {/* Development Frameworks section */}
      <h2 className="text-3xl font-bold mt-10 border-b pb-2">
        <Package className="inline h-8 w-8 mr-2 text-primary" />
        Setting Up Development Frameworks
      </h2>

      <p>
        For smart contract development on Ettios, we recommend using one of these frameworks:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Hardhat (Recommended)</h3>
          <p className="mb-4">
            Hardhat is a development environment that helps developers compile, deploy, test, and debug Ethereum software.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
            <code>npm init -y</code><br />
            <code>npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox</code>
          </div>
          <p className="mb-4">
            After installation, initialize a Hardhat project:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>npx hardhat init</code>
          </div>
          <a 
            href="https://hardhat.org/getting-started"
            className="inline-flex items-center gap-1 mt-4 text-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Hardhat
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Foundry</h3>
          <p className="mb-4">
            Foundry is a fast, portable, and modular toolkit for Ethereum application development.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
            <code># For Linux or macOS</code><br />
            <code>curl -L https://foundry.paradigm.xyz | bash</code><br />
            <code>foundryup</code><br /><br />
            <code># For Windows (using Git Bash)</code><br />
            <code>curl -L https://foundry.paradigm.xyz | bash</code><br />
            <code>foundryup</code>
          </div>
          <p className="mb-4">
            Initialize a new Foundry project:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>forge init my_project</code>
          </div>
          <a 
            href="https://book.getfoundry.sh"
            className="inline-flex items-center gap-1 mt-4 text-primary text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Foundry
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Ettios Network Configuration section */}
      <h2 className="text-3xl font-bold mt-10 border-b pb-2">
        <Code className="inline h-8 w-8 mr-2 text-primary" />
        Configuring for Ettios Network
      </h2>

      <p>
        Once you've chosen a development framework, you'll need to configure it to work with the Ettios network.
      </p>

      <div className="my-8 space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Hardhat Configuration</h3>
          <p className="mb-4">
            Update your <code>hardhat.config.js</code> or <code>hardhat.config.ts</code> file with the Ettios network settings:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`module.exports = {
  solidity: "0.8.19",
  networks: {
    ettiosTestnet: {
      url: "${testnetRpcUrl}",
      accounts: [process.env.PRIVATE_KEY],
      chainId: ${testnetChainId},
    },
    ettiosMainnet: {
      url: "${mainnetRpcUrl}",
      accounts: [process.env.PRIVATE_KEY],
      chainId: ${mainnetChainId},
    }
  }
};`}</pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Create a <code>.env</code> file in your project root to store your private key. Never commit this file to version control.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <pre>{`PRIVATE_KEY=your_private_key_here`}</pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Also install dotenv to load environment variables:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <code>npm install --save-dev dotenv</code>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">Foundry Configuration</h3>
          <p className="mb-4">
            Create or update your <code>foundry.toml</code> file:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`[profile.default]
src = 'src'
out = 'out'
libs = ['lib']
solc = "0.8.19"

[rpc_endpoints]
ettios_testnet = "${testnetRpcUrl}"
ettios_mainnet = "${mainnetRpcUrl}"

[etherscan]
ettios_testnet = { url = "https://testnet-scan.ettiosblockchain.io/api" }
ettios_mainnet = { url = "https://scan.ettiosblockchain.io/api" }`}</pre>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            For private key management, you can create a <code>.env</code> file and load it using Cast:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <pre>{`# Deploy script example
PRIVATE_KEY=$(cast wallet import-private-key /path/to/privatekey)
forge script script/Deploy.s.sol:DeployScript --rpc-url ettios_testnet --broadcast --verify`}</pre>
          </div>
        </div>
      </div>

      {/* Additional Tools section */}
      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Installing Additional Tools</h2>

      <div className="space-y-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Solidity Compiler</h3>
          <p className="mb-2">
            While Hardhat and Foundry include the Solidity compiler, you can also install it separately:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>npm install -g solc</code>
          </div>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">IDE Extensions</h3>
          <p className="mb-2">
            For better development experience, install these extensions for your code editor:
          </p>
          <p className="font-medium">Visual Studio Code:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Solidity by Juan Blanco</li>
            <li>Solidity Visual Developer</li>
            <li>Hardhat for Visual Studio Code</li>
          </ul>
          <p className="font-medium">JetBrains IDEs:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IntelliJ Solidity</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Frontend Libraries</h3>
          <p className="mb-2">
            For frontend development, consider installing these libraries:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-2">
            <code>npm install ethers wagmi viem</code>
          </div>
          <p className="text-sm text-muted-foreground">
            These libraries help you interact with the Ettios blockchain from your web applications.
          </p>
        </div>
      </div>

      {/* Verifying Setup section */}
      <h2 className="text-3xl font-bold mt-10 border-b pb-2">Verifying Your Setup</h2>

      <p>
        Let's make sure everything is working correctly by creating and compiling a simple contract.
      </p>

      <div className="my-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Create a Test Contract</h3>
          <p className="mb-2">
            Create a file called <code>Greeter.sol</code> in your project's contracts folder:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}`}</pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">Compile the Contract</h3>
          <p className="mb-2">For Hardhat:</p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-4">
            <code>npx hardhat compile</code>
          </div>
          <p className="mb-2">For Foundry:</p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>forge build</code>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">Test Deployment Script</h3>
          <p className="mb-2">
            For Hardhat, create a file called <code>deploy.js</code> in your project's scripts folder:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
            <pre>{`const hre = require("hardhat");

async function main() {
  // Get the Greeter contract factory
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  
  // Deploy with initial greeting
  const greeter = await Greeter.deploy("Hello, Ettios!");
  
  // Wait for deployment to complete
  await greeter.deployed();
  
  console.log("Greeter deployed to:", greeter.address);
}

// Run the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`}</pre>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Security Best Practice
        </h4>
        <p className="mb-0">
          Never hardcode private keys in your code or commit them to version control. Always use environment variables or secure key management solutions.
        </p>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that your development environment is set up, you're ready to start building on Ettios:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/developer-quickstart/first-smart-contract" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Deploy Your First Smart Contract</h3>
            <p className="text-muted-foreground flex-grow">Follow our step-by-step guide to deploy a contract on Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">Get started <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/frontend-integration" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Frontend Integration</h3>
            <p className="text-muted-foreground flex-grow">Learn how to connect your dApp frontend to Ettios</p>
            <div className="text-primary mt-2 flex items-center gap-1">View guide <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
