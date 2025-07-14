import { httpClient } from "../httpClient";
import type { UserPublicResponse } from "@/services/models/User";

export const getUsers = async (): Promise<UserPublicResponse[]> => {
  const response = await httpClient.get("/api/v1/users/");
  return response.data;
};