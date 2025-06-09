import type { FC } from "react";
import { Check } from "lucide-react";
import type { IProgressStep } from "@/types";

interface ProgressPillProps {
  step: IProgressStep;
  isMobile?: boolean;
}

export const ProgressPill: FC<ProgressPillProps> = ({
  step,
  isMobile = false,
}) => {
  const baseClasses = isMobile
    ? "px-4 py-2 text-sm rounded-full border font-medium transition-all duration-200"
    : "px-5 py-2.5 text-base rounded-full border font-semibold transition-all duration-200 flex items-center gap-2";

  const statusClasses =
    step.status === "completed"
      ? "bg-accent-yellow text-primary-dark border-accent-yellow hover:scale-105 shadow-sm"
      : step.status === "current"
        ? "bg-accent-blue text-white border-accent-blue shadow-md scale-105"
        : "bg-white text-gray-500 border-accent-light shadow-sm";

  const fontClass = "font-sans"; //Inter

  return (
    <div className={`${baseClasses} ${statusClasses} ${fontClass}`}>
      <span className="flex items-center gap-2">
        {step.status === "completed" && (
          <Check className="w-4 h-4" strokeWidth={3} />
        )}

        {step.status === "current" && !isMobile && (
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        )}

        <span className="truncate">{step.label}</span>
      </span>
    </div>
  );
};
