import { useEffect, useState } from "react";
import { getSurfBreaksByRegion } from "@/services/api/continents/getSurfBreaksByRegion";

export const useSurfBreakMap = (
  albums: any[],
  getContinentIdByCountryId: (countryId: string) => string | null
) => {
  const [surfBreakMap, setSurfBreakMap] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const loadSurfBreaks = async () => {
      const seen = new Set<string>();
      const newMap = new Map<string, string>();

      for (const album of albums) {
        const continentId = getContinentIdByCountryId(album.country_id);
        const key = `${continentId}-${album.country_id}-${album.region_id}`;

        if (!continentId || seen.has(key)) continue;
        seen.add(key);

        try {
          const data = await getSurfBreaksByRegion(continentId, album.country_id, album.region_id);
          for (const breakSpot of data) {
            newMap.set(breakSpot.id, breakSpot.name);
          }
        } catch (err) {
          console.warn("Error loading surf breaks for", key, err);
        }
      }

      setSurfBreakMap(newMap);
    };

    if (albums.length > 0) {
      loadSurfBreaks();
    }
  }, [albums, getContinentIdByCountryId]);

  return surfBreakMap;
};
