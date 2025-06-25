import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/services/api/user";
import type { UserDetail } from "@/services/models/User";

export const useGetMe = () =>
  useQuery<UserDetail>({
    queryKey: ["me"],
    queryFn: getMe,
  });
