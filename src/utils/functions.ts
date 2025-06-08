import { type IProgressStep } from "@/types";

export function getCurrentStep(
  steps: IProgressStep[],
): IProgressStep | undefined {
  return steps.find((step) => step.status === "current");
}

export function getCurrentStepNumber(steps: IProgressStep[]): number {
  const index = steps.findIndex((step) => step.status === "current");
  return index !== -1 ? index + 1 : steps.length;
}

export function getVisibleSteps(
  steps: IProgressStep[],
  currentStepNumber: number,
  offset: number,
): Array<IProgressStep | null> {
  const totalSteps = steps.length;
  const currentIndex = currentStepNumber - 1;
  const startIndex = Math.max(
    0,
    Math.min(currentIndex + offset - 1, totalSteps - 3),
  );

  const visibleSteps: Array<IProgressStep | null> = [];
  for (let i = 0; i < 3; i++) {
    visibleSteps.push(
      startIndex + i < totalSteps ? steps[startIndex + i] : null,
    );
  }
  return visibleSteps;
}

export function canNavigatePrevious(
  currentStepNumber: number,
  offset: number,
): boolean {
  return currentStepNumber + offset > 1;
}

export function canNavigateNext(
  currentStepNumber: number,
  offset: number,
  totalSteps: number,
): boolean {
  return currentStepNumber + offset < totalSteps - 2;
}
