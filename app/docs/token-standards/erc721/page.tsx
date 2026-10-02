"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Image, Paintbrush } from 'lucide-react';

export default function ERC721Page() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        ERC-721 NFT Token Standard
      </h1>

      <p className="text-lg leading-7">
        This guide explains the ERC-721 non-fungible token (NFT) standard, how to create your own NFT collection on Ettios, and best practices for implementation.
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
          <li>Some ETTIA for deploying contracts</li>
          <li>Basic understanding of NFT concepts</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">What are NFTs?</h2>

      <p>
        Non-Fungible Tokens (NFTs) are unique digital assets on the blockchain. Unlike fungible tokens (such as ERC-20 tokens) 
        where each token is identical to every other token, each NFT has unique properties and is not interchangeable with other tokens.
      </p>

      <div className="my-8 flex items-center justify-center">
        <div className="border rounded-lg p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm max-w-md">
          <div className="flex items-center mb-4">
            <Image className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-xl font-bold mb-0">Common NFT Use Cases</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Digital art and collectibles</li>
            <li>Gaming items and virtual real estate</li>
            <li>Event tickets and memberships</li>
            <li>Domain names</li>
            <li>Certificates of authenticity</li>
            <li>Identity and credential verification</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">ERC-721 Interface</h2>

      <p>
        The ERC-721 standard defines a set of functions and events for non-fungible tokens:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ERC-721 Interface</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC721 {
    // Core functions
    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function approve(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function setApprovalForAll(address operator, bool _approved) external;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    // Optional extension: metadata
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Key Functions</h3>

      <div className="space-y-6 my-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">balanceOf(address owner)</h4>
          <p className="mb-0">
            Returns the number of NFTs owned by a specific address.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">ownerOf(uint256 tokenId)</h4>
          <p className="mb-0">
            Returns the address that owns a specific token ID.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">transferFrom(address from, address to, uint256 tokenId)</h4>
          <p className="mb-0">
            Transfers ownership of an NFT from one address to another address.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">tokenURI(uint256 tokenId)</h4>
          <p className="mb-0">
            Returns a URL or other identifier that points to off-chain metadata about the NFT. This is where the actual content, image, and attributes are stored.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Creating an NFT Collection</h2>

      <p>
        Let's create a simple NFT collection using OpenZeppelin's contracts. First, install the OpenZeppelin Contracts library:
      </p>

      <div className="rounded-md border bg-slate-950 dark:bg-slate-900 my-6 overflow-hidden shadow-md">
        <div className="bg-slate-800 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200">
          <span>Terminal</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50 font-mono leading-relaxed"><code>npm install @openzeppelin/contracts</code></pre>
        </div>
      </div>

      <p>
        Now, create a file called <code>MyNFTCollection.sol</code> with the following code:
      </p>

      <div className="rounded-md border bg-slate-950 dark:bg-slate-900 my-6 overflow-hidden shadow-md">
        <div className="bg-slate-800 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 flex items-center justify-between">
          <span>MyNFTCollection.sol</span>
          <button className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50 font-mono leading-relaxed"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFTCollection is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Maximum supply (optional)
    uint256 public constant MAX_SUPPLY = 10000;
    
    // Base URI for metadata
    string private _baseTokenURI;

    constructor(string memory name, string memory symbol, string memory baseTokenURI) 
        ERC721(name, symbol) 
        Ownable(msg.sender)
    {
        _baseTokenURI = baseTokenURI;
    }
    
    // Function to mint new NFTs
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        // Ensure we don't exceed max supply
        require(_tokenIds.current() < MAX_SUPPLY, "Max supply reached");
        
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        
        return newItemId;
    }
    
    // Function to update base URI (optional)
    function setBaseURI(string memory baseTokenURI) public onlyOwner {
        _baseTokenURI = baseTokenURI;
    }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10">Understanding the NFT Collection</h3>

      <div className="my-8 space-y-6">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">ERC721URIStorage</h4>
          <p className="mb-0">
            This extension adds storage for token URIs, which point to the metadata for each NFT. The metadata typically includes the image URL, name, description, and attributes of the NFT.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">Token IDs</h4>
          <p className="mb-0">
            Each NFT has a unique ID (tokenId). In our example, we're using a counter to generate sequential IDs, but you could implement custom ID generation logic.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-2">Metadata URI</h4>
          <p className="mb-0">
            The tokenURI for each NFT typically points to a JSON file with the following structure:
          </p>
          <div className="rounded-md border border-gray-300 dark:border-gray-700 mt-3 overflow-hidden shadow-md">
            <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
              <span>JSON Metadata Example</span>
            </div>
            <div className="p-4 overflow-x-auto bg-gray-900 text-white">
              <pre className="text-sm font-mono leading-relaxed"><code>{`{
  "name": "NFT Name",
  "description": "Description of the NFT",
  "image": "https://example.com/image.png",
  "attributes": [
    { "trait_type": "Color", "value": "Blue" },
    { "trait_type": "Size", "value": "Large" }
  ]
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Metadata Storage Options</h2>

      <p>
        NFT metadata (including images) can be stored in different ways:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">IPFS (Recommended)</h3>
          <p className="mb-4">
            InterPlanetary File System is a decentralized storage solution ideal for NFT data. Content on IPFS is addressed by its content hash, ensuring data integrity.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
            <code>ipfs://QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json</code>
          </div>
          <p className="text-sm text-muted-foreground">
            Tools: <a href="https://nft.storage/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">NFT.Storage</a>, <a href="https://pinata.cloud/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Pinata</a>
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-3">Arweave</h3>
          <p className="mb-4">
            Arweave provides permanent storage for a one-time fee, making it suitable for long-term NFT data persistence.
          </p>
          <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto mb-3">
            <code>ar://AcuH5BdC_ib67Z2LQz2h2sptto5XmmPvYdCvLLDCGsA/1.json</code>
          </div>
          <p className="text-sm text-muted-foreground">
            Service: <a href="https://www.arweave.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Arweave</a>
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-6">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Important Note on Metadata
        </h4>
        <p className="mb-0">
          Avoid storing metadata on centralized servers that may go offline in the future. NFTs are meant to be permanent, so their metadata should be stored in a permanent, decentralized way.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Deploying Your NFT Collection</h2>

      <p>
        Here's an example of deploying your NFT collection using Hardhat:
      </p>

      <div className="rounded-md border bg-slate-950 dark:bg-slate-900 my-6 overflow-hidden shadow-md">
        <div className="bg-slate-800 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 flex items-center justify-between">
          <span>scripts/deploy-nft.js</span>
          <button className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50 font-mono leading-relaxed"><code>{`const hre = require("hardhat");

async function main() {
  const MyNFTCollection = await hre.ethers.getContractFactory("MyNFTCollection");
  
  // Deploy with collection name, symbol, and base URI
  const myNFT = await MyNFTCollection.deploy(
    "My Amazing NFTs", 
    "MANFT",
    "ipfs://QmYourBaseURIHash/" // Replace with your actual base URI
  );
  
  await myNFT.deployed();
  
  console.log("MyNFTCollection deployed to:", myNFT.address);
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
        To deploy to the Ettios mainnet:
      </p>

      <div className="rounded-md border bg-slate-950 dark:bg-slate-900 my-6 overflow-hidden shadow-md">
        <div className="bg-slate-800 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200">
          <span>Terminal</span>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50 font-mono leading-relaxed"><code>npx hardhat run scripts/deploy-nft.js --network ettiosMainnet</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Minting NFTs</h2>

      <p>
        After deploying your collection, you can mint new NFTs:
      </p>

      <div className="rounded-md border bg-slate-950 dark:bg-slate-900 my-6 overflow-hidden shadow-md">
        <div className="bg-slate-800 dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 flex items-center justify-between">
          <span>scripts/mint-nft.js</span>
          <button className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-slate-50 font-mono leading-relaxed"><code>{`const hre = require("hardhat");

async function main() {
  // Get contract instance
  const nft = await hre.ethers.getContractAt(
    "MyNFTCollection", 
    "YOUR_DEPLOYED_CONTRACT_ADDRESS"
  );
  
  // Mint a new NFT
  // recipientAddress: The address that will receive the NFT
  // tokenURI: Metadata URI for this specific NFT (e.g., "ipfs://QmHash/1.json")
  const tx = await nft.mintNFT(
    "0xRecipientAddress", 
    "ipfs://QmYourTokenURIHash/1.json"
  );
  
  // Wait for the transaction to be confirmed
  await tx.wait();
  
  console.log("NFT minted successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`}</code></pre>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Advanced Features</h2>

      <div className="space-y-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Lazy Minting</h3>
          <p>
            Lazy minting allows NFTs to be created without paying the gas fees until the moment of purchase or transfer, making it more cost-effective for creators.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Implementation involves digital signatures and custom transfer logic. See our <Link href="/docs/advanced/lazy-minting" className="text-primary underline underline-offset-4">Lazy Minting guide</Link> for more details.
          </p>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">Royalties (ERC-2981)</h3>
          <p>
            Implement the ERC-2981 standard to receive royalties from secondary sales of your NFTs on marketplaces that support this standard.
          </p>
          <div className="rounded-md border border-gray-300 dark:border-gray-700 mt-3 overflow-hidden shadow-md">
            <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
              <span>Royalties Implementation</span>
            </div>
            <div className="p-4 overflow-x-auto bg-gray-900 text-white">
              <pre className="text-sm font-mono leading-relaxed"><code>{`// Add this to your contract imports
import "@openzeppelin/contracts/token/common/ERC2981.sol";

// And implement the interface
contract MyNFTCollection is ERC721URIStorage, ERC2981, Ownable {
  // ...

  // Set default royalty
  constructor(...) {
    _setDefaultRoyalty(msg.sender, 500); // 5% royalty
  }

  // Important: Override supportsInterface for compatibility
  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC2981)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h3 className="text-xl font-bold mb-2">On-chain Metadata</h3>
          <p>
            Instead of storing metadata off-chain, you can generate and store it entirely on-chain, ensuring that the complete NFT exists on the blockchain.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This approach is more gas-intensive but provides greater permanence.
          </p>
        </div>
      </div>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you know how to create NFTs, consider exploring:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/token-standards/erc1155" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Multi-Token Standard (ERC-1155)</h3>
            <p className="text-muted-foreground flex-grow">Learn about the efficient standard for both fungible and non-fungible tokens</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/developer-quickstart/frontend-integration" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Build an NFT Gallery</h3>
            <p className="text-muted-foreground flex-grow">Create a web interface to display and interact with your NFT collection</p>
            <div className="text-primary mt-2 flex items-center gap-1">Start building <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
