'use client';

import React from 'react';
import CommunityPanel from './CommunityPanel';
import './community.css';

export default function CommunityPage() {
  return (
    <div className="community-page">
        <h1>Community Forums</h1>
        <p>Connect with locals and recent movers for advice and insights.</p>
      <CommunityPanel />
    </div>
  );
}
