import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/services/api/user";
import type { UserCreate, UserCreateResponse } from "@/services/models/User";

export const useCreateUser = () =>
  useMutation<UserCreateResponse, Error, UserCreate>({
    mutationFn: createUser,
  });
