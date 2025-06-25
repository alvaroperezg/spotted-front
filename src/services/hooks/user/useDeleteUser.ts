import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "@/services/api/user";

export const useDeleteUser = (userId: string) =>
  useMutation({
    mutationFn: () => deleteUser(userId),
  });
