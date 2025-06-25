import { useMutation } from "@tanstack/react-query";
import { createPhotographerProfile } from "@/services/api/user";
import type { PhotographerProfileCreate, PhotographerProfileResponse } from "@/services/models/Photographer";

export const useCreatePhotographerProfile = (userId: string) =>
  useMutation<PhotographerProfileResponse, Error, PhotographerProfileCreate>({
    mutationFn: (data) => createPhotographerProfile(userId, data),
  });
