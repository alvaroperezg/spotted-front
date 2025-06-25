import { useMutation } from "@tanstack/react-query";
import { deletePhotographerProfile } from "@/services/api/user";

export const useDeletePhotographerProfile = (userId: string) =>
  useMutation({
    mutationFn: () => deletePhotographerProfile(userId),
  });
