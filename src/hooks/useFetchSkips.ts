import { useEffect, useState } from "react";
import { api } from "@/services";
import type { ISkip } from "@/types";

export const useFetchSkips = (postcode: string, area: string) => {
  const [skips, setSkips] = useState<ISkip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await api.get(`/skips/by-location`, {
          params: { postcode, area },
        });
        setSkips(res.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch skip data");
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};
