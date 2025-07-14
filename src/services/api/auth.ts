import { httpClient } from "./httpClient"

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
  token_type: string
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await httpClient.post("/api/v1/auth/login", data)
  return response.data
}
