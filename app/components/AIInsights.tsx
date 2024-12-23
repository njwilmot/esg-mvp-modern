// components/AIInsights.tsx

'use client';

import React, { useState } from 'react';
import api from '../utils/api';

const AIInsights: React.FC = () => {
  const [insights, setInsights] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const generateInsights = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/AI/aiInsights');
      setInsights(response.data.insights);
    } catch (err) {
      console.error('Error generating insights:', err);
      setError('Failed to generate insights.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-500 text-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">AI Insights</h2>
      <button
        onClick={generateInsights}
        className="bg-white text-green-500 px-4 py-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Insights'}
      </button>
      {error && <p className="text-red-300">{error}</p>}
      {insights && <p>{insights}</p>}
    </div>
  );
};

export default AIInsights;
