// app/leads/page.tsx
import {prisma} from "@/lib/prisma";

export default async function LeadsPage() {
  // Fetch leads
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container mx-auto px-6 py-12 space-y-8 text-gray-300">
      <h1 className="text-3xl font-bold text-white">Manage Your Leads</h1>
      <p className="text-gray-400">All leads in your database:</p>

      {/* Simple Table of Leads */}
      <table className="min-w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-900 text-gray-400">
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">Phone</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-700">
              <td className="py-2 px-4">{lead.name}</td>
              <td className="py-2 px-4">{lead.email ?? "N/A"}</td>
              <td className="py-2 px-4">{lead.phone ?? "N/A"}</td>
              <td className="py-2 px-4">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
