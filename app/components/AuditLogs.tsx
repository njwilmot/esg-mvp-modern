// components/AuditLogs.tsx

import React from 'react';

type AuditLogsProps = {
  logs: string[];
};

const AuditLogs: React.FC<AuditLogsProps> = ({ logs }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow">
      <h2 className="text-2xl font-bold mb-2">Audit Logs</h2>
      <ul className="list-disc pl-6 max-h-64 overflow-y-auto">
        {logs.map((log, index) => (
          <li key={index} className="text-sm">
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogs;
