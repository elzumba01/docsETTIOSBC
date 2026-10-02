"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Web3JsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Connect with web3.js
      </h1>

      <div className="my-8 p-8 border rounded-lg bg-gradient-to-r from-primary/5 to-transparent shadow-sm">
        <h3 className="text-2xl font-bold mt-0">Documentation In Progress</h3>
        <p className="text-lg">
          We are currently working on this documentation. Check back soon for comprehensive guides on using web3.js with Ettios blockchain!
        </p>
        <div className="mt-6">
          <Link 
            href="/docs/developer-quickstart/ethers-js" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            View ethers.js Guide Instead
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
