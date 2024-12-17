import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-800 text-gray-200 h-screen p-4 flex-shrink-0">
      <h2 className="text-md font-bold mb-4">Navigation</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="block hover:text-blue-400">
            🏠 Home
          </Link>
        </li>
        <li>
          <Link href="/explore" className="block hover:text-blue-400">
            🔍 Explore
          </Link>
        </li>
        <li>
          <Link href="/checklist" className="block hover:text-blue-400">
            ✅ Checklist
          </Link>
        </li>
        <li>
          <Link href="/community" className="block hover:text-blue-400">
            💬 Community
          </Link>
        </li>
      </ul>
    </aside>
  );
}
