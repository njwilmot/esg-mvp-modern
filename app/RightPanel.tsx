export default function RightPanel() {
  return (
    <aside className="w-48 bg-gray-800 text-gray-200 h-screen p-4 flex-shrink-0">
      <div className="mb-6">
        <h2 className="text-md font-bold mb-2">Top Cities</h2>
        <ul className="space-y-1 text-sm">
          <li>📍 San Francisco</li>
          <li>📍 New York</li>
          <li>📍 Austin</li>
        </ul>
      </div>

      <div>
        <h2 className="text-md font-bold mb-2">Recent Activity</h2>
        <ul className="space-y-1 text-sm">
          <li>John commented on Austin Insights.</li>
          <li>Jane added a checklist item.</li>
          <li>Mark explored New York.</li>
        </ul>
      </div>
    </aside>
  );
}
