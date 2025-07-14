import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAlbum, updateAlbum, getAlbums, setAlbumCover, deleteAlbum } from "../../api/albums/album";
import type { AlbumUpdate } from "../../models/Album";

export const useCreateAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAlbum,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["albums"] }),
  });
};

export const useAlbums = (user_id?: string) => {
  return useQuery({
    queryKey: ["albums", user_id],
    queryFn: () => getAlbums(user_id),
  })
}

export const useUpdateAlbum = () => {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: AlbumUpdate }) =>
      updateAlbum(id, data),
  });
};

export const useSetAlbumCover = () => {
  return useMutation({
    mutationFn:({ albumId, photoId }: { albumId: string; photoId: string }) =>
    setAlbumCover(albumId, photoId)
  });
}

export const useDeleteAlbum = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteAlbum,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums"] })
    },
  })
}