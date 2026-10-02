"use client";

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '@/components/code-block';
import { Workflow, FileCode, Bot, ShieldCheck } from 'lucide-react';

export default function BuildingAIDappsPage() {
  return (
    <div className="mdx-content">
      <h1>Building AI dApps on Ettios</h1>

      <p>
        This guide shows you how to build an AI-powered decentralized application on Ettios — the first
        blockchain with AI at its core in Latin America. We will build a complete example: an <strong>AI Signal
        Oracle</strong>, where an off-chain AI agent analyzes market data and publishes its signals on-chain so
        any smart contract can consume them in a verifiable way.
      </p>

      <h2>Architecture Overview</h2>

      <p>
        AI models run off-chain (inference requires heavy computation), while results, decisions, and actions
        are recorded on-chain. This hybrid pattern gives you the best of both worlds:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <Bot className="h-8 w-8 text-primary mb-3" />
          <h3 className="text-lg font-bold mb-1">1. AI Agent (off-chain)</h3>
          <p className="text-sm text-muted-foreground mb-0">
            A Node.js service that fetches data, runs inference with your preferred AI model, and signs transactions.
          </p>
        </div>
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <Workflow className="h-8 w-8 text-primary mb-3" />
          <h3 className="text-lg font-bold mb-1">2. Ettios Mainnet</h3>
          <p className="text-sm text-muted-foreground mb-0">
            Settles the agent's transactions with 2-second blocks, low fees, and NPoS security.
          </p>
        </div>
        <div className="border rounded-lg p-5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm">
          <FileCode className="h-8 w-8 text-primary mb-3" />
          <h3 className="text-lg font-bold mb-1">3. Smart Contract</h3>
          <p className="text-sm text-muted-foreground mb-0">
            Stores the AI signals on-chain with access control, making them auditable and composable.
          </p>
        </div>
      </div>

      <h2>Prerequisites</h2>

      <ul>
        <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> (v18 or later) and npm installed</li>
        <li>A wallet with ETTIA on the Ettios Mainnet for transaction fees</li>
        <li>A Hardhat project set up as described in <Link href="/docs/developer-quickstart/first-smart-contract">Deploying Your First Smart Contract</Link></li>
        <li>An API key from your AI provider (any OpenAI-compatible API works)</li>
      </ul>

      <h2>Step 1: The Smart Contract</h2>

      <p>
        Create <code>contracts/AISignalOracle.sol</code>. This contract stores the latest AI signal
        (a score from -100 to +100) and only accepts updates from the authorized AI agent address:
      </p>

      <CodeBlock language="solidity">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title AISignalOracle
/// @notice Stores AI-generated signals on Ettios so other contracts can consume them on-chain.
contract AISignalOracle {
    address public aiAgent;
    int256 public latestSignal;   // -100 (very bearish) to +100 (very bullish)
    uint256 public updatedAt;

    event SignalUpdated(int256 signal, uint256 timestamp);

    constructor() {
        aiAgent = msg.sender;
    }

    modifier onlyAgent() {
        require(msg.sender == aiAgent, "AISignalOracle: not authorized");
        _;
    }

    /// @notice Rotate the authorized AI agent address.
    function setAgent(address _agent) external onlyAgent {
        require(_agent != address(0), "AISignalOracle: zero address");
        aiAgent = _agent;
    }

    /// @notice Called by the AI agent to publish a new signal.
    function submitSignal(int256 _signal) external onlyAgent {
        require(_signal >= -100 && _signal <= 100, "AISignalOracle: out of range");
        latestSignal = _signal;
        updatedAt = block.timestamp;
        emit SignalUpdated(_signal, block.timestamp);
    }
}`}
      </CodeBlock>

      <h2>Step 2: Deploy to Ettios Mainnet</h2>

      <p>Compile and deploy using the Hardhat configuration from the previous guide:</p>

      <CodeBlock language="bash">
{`npx hardhat compile
npx hardhat run scripts/deploy.ts --network ettiosMainnet`}
      </CodeBlock>

      <p>
        Save the deployed contract address in your <code>.env</code> file:
      </p>

      <CodeBlock language="plaintext">
{`PRIVATE_KEY=your_ai_agent_private_key
ORACLE_ADDRESS=0xYourDeployedContractAddress
AI_API_KEY=your_ai_provider_api_key`}
      </CodeBlock>

      <h2>Step 3: The AI Agent Script</h2>

      <p>
        Create <code>scripts/ai-agent.ts</code>. This script fetches market data, asks the AI model for a
        signal, and submits it on-chain. Install the dependencies first:
      </p>

      <CodeBlock language="bash">
{`npm install ethers@5 dotenv`}
      </CodeBlock>

      <CodeBlock language="typescript">
{`import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

// Connect to the Ettios Mainnet
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ettiosblockchain.io");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "", provider);

const ORACLE_ABI = [
  "function submitSignal(int256 _signal) external",
  "function latestSignal() view returns (int256)"
];

const oracle = new ethers.Contract(
  process.env.ORACLE_ADDRESS || "",
  ORACLE_ABI,
  wallet
);

// 1. Fetch the data your AI model will analyze
async function fetchMarketData(): Promise<string> {
  // Replace with your own data source (prices, news, on-chain metrics...)
  return "ETTIA price: 1.25 USD, 24h change: +3.2%, volume rising";
}

// 2. Run inference with any OpenAI-compatible AI API
async function getAISignal(marketData: string): Promise<number> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.AI_API_KEY
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a market analysis engine. Reply with a single integer from -100 (very bearish) to +100 (very bullish). No text, only the number."
        },
        { role: "user", content: marketData }
      ]
    })
  });

  const data = await response.json();
  const signal = parseInt(data.choices[0].message.content.trim(), 10);

  if (isNaN(signal) || signal < -100 || signal > 100) {
    throw new Error("Invalid signal returned by the AI model");
  }
  return signal;
}

// 3. Submit the AI signal on-chain
async function main() {
  const marketData = await fetchMarketData();
  const signal = await getAISignal(marketData);
  console.log("AI signal:", signal);

  const tx = await oracle.submitSignal(signal);
  console.log("Transaction sent:", tx.hash);

  await tx.wait();
  console.log("Signal confirmed on-chain. View it on https://scan.ettiosblockchain.io");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});`}
      </CodeBlock>

      <p>Run the agent manually, or schedule it to publish signals periodically:</p>

      <CodeBlock language="bash">
{`npx hardhat run scripts/ai-agent.ts --network ettiosMainnet`}
      </CodeBlock>

      <h2>Step 4: Consume the Signal On-Chain</h2>

      <p>
        Any contract can now read the AI signal. For example, a DeFi strategy contract can react to it:
      </p>

      <CodeBlock language="solidity">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IAISignalOracle {
    function latestSignal() external view returns (int256);
    function updatedAt() external view returns (uint256);
}

contract AIStrategy {
    IAISignalOracle public oracle;
    uint256 public maxSignalAge = 1 hours;

    constructor(address _oracle) {
        oracle = IAISignalOracle(_oracle);
    }

    /// @notice Example: only allow "buy" actions when the AI is bullish and the signal is fresh.
    function canBuy() public view returns (bool) {
        require(block.timestamp - oracle.updatedAt() <= maxSignalAge, "Signal too old");
        return oracle.latestSignal() > 50;
    }
}`}
      </CodeBlock>

      <h2>Security Best Practices</h2>

      <div className="my-6 p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/50 shadow-sm not-prose">
        <h4 className="font-bold text-lg mt-0 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-yellow-600" />
          Before going to production
        </h4>
        <ul className="list-disc pl-5 mb-0 space-y-1 text-sm">
          <li>Never hardcode private keys — always use environment variables or a key management service.</li>
          <li>Keep the agent address restricted with <code>onlyAgent</code>-style access control, and rotate keys periodically.</li>
          <li>Validate every AI output on-chain (ranges, formats, freshness) — models can hallucinate or be manipulated.</li>
          <li>Consider a confidence threshold: ignore signals when the model is uncertain.</li>
          <li>Monitor the agent's wallet balance so it never runs out of ETTIA for gas.</li>
        </ul>
      </div>

      <h2>Next Steps</h2>

      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <Link href="/docs/ai/use-cases" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">AI Use Cases</h3>
          <p className="text-muted-foreground flex-grow">Get inspired by what others can build with AI on Ettios.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>

        <Link href="/docs/developer-quickstart/frontend-integration" className="flex flex-col p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors">
          <h3 className="text-lg font-medium mb-2">Frontend Integration</h3>
          <p className="text-muted-foreground flex-grow">Display your AI oracle's signals in a web application.</p>
          <div className="text-primary mt-2">Read more →</div>
        </Link>
      </div>
    </div>
  );
}
