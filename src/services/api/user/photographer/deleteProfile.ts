import { httpClient } from "../../httpClient";

export const deletePhotographerProfile = async (
  userId: string
): Promise<void> => {
  await httpClient.delete(`/api/v1/users/${userId}/photographer_profile`);
};