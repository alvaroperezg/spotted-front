import { httpClient } from "../httpClient";
import type { UserUpdateMe, UserDetail } from "@/services/models/User";

export const updateMe = async (data: UserUpdateMe): Promise<UserDetail> => {
  const response = await httpClient.patch("/api/v1/users/me", data);
  return response.data;
};