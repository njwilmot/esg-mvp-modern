// app/leads/page.tsx

'use client';

import React from 'react';
import LeadForm from '../components/AIInsights';
import DragAndDropPipeline from '../components/DragAndDropPipeline';
import AIInsights from '../components/AIInsights';

const LeadsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-8 text-gray-800">
      <h1 className="text-4xl font-bold text-center">Manage Your Leads</h1>
      <LeadForm />
      <DragAndDropPipeline />
      <AIInsights />
    </div>
  );
};

export default LeadsPage;
