export interface IProgressStep {
  id: number;
  label: string;
  status: "completed" | "current" | "upcoming";
}

export interface IProgressBarProps {
  currentStep: IProgressStep;
  currentStepNumber: number;
  totalSteps: number;
  progressPercentage: number;
  visibleSteps?: (IProgressStep | null)[];
  canGoPrevious?: boolean;
  canGoNext?: boolean;
}
