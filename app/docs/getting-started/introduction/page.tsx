"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Globe, Zap, Shield, Code, DollarSign, FileText } from 'lucide-react';

// Environment variables for links - with fallbacks if not defined
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/ettios';
const explorerUrl = process.env.NEXT_PUBLIC_EXPLORER_URL || 'https://scan.ettiosblockchain.io';
const faucetUrl = process.env.NEXT_PUBLIC_FAUCET_URL || 'https://faucet.ettiosblockchain.io';
const chainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';
const rpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettiosblockchain.io';

const IntroductionPage = () => {
  return React.createElement("div", { className: "prose prose-slate dark:prose-invert max-w-none" },
    React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-6 mb-12" },
      React.createElement("div", { className: "flex-1" },
        React.createElement("h1", { className: "text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" }, "Introduction to Ettios Blockchain"),
        React.createElement("p", { className: "text-lg leading-7" }, "Welcome to the Ettios blockchain documentation. This comprehensive guide will help you understand what Ettios is and how to start building powerful, scalable decentralized applications on our EVM-compatible chain.")
      ),
      React.createElement("div", { className: "hidden md:block w-56 h-56 relative" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full shadow-lg" }),
        React.createElement("div", { className: "relative z-10 w-full h-full flex items-center justify-center" },
          React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 200", fill: "none", className: "w-40 h-40 drop-shadow-xl transform hover:scale-105 duration-300" },
            React.createElement("defs", null,
              React.createElement("linearGradient", { id: "logoGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
                React.createElement("stop", { offset: "0%", stopColor: "#2ae88a" }),
                React.createElement("stop", { offset: "100%", stopColor: "#10b26c" })
              ),
              React.createElement("filter", { id: "glow", x: "-20%", y: "-20%", width: "140%", height: "140%" },
                React.createElement("feGaussianBlur", { stdDeviation: "4", result: "blur" }),
                React.createElement("feComposite", { in: "SourceGraphic", in2: "blur", operator: "over" })
              )
            ),
            React.createElement("circle", { cx: "100", cy: "100", r: "95", fill: "transparent", stroke: "url(#logoGradient)", strokeWidth: "4" }),
            React.createElement("path", { d: "M65 60H135V80H85V90H125V110H85V120H135V140H65V60Z", fill: "url(#logoGradient)", filter: "url(#glow)" }),
            React.createElement("path", { d: "M50 50L50 150", stroke: "url(#logoGradient)", strokeWidth: "10", strokeLinecap: "round" }),
            React.createElement("path", { d: "M150 50L150 150", stroke: "url(#logoGradient)", strokeWidth: "10", strokeLinecap: "round" }),
            React.createElement("text", { x: "100", y: "170", textAnchor: "middle", fill: "url(#logoGradient)", className: "text-sm font-bold" }, "ETTIOS")
          )
        )
      )
    ),
    
    React.createElement("div", { className: "bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-lg mb-10" },
      React.createElement("h4", { className: "font-bold text-lg mt-0 flex items-center" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
        ),
        "New to blockchain development?"
      ),
      React.createElement("p", { className: "mb-0" }, 
        "If you're new to blockchain development, we recommend starting with our ",
        React.createElement(Link, { href: "/docs/basics/blockchain-fundamentals", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Blockchain Fundamentals"),
        " guide before diving into Ettios specifics."
      )
    ),
    
    React.createElement("h2", { className: "text-3xl font-bold mt-10 border-b pb-2" }, "What is Ettios?"),
    
    React.createElement("p", null, "Ettios is a high-performance, EVM-compatible blockchain designed for scalable decentralized applications. Built with developers in mind, Ettios combines the best aspects of Ethereum compatibility with significantly improved performance metrics, creating an ideal environment for building the next generation of Web3 applications."),
    
    React.createElement("p", null, "As a layer-1 blockchain with its own consensus mechanism, Ettios achieves sub-second finality while maintaining decentralization and security. The native token, ETTIA, is used for transaction fees, staking, and governance."),
    
    React.createElement("ul", { className: "list-disc pl-6 mt-4 space-y-2" },
      React.createElement("li", null, React.createElement("strong", null, "Full Ethereum compatibility"), ": Deploy existing Solidity contracts with no changes"),
      React.createElement("li", null, React.createElement("strong", null, "Low transaction fees"), ": Build cost-effective applications without high gas costs"),
      React.createElement("li", null, React.createElement("strong", null, "Fast finality"), ": Transactions confirm in under a second"),
      React.createElement("li", null, React.createElement("strong", null, "Scalable infrastructure"), ": Support for high transaction throughput (4,000+ TPS)"),
      React.createElement("li", null, React.createElement("strong", null, "Developer-friendly tools"), ": Comprehensive SDKs and documentation"),
      React.createElement("li", null, React.createElement("strong", null, "Interoperability"), ": Seamless bridges to major blockchains")
    ),
    
    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12" },
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(Zap, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Lightning Fast"),
        React.createElement("p", { className: "text-muted-foreground" },
          "With sub-second finality and high throughput, Ettios delivers exceptional performance for all applications."
        )
      ),
      
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(DollarSign, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Cost Effective"),
        React.createElement("p", { className: "text-muted-foreground" },
          "Low gas fees make it economically viable to deploy and interact with complex contracts."
        )
      ),
      
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(Code, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Developer Friendly"),
        React.createElement("p", { className: "text-muted-foreground" },
          "Use familiar tools and languages including Solidity, Hardhat, Truffle, web3.js and ethers.js."
        )
      ),
      
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(Shield, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Secure & Reliable"),
        React.createElement("p", { className: "text-muted-foreground" },
          "Built on a secure consensus mechanism with continuous security audits and testing."
        )
      ),
      
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(Globe, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Interoperable"),
        React.createElement("p", { className: "text-muted-foreground" },
          "Connect seamlessly with other blockchain ecosystems through bridges and cross-chain protocols."
        )
      ),
      
      React.createElement("div", { className: "p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" },
        React.createElement(FileText, { className: "w-12 h-12 mb-4 text-primary" }),
        React.createElement("h3", { className: "text-xl font-bold mb-2" }, "Enterprise Ready"),
        React.createElement("p", { className: "text-muted-foreground" },
          "Designed to meet the demands of both startups and enterprise-grade applications."
        )
      )
    ),
    
    React.createElement("h2", { className: "text-3xl font-bold mt-14 border-b pb-2" }, "Key Features"),
    
    React.createElement("h3", { className: "text-2xl font-bold mt-8" }, "EVM Compatibility"),
    
    React.createElement("p", null, "Ettios is fully compatible with the Ethereum Virtual Machine (EVM), allowing developers to leverage the extensive Ethereum tooling ecosystem. This compatibility ensures that applications built for Ethereum can be deployed on Ettios with minimal modifications."),
    
    React.createElement("div", { className: "bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg border my-6 shadow-sm" },
      React.createElement("h4", { className: "text-lg font-bold mt-0" }, "Supported Ethereum Tools and Standards"),
      React.createElement("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-4" },
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Development environments"), ": Hardhat, Truffle, Remix, Foundry"
          )
        ),
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Libraries"), ": web3.js, ethers.js, wagmi, viem"
          )
        ),
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Wallets"), ": MetaMask, WalletConnect, Trust Wallet"
          )
        ),
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Token standards"), ": ERC-20, ERC-721, ERC-1155"
          )
        ),
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Smart contract languages"), ": Solidity, Vyper"
          )
        ),
        React.createElement("li", { className: "flex items-center" },
          React.createElement(ChevronRight, { className: "h-4 w-4 text-primary mr-2" }),
          React.createElement("span", null,
            React.createElement("strong", null, "Testing frameworks"), ": Waffle, Mocha, Chai"
          )
        )
      )
    ),
    
    React.createElement("h3", { className: "text-2xl font-bold mt-10" }, "Performance and Cost"),
    
    React.createElement("p", null, "Ettios offers significant performance improvements over traditional blockchains, making it ideal for applications that require high throughput and low latency."),
    
    React.createElement("div", { className: "overflow-x-auto my-6" },
      React.createElement("table", { className: "w-full border-collapse" },
        React.createElement("thead", null,
          React.createElement("tr", { className: "bg-muted" },
            React.createElement("th", { className: "border p-3 text-left" }, "Metric"),
            React.createElement("th", { className: "border p-3 text-left" }, "Ettios"),
            React.createElement("th", { className: "border p-3 text-left" }, "Ethereum"),
            React.createElement("th", { className: "border p-3 text-left" }, "Advantage")
          )
        ),
        React.createElement("tbody", null,
          React.createElement("tr", null,
            React.createElement("td", { className: "border p-3" }, "Transaction finality"),
            React.createElement("td", { className: "border p-3 font-mono" }, "< 1 second"),
            React.createElement("td", { className: "border p-3 font-mono" }, "~12 minutes"),
            React.createElement("td", { className: "border p-3" }, "Much faster confirmation")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border p-3" }, "Transactions per second"),
            React.createElement("td", { className: "border p-3 font-mono" }, "4,000+"),
            React.createElement("td", { className: "border p-3 font-mono" }, "~15-30"),
            React.createElement("td", { className: "border p-3" }, "Higher throughput")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border p-3" }, "Average transaction fee"),
            React.createElement("td", { className: "border p-3 font-mono" }, "$0.001"),
            React.createElement("td", { className: "border p-3 font-mono" }, "$1-100+"),
            React.createElement("td", { className: "border p-3" }, "Significantly lower cost")
          ),
          React.createElement("tr", null,
            React.createElement("td", { className: "border p-3" }, "Energy consumption"),
            React.createElement("td", { className: "border p-3 font-mono" }, "Very low (NPoS)"),
            React.createElement("td", { className: "border p-3 font-mono" }, "Low (PoS)"),
            React.createElement("td", { className: "border p-3" }, "Eco-friendly")
          )
        )
      )
    ),
    
    React.createElement("p", null,
      "These performance metrics make Ettios suitable for a wide range of applications, from high-frequency trading and gaming to complex DeFi protocols and enterprise solutions."
    ),
    
    React.createElement("h3", { className: "text-2xl font-bold mt-10" }, "Robust Security"),
    
    React.createElement("p", null, "Security is at the core of Ettios design, with multiple layers of protection ensuring the integrity and reliability of the network:"),
    
    React.createElement("ul", { className: "list-disc pl-6 mt-4 space-y-2" },
      React.createElement("li", null,
        React.createElement("strong", null, "Advanced consensus mechanism"), ": Ettios uses Nominated Proof of Stake (NPoS) consensus with a Byzantine Fault Tolerance (BFT) algorithm, where token holders nominate a set of trusted validators to produce blocks, providing both security and performance"
      ),
      React.createElement("li", null,
        React.createElement("strong", null, "Regular security audits"), ": The core protocol undergoes continuous auditing by leading blockchain security firms"
      ),
      React.createElement("li", null,
        React.createElement("strong", null, "Bug bounty program"), ": Our comprehensive bug bounty program encourages the community to identify and report potential vulnerabilities"
      ),
      React.createElement("li", null,
        React.createElement("strong", null, "Decentralized validator network"), ": A diverse set of validators across multiple geographic regions ensures network resilience"
      ),
      React.createElement("li", null,
        React.createElement("strong", null, "Real-time monitoring"), ": 24/7 monitoring systems detect and respond to anomalies and potential threats"
      )
    ),
    
    React.createElement("div", { className: "mt-8 p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/50 shadow-sm" },
      React.createElement("h4", { className: "font-bold text-lg mt-0 flex items-center" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" })
        ),
        "Security Best Practices"
      ),
      React.createElement("p", { className: "mb-1" },
        "While the Ettios blockchain is secured by robust protocols, developers should still follow security best practices when building applications:"
      ),
      React.createElement("ul", { className: "mt-2 mb-0 list-disc pl-5" },
        React.createElement("li", null, "Always conduct thorough security audits before deploying to mainnet"),
        React.createElement("li", null, "Implement proper access controls and validation in your smart contracts"),
        React.createElement("li", null,
          "Follow our ",
          React.createElement(Link, { href: "/docs/security/best-practices", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "security guidelines"),
          " for contract development"
        )
      )
    ),
    
    React.createElement("h2", { className: "text-3xl font-bold mt-14 border-b pb-2" }, "Technical Architecture"),
    
    React.createElement("p", null, "Ettios features a layered architecture designed for modularity, scalability, and extensibility:"),
    
    React.createElement("div", { className: "py-6" },
      React.createElement("div", { className: "relative h-[300px] border rounded-lg overflow-hidden shadow-sm" },
        React.createElement("div", { className: "absolute bottom-0 w-full h-[60px] bg-blue-500/20 flex items-center justify-center" },
          React.createElement("p", { className: "text-center font-semibold text-blue-700 dark:text-blue-300" }, "Application Layer (dApps, Games, DeFi, NFTs)")
        ),
        React.createElement("div", { className: "absolute bottom-[60px] w-full h-[60px] bg-green-500/20 flex items-center justify-center" },
          React.createElement("p", { className: "text-center font-semibold text-green-700 dark:text-green-300" }, "Development Layer (SDKs, APIs, Developer Tools)")
        ),
        React.createElement("div", { className: "absolute bottom-[120px] w-full h-[60px] bg-yellow-500/20 flex items-center justify-center" },
          React.createElement("p", { className: "text-center font-semibold text-yellow-700 dark:text-yellow-300" }, "Smart Contract Layer (EVM Compatibility)")
        ),
        React.createElement("div", { className: "absolute bottom-[180px] w-full h-[60px] bg-purple-500/20 flex items-center justify-center" },
          React.createElement("p", { className: "text-center font-semibold text-purple-700 dark:text-purple-300" }, "Consensus Layer (NPoS with BFT)")
        ),
        React.createElement("div", { className: "absolute bottom-[240px] w-full h-[60px] bg-red-500/20 flex items-center justify-center" },
          React.createElement("p", { className: "text-center font-semibold text-red-700 dark:text-red-300" }, "Network Layer (P2P Communication)")
        )
      )
    ),
    
    React.createElement("p", null,
      "This architecture enables Ettios to provide the perfect balance of performance, security, and compatibility, while remaining flexible for future enhancements and optimizations."
    ),
    
    React.createElement("h2", { className: "text-3xl font-bold mt-14 border-b pb-2" }, "Getting Started"),
    
    React.createElement("p", null, "Ready to build on Ettios? Follow these steps to get started:"),
    
    React.createElement("ol", { className: "list-decimal pl-6 mt-4 space-y-4" },
      React.createElement("li", null,
        React.createElement("strong", null,
          React.createElement(Link, { href: "/docs/getting-started/using-metamask", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Set up MetaMask"),
          " with Ettios network"
        ),
        React.createElement("p", { className: "text-muted-foreground mt-1" },
          "Connect your MetaMask wallet to Ettios mainnet or testnet to interact with the blockchain."
        )
      ),
      React.createElement("li", null,
        React.createElement("strong", null,
          React.createElement(Link, { href: "/docs/getting-started/network-parameters", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Get familiar with network parameters")
        ),
        React.createElement("p", { className: "text-muted-foreground mt-1" },
          "Learn about the Ettios network details including RPC endpoints, chain IDs, and block explorers."
        )
      ),
      React.createElement("li", null,
        React.createElement("strong", null,
          React.createElement(Link, { href: "/docs/getting-started/testnet-faucet", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Get test tokens from our faucet"),
          " (for testnet)"
        ),
        React.createElement("p", { className: "text-muted-foreground mt-1" },
          "Obtain free test ETTIA tokens to test your applications on the Ettios testnet before mainnet deployment."
        )
      ),
      React.createElement("li", null,
        React.createElement("strong", null,
          React.createElement(Link, { href: "/docs/developer-quickstart/first-smart-contract", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Deploy your first smart contract")
        ),
        React.createElement("p", { className: "text-muted-foreground mt-1" },
          "Learn how to compile and deploy a smart contract to Ettios using popular development tools."
        )
      )
    ),
    
    React.createElement("div", { className: "mt-8 p-4 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-950/50 shadow-sm" },
      React.createElement("h4", { className: "font-bold text-lg mt-0 flex items-center" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
          React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" })
        ),
        "Quick Tip"
      ),
      React.createElement("p", { className: "mb-0" },
        "To get the best development experience, start with our ",
        React.createElement(Link, { href: "/docs/developer-quickstart/development-environment", className: "text-primary hover:text-primary/80 underline underline-offset-4" }, "Development Environment Setup"),
        " guide to configure your local environment with all necessary tools."
      )
    ),
    
    React.createElement("h2", { className: "text-3xl font-bold mt-14 border-b pb-2" }, "Ecosystem"),
    
    React.createElement("p", null, "The Ettios ecosystem consists of various tools, applications, and resources:"),
    
    React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8" },
      React.createElement("div", { className: "border rounded-lg p-5 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" },
        React.createElement("h3", { className: "text-xl font-bold mb-3" }, "Core Infrastructure"),
        React.createElement("ul", { className: "space-y-2" },
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement("a", { href: explorerUrl, target: "_blank", rel: "noopener noreferrer", className: "font-medium" }, "Block Explorer"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Explore blocks, transactions, accounts, and contracts"
              )
            )
          ),
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement("a", { href: faucetUrl, target: "_blank", rel: "noopener noreferrer", className: "font-medium" }, "Testnet Faucet"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Obtain test ETTIA tokens for development and testing"
              )
            )
          ),
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement("a", { href: rpcUrl, target: "_blank", rel: "noopener noreferrer", className: "font-medium" }, "Public RPC Endpoint"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Reliable endpoint for connecting to the Ettios network"
              )
            )
          )
        )
      ),
      
      React.createElement("div", { className: "border rounded-lg p-5 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" },
        React.createElement("h3", { className: "text-xl font-bold mb-3" }, "Developer Resources"),
        React.createElement("ul", { className: "space-y-2" },
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement(Link, { href: "/docs/developer-quickstart", className: "font-medium" }, "Developer Quickstart"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Step-by-step guides to start building on Ettios"
              )
            )
          ),
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement(Link, { href: "/docs/tools", className: "font-medium" }, "SDKs and Libraries"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Tools to accelerate your development process"
              )
            )
          ),
          React.createElement("li", { className: "flex items-start" },
            React.createElement(ChevronRight, { className: "h-5 w-5 text-primary mr-2 mt-0.5" }),
            React.createElement("div", null,
              React.createElement("a", { href: githubUrl, target: "_blank", rel: "noopener noreferrer", className: "font-medium" }, "GitHub Repositories"),
              React.createElement("p", { className: "text-sm text-muted-foreground mt-1" },
                "Open-source code and examples to learn from"
              )
            )
          )
        )
      )
    ),
    
    React.createElement("div", { className: "mt-14 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent space-y-6 shadow-sm" },
      React.createElement("h3", { className: "text-2xl font-bold mt-0" }, "Ready to dive deeper?"),
      React.createElement("p", { className: "text-lg" }, 
        "Check out our comprehensive ",
        React.createElement(Link, { href: "/docs/developer-quickstart", className: "font-medium text-primary underline underline-offset-4 hover:text-primary/80" }, "Developer Quickstart"),
        " guides to begin building your first application on Ettios."
      ),
      React.createElement("div", { className: "flex flex-wrap gap-4" },
        React.createElement(Link, { 
          href: "/docs/developer-quickstart", 
          className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 transform hover:translate-x-1 shadow-sm hover:shadow-md"
        }, "Get Started", React.createElement(ChevronRight, { className: "h-5 w-5" })),
        React.createElement(Link, {
          href: "/docs/basics/blockchain-fundamentals",
          className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-secondary/80 text-secondary-foreground font-medium hover:bg-secondary transition-colors duration-300 shadow-sm hover:shadow-md"
        }, "Learn Blockchain Basics")
      )
    )
  );
};

export default IntroductionPage;
