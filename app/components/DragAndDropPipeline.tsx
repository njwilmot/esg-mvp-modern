// components/DragAndDropPipeline.tsx

'use client';

import React, { useState, useEffect } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import api from '../utils/api';
import Analytics from '../components/Analytics';
import AuditLogs from '../components/AuditLogs';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: string;
  score: number;
};

type Stage = {
  id: string;
  name: string;
  leads: Lead[];
};

const initialStages: Stage[] = [
  { id: 'new', name: 'New', leads: [] },
  { id: 'contacted', name: 'Contacted', leads: [] },
  { id: 'qualified', name: 'Qualified', leads: [] },
  { id: 'closed', name: 'Closed', leads: [] },
];

const DragAndDropPipeline: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [analytics, setAnalytics] = useState({
    totalLeads: 0,
    conversionRate: '0.00',
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    calculateAnalytics();
  }, [stages]);

  const fetchLeads = async () => {
    try {
      const response = await api.get('/leads');
      const leads: Lead[] = response.data;
      const updatedStages = initialStages.map((stage) => ({
        ...stage,
        leads: leads.filter((lead) => lead.status === stage.id),
      }));
      setStages(updatedStages);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const onDragEnd = async (result: DropResult) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceStageIndex = stages.findIndex(
      (stage) => stage.id === source.droppableId
    );
    const destStageIndex = stages.findIndex(
      (stage) => stage.id === destination.droppableId
    );

    const sourceStage = stages[sourceStageIndex];
    const destStage = stages[destStageIndex];

    const [movedLead] = sourceStage.leads.splice(source.index, 1);
    destStage.leads.splice(destination.index, 0, movedLead);

    const newStages = [...stages];
    newStages[sourceStageIndex] = sourceStage;
    newStages[destStageIndex] = destStage;

    setStages(newStages);

    // Update lead status in the database
    try {
      await api.patch(`/leads/${draggableId}`, {
        status: destStage.id,
      });

      // Log the action
      const log = `Moved ${movedLead.name} from ${sourceStage.name} to ${destStage.name}`;
      setAuditLogs((prev) => [log, ...prev]);
    } catch (error) {
      console.error('Error updating lead status:', error);
      // Optionally, revert the state or show an error message
    }
  };

  const calculateAnalytics = () => {
    const totalLeads = stages.reduce((sum, stage) => sum + stage.leads.length, 0);
    const closedLeads = stages.find((stage) => stage.id === 'closed')?.leads.length || 0;
    const conversionRate =
      totalLeads > 0 ? ((closedLeads / totalLeads) * 100).toFixed(2) : '0.00';

    setAnalytics({ totalLeads, conversionRate });
  };

  return (
    <div className="space-y-8">
      <Analytics analytics={analytics} />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto">
          {stages.map((stage) => (
            <DroppableStage key={stage.id} stage={stage} />
          ))}
        </div>
      </DragDropContext>
      <AuditLogs logs={auditLogs} />
    </div>
  );
};

export default DragAndDropPipeline;

type DroppableStageProps = {
  stage: Stage;
};

const DroppableStage: React.FC<DroppableStageProps> = ({ stage }) => {
  return (
    <Droppable droppableId={stage.id}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`bg-gray-100 p-4 rounded-md min-w-[250px] ${
            snapshot.isDraggingOver ? 'bg-blue-100' : ''
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">{stage.name}</h3>
          {stage.leads.map((lead, index) => (
            <DraggableLead key={lead.id} lead={lead} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

type DraggableLeadProps = {
  lead: Lead;
  index: number;
};

const DraggableLead: React.FC<DraggableLeadProps> = ({ lead, index }) => {
  return (
    <Draggable draggableId={lead.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`bg-white p-2 rounded shadow mb-2 ${
            snapshot.isDragging ? 'bg-blue-200' : ''
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="font-medium">{lead.name}</p>
          <p className="text-sm text-gray-600">{lead.email}</p>
          {lead.phone && (
            <p className="text-sm text-gray-600">{lead.phone}</p>
          )}
          <p className="text-xs text-gray-500">Score: {lead.score}</p>
        </div>
      )}
    </Draggable>
  );
};
