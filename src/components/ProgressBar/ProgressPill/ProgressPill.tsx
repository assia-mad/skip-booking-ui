import { Check } from "lucide-react";
import { type FC } from "react";

import { cn } from "@/utils/cn";
import { type IProgressStep } from "@/types";
import * as styles from "./ProgressPill.styles";

interface ProgressPillProps {
  step: IProgressStep;
  isMobile?: boolean;
}

export const ProgressPill: FC<ProgressPillProps> = ({
  step,
  isMobile = false,
}) => {
  const variant = isMobile ? "mobile" : "desktop";

  return (
    <div
      className={cn(
        styles.base,
        styles.size[variant],
        styles.status[step.status][variant],
      )}
    >
      {/* Completed step indicators */}
      {step.status === "completed" &&
        (isMobile ? (
          <span className={styles.checkMobile}>✓</span>
        ) : (
          <div className={styles.checkContainer}>
            <Check className={styles.checkIcon} strokeWidth={3} />
          </div>
        ))}

      {/* Current step dot for desktop */}
      {step.status === "current" && !isMobile && (
        <div className={styles.currentDot} />
      )}

      {/* Step number for upcoming/current in mobile */}
      {step.status !== "completed" && isMobile && (
        <span className={styles.stepNumber}>{step.id}</span>
      )}

      <span className="truncate">{step.label}</span>
    </div>
  );
};
