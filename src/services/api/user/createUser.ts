import { httpClient } from "../httpClient";
import type { UserCreate, UserCreateResponse } from "@/services/models/User";

export const createUser = async (data: UserCreate): Promise<UserCreateResponse> => {
  const response = await httpClient.post("/api/v1/users/", data);
  return response.data;
};