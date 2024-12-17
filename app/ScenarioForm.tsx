'use client';

import { useState, useTransition } from 'react';

export default function ScenarioForm() {
  const [companyName, setCompanyName] = useState('');
  const [reductionPercentage, setReductionPercentage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleScenario = () => {
    startTransition(async () => {
      const res = await fetch('/api/scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName, reductionPercentage: Number(reductionPercentage) })
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  return (
    <div className="space-y-4">
      <input type="text" placeholder="Company Name" className="border rounded p-1 w-full"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input type="number" placeholder="% Emissions Reduction" className="border rounded p-1 w-full"
        value={reductionPercentage}
        onChange={(e) => setReductionPercentage(e.target.value)}
      />
      <button onClick={handleScenario} className="bg-indigo-600 text-white px-4 py-2 rounded" disabled={isPending}>
        {isPending ? 'Calculating...' : 'Run Scenario'}
      </button>
    </div>
  );
}
