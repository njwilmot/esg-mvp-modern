import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Voyager',
  description: 'Simplifying your move with data-driven tools and insights.',
  icons: {
    icon: '/cheese.ico',
  },
};

function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-sidebar border-r border-color-border h-screen">
      <div className="p-6 border-b border-color-border">
        <h2 className="text-lg font-bold">Navigation</h2>
      </div>
      <nav className="flex-1 overflow-auto p-6 space-y-4">
        <Link href="/" className="block hover:text-accent">
          🏠 Home
        </Link>
        <Link href="/explore" className="block hover:text-accent">
          🔍 Explore
        </Link>
        <Link href="/checklist" className="block hover:text-accent">
          ✅ Checklist
        </Link>
        <Link href="/community" className="block hover:text-accent">
          💬 Community
        </Link>
      </nav>
    </aside>
  );
}

function RightPanel() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-sidebar border-l border-color-border h-screen">
      <div className="p-6 border-b border-color-border">
        <h2 className="text-md font-bold mb-2">Top Cities</h2>
        <ul className="text-sm space-y-1">
          <li>📍 San Francisco</li>
          <li>📍 New York</li>
          <li>📍 Austin</li>
        </ul>
      </div>
      <div className="p-6 overflow-auto">
        <h2 className="text-md font-bold mb-2">Recent Activity</h2>
        <ul className="space-y-2 text-sm">
          <li>John commented on Austin Insights.</li>
          <li>Jane added a checklist item.</li>
          <li>Mark explored New York.</li>
        </ul>
      </div>
    </aside>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-row overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Section */}
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Header */}
          <header className="flex items-center justify-between px-4 h-16 bg-header header-shadow">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Image src="/logo.png" alt="Voyager Logo" width={30} height={30} />
              </Link>
              <Link href="/" className="text-xl font-bold hover:text-accent transition-colors">
                Voyager
              </Link>
            </div>
            <nav className="hidden md:block space-x-6 text-sm font-medium">
              <Link href="/explore" className="hover:text-accent transition-colors">Explore</Link>
              <Link href="/checklist" className="hover:text-accent transition-colors">Checklist</Link>
              <Link href="/community" className="hover:text-accent transition-colors">Community</Link>
            </nav>
          </header>

          {/* Main Content with scroll */}
          <main className="flex-1 overflow-auto relative">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-header text-gray-400 px-6 py-4 text-sm flex justify-between items-center border-t border-color-border">
            <p>© {new Date().getFullYear()} Voyager. All rights reserved.</p>
            <p>Your guide to navigating new beginnings.</p>
          </footer>
        </div>

        {/* Right Panel */}
        <RightPanel />
      </body>
    </html>
  );
}
