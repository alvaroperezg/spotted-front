import { useMutation } from "@tanstack/react-query";
import { setAlbumCoverPhoto } from "@/services/api/albums/coverPhoto";

export const useSetAlbumCoverPhoto = () => {
  return useMutation({
    mutationFn: ({ albumId, photoId }: { albumId: string; photoId: string }) =>
      setAlbumCoverPhoto(albumId, photoId),
  });
};