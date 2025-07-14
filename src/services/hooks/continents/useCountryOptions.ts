import { useContinents } from "@/services/hooks/continents/useContinents";

export const useCountryOptions = () => {
  const { data: continents = [] } = useContinents();

  const countryOptions = continents
    .flatMap((continent:any) =>
      continent.countries.map((country: any) => ({
        code: country.name.slice(0, 2).toUpperCase(),
        name: country.name,
      }))
    )
    .sort((a:any, b:any) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }));

  return countryOptions;
};