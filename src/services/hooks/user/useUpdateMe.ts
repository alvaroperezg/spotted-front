import { useMutation } from "@tanstack/react-query";
import { updateMe } from "@/services/api/user";
import type { UserUpdateMe, UserDetail } from "@/services/models/User";

export const useUpdateMe = () =>
  useMutation<UserDetail, Error, UserUpdateMe>({
    mutationFn: updateMe,
  });
