import { useMemo } from "react";
import { IProgressStep } from "@/types";
import { getCurrentStep, getCurrentStepNumber, BOOKING_STEPS } from "@/utils";

export const useProgressBarLogic = (mobileOffset: number) => {
  const currentStep = getCurrentStep(BOOKING_STEPS);
  const currentStepNumber = getCurrentStepNumber(BOOKING_STEPS);
  const totalSteps = BOOKING_STEPS.length;
  const progressPercentage = (currentStepNumber / totalSteps) * 100;

  const currentIndex = currentStepNumber - 1;
  const rawStartIndex = currentIndex + mobileOffset - 1;

  const startIndex = Math.max(0, Math.min(rawStartIndex, totalSteps - 3));

  const visibleSteps = useMemo(() => {
    const steps: (IProgressStep | null)[] = [];
    for (let i = 0; i < 3; i++) {
      if (startIndex + i < totalSteps) {
        steps.push(BOOKING_STEPS[startIndex + i]);
      } else {
        steps.push(null);
      }
    }
    return steps;
  }, [startIndex]);

  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex + 3 < totalSteps;

  return {
    currentStep,
    currentStepNumber,
    totalSteps,
    progressPercentage,
    visibleSteps,
    canGoPrevious,
    canGoNext,
  };
};
