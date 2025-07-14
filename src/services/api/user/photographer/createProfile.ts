import { httpClient } from "../../httpClient";
import type { PhotographerProfileCreate, PhotographerProfileResponse } from "@/services/models/Photographer";

export const createPhotographerProfile = async (
  userId: string,
  data: PhotographerProfileCreate
): Promise<PhotographerProfileResponse> => {
  const response = await httpClient.post(`/api/v1/users/${userId}/photographer_profile`, data);
  return response.data;
};