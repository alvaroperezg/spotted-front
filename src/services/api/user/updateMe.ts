import { httpClient } from "../httpClient";
import type { MeUpdate, UserDetail } from "@/services/models/User";

export const updateMe = async (data: MeUpdate): Promise<UserDetail> => {
  const response = await httpClient.patch("/api/v1/users/me", data);
  return response.data;
};