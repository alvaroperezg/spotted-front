import { httpClient } from "./httpClient"
import type * as UserModels from "../models/User"

interface GetUsersParams {
  surfer?: boolean
  photographer?: boolean
}

export const getUsers = async (params?: GetUsersParams): Promise<UserModels.UserPublicResponse[]> => {
  const response = await httpClient.get("/api/v1/users/", { params })
  return response.data
}

export const createUser = async (data: UserModels.UserCreate): Promise<UserModels.UserCreateResponse> => {
  const response = await httpClient.post("/api/v1/users/", data)
  return response.data
}