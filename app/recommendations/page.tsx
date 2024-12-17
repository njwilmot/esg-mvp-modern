'use client';

import React from 'react';

interface Recommendation {
  id: number;
  name: string;
  type: string;
  rating: number;
  contact: string;
}

const recommendations: Recommendation[] = [
  { id: 1, name: 'MoveEasy Movers', type: 'Moving Company', rating: 4.8, contact: 'contact@moveeasy.com' },
  { id: 2, name: 'SafeNest Realty', type: 'Real Estate Agency', rating: 4.6, contact: 'info@safenest.com' },
  { id: 3, name: 'HandyPro Services', type: 'Handyman', rating: 4.9, contact: 'help@handypro.com' },
];

export default function Recommendations() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Recommended Services</h1>
      <p className="text-gray-600 mb-8">Here are some trusted services to make your move easier.</p>

      <div className="space-y-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{rec.name}</h2>
            <p className="text-gray-700">Type: {rec.type}</p>
            <p className="text-gray-700">Rating: {rec.rating} ⭐</p>
            <p className="text-gray-500">Contact: {rec.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
