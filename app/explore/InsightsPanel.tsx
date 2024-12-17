import React from 'react';
import { useExplore } from './exploreContext';

export default function InsightsPanel() {
  const { mapData } = useExplore();

  return (
    <div className="insights-panel">
      <h2>Neighborhood Insights</h2>
      {mapData.map((neighborhood) => (
        <div key={neighborhood.id} className="neighborhood-card">
          <h3>{neighborhood.name}</h3>
          <p>Rent: {neighborhood.rent}</p>
          <p>Safety: {neighborhood.safety}</p>
          <p>Walkability: {neighborhood.walkability}</p>
        </div>
      ))}
    </div>
  );
}
