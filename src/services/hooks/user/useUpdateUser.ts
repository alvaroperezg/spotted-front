import { useMutation } from "@tanstack/react-query";
import { updateUser } from "@/services/api/user";
import type { UserUpdate, UserDetail } from "@/services/models/User";

export const useUpdateUser = (userId: string) =>
  useMutation<UserDetail, Error, UserUpdate>({
    mutationFn: (data) => updateUser(userId, data),
  });
