// app/api/workflows/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Workflow, WorkflowStep } from '@/utils/workflowEngine';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
  try {
    const workflows = await prisma.workflow.findMany({
      include: { steps: true },
    });
    return NextResponse.json(workflows);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching workflows' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body: Workflow = await request.json();
    const workflow = await prisma.workflow.create({
      data: {
        id: uuidv4(),
        name: body.name,
        steps: {
          create: body.steps.map((step: WorkflowStep) => ({
            id: uuidv4(),
            action: step.action,
            params: step.params,
          })),
        },
      },
    });
    return NextResponse.json(workflow, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating workflow' }, { status: 500 });
  }
}
