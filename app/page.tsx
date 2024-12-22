import Image from 'next/image';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">
          Powerful Features for Lead Management
        </h1>
        <p className="text-lg text-gray-400">
          Voyager offers everything you need to streamline your workflows, 
          connect with leads, and grow your business.
        </p>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-light"
          >
            Get Started
          </Link>
          <Link
            href="/demos"
            className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-gray-700"
          >
            Watch Demos
          </Link>
        </div>
      </div>

      {/* About Voyager Section */}
      <div className="bg-gray-800 py-12 px-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-white">About Voyager</h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
          Voyager is a state-of-the-art lead management platform designed to empower businesses of all sizes. 
          Our mission is to simplify the way companies connect with potential customers, optimize their workflows, 
          and make data-driven decisions with confidence. From advanced analytics to automated communication, 
          Voyager is your trusted partner for scaling success in a competitive market.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <Image
              src="/images/global-reach.png"
              alt="Global Reach"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-white mt-4">Global Reach</h3>
            <p className="text-gray-400">
              Trusted by businesses in over 50 countries.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/ai-powered.png"
              alt="AI-Powered"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-white mt-4">AI-Powered Insights</h3>
            <p className="text-gray-400">
              Advanced tools that help you make smarter decisions.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/images/customer-success.png"
              alt="Customer Success"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-white mt-4">Customer Success</h3>
            <p className="text-gray-400">
              Dedicated support to ensure your business thrives.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="text-center space-y-4">
          <Image
            src="/feature3.png" // Replace with your feature image
            alt="Feature 1"
            width={800}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-white">Lead Scoring</h3>
          <p className="text-gray-400">
            Prioritize leads with advanced scoring algorithms to focus on what matters most.
          </p>
        </div>
        <div className="text-center space-y-4">
          <Image
            src="/feature1.png" // Replace with your feature image
            alt="Feature 2"
            width={800}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-white">Automated Follow-Ups</h3>
          <p className="text-gray-400">
            Save time with automated email and task reminders for seamless communication.
          </p>
        </div>
        <div className="text-center space-y-4">
          <Image
            src="/feature2.png" // Replace with your feature image
            alt="Feature 3"
            width={800}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-white">Detailed Analytics</h3>
          <p className="text-gray-400">
            Track your progress with real-time dashboards and insightful reports.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-12 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white">
          Ready to Supercharge Your Workflow?
        </h2>
        <p className="text-gray-400 mt-2">
          Join thousands of businesses using Voyager to achieve their goals.
        </p>
        <Link
          href="/signup"
          className="mt-6 bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-light"
        >
          Get Started for Free
        </Link>
      </div>
    </div>
  );
}
