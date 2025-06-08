export type TProgressStepStatus = "completed" | "current" | "upcoming";

export interface IProgressStep {
  id: number;
  label: string;
  status: TProgressStepStatus;
}
