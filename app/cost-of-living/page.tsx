'use client';

import React, { useState } from 'react';

export default function CostOfLiving() {
  const [diningOut, setDiningOut] = useState(3);
  const [transportation, setTransportation] = useState(2);
  const [groceries, setGroceries] = useState(200);
  const [rent, setRent] = useState(1200);

  const calculateCost = () => {
    const diningCost = diningOut * 15 * 4; // Weekly dining cost
    const transportationCost = transportation * 100; // Monthly transportation
    return diningCost + transportationCost + groceries + rent;
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cost of Living Calculator</h1>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Dining Out (times per week):
          </label>
          <input
            type="range"
            min="0"
            max="7"
            value={diningOut}
            onChange={(e) => setDiningOut(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-600 mt-2">Selected: {diningOut} times/week</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Transportation (monthly pass in $100 increments):
          </label>
          <input
            type="range"
            min="0"
            max="5"
            value={transportation}
            onChange={(e) => setTransportation(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-600 mt-2">Selected: ${transportation * 100} per month</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Groceries (monthly in $):
          </label>
          <input
            type="number"
            value={groceries}
            onChange={(e) => setGroceries(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <p className="text-gray-600 mt-2">Selected: ${groceries} per month</p>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Rent (monthly in $):
          </label>
          <input
            type="number"
            value={rent}
            onChange={(e) => setRent(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <p className="text-gray-600 mt-2">Selected: ${rent} per month</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Estimated Monthly Cost:</h2>
        <p className="text-xl text-blue-600 mt-2 font-bold">${calculateCost()}</p>
      </div>
    </div>
  );
}
