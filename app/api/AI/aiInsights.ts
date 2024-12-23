// app/api/AI/aiInsights.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const leads = await prisma.lead.findMany();

    const prompt = `Provide insightful analytics based on the following leads data: ${JSON.stringify(
      leads
    )}`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    const insights = completion.data.choices[0].text?.trim() || 'No insights available.';

    return NextResponse.json({ insights });
  } catch (error) {
    console.error('Error generating AI insights:', error);
    return NextResponse.json({ error: 'Error generating AI insights' }, { status: 500 });
  }
}
