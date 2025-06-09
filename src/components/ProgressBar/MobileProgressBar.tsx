import type React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressPill } from "./ProgressPill";
import type { IProgressBarProps, IProgressStep } from "@/types";

interface MobileProgressBarProps extends IProgressBarProps {
  visibleSteps: (IProgressStep | null)[];
  onOffsetChange: (dir: "prev" | "next") => void;
}

export const MobileProgressBar: React.FC<MobileProgressBarProps> = ({
  progressPercentage,
  visibleSteps,
  canGoPrevious,
  canGoNext,
  currentStep,
  currentStepNumber,
  totalSteps,
  onOffsetChange,
}) => {
  return (
    <nav className="bg-white sticky top-0 z-40">
      <div className="px-4 py-3">
        <div className="text-center mb-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
            CURRENTLY ON
          </p>
          <p className="text-xs font-semibold text-primary-dark mt-0.5">
            Step {currentStepNumber} of {totalSteps}: {currentStep.label}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-blue-500 transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Progress Pills with Navigation */}
        <div className="relative flex items-center justify-center mt-3">
          {canGoPrevious && (
            <button
              onClick={() => onOffsetChange("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md hover:border-gray-400 transition-all cursor-pointer"
              aria-label="Previous steps"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="flex items-center gap-2">
            {visibleSteps.map((step, index) =>
              step ? (
                <ProgressPill key={step.id} step={step} isMobile />
              ) : (
                <div key={`empty-${index}`} className="w-20 h-8" />
              ),
            )}
          </div>

          {canGoNext && (
            <button
              onClick={() => onOffsetChange("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center text-gray-600 shadow-sm hover:shadow-md hover:border-gray-400 transition-all cursor-pointer"
              aria-label="Next steps"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
