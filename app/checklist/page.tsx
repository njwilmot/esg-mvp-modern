'use client';

import React from 'react';
import ChecklistPanel from './ChecklistPanel';


export default function ChecklistPage() {
  return (
    <div className="checklist-page">
        <h1>Your Moving Checklist</h1>
        <p>Track and organize your move with a dynamic checklist.</p>
      <ChecklistPanel />
    </div>
  );
}
