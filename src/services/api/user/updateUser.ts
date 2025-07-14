import { httpClient } from "../httpClient";
import type { UserUpdate, UserDetail } from "@/services/models/User";

export const updateUser = async (userId: string, data: UserUpdate): Promise<UserDetail> => {
  const response = await httpClient.patch(`/api/v1/users/${userId}`, data);
  return response.data;
};