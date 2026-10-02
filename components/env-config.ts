/**
 * This file provides a centralized way to access environment variables
 * with proper TypeScript typing and fallback values
 */

// Social and External Links
export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/ettios';
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/ettioschain';
export const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || 'https://discord.gg/ettios';
export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/ettioschain';
export const MEDIUM_URL = process.env.NEXT_PUBLIC_MEDIUM_URL || 'https://medium.com/@ettioschain';
export const EXPLORER_URL = process.env.NEXT_PUBLIC_EXPLORER_URL || 'https://explorer.ettios.io';
export const TESTNET_EXPLORER_URL = process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL || 'https://testnet-explorer.ettios.io';
export const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL || 'https://docs.ettios.io';
export const FAUCET_URL = process.env.NEXT_PUBLIC_FAUCET_URL || 'https://faucet.ettios.io';

// RPC Endpoints
export const MAINNET_RPC = process.env.NEXT_PUBLIC_MAINNET_RPC || 'https://rpc.ettios.io';
export const TESTNET_RPC = process.env.NEXT_PUBLIC_TESTNET_RPC || 'https://testnet-rpc.ettios.io';
export const MAINNET_WEBSOCKET = process.env.NEXT_PUBLIC_MAINNET_WEBSOCKET || 'wss://ws.ettios.io';
export const TESTNET_WEBSOCKET = process.env.NEXT_PUBLIC_TESTNET_WEBSOCKET || 'wss://testnet-ws.ettios.io';

// Chain Configuration
export const CHAIN_NAME = process.env.NEXT_PUBLIC_CHAIN_NAME || 'Ettios';
export const CHAIN_DESCRIPTION = process.env.NEXT_PUBLIC_CHAIN_DESCRIPTION || 'High-performance EVM-compatible blockchain';
export const MAINNET_CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_MAINNET_CHAIN_ID || '2237', 10);
export const TESTNET_CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_TESTNET_CHAIN_ID || '2238', 10);
export const CURRENCY_SYMBOL = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || 'ETTIA';
export const TESTNET_CURRENCY_SYMBOL = process.env.NEXT_PUBLIC_TESTNET_CURRENCY_SYMBOL || 'tETTIA';

// Site Configuration
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Ettios Documentation';
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Complete documentation for the Ettios EVM-compatible blockchain';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.ettios.io';

// Helper function for network configuration
export const getNetworkConfig = (isTestnet: boolean = false) => {
  return {
    name: isTestnet ? `${CHAIN_NAME} Testnet` : `${CHAIN_NAME} Mainnet`,
    chainId: isTestnet ? TESTNET_CHAIN_ID : MAINNET_CHAIN_ID,
    rpcUrl: isTestnet ? TESTNET_RPC : MAINNET_RPC,
    wsUrl: isTestnet ? TESTNET_WEBSOCKET : MAINNET_WEBSOCKET,
    explorerUrl: isTestnet ? TESTNET_EXPLORER_URL : EXPLORER_URL,
    currencySymbol: isTestnet ? TESTNET_CURRENCY_SYMBOL : CURRENCY_SYMBOL,
  };
};
