import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/api/auth";
import type { LoginRequest, LoginResponse } from "@/services/models/Auth";

export const useLogin = () =>
  useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: login,
  });
