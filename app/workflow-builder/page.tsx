// app/workflow-builder/page.tsx

'use client';

import React from 'react';
import WorkflowBuilder from '@/workflow-builder';

const WorkflowBuilderPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <WorkflowBuilder />
    </div>
  );
};

export default WorkflowBuilderPage;
