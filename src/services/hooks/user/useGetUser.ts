import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/api/user";
import type { UserDetail } from "@/services/models/User";

export const useGetUser = (userId: string) =>
  useQuery<UserDetail>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });
