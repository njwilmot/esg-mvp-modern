// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Voyager',
  description: 'Simplifying your move with data-driven tools and insights.',
  icons: {
    icon: '/log.png',
  },
};

function TopNavigation() {
  return (
    <header className="bg-grey text-black border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
        <span className="text-white text-xl font-bold">Voyager</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link href="/leads" className="hover:text-dark-blue transition-colors">
            Leads
          </Link>
          <Link href="/features" className="hover:text-dark-blue transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-dark-blue transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-dark-blue transition-colors">
            About Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-dark-blue font-semibold transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-dark-blue text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-dark-blue-hover transition-colors"
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
