import { httpClient } from "../httpClient";

export const getContinents = async () => {
  const { data } = await httpClient.get("/api/v1/continents/");
  return data;
};
