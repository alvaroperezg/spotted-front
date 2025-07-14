import { useQuery } from "@tanstack/react-query";
import { getContinents } from "@/services/api/continents/getContinents";

export const useContinents = () => {
  return useQuery({
    queryKey: ["continents"],
    queryFn: getContinents,
  });
};
