import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/services/api/auth/auth";
import type { ResetPasswordRequest } from "@/services/models/Auth";

export const useResetPassword = () =>
  useMutation<void, Error, ResetPasswordRequest>({
    mutationFn: resetPassword,
  });
