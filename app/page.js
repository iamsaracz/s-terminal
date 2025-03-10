"use client";
import React from 'react';
import MarketOverview from '../components/MarketOverview';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">S Terminal</h1>
        
        <MarketOverview />
        
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Diğer bileşenlerimizi buraya ekleyeceğiz</p>
        </div>
      </div>
    </main>
  );
}