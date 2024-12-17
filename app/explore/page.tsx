'use client';

import ExploreMap from './ExploreMap';
import { useState } from 'react';

export default function ExplorePage() {
  const [jobQuery, setJobQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here, e.g., fetch new data
    console.log('Searching for:', jobQuery, locationQuery);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="relative w-full bg-gray-800 h-48 flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Map Your Next Opportunity</h1>
        <p className="text-gray-300 text-center mb-4 max-w-xl">
          Discover neighborhoods and job markets backed by real data. Find your ideal spot to live and work with our interactive map and insights.
        </p>
        <div className="flex flex-col md:flex-row items-center w-full max-w-2xl space-y-2 md:space-y-0 md:space-x-3">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={jobQuery}
            onChange={(e) => setJobQuery(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-gray-400 text-gray-800 focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            placeholder="City, state, or zip code"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="flex-1 px-3 py-2 rounded border border-gray-400 text-gray-800 focus:outline-none focus:border-accent"
          />
          <button onClick={handleSearch} className="px-4 py-2 rounded bg-accent hover:bg-accent-hover text-white font-semibold">
            Search
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1 relative">
        <ExploreMap />
      </div>
    </div>
  );
}
