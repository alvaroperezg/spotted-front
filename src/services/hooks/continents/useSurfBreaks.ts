import { useQuery } from "@tanstack/react-query";
import { getSurfBreaksByRegion } from "@/services/api/continents/getSurfBreaksByRegion";

export const useSurfBreaks = (
  continentId: string,
  countryId: string,
  regionId: string,
  enabled = false
) => {
  return useQuery({
    queryKey: ["surfBreaks", continentId, countryId, regionId],
    queryFn: () => getSurfBreaksByRegion(continentId, countryId, regionId),
    enabled: !!continentId && !!countryId && !!regionId,
  });
};
