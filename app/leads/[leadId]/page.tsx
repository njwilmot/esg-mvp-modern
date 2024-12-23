import { GetServerSideProps } from 'next';
import prisma  from '@prisma/client'; // Ensure prisma client is exported properly
import { Lead } from '@prisma/client';
import React from 'react';

type LeadPageProps = {
  lead: Lead;
};

const LeadPage: React.FC<LeadPageProps> = ({ lead }) => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold">{lead.name}</h1>
      <p>Email: {lead.email}</p>
      <p>Phone: {lead.phone || 'N/A'}</p>
      <p>Status: {lead.status}</p>
      <p>Score: {lead.score}</p>
      <p>Created: {new Date(lead.createdAt).toLocaleDateString()}</p>
      <p>Updated: {new Date(lead.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { leadId } = context.params!;
  const lead = await prisma.lead.findUnique({
    where: { id: leadId as string },
  });

  if (!lead) {
    return { notFound: true };
  }

  return {
    props: { lead },
  };
};

export default LeadPage;
