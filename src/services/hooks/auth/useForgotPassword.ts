import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/services/api/auth/auth";
import type { ForgotPasswordRequest } from "@/services/models/Auth";

export const useForgotPassword = () =>
  useMutation<void, Error, ForgotPasswordRequest>({
    mutationFn: forgotPassword,
  });
