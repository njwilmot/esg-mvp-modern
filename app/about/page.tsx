import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16 text-gray-300">
      {/* About Us Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">About Voyager</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Voyager is a bold and dynamic startup, redefining the lead generation software industry. 
          Our mission is to empower businesses with tools that simplify workflows, automate processes, 
          and provide actionable insights for smarter decisions.
        </p>
      </div>

      {/* Startup Journey Section */}
      <div className="bg-gray-900 py-12 px-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Our Startup Journey</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-center">
          Founded with the vision of creating a smarter, more connected way to manage leads, Voyager is 
          the result of a passion for innovation and a deep understanding of the challenges faced by startups. 
          We’re proud to be building a platform that grows with your business.
        </p>
      </div>

      {/* Callout Section */}
      <div className="bg-gray-800 py-12 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white">
          Ready to Grow with Voyager?
        </h2>
        <p className="text-gray-400 mt-2">
          Whether you’re a budding startup or an established business, Voyager is designed to scale with your needs.
        </p>
      </div>
    </div>
  );
}
