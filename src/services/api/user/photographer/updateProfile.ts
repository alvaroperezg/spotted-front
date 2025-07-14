import { httpClient } from "../../httpClient";
import type { PhotographerProfileUpdate, PhotographerProfileResponse } from "@/services/models/Photographer";

export const updatePhotographerProfile = async (
  userId: string,
  data: PhotographerProfileUpdate
): Promise<PhotographerProfileResponse> => {
  const response = await httpClient.patch(`/api/v1/users/${userId}/photographer_profile`, data);
  return response.data;
};