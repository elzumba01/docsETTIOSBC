"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Coins } from 'lucide-react';

export default function ERC20Page() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        ERC-20 Token Standard
      </h1>

      <p className="text-lg leading-7">
        This guide explains the ERC-20 token standard, how to create your own ERC-20 token on Ettios, and best practices for token implementation.
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
          <li>Basic knowledge of Solidity programming</li>
          <li>A development environment set up (see our <Link href="/docs/developer-quickstart/development-environment" className="text-primary underline underline-offset-4">Development Environment</Link> guide)</li>
          <li>Some test ETTIA for deploying contracts (get them from our <Link href="/docs/getting-started/testnet-faucet" className="text-primary underline underline-offset-4">testnet faucet</Link>)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">What is ERC-20?</h2>

      <p>
        ERC-20 (Ethereum Request for Comment 20) is a token standard for fungible tokens on Ethereum-compatible blockchains. 
        It defines a common set of rules that all fungible tokens should implement, ensuring interoperability between different tokens and applications.
      </p>

      <p>
        Fungible tokens are interchangeable with each other, meaning each token has the same value and properties as any other token of the same type. 
        This is similar to how one dollar bill is equal to any other dollar bill.
      </p>

      <div className="my-8 flex items-center justify-center">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm max-w-md">
          <div className="flex items-center mb-4">
            <Coins className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-xl font-bold mb-0">Common ERC-20 Token Use Cases</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cryptocurrencies and stablecoins</li>
            <li>Governance tokens for DAOs</li>
            <li>Utility tokens for platform access</li>
            <li>Reward and loyalty programs</li>
            <li>Security tokens representing assets</li>
            <li>Liquidity provider tokens in DeFi</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">ERC-20 Interface</h2>

      <p>
        The ERC-20 standard defines six required functions and two required events that any compliant token must implement:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ERC-20 Interface</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    // Required functions
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    // Required events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Function Descriptions</h3>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">totalSupply()</h4>
          <p className="mb-0">
            Returns the total amount of tokens in existence.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">balanceOf(address account)</h4>
          <p className="mb-0">
            Returns the amount of tokens owned by the specified account.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">transfer(address recipient, uint256 amount)</h4>
          <p className="mb-0">
            Transfers a specified amount of tokens from the caller's account to the recipient's account.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">allowance(address owner, address spender)</h4>
          <p className="mb-0">
            Returns the remaining number of tokens that the spender is allowed to spend on behalf of the owner.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">approve(address spender, uint256 amount)</h4>
          <p className="mb-0">
            Sets the amount of tokens that the spender is allowed to transfer from the caller's account.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">transferFrom(address sender, address recipient, uint256 amount)</h4>
          <p className="mb-0">
            Transfers tokens from one address to another, assuming the caller has been given allowance by the sender.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Creating an ERC-20 Token</h2>

      <p>
        Let's create a simple ERC-20 token using OpenZeppelin's battle-tested contracts. First, install the OpenZeppelin Contracts library:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
          <span>Terminal</span>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>npm install @openzeppelin/contracts</code></pre>
        </div>
      </div>

      <p>
        Now, create a file called <code>MyToken.sol</code> with the following code:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>MyToken.sol</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol, uint256 initialSupply) 
        ERC20(name, symbol) 
        Ownable(msg.sender)
    {
        // Mint initial supply (18 decimals is the default)
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
    
    // Optional: Allow the owner to mint more tokens later
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Customizing Your Token</h3>

      <p>
        You can customize your token by modifying the constructor parameters and adding additional functionality:
      </p>

      <div className="my-8 space-y-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">Token Name & Symbol</h4>
          <p className="mb-0">
            The <code>name</code> and <code>symbol</code> parameters define your token's display name and ticker symbol, e.g., "My Awesome Token" and "MAT".
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">Initial Supply</h4>
          <p className="mb-0">
            The <code>initialSupply</code> parameter defines how many tokens to create initially. Note that this value is multiplied by 10^18 to account for decimals.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">Additional Features</h4>
          <p className="mb-0">
            You can add features like token burning, pausing, capped supply, or other mechanisms by importing additional OpenZeppelin contracts:
          </p>
          <ul className="list-disc pl-5 mt-2 mb-0">
            <li><code>ERC20Burnable</code> - Add burn functionality</li>
            <li><code>ERC20Pausable</code> - Allow pausing of token transfers</li>
            <li><code>ERC20Capped</code> - Set a maximum supply cap</li>
            <li><code>ERC20Snapshot</code> - Create snapshots of balances at specific points in time</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Deploying Your Token</h2>

      <p>
        You can deploy your token using Hardhat, Truffle, or Remix. Here's an example of a Hardhat deployment script:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>scripts/deploy.js</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  
  // Deploy with name "My Token", symbol "MTK", and initial supply of 1,000,000 tokens
  const myToken = await MyToken.deploy("My Token", "MTK", 1000000);
  
  await myToken.deployed();
  
  console.log("MyToken deployed to:", myToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`}</code></pre>
        </div>
      </div>

      <p>
        To deploy to the Ettios testnet:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
          <span>Terminal</span>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>npx hardhat run scripts/deploy.js --network ettiosTestnet</code></pre>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Best Practices
        </h4>
        <ul className="list-disc pl-5 mt-2 mb-0">
          <li>Always have your contracts audited by security professionals before deploying to mainnet</li>
          <li>Use established libraries like OpenZeppelin rather than writing token contracts from scratch</li>
          <li>Consider adding a timelocked admin role for sensitive operations</li>
          <li>Thoroughly test your token on testnet before deploying to mainnet</li>
          <li>Document your token's tokenomics and distribution plan</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Interacting with Your Token</h2>

      <p>
        Once deployed, you can interact with your token using a variety of tools:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-semibold">
            <h3 className="text-lg">Using Hardhat</h3>
          </div>
          <div className="p-4">
            <div className="rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
                <span>Script</span>
              </div>
              <div className="p-4 overflow-x-auto bg-gray-900 text-white">
                <pre className="text-sm font-mono leading-relaxed"><code>{`// Get token instance
const MyToken = await ethers.getContractFactory("MyToken");
const token = MyToken.attach("YOUR_TOKEN_ADDRESS");

// Check balance
const balance = await token.balanceOf("ADDRESS");
console.log("Balance:", ethers.utils.formatEther(balance));

// Transfer tokens
await token.transfer("RECIPIENT_ADDRESS", ethers.utils.parseEther("100"));`}</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-semibold">
            <h3 className="text-lg">Using Web Frontend</h3>
          </div>
          <div className="p-4">
            <div className="rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
                <span>JavaScript</span>
              </div>
              <div className="p-4 overflow-x-auto bg-gray-900 text-white">
                <pre className="text-sm font-mono leading-relaxed"><code>{`// Connect to wallet (ethers.js example)
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();

// Initialize contract
const tokenContract = new ethers.Contract(
  tokenAddress,
  tokenAbi,
  signer
);

// Get balance
const balance = await tokenContract.balanceOf(await signer.getAddress());
console.log("Balance:", ethers.utils.formatEther(balance));

// Transfer tokens
await tokenContract.transfer(recipientAddress, ethers.utils.parseEther(amount));`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you've created your ERC-20 token, you might want to explore:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/token-standards/erc721" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Create an NFT Collection</h3>
            <p className="text-muted-foreground flex-grow">Learn how to create non-fungible tokens using the ERC-721 standard</p>
            <div className="text-primary mt-2 flex items-center gap-1">Explore NFTs <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/frontend-integration" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Build a Token Dashboard</h3>
            <p className="text-muted-foreground flex-grow">Create a web interface for users to interact with your token</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
