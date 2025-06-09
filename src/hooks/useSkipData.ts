import { useMemo } from "react";
import { useFetchSkips } from "./useFetchSkips";
import { processSkipData } from "@/utils";

export const useSkipData = (postcode: string, area: string) => {
  const { skips: rawSkips, loading, error } = useFetchSkips(postcode, area);

  const processedSkips = useMemo(() => {
    return rawSkips.map(processSkipData).sort((a, b) => a.size - b.size);
  }, [rawSkips]);

  return {
    skips: processedSkips,
    loading,
    error,
  };
};
