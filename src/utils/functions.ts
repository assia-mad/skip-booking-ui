import type { IProgressStep, IProcessedSkip, ISkip } from "@/types";
import { skipImageMap } from "@/assets/skips";

export const getCurrentStep = (
  steps: IProgressStep[],
): IProgressStep | undefined => {
  return steps.find((step) => step.status === "current");
};

export const getCurrentStepNumber = (steps: IProgressStep[]): number => {
  const index = steps.findIndex((step) => step.status === "current");
  return index !== -1 ? index + 1 : steps.length;
};

export const calculateProgressPercentage = (
  currentStep: number,
  totalSteps: number,
): number => {
  if (totalSteps === 0) return 0;
  const stepWidth = 100 / totalSteps;
  const progressToCurrentStep = (currentStep - 1) * stepWidth + stepWidth / 2;
  return Math.min(100, Math.max(0, progressToCurrentStep));
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

export const formatPrice = (price: number): string => {
  return `£${Math.round(price)}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const processSkipData = (skip: ISkip): IProcessedSkip => {
  const totalPrice =
    skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

  const restrictions: string[] = [];
  if (!skip.allowed_on_road) restrictions.push("Not allowed on road");
  if (!skip.allows_heavy_waste) restrictions.push("No heavy waste");
  if (skip.forbidden) restrictions.push("Not available");

  return {
    ...skip,
    totalPrice,
    formattedPrice: formatPrice(totalPrice),
    restrictions,
  };
};

export const getSkipImage = (size: number): string => {
  if (skipImageMap[size]) return skipImageMap[size];

  const availableSizes = Object.keys(skipImageMap).map(Number);
  const closestSize = availableSizes.reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev,
  );

  return skipImageMap[closestSize] || skipImageMap[4];
};
