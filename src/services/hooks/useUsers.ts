import { useQuery, useMutation } from "@tanstack/react-query"
import { getUsers, createUser } from "../api/users"
import type * as UserModels from "../models/User"


export const useUsers = (params?: { surfer?: boolean; photographer?: boolean }) => {
  return useQuery<UserModels.UserPublicResponse[], Error>({
    queryKey: ["users", params],
    queryFn: () => getUsers(params),
  })
}

export const useCreateUser = () => {
  return useMutation<UserModels.UserCreateResponse, Error, UserModels.UserCreate>({
    mutationFn: createUser,
  })
}