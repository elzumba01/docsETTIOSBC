"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, FileCode, ExternalLink } from 'lucide-react';

export default function MetadataStandardsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Token Metadata Standards
      </h1>

      <p className="text-lg leading-7">
        Metadata standards ensure your tokens can be properly displayed and interpreted by wallets, marketplaces, and other applications.
        This guide explains how to structure metadata for different token types on Ettios.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Why Metadata Matters
        </h4>
        <p className="mb-0">
          Properly structured metadata makes your tokens compatible with all major platforms and improves user experience.
          Standardized metadata enables wallets to display token information consistently and allows your tokens to be easily listed on marketplaces.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 border-b pb-2">ERC-721 Metadata (NFTs)</h2>

      <p>
        The metadata for NFTs typically follows the <a href="https://eips.ethereum.org/EIPS/eip-721" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">ERC-721 Metadata JSON Schema</a>.
        It's served via the <code>tokenURI</code> function which returns a URL to a JSON file with the following structure:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ERC-721 Metadata JSON</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`{
  "name": "Asset Name",
  "description": "Detailed description of the asset",
  "image": "https://example.com/image.png",
  "external_url": "https://example.com/asset/123",
  "attributes": [
    {
      "trait_type": "Color",
      "value": "Blue"
    },
    {
      "trait_type": "Size",
      "value": "Large"
    },
    {
      "trait_type": "Rarity",
      "value": "Legendary",
      "display_type": "string"
    },
    {
      "trait_type": "Level",
      "value": 5,
      "display_type": "number"
    },
    {
      "trait_type": "Power",
      "value": 75,
      "max_value": 100,
      "display_type": "boost_percentage"
    },
    {
      "trait_type": "Unlocked Date",
      "value": 1632501274,
      "display_type": "date"
    }
  ]
}`}</code></pre>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8">Required and Optional Fields</h3>

      <div className="space-y-4 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Required Fields</h4>
          <ul className="list-disc pl-5 mb-0">
            <li><strong>name</strong>: The name of the asset</li>
            <li><strong>description</strong>: A human-readable description of the asset</li>
            <li><strong>image</strong>: A URI pointing to the asset's image</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Recommended Fields</h4>
          <ul className="list-disc pl-5 mb-0">
            <li><strong>external_url</strong>: URL to view the asset on your site</li>
            <li><strong>attributes</strong>: Traits/properties of the asset (important for filtering and sorting)</li>
            <li><strong>animation_url</strong>: URI for multi-media attachments (for 3D models, videos, etc.)</li>
            <li><strong>background_color</strong>: Background color when previewing the NFT (hex format, no #)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8">Attribute Display Types</h3>

      <p>
        The <code>display_type</code> field in attributes controls how the trait is displayed in compatible marketplaces:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Standard Displays</h4>
          <ul className="list-disc pl-5 mb-0 space-y-2">
            <li><strong>string</strong> (default): Displayed as simple text</li>
            <li><strong>number</strong>: Displayed as a number</li>
            <li><strong>boost_percentage</strong>: Displayed as a percentage with a progress bar</li>
            <li><strong>boost_number</strong>: Displayed as a number with a progress bar</li>
            <li><strong>date</strong>: Unix timestamp converted to a date display</li>
          </ul>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">Marketplace Examples</h4>
          <ul className="list-disc pl-5 mb-0 space-y-2">
            <li><strong>OpenSea</strong>: Supports all display types listed</li>
            <li><strong>Rarible</strong>: Supports most display types</li>
            <li><strong>LooksRare</strong>: Displays traits but with limited formatting options</li>
            <li><strong>Ettios Marketplace</strong>: Supports all standard display types</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">ERC-1155 Metadata</h2>

      <p>
        For ERC-1155 tokens, the metadata format is similar to ERC-721 but uses a base URI plus token ID pattern and includes a decimal field for fungible tokens:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between">
          <span>ERC-1155 Metadata JSON</span>
          <button className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`{
  "name": "Gold Coin",
  "description": "A gold coin used for in-game purchases",
  "image": "https://example.com/images/gold-coin.png",
  "decimals": 18,
  "properties": {
    "category": "currency",
    "rarity": "common",
    "max_supply": 1000000
  }
}`}</code></pre>
        </div>
      </div>

      <p className="mt-4">
        The ERC-1155 standard also supports batch operations, so the metadata structure allows for both fungible and non-fungible tokens within the same contract.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">For Fungible Tokens (e.g., ID: 0)</h4>
          <div className="rounded-md border border-gray-300 dark:border-gray-700 mt-3 overflow-hidden shadow-sm">
            <div className="p-3 overflow-x-auto bg-gray-900 text-white">
              <pre className="text-xs font-mono leading-relaxed"><code>{`{
  "name": "Gold Coin",
  "description": "In-game currency",
  "image": "https://example.com/gold.png",
  "decimals": 18
}`}</code></pre>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">For Non-Fungible Tokens (e.g., ID: 1)</h4>
          <div className="rounded-md border border-gray-300 dark:border-gray-700 mt-3 overflow-hidden shadow-sm">
            <div className="p-3 overflow-x-auto bg-gray-900 text-white">
              <pre className="text-xs font-mono leading-relaxed"><code>{`{
  "name": "Legendary Sword",
  "description": "Unique weapon",
  "image": "https://example.com/sword.png",
  "attributes": [
    {"trait_type": "Attack", "value": 150}
  ]
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Metadata Storage Solutions</h2>

      <p>
        Where and how you store your metadata is critical for the long-term accessibility and permanence of your tokens:
      </p>

      <div className="space-y-6 my-8">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex">
          <div className="mr-4 flex-shrink-0">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">IPFS (Recommended)</h3>
            <p className="mb-2">
              InterPlanetary File System is a decentralized storage network that uses content addressing instead of location addressing.
              This ensures your metadata remains accessible as long as at least one node in the network has it pinned.
            </p>
            <p className="text-sm text-muted-foreground">
              Example URI: <code>ipfs://QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json</code>
            </p>
            <div className="mt-3">
              <a href="https://nft.storage/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 text-sm flex items-center">
                NFT.Storage (Free IPFS storage for NFTs)
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex">
          <div className="mr-4 flex-shrink-0">
            <FileCode className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Arweave</h3>
            <p className="mb-2">
              Arweave provides permanent storage for a one-time fee. Data is stored indefinitely through a novel consensus mechanism 
              and economic structure.
            </p>
            <p className="text-sm text-muted-foreground">
              Example URI: <code>ar://AcuH5BdC_ib67Z2LQz2h2sptto5XmmPvYdCvLLDCGsA/1.json</code>
            </p>
            <div className="mt-3">
              <a href="https://www.arweave.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 text-sm flex items-center">
                Arweave (Permanent Storage)
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm flex">
          <div className="mr-4 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">On-Chain Storage</h3>
            <p className="mb-2">
              Storing metadata directly on the blockchain ensures the highest level of permanence, but comes at a much higher gas cost.
              Suitable for small metadata or high-value tokens where permanence is critical.
            </p>
            <p className="text-sm text-muted-foreground">
              Implementation: The token contract itself stores and returns metadata, eliminating external dependencies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-lg my-8">
        <h4 className="font-bold text-lg mt-0 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Important Warning
        </h4>
        <p className="mb-0">
          <strong>Never store metadata on centralized servers without a migration plan.</strong> 
          If your server goes down or your company ceases operations, NFT metadata could be permanently lost, rendering the tokens 
          essentially worthless. Always use decentralized storage solutions like IPFS or Arweave for production tokens.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Best Practices</h2>

      <div className="space-y-4 my-6">
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">📝 Comprehensive Documentation</h4>
          <p className="mb-0">
            Include detailed descriptions and accurate attributes. This improves marketplace discoverability and user experience.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">🔄 Multiple Image Formats</h4>
          <p className="mb-0">
            Provide both high-resolution images for detailed viewing and optimized thumbnails for faster loading.
            Consider including SVG versions for scalable display across different platforms.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">🎭 Consistent Attribute Names</h4>
          <p className="mb-0">
            Use consistent naming conventions for attributes across your entire collection to enable proper filtering and sorting.
          </p>
        </div>
        
        <div className="border rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <h4 className="font-bold mb-1">💾 Multiple Storage Solutions</h4>
          <p className="mb-0">
            Consider using multiple storage solutions (e.g., both IPFS and Arweave) for critical tokens to enhance resilience.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-14 border-b pb-2">Metadata Gateways</h2>

      <p>
        When using decentralized storage systems like IPFS, you often need to use a gateway to serve the content to users who don't have IPFS nodes:
      </p>

      <div className="rounded-md border border-gray-300 dark:border-gray-700 my-6 overflow-hidden shadow-md">
        <div className="bg-gray-800 text-white px-4 py-2 text-xs font-semibold">
          <span>Gateway Examples</span>
        </div>
        <div className="p-4 overflow-x-auto bg-gray-900 text-white">
          <pre className="text-sm font-mono leading-relaxed"><code>{`// IPFS URI
ipfs://QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json

// Gateway URLs for the same content
https://ipfs.io/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json
https://gateway.pinata.cloud/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json
https://cloudflare-ipfs.com/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json
https://nftstorage.link/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX/1.json`}</code></pre>
        </div>
      </div>

      <p>
        Always store and reference the canonical URI (ipfs://) in your smart contracts, even if you use gateways in your frontend applications.
        This ensures that the content remains accessible even if specific gateways become unavailable.
      </p>

      <div className="mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Next Steps</h3>
        <p className="text-lg">
          Now that you understand metadata standards, you might want to explore:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link 
            href="/docs/advanced/token-economics" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Token Economics Design</h3>
            <p className="text-muted-foreground flex-grow">Learn how to design balanced token economies for sustainable projects</p>
            <div className="text-primary mt-2 flex items-center gap-1">Explore tokenomics <ChevronRight className="h-4 w-4" /></div>
          </Link>
          
          <Link 
            href="/docs/advanced/events-and-indexing" 
            className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <h3 className="text-lg font-medium mb-2">Events & Data Indexing</h3>
            <p className="text-muted-foreground flex-grow">Learn how to efficiently track and index blockchain data</p>
            <div className="text-primary mt-2 flex items-center gap-1">Learn more <ChevronRight className="h-4 w-4" /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
