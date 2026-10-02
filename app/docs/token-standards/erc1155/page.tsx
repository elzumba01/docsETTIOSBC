"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Layers, BarChart } from 'lucide-react';

export default function ERC1155Page() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        ERC-1155 Multi-Token Standard
      </h1>

      <p className="text-lg leading-7">
        This guide explains the ERC-1155 Multi-Token standard, which allows for creating both fungible and non-fungible tokens in a single contract with improved efficiency.
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
          <li>Familiarity with <Link href="/docs/token-standards/erc20" className="text-primary underline underline-offset-4">ERC-20</Link> and <Link href="/docs/token-standards/erc721" className="text-primary underline underline-offset-4">ERC-721</Link> standards</li>
          <li>A development environment set up (see our <Link href="/docs/developer-quickstart/development-environment" className="text-primary underline underline-offset-4">Development Environment</Link> guide)</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">What is ERC-1155?</h2>

      <p>
        ERC-1155 is a token standard that enables the creation of both fungible and non-fungible tokens in a single contract. 
        It was designed to address limitations in the ERC-20 and ERC-721 standards, particularly for gaming and complex applications 
        that require multiple token types.
      </p>

      <div className="my-8 flex items-center justify-center">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm max-w-md">
          <div className="flex items-center mb-4">
            <Layers className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-xl font-bold mb-0">Key Advantages of ERC-1155</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Batch transfers of multiple token types in a single transaction</li>
            <li>Gas efficiency through shared contract logic</li>
            <li>Semi-fungible tokens (e.g., limited edition items)</li>
            <li>Atomic swaps between different token types</li>
            <li>Ability to create both fungible and non-fungible assets in one contract</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 my-10">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Gaming Items</h3>
          <p className="text-sm">
            Create common items (fungible), unique weapons (NFTs), and limited edition items (semi-fungible) all in one contract.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">Marketplaces</h3>
          <p className="text-sm">
            Facilitate complex trades and batch operations for various asset types in a gas-efficient manner.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-lg font-bold mb-2">DeFi Applications</h3>
          <p className="text-sm">
            Bundle different token types together and process them in a single transaction, reducing gas costs.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">ERC-1155 Interface</h2>

      <p>
        The ERC-1155 standard introduces several functions that make it distinct from earlier standards:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ERC-1155 Interface</span>
          <button className="text-gray-200 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC1155 {
    // Core functions
    function balanceOf(address account, uint256 id) external view returns (uint256);
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids) external view returns (uint256[] memory);
    function setApprovalForAll(address operator, bool approved) external;
    function isApprovedForAll(address account, address operator) external view returns (bool);
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
    function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external;

    // Events
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
    event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values);
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);
    event URI(string value, uint256 indexed id);
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Key Functions</h3>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">balanceOf(address account, uint256 id)</h4>
          <p className="mb-0">
            Returns the amount of tokens of a specific token ID owned by an account.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">balanceOfBatch(address[] accounts, uint256[] ids)</h4>
          <p className="mb-0">
            Batch version of balanceOf - returns the balance of multiple token IDs for multiple addresses in a single call.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)</h4>
          <p className="mb-0">
            Transfers a specific amount of a token ID from one address to another.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)</h4>
          <p className="mb-0">
            Batch version of safeTransferFrom - transfers multiple token IDs with different amounts in a single transaction.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Creating an ERC-1155 Token Contract</h2>

      <p>
        Let's create a multi-token contract using OpenZeppelin's implementation. First, install the OpenZeppelin Contracts library:
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
        Now, create a file called <code>MyMultiToken.sol</code> with the following code:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>MyMultiToken.sol</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract MyMultiToken is ERC1155, Ownable, ERC1155Supply {
    // Token type IDs
    uint256 public constant FUNGIBLE_TOKEN = 0;
    uint256 public constant GOLD_NFT = 1;
    uint256 public constant SILVER_NFT = 2;
    uint256 public constant BRONZE_NFT = 3;
    
    // Token names
    string public name;
    string public symbol;
    
    // Optional: Token URI mapping for NFTs
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol) 
        ERC1155("") 
        Ownable(msg.sender)
    {
        name = _name;
        symbol = _symbol;
        
        // Mint initial supply of fungible tokens to the owner
        _mint(msg.sender, FUNGIBLE_TOKEN, 1000000 * 10**18, "");
        
        // Mint one of each NFT to the owner
        _mint(msg.sender, GOLD_NFT, 1, "");
        _mint(msg.sender, SILVER_NFT, 1, "");
        _mint(msg.sender, BRONZE_NFT, 1, "");
    }
    
    // Mint more tokens (only owner)
    function mint(address to, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
        _mint(to, id, amount, data);
    }
    
    // Mint multiple token types at once (only owner)
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
    
    // Set URI for a specific token ID
    function setURI(uint256 id, string memory tokenURI) public onlyOwner {
        _tokenURIs[id] = tokenURI;
        emit URI(uri(id), id);
    }
    
    // Override the uri function to return the token-specific URI if available
    function uri(uint256 id) public view override returns (string memory) {
        string memory tokenURI = _tokenURIs[id];
        
        // If there is no token-specific URI, return the base URI
        if (bytes(tokenURI).length == 0) {
            return super.uri(id);
        }
        
        return tokenURI;
    }
    
    // Set the base URI for all tokens
    function setBaseURI(string memory baseURI) public onlyOwner {
        _setURI(baseURI);
    }
    
    // Override required by Solidity for ERC1155Supply
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}`}</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Token ID Design Patterns</h2>

      <p>
        With ERC-1155, how you design your token IDs matters. Here are some common patterns:
      </p>

      <div className="space-y-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Simple Constants</h3>
          <p>
            In the example above, we used simple constants for different token types:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <pre>{`uint256 public constant FUNGIBLE_TOKEN = 0;
uint256 public constant GOLD_NFT = 1;`}</pre>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            This works well for a small, fixed number of token types.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Bit Manipulation</h3>
          <p>
            Use bit ranges to encode token properties in the ID itself:
          </p>
          <div className="rounded-md border border-gray-300 dark:border-gray-700 mt-3 overflow-hidden shadow-md">
            <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
              <span>Bit Manipulation Pattern</span>
            </div>
            <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
              <pre className="text-sm font-mono leading-relaxed"><code>{`// First 8 bits: token type (0=fungible, 1=NFT, 2=semi-fungible)
// Next 8 bits: rarity (0-255)
// Next 16 bits: item ID

function createTokenId(uint8 tokenType, uint8 rarity, uint16 itemId) public pure returns (uint256) {
    return uint256(tokenType) << 24 | uint256(rarity) << 16 | uint256(itemId);
}

function getTokenType(uint256 id) public pure returns (uint8) {
    return uint8(id >> 24);
}

function getRarity(uint256 id) public pure returns (uint8) {
    return uint8(id >> 16);
}

function getItemId(uint256 id) public pure returns (uint16) {
    return uint16(id);
}`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Range-Based Categorization</h3>
          <p>
            Define ID ranges for different token types:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <pre>{`// 0-999: Fungible tokens
// 1000-1999: Common NFTs
// 2000-2999: Rare NFTs
// 3000-3999: Legendary NFTs

function isFungible(uint256 id) public pure returns (bool) {
    return id < 1000;
}

function isLegendary(uint256 id) public pure returns (bool) {
    return id >= 3000 && id < 4000;
}`}</pre>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            This approach is simple and intuitive for categorizing token types.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Deploying Your ERC-1155 Contract</h2>

      <p>
        Deploy your multi-token contract using Hardhat:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>scripts/deploy-multi-token.js</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`const hre = require("hardhat");

async function main() {
  const MyMultiToken = await hre.ethers.getContractFactory("MyMultiToken");
  
  // Deploy with name and symbol
  const multiToken = await MyMultiToken.deploy("My Multi Token", "MMT");
  
  await multiToken.deployed();
  
  console.log("MyMultiToken deployed to:", multiToken.address);
  
  // Set the base URI for token metadata
  await multiToken.setBaseURI("https://your-api.com/token/");
  
  // Set individual URIs for NFTs
  await multiToken.setURI(1, "ipfs://QmYourIPFSHash/gold.json");
  await multiToken.setURI(2, "ipfs://QmYourIPFSHash/silver.json");
  await multiToken.setURI(3, "ipfs://QmYourIPFSHash/bronze.json");
  
  console.log("URIs set successfully");
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
        Deploy to the Ettios mainnet:
      </p>

      <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto my-6">
        <code>npx hardhat run scripts/deploy-multi-token.js --network ettiosMainnet</code>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Interacting with ERC-1155 Tokens</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-semibold">
            <h3 className="text-lg">Checking Balances</h3>
          </div>
          <div className="p-4">
            <div className="rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
                <span>JavaScript</span>
              </div>
              <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
                <pre className="text-sm font-mono leading-relaxed"><code>{`// Get the balance of a single token ID
const balance = await contract.balanceOf(userAddress, tokenId);
console.log("User has", balance.toString(), "of token ID", tokenId);

// Get balances of multiple token IDs in one call
const addresses = [userAddress, userAddress, userAddress];
const ids = [0, 1, 2]; // Different token IDs
const balances = await contract.balanceOfBatch(addresses, ids);
console.log("Token ID 0 balance:", balances[0].toString());
console.log("Token ID 1 balance:", balances[1].toString());
console.log("Token ID 2 balance:", balances[2].toString());`}</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 font-semibold">
            <h3 className="text-lg">Transferring Tokens</h3>
          </div>
          <div className="p-4">
            <div className="rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-700 text-white px-4 py-2 text-xs font-semibold">
                <span>JavaScript</span>
              </div>
              <div className="p-4 overflow-x-auto bg-gray-800 text-gray-100">
                <pre className="text-sm font-mono leading-relaxed"><code>{`// Transfer a single token type
await contract.safeTransferFrom(
  fromAddress,
  toAddress,
  tokenId,
  amount,
  "0x" // No data
);

// Transfer multiple token types in one transaction
await contract.safeBatchTransferFrom(
  fromAddress,
  toAddress,
  [0, 1, 2], // Array of token IDs
  [100, 1, 1], // Array of amounts
  "0x" // No data
);`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Important Note
        </h4>
        <p className="mb-0">
          When receiving ERC-1155 tokens, contracts must implement the <code>ERC1155TokenReceiver</code> interface. Individual users (EOA accounts) don't need this.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Use Case: Game Items</h2>

      <p>
        Let's see how ERC-1155 can be used for a game with various item types:
      </p>

      <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto my-6">
        <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GameItems is ERC1155, Ownable {
    using Strings for uint256;
    
    // Item types
    uint256 public constant GOLD_COIN = 0;       // Fungible currency
    uint256 public constant HEALTH_POTION = 1;   // Fungible consumable
    uint256 public constant LEGENDARY_SWORD = 2; // NFT (unique item)
    uint256 public constant SHIELD = 3;          // Semi-fungible (limited edition)
    
    // Counter for creating new item types
    uint256 private _nextItemId = 4;
    
    // Item name mapping
    mapping(uint256 => string) private _itemNames;
    
    // Max supply tracking
    mapping(uint256 => uint256) private _maxSupply;
    mapping(uint256 => uint256) private _totalSupply;
    
    constructor() ERC1155("https://game-api.example/items/{id}.json") Ownable(msg.sender) {
        // Set item names
        _itemNames[GOLD_COIN] = "Gold Coin";
        _itemNames[HEALTH_POTION] = "Health Potion";
        _itemNames[LEGENDARY_SWORD] = "Legendary Sword";
        _itemNames[SHIELD] = "Shield";
        
        // Set max supply
        _maxSupply[LEGENDARY_SWORD] = 1;  // Only one legendary sword
        _maxSupply[SHIELD] = 100;         // Limited edition shields
        
        // Pre-mint items to the game treasury
        _mint(msg.sender, GOLD_COIN, 1000000, "");
        _mint(msg.sender, HEALTH_POTION, 1000, "");
        _mint(msg.sender, LEGENDARY_SWORD, 1, "");
        _mint(msg.sender, SHIELD, 100, "");
        
        // Track supply for limited items
        _totalSupply[LEGENDARY_SWORD] = 1;
        _totalSupply[SHIELD] = 100;
    }
    
    // Create a new item type
    function createItemType(string memory name, uint256 initialSupply, uint256 maxSupply_) 
        public 
        onlyOwner 
        returns (uint256) 
    {
        uint256 newItemId = _nextItemId;
        _nextItemId++;
        
        _itemNames[newItemId] = name;
        
        if (maxSupply_ > 0) {
            _maxSupply[newItemId] = maxSupply_;
        }
        
        if (initialSupply > 0) {
            _mint(msg.sender, newItemId, initialSupply, "");
            if (maxSupply_ > 0) {
                _totalSupply[newItemId] = initialSupply;
            }
        }
        
        return newItemId;
    }
    
    // Mint more of an existing item
    function mintItems(address to, uint256 id, uint256 amount) public onlyOwner {
        // Check max supply for limited items
        if (_maxSupply[id] > 0) {
            require(_totalSupply[id] + amount <= _maxSupply[id], "Max supply exceeded");
            _totalSupply[id] += amount;
        }
        
        _mint(to, id, amount, "");
    }
    
    // Burn items (e.g., when used in the game)
    function burnItems(address from, uint256 id, uint256 amount) public {
        require(
            from == msg.sender || isApprovedForAll(from, msg.sender),
            "Caller is not owner nor approved"
        );
        
        if (_maxSupply[id] > 0) {
            _totalSupply[id] -= amount;
        }
        
        _burn(from, id, amount);
    }
    
    // Override URI generation to use item names in metadata
    function uri(uint256 id) public view override returns (string memory) {
        require(bytes(_itemNames[id]).length > 0, "URI query for nonexistent item");
        
        string memory baseURI = super.uri(id);
        return bytes(baseURI).length > 0 ? 
            string(abi.encodePacked(baseURI, id.toString(), ".json")) : 
            "";
    }
    
    // Get item name
    function itemName(uint256 id) public view returns (string memory) {
        return _itemNames[id];
    }
    
    // Check if an item is limited edition
    function isLimited(uint256 id) public view returns (bool) {
        return _maxSupply[id] > 0;
    }
    
    // Get max supply of an item
    function maxSupply(uint256 id) public view returns (uint256) {
        return _maxSupply[id];
    }
    
    // Get current supply of a limited item
    function totalSupply(uint256 id) public view returns (uint256) {
        return _totalSupply[id];
    }
}`}</pre>
      </div>

      <p>
        This example demonstrates how ERC-1155 can elegantly handle various token types in a single contract, making it perfect for games with complex item economies.
      </p>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you understand ERC-1155, explore these advanced topics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/advanced/metadata-standards" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Metadata Standards</h3>
            <p className="text-muted-foreground flex-grow">Learn best practices for token metadata and how to make your tokens compatible with marketplaces</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/advanced/token-economics" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Token Economics Design</h3>
            <p className="text-muted-foreground flex-grow">Design balanced token economics for games and applications</p>
            <div className="text-primary mt-2 flex items-center gap-1">Explore <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
