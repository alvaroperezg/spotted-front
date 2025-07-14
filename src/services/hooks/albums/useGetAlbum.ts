import { useQuery } from "@tanstack/react-query"
import { getAlbum } from "@/services/api/albums/album"

export const useGetAlbum = (albumId: string, enabled = true) => {
  return useQuery({
    queryKey: ["album_id", albumId],
    queryFn: () => getAlbum(albumId),
    enabled: enabled && !!albumId,
  })
}
