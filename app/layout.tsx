// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Voyager',
  description: 'Simplifying your move with data-driven tools and insights.',
  icons: {
    icon: '/favicon.ico',
  },
};

function TopNavigation() {
  return (
    <header className="bg-gray-900 text-gray-300">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo (Wrapped in Link) */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/home2.png" // Replace with your logo path
            alt="Voyager Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-white">Voyager</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/leads" className="hover:text-accent transition-colors">
            Leads
          </Link>
          <Link href="/features" className="hover:text-accent transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-accent transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-accent transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-light transition-colors"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Voyager. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col bg-gray-800 text-gray-300">
        <TopNavigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
