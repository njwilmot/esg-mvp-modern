// components/Analytics.tsx

import React from 'react';

type AnalyticsProps = {
  analytics: {
    totalLeads: number;
    conversionRate: string;
  };
};

const Analytics: React.FC<AnalyticsProps> = ({ analytics }) => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded shadow-md flex justify-around">
      <div>
        <h3 className="text-xl font-bold">Total Leads</h3>
        <p className="text-2xl">{analytics.totalLeads}</p>
      </div>
      <div>
        <h3 className="text-xl font-bold">Conversion Rate</h3>
        <p className="text-2xl">{analytics.conversionRate}%</p>
      </div>
    </div>
  );
};

export default Analytics;
