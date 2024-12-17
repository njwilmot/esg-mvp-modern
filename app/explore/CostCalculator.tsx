'use client';

import React, { useState } from 'react';

export default function CostCalculator() {
  const [dining, setDining] = useState(3);
  const [rent, setRent] = useState(1200);

  const total = rent + dining * 50;

  return (
    <div className="cost-calculator">
      <h2>Cost of Living Calculator</h2>
      <label>Monthly Rent: ${rent}</label>
      <input type="range" min="500" max="5000" value={rent} onChange={(e) => setRent(Number(e.target.value))} />
      <label>Dining Out: {dining} times/week</label>
      <input type="range" min="0" max="10" value={dining} onChange={(e) => setDining(Number(e.target.value))} />
      <p>Estimated Monthly Cost: ${total}</p>
    </div>
  );
}
