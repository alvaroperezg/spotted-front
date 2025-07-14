import { useMutation, useQuery } from "@tanstack/react-query";
import { uploadPhotos, getAlbumPhotos  } from "../../api/albums/album";

export const useUploadPhotos = () => {
  return useMutation({
    mutationFn: ({ albumId, formData }: { albumId: string; formData: FormData }) =>
      uploadPhotos(albumId, formData),
  });
};

export const useGetPhotos = (albumId?: string) =>
  useQuery({
    queryKey: ["album-photos", albumId],
    queryFn: () => getAlbumPhotos(albumId!),
    enabled: !!albumId, 
  });
