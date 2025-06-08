import { ProgressPill } from "./ProgressPill";
import { BOOKING_STEPS } from "@/utils";
import type { IProgressBarProps } from "@/types";

export const DesktopProgressBar: React.FC<IProgressBarProps> = ({
  progressPercentage,
  currentStep,
  currentStepNumber,
  totalSteps,
}) => {
  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="relative max-w-6xl mx-auto px-8 py-8 space-y-6">
        <div className="absolute top-12 left-8 right-8 h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="relative flex items-center justify-between gap-4">
          {BOOKING_STEPS.map((step) => (
            <ProgressPill key={step.id} step={step} />
          ))}
        </div>

        <div className="text-center space-y-1">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            Currently on
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Step {currentStepNumber} of {totalSteps}: {currentStep.label}
          </p>
        </div>
      </div>
    </nav>
  );
};
