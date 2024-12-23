// app/features/page.tsx

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Features</h1>
      <div className="bg-blue shadow rounded-lg divide-y divide-white-200">
        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m8 13l3 3m0 0l-3 3m3-3H9"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Visual Drag-and-Drop Pipeline Builder
            </p>
            <p className="text-sm text-white-500">
              Create and customize sales workflows with an intuitive interface.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m2 4v-4m-5 8h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Automated Lead Validation
            </p>
            <p className="text-sm text-white-500">
              Score and validate leads automatically, eliminating duplicates and low-quality data.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l4-4m0 0l4-4m-4 4H3"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Real-Time Lead Scoring
            </p>
            <p className="text-sm text-white-500">
              Dynamically update lead scores based on engagement metrics.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Lead Marketplace
            </p>
            <p className="text-sm text-white-500">
              Access verified, high-quality leads filtered by industry, geography, or budget.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-purple-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 10H2m10 0h8m-8 0v8m0-8V2"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Plug-and-Play Setup
            </p>
            <p className="text-sm text-white-500">
              Quick onboarding with wizards, templates, and demo data.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-teal-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.866 0-7 1.343-7 3v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4c0-1.657-3.134-3-7-3z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Advanced AI Insights
            </p>
            <p className="text-sm text-white-500">
              Leverage AI to analyze lead behavior and provide predictive analytics.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-pink-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-pink-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132a.877.877 0 00-1.11 0L7.248 11.168m7.504 0l-7.504 4.832m0-4.832l7.504-4.832M14.752 16V3.25A2.25 2.25 0 0012.502 1h-1.004A2.25 2.25 0 009.248 3.25V16m5.504 0a2.25 2.25 0 01-2.254 2.25H9.754a2.25 2.25 0 01-2.254-2.25m7.504 0H9.248"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Integrated Video Messaging
            </p>
            <p className="text-sm text-white-500">
              Send personalized video pitches with engagement tracking.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-white-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-white-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6.75 9a4.25 4.25 0 118.5 0v6.5a4.25 4.25 0 11-8.5 0V9z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Competitor Monitoring
            </p>
            <p className="text-sm text-white-500">
              Gain actionable insights into competitor strategies and activities.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-orange-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11V3a3 3 0 00-6 0v8a3 3 0 003 3h6a3 3 0 003-3V3a3 3 0 00-6 0v8"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Shared Workspaces for Collaboration
            </p>
            <p className="text-sm text-white-500">
              Collaborate on pipelines in real-time with activity feeds and permissions.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v8m-4-4h8"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Behavioral Insights and Heatmaps
            </p>
            <p className="text-sm text-white-500">
              Visualize lead interactions with campaigns and engagement histories.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-lime-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-lime-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Gamification Features
            </p>
            <p className="text-sm text-white-500">
              Increase engagement with leaderboards, challenges, and rewards.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-cyan-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-cyan-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.353 5.647l-3.676 7.352a2 2 0 01-1.795 1.056H8.118a2 2 0 01-1.795-1.056l-3.676-7.352a2 2 0 011.795-2.944h15.411a2 2 0 011.795 2.944z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              ROI Attribution
            </p>
            <p className="text-sm text-white-500">
              Understand revenue impact of each lead source with advanced attribution models.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 hover:bg-gray-900 cursor-pointer">
          <div className="flex-shrink-0 bg-rose-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-rose-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16h4m4-4h-4m4 0h4m-4 0v-4h-4"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-white-900">
              Solutions for Small Businesses
            </p>
            <p className="text-sm text-white-500">
              Simple lead capture and scoring tools designed for affordability.
            </p>
          </div>
        </div>

        {/* Repeat similar structure for remaining features */}
      </div>
    </div>
  );
}
