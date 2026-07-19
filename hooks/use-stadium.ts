import { useState, useEffect } from "react";
import { StadiumData } from "@/types";
import { fetchStadiumData } from "@/services/api";

export function useStadium(stadiumId: string) {
  const [data, setData] = useState<StadiumData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    setLoading(true);
    fetchStadiumData(stadiumId).then((res) => {
      if (mounted) {
        setData(res);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [stadiumId]);

  return { data, loading };
}
