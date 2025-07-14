import { httpClient } from "../../httpClient";
import type { PhotographerProfileResponse } from "@/services/models/Photographer";

export const getPhotographerProfile = async (
  userId: string
): Promise<PhotographerProfileResponse> => {
  const response = await httpClient.get(`/api/v1/users/${userId}/photographer_profile`);
  return response.data;
};