// app/api/leads/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { leadValidationSchema } from '../../utils/validation';

export async function GET(request: Request) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await leadValidationSchema.validate(body, { abortEarly: false });

    const newLead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        score: calculateLeadScore(body),
      },
    });

    // Log the creation
    await prisma.auditLog.create({
      data: {
        action: `Created lead ${newLead.name}`,
      },
    });

    return NextResponse.json(newLead, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Error creating lead' }, { status: 500 });
  }
}

function calculateLeadScore(lead: any): number {
  // Simple lead scoring logic
  let score = 0;
  if (lead.email) score += 10;
  if (lead.phone) score += 5;
  // Add more criteria as needed
  return score;
}
