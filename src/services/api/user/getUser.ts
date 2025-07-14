import { httpClient } from "../httpClient";
import type { UserDetail } from "@/services/models/User";

export const getUser = async (userId: string): Promise<UserDetail> => {
  const response = await httpClient.get(`/api/v1/users/${userId}`);
  return response.data;
};