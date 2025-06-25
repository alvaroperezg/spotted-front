import { httpClient } from "../httpClient";

export const deleteUser = async (userId: string): Promise<void> => {
  await httpClient.delete(`/api/v1/users/${userId}`);
};