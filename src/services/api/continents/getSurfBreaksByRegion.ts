import { httpClient } from "../httpClient";

export const getSurfBreaksByRegion = async (
  continentId: string,
  countryId: string,
  regionId: string
) => {
  const { data } = await httpClient.get(
    `/api/v1/continents/${continentId}/countries/${countryId}/regions/${regionId}/surf_breaks`
  );
  return data;
};
