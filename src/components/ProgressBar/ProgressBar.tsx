import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMobileDetection } from "@/hooks";
import {
  getCurrentStep,
  getCurrentStepNumber,
  getVisibleSteps,
  canNavigateNext,
  canNavigatePrevious,
  BOOKING_STEPS,
} from "@/utils";

import { ProgressPill } from "./ProgressPill";
import * as styles from "./ProgressBar.styles";

export const ProgressBar: React.FC = () => {
  const isMobile = useMobileDetection();
  const [mobileOffset, setMobileOffset] = useState(0);

  const currentStep = getCurrentStep(BOOKING_STEPS);
  const currentStepNumber = getCurrentStepNumber(BOOKING_STEPS);
  const totalSteps = BOOKING_STEPS.length;
  const progressPercentage = (currentStepNumber / totalSteps) * 100;

  const visibleSteps = getVisibleSteps(
    BOOKING_STEPS,
    currentStepNumber,
    mobileOffset,
  );
  const canGoPrevious = canNavigatePrevious(currentStepNumber, mobileOffset);
  const canGoNext = canNavigateNext(
    currentStepNumber,
    mobileOffset,
    totalSteps,
  );

  const handlePrevious = () => setMobileOffset((prev) => prev - 1);
  const handleNext = () => setMobileOffset((prev) => prev + 1);

  return isMobile ? (
    <>
      <nav className={styles.container}>
        <div className={styles.mobileWrapper}>
          <div className={styles.mobileProgressBar}>
            <div
              className={styles.mobileProgressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className={styles.mobileStepWrapper}>
            {canGoPrevious && (
              <button
                onClick={handlePrevious}
                className={`${styles.mobileNavButton} ${styles.navButtonLeft}`}
                aria-label="Previous steps"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            )}

            <div className={styles.mobileStepList}>
              {visibleSteps.map((step, index) =>
                step ? (
                  <ProgressPill key={step.id} step={step} isMobile />
                ) : (
                  <div key={`empty-${index}`} className={styles.emptyPill} />
                ),
              )}
            </div>

            {canGoNext && (
              <button
                onClick={handleNext}
                className={`${styles.mobileNavButton} ${styles.navButtonRight}`}
                aria-label="Next steps"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className={styles.mobileInfoSection}>
        <p className={styles.mobileInfoLabel}>CURRENTLY ON</p>
        <p className={styles.mobileInfoStep}>
          Step {currentStepNumber} of {totalSteps}: {currentStep?.label}
        </p>
      </div>
    </>
  ) : (
    <nav className={styles.container}>
      <div className={styles.desktopWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className={styles.desktopStepList}>
          {BOOKING_STEPS.map((step) => (
            <ProgressPill key={step.id} step={step} />
          ))}
        </div>

        <div className={styles.desktopStatus}>
          <p className={styles.statusLabel}>Currently on</p>
          <p className={styles.statusValue}>
            Step {currentStepNumber} of {totalSteps}: {currentStep?.label}
          </p>
        </div>
      </div>
    </nav>
  );
};
