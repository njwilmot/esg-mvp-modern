import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Powerful Features for Lead Management
        </h1>
        <p className="text-lg text-gray-400">
          Voyager offers everything you need to streamline your workflows, connect with leads, and grow your business.
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-maroon-600 text-white px-6 py-3 rounded-md hover:bg-maroon-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/demos"
            className="border border-maroon-600 text-maroon-600 px-6 py-3 rounded-md hover:bg-maroon-600 hover:text-white transition-colors"
          >
            Watch Demos
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-16"></div>

      {/* About Voyager Section */}
      <div
        className="relative py-14 px-8 rounded-lg shadow-lg space-y-8 text-white"
        style={{
          backgroundAttachment: 'fixed',
          backgroundImage: "url('/feature3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center">About Voyager</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
          Voyager is an innovative lead management platform built with startups and growing businesses in mind. 
            Our mission is to simplify how companies connect with potential customers, enhance their workflows, and 
            confidently make data-driven decisions. With tools like advanced analytics and automated communication, 
            Voyager is designed to be a trusted partner in helping businesses scale and succeed in a competitive market.
          </p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-maroon-600 mt-4">Innovative Solutions</h3>
              <p className="text-gray-300">
                Empowering businesses with cutting-edge tools and technology.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-maroon-600 mt-4">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Advanced tools that help you make smarter decisions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-maroon-600 mt-4">Customer Success</h3>
              <p className="text-gray-300">
                Dedicated support to ensure your business thrives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Sections */}
      {/* Startup Advantage Section */}
      <div className="bg-blue py-14 px-8 rounded-lg shadow-lg text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Startup Advantage</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          As a startup, we understand the unique challenges faced by other businesses trying to scale.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-16"></div>

      {/* Features Section */}
      <div className="bg-gray-900 py-12 px-6 rounded-lg shadow-lg text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Lead Scoring</h3>
            <p>
              Prioritize leads with advanced scoring algorithms to focus on what matters most.
            </p>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Automated Follow-Ups</h3>
            <p>
              Save time with automated email and task reminders for seamless communication.
            </p>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-white">Detailed Analytics</h3>
            <p>
              Track your progress with real-time dashboards and insightful reports.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-16"></div>

      {/* CTA Section */}
      <div className="bg-maroon-600 py-14 text-center rounded-lg shadow-md space-y-4">
        <h2 className="text-3xl font-bold text-white">
          <Link href="/signup">Ready to Join?</Link>
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Voyager is built for businesses looking to innovate and grow. Be a part of our journey today!
        </p>
      </div>
    </div>
  );
}