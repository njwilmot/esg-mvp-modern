// prisma/seed.ts
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  await prisma.lead.createMany({
    data: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "555-1234",
        status: "new",
        source: "Website",
        score: 10,
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "555-5678",
        status: "in-progress",
        source: "Social Media",
        score: 25,
      },
      {
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        phone: "555-8765",
        status: "closed",
        source: "Referral",
        score: 50,
      },
      {
        name: "Alice Brown",
        email: "alice.brown@example.com",
        phone: "555-4321",
        status: "new",
        source: "Email Campaign",
        score: 15,
      },
      {
        name: "Charlie Wilson",
        email: "charlie.wilson@example.com",
        phone: "555-6789",
        status: "in-progress",
        source: "Website",
        score: 30,
      },
    ],
  });

  console.log("Seeding finished!");
}

main()
  .then(() => {
    console.log("Seeding completed successfully.");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Error during seeding:", e);
    prisma.$disconnect();
    process.exit(1);
  });