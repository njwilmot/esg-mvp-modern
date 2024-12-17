'use client';

import { useState, useTransition } from 'react';

export default function RecommendationsForm() {
  const [companyName, setCompanyName] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    startTransition(async () => {
      const res = await fetch('/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName })
      });
      const data = await res.json();
      alert(`AI Suggestion: ${data.text}`);
    })
  }

  return (
    <div className="space-y-4">
      <input 
        type="text"
        placeholder="Company Name"
        className="border rounded p-1"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <button 
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={isPending}
      >
        {isPending ? 'Generating...' : 'Get ESG Improvement Suggestions'}
      </button>
    </div>
  );
}
