import type React from "react";

import { ProgressPill } from "./ProgressPill";
import { BOOKING_STEPS } from "@/utils";
import { calculateProgressPercentage } from "@/utils/functions";
import type { IProgressBarProps } from "@/types";

export const DesktopProgressBar: React.FC<IProgressBarProps> = ({
  currentStep,
  currentStepNumber,
  totalSteps,
}) => {
  const progressPercentage = calculateProgressPercentage(
    currentStepNumber,
    totalSteps,
  );

  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="text-center space-y-1 mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            Currently on
          </p>
          <p className="text-lg font-semibold text-primary-dark">
            Step {currentStepNumber} of {totalSteps}: {currentStep.label}
          </p>
        </div>

        {/* Progress Section */}
        <div className="relative">
          {/* Progress Pills */}
          <div className="relative flex items-center justify-between gap-4 z-10">
            {BOOKING_STEPS.map((step) => (
              <ProgressPill key={step.id} step={step} />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 rounded-full -translate-y-1/2 z-0">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 rounded-r-full transition-all duration-700"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
