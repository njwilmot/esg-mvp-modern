import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const take = parseInt(searchParams.get('take') || '5', 10);
  const cursor = searchParams.get('cursor');

  let queryOptions: any = {
    take,
    orderBy: { id: 'asc' },
  };

  if (cursor) {
    queryOptions.cursor = { id: parseInt(cursor, 10) };
    queryOptions.skip = 1;
  }

  const dbJobs = await prisma.job.findMany(queryOptions);

  const jobs = dbJobs.map(job => ({
    id: job.id,
    company: job.company,
    role: job.role,
    neighborhood: job.neighborhood,
    description: job.description,
    homePrice: job.homePrice,
    crimeRate: job.crimeRate,
    educationScore: job.educationScore,
  }));

  const nextCursor = jobs.length > 0 ? jobs[jobs.length - 1].id : null;
  return NextResponse.json({ jobs, nextCursor });
}
