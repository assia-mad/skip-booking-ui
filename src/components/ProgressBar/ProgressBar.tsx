import { useState } from "react";
import { useMobileDetection, useProgressBarLogic } from "@/hooks";
import { MobileProgressBar } from "./MobileProgressBar";
import { DesktopProgressBar } from "./DesktopProgressBar";

export const ProgressBar: React.FC = () => {
  const isMobile = useMobileDetection();
  const [mobileOffset, setMobileOffset] = useState(0);

  const {
    currentStep,
    currentStepNumber,
    totalSteps,
    progressPercentage,
    visibleSteps,
    canGoPrevious,
    canGoNext,
  } = useProgressBarLogic(mobileOffset);

  const handleOffsetChange = (direction: "prev" | "next") => {
    setMobileOffset((prev) => {
      if (direction === "prev" && !canGoPrevious) return prev;
      if (direction === "next" && !canGoNext) return prev;
      return direction === "prev" ? prev - 1 : prev + 1;
    });
  };

  if (!currentStep) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700 font-sans">
        Error: Invalid step configuration
      </div>
    );
  }

  return isMobile ? (
    <MobileProgressBar
      currentStep={currentStep}
      currentStepNumber={currentStepNumber}
      totalSteps={totalSteps}
      progressPercentage={progressPercentage}
      visibleSteps={visibleSteps ?? []}
      canGoPrevious={canGoPrevious}
      canGoNext={canGoNext}
      onOffsetChange={handleOffsetChange}
    />
  ) : (
    <DesktopProgressBar
      currentStep={currentStep}
      currentStepNumber={currentStepNumber}
      totalSteps={totalSteps}
      progressPercentage={progressPercentage}
    />
  );
};
