import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16 text-gray-300">
      {/* About Us Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">About Voyager</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Voyager is at the forefront of the rapidly growing lead generation software industry. 
          Our mission is to empower businesses with cutting-edge tools that streamline workflows, 
          automate customer acquisition, and provide actionable insights for data-driven decisions.
        </p>
      </div>

      {/* Our Approach Section */}
      <div className="bg-gray-900 py-12 px-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Our Unique Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Cutting-Edge Technology</h3>
            <p className="text-gray-400">
              We leverage the latest technology, including AI and machine learning, to provide smart insights and automated processes. Our tools ensure businesses can optimize marketing strategies and improve conversion rates effortlessly.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">User-Centric Design</h3>
            <p className="text-gray-400">
              Voyager focuses on providing an intuitive and user-friendly experience, enabling businesses to adopt our tools with ease and focus on what matters most—growing their customer base.
            </p>
          </div>
        </div>
      </div>

      {/* Callout Section */}
      <div className="bg-gray-800 py-12 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-400 mt-2">
          Join the thousands of businesses using Voyager to simplify lead generation, enhance customer engagement, and drive growth.
        </p>
      </div>
    </div>
  );
}
