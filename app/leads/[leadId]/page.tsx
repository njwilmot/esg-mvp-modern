// app/leads/[leadId]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type LeadPageProps = {
  params: {
    leadId: string; // This is a string (UUID)
  };
};

export default async function LeadPage({ params }: LeadPageProps) {
  const leadId = params.leadId; // Keep it as a string
  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
  });

  if (!lead) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-6 text-gray-300">
      <h1 className="text-3xl font-bold text-white">{lead.name}</h1>
      <p>Email: {lead.email}</p>
      <p>Phone: {lead.phone || "N/A"}</p>
      <p>Status: {lead.status}</p>
      <p>Created: {lead.createdAt.toDateString()}</p>
    </div>
  );
}
