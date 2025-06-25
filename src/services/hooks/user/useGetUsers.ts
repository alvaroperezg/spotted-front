import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/api/user";
import type { UserPublicResponse } from "@/services/models/User";

export const useGetUsers = () =>
  useQuery<UserPublicResponse[]>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
