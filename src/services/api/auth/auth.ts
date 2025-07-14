import { httpClient } from "@/services/api/httpClient";
import type { LoginRequest,LoginResponse,RefreshTokenRequest,RefreshTokenResponse,ForgotPasswordRequest,ResetPasswordRequest } from "@/services/models/Auth";

export const login = (data: LoginRequest) =>
  httpClient.post<LoginResponse>("/api/v1/auth/login", data).then(res => res.data);

export const refreshToken = (data: RefreshTokenRequest) =>
  httpClient.post<RefreshTokenResponse>("/api/v1/auth/refresh", data).then(res => res.data);

export const forgotPassword = (data: ForgotPasswordRequest) =>
  httpClient.post<void>("/api/v1/auth/forgot-password", data).then(res => res.data);

export const resetPassword = (data: ResetPasswordRequest) =>
  httpClient.post<void>("/api/v1/auth/reset-password", data).then(res => res.data);
