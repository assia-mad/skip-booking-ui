import { type IProgressStep } from "@/types";

export const getCurrentStep = (
  steps: IProgressStep[],
): IProgressStep | undefined => {
  return steps.find((step) => step.status === "current");
};

export const getCurrentStepNumber = (steps: IProgressStep[]): number => {
  const index = steps.findIndex((step) => step.status === "current");
  return index !== -1 ? index + 1 : steps.length;
};

export const getVisibleSteps = (
  steps: IProgressStep[],
  currentStepNumber: number,
  offset: number,
): (IProgressStep | null)[] => {
  const currentIndex = currentStepNumber - 1;
  const startIndex = Math.max(
    0,
    Math.min(currentIndex + offset - 1, steps.length - 3),
  );

  return Array.from({ length: 3 }, (_, i) => {
    const step = steps[startIndex + i];
    return step ?? null;
  });
};

export const canNavigatePrevious = (
  currentStepNumber: number,
  offset: number,
): boolean => {
  return currentStepNumber + offset > 1;
};

export const canNavigateNext = (
  currentStepNumber: number,
  offset: number,
  totalSteps: number,
): boolean => {
  return currentStepNumber + offset < totalSteps - 2;
};
