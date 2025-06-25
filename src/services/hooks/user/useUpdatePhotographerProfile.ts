import { useMutation } from "@tanstack/react-query";
import { updatePhotographerProfile } from "@/services/api/user";
import type { PhotographerProfileUpdate, PhotographerProfileResponse } from "@/services/models/Photographer";

export const useUpdatePhotographerProfile = (userId: string) =>
  useMutation<PhotographerProfileResponse, Error, PhotographerProfileUpdate>({
    mutationFn: (data) => updatePhotographerProfile(userId, data),
  });
