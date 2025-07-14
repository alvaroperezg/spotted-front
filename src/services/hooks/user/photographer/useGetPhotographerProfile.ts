import { useQuery } from "@tanstack/react-query";
import { getPhotographerProfile } from "@/services/api/user";
import type { PhotographerProfileResponse } from "@/services/models/Photographer";

export const useGetPhotographerProfile = (userId: string) =>
  useQuery<PhotographerProfileResponse>({
    queryKey: ["photographerProfile", userId],
    queryFn: () => getPhotographerProfile(userId),
  });
