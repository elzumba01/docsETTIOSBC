"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Environment variables with fallbacks
const mainnetRpcUrl = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettiosblockchain.io';
const testnetRpcUrl = process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://testnet-rpc.ettiosblockchain.io';
const mainnetChainId = process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237';
const testnetChainId = process.env.NEXT_PUBLIC_TESTNET_CHAIN_ID || '2238';

// This file should only contain route definitions for navigation
export const routes = [
	{
		title: 'Getting Started',
		href: '/docs/getting-started',
		items: [
			{
				title: 'Introduction',
				href: '/docs/getting-started/introduction',
			},
			{
				title: 'Network Parameters',
				href: '/docs/getting-started/network-parameters',
			},
			{
				title: 'Using MetaMask',
				href: '/docs/getting-started/using-metamask',
			},
			{
				title: 'Testnet Faucet',
				href: '/docs/getting-started/testnet-faucet',
			},
		],
	},
	{
		title: 'Developer Quickstart',
		href: '/docs/developer-quickstart',
		items: [
			{
				title: 'Development Environment',
				href: '/docs/developer-quickstart/development-environment',
			},
			{
				title: 'Connect with ethers.js',
				href: '/docs/developer-quickstart/connect-ethers',
			},
			{
				title: 'First Transaction',
				href: '/docs/developer-quickstart/first-transaction',
			},
			{
				title: 'First Smart Contract',
				href: '/docs/developer-quickstart/first-smart-contract',
			},
			{
				title: 'Frontend Integration',
				href: '/docs/developer-quickstart/frontend-integration',
			},
		],
	},
	{
		title: 'Token Standards',
		href: '/docs/token-standards',
		items: [
			{
				title: 'ERC-20',
				href: '/docs/token-standards/erc20',
			},
			{
				title: 'ERC-721',
				href: '/docs/token-standards/erc721',
			},
			{
				title: 'ERC-1155',
				href: '/docs/token-standards/erc1155',
			},
		],
	},
	{
		title: 'Advanced Topics',
		href: '/docs/advanced',
		items: [
			{
				title: 'Metadata Standards',
				href: '/docs/advanced/metadata-standards',
			},
		],
	},
];