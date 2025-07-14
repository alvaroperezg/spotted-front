import { useQuery } from "@tanstack/react-query"
import { getPhotosByAlbum } from "@/services/api/albums/getPhotosByAlbum"

export const useAlbumPhotos = (albumId: string) => {
  return useQuery({
    queryKey: ["albumPhotos", albumId],
    queryFn: () => getPhotosByAlbum(albumId),
    enabled: !!albumId,
  })
}