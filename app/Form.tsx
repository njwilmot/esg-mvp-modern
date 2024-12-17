'use client';

import { useState, useTransition } from 'react';

export default function Form() {
  const [companyName, setCompanyName] = useState('');
  const [carbonEmissions, setCarbonEmissions] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');
  const [wasteProduced, setWasteProduced] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName,
          carbonEmissions,
          energyUsage,
          wasteProduced,
        }),
      });

      if (res.ok) {
        alert('Metrics saved!');
      } else {
        alert('Failed to save metrics.');
      }
    });
  };

  const handleDownload = () => {
    if (!companyName) {
      alert('Please enter a company name first.');
      return;
    }
    window.open(`/api/report?companyName=${encodeURIComponent(companyName)}`, '_blank');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block font-medium">Company Name</label>
          <input
            className="border rounded p-1 w-full"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Carbon Emissions (tons)</label>
          <input
            type="number"
            step="any"
            className="border rounded p-1 w-full"
            value={carbonEmissions}
            onChange={(e) => setCarbonEmissions(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Energy Usage (kWh)</label>
          <input
            type="number"
            step="any"
            className="border rounded p-1 w-full"
            value={energyUsage}
            onChange={(e) => setEnergyUsage(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium">Waste Produced (kg)</label>
          <input
            type="number"
            step="any"
            className="border rounded p-1 w-full"
            value={wasteProduced}
            onChange={(e) => setWasteProduced(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
          disabled={isPending}
        >
          {isPending ? 'Saving...' : 'Save Metrics'}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Generate ESG Report</h2>
      <button
        onClick={handleDownload}
        className="bg-green-500 text-white rounded px-4 py-2"
      >
        Download Report
      </button>
    </div>
  );
}
