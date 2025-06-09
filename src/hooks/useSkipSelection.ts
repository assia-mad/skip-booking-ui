import { useState } from "react";
import { IProcessedSkip } from "@/types";

export const useSkipSelection = () => {
  const [selectedSkip, setSelectedSkip] = useState<IProcessedSkip | null>(null);

  const selectSkip = (skip: IProcessedSkip) => {
    setSelectedSkip(skip);
  };

  const clearSelection = () => {
    setSelectedSkip(null);
  };

  return {
    selectedSkip,
    selectSkip,
    clearSelection,
  };
};
