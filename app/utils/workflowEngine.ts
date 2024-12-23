// utils/workflowEngine.ts

export type Workflow = {
  id: string;
  name: string;
  steps: WorkflowStep[];
};

export type WorkflowStep = {
  id: string;
  action: string;
  params: any;
};
