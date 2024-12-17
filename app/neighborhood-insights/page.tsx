import React from 'react';

export default function NeighborhoodInsights() {
  const neighborhoods = [
    { name: 'Downtown', rent: '$1,800', safety: 'High', walkability: 'Excellent' },
    { name: 'Suburban Hills', rent: '$1,500', safety: 'Medium', walkability: 'Good' },
    // Add more neighborhoods here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Neighborhood Insights</h1>
      <ul className="space-y-4">
        {neighborhoods.map((neighborhood, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold">{neighborhood.name}</h2>
            <p>Average Rent: {neighborhood.rent}</p>
            <p>Safety: {neighborhood.safety}</p>
            <p>Walkability: {neighborhood.walkability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
