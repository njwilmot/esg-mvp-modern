'use client';

import { useEffect, useState, useRef } from 'react';

interface Job {
  id: number;
  company: string;
  role: string;
  neighborhood: string;
  description: string;
  homePrice: string;
  crimeRate: string;
  educationScore: number;
}

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [nextCursor, setNextCursor] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  async function fetchJobs(cursor?: number) {
    setLoading(true);
    const url = cursor ? `/api/jobs?take=5&cursor=${cursor}` : `/api/jobs?take=5`;
    const res = await fetch(url);
  
    if (!res.ok) {
      console.error('Failed to fetch jobs:', res.status, await res.text());
      setLoading(false);
      return;
    }
  
    const data = await res.json();
    console.log('API Data:', data); // <-- Log the fetched data here
  
    setJobs((prev) => [...prev, ...data.jobs]);
    setNextCursor(data.nextCursor);
    setLoading(false);
  }
  

  useEffect(() => {
    // Initial fetch
    fetchJobs();
  }, []);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading && nextCursor !== null) {
          fetchJobs(nextCursor);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loading, nextCursor]);

  return (
    <div className="flex flex-col h-full overflow-auto p-6 space-y-6">
      <h1 className="text-3xl font-extrabold">Discover Top Jobs in Vibrant Neighborhoods</h1>
      <p className="text-gray-400 max-w-2xl">
        Explore a curated list of opportunities from leading companies. Compare home prices, crime rates, and other factors that matter.
      </p>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="card flex flex-col md:flex-row md:items-center md:justify-between p-4">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">{job.company} - {job.role}</h2>
              <p className="text-gray-300 mt-1">{job.neighborhood}</p>
              <p className="text-gray-400 mt-2">{job.description}</p>
            </div>
            <div className="flex flex-col text-gray-200 space-y-1 md:text-right md:items-end">
              <span><strong>Home Price:</strong> {job.homePrice}</span>
              <span><strong>Crime Rate:</strong> {job.crimeRate}</span>
              <span><strong>Education Score:</strong> {job.educationScore}/10</span>
            </div>
          </div>
        ))}
      </div>

      {loading && <div className="text-gray-400 text-center mt-4">Loading more opportunities...</div>}
      <div ref={loadMoreRef} className="h-12"></div>
    </div>
  );
}
