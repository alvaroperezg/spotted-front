import { useMutation } from "@tanstack/react-query";
import { refreshToken } from "@/services/api/auth";
import type { RefreshTokenRequest, RefreshTokenResponse } from "@/services/models/Auth";

export const useRefreshToken = () =>
  useMutation<RefreshTokenResponse, Error, RefreshTokenRequest>({
    mutationFn: refreshToken,
  });
