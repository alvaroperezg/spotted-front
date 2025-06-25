import { httpClient } from "../httpClient";
import type { UserDetail } from "@/services/models/User";

export const getMe = async (): Promise<UserDetail> => {
  const response = await httpClient.get("/api/v1/users/me");
  return response.data;
};