import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-header-bg text-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-link-hover">
          Voyager
        </Link>
        <nav className="space-x-6">
          <Link href="/explore" className="hover:text-link-hover">Explore</Link>
          <Link href="/checklist" className="hover:text-link-hover">Checklist</Link>
          <Link href="/community" className="hover:text-link-hover">Community</Link>
        </nav>
      </div>
    </header>
  );
}
