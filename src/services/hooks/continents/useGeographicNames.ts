import { useContinents } from "@/services/hooks/continents/useContinents";

export const useGeographicNames = (
  countryId?: string,
  regionId?: string
) => {
  const { data: continents = [], isLoading } = useContinents();

  if (isLoading) {
    return { continentName: "", countryName: "", regionName: "", isLoading: true };
  }

  let continentName = "";
  let countryName = "";
  let regionName = "";

  for (const continent of continents) {
    const country = continent.countries.find((co: any) => co.id === countryId);
    if (country) {
      continentName = continent.name;
      countryName = country.name;
      const region = country.regions.find((r: any) => r.id === regionId);
      if (region) {
        regionName = region.name;
      }
      break;
    }
  }

  return { continentName, countryName, regionName, isLoading: false };
};
