'use client';

import { useState, useTransition } from 'react';

export default function SupplierForm() {
  const [name, setName] = useState('');
  const [esgRating, setEsgRating] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    startTransition(async () => {
      const res = await fetch('/api/suppliers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, esgRating })
      });
      const data = await res.json();
      alert(`Supplier Added: ${data.name}`);
    });
  }

  return (
    <div className="space-y-4">
      <input type="text" placeholder="Supplier Name" className="border rounded p-1 w-full"
        value={name} onChange={(e) => setName(e.target.value)} required
      />
      <input type="text" placeholder="ESG Rating (Optional)" className="border rounded p-1 w-full"
        value={esgRating} onChange={(e) => setEsgRating(e.target.value)}
      />
      <button onClick={handleAdd} className="bg-green-700 text-white px-4 py-2 rounded" disabled={isPending}>
        {isPending ? 'Adding...' : 'Add Supplier'}
      </button>
    </div>
  );
}
