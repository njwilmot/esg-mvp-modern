// prisma/seed.ts
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        company: 'Google',
        role: 'Senior Software Engineer',
        neighborhood: 'Mission District, San Francisco',
        description: 'Work on cutting-edge AI features in a vibrant cultural hub.',
        homePrice: '$1,200,000',
        crimeRate: 'Medium',
        educationScore: 8,
      },
      {
        company: 'Amazon',
        role: 'Data Scientist',
        neighborhood: 'Capitol Hill, Seattle',
        description: 'Join a dynamic analytics team in a lively neighborhood.',
        homePrice: '$850,000',
        crimeRate: 'Low',
        educationScore: 9,
      },
    ],
  });
}

main()
  .then(() => console.log('Database seeded'))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
