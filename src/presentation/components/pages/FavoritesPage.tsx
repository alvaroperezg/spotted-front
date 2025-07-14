import { useGetLikedPhotos } from "@/services/hooks/photos/usePhotoLikes"
import PhotoGridPage from "./PhotoGridPage"

export default function FavoritesPage() {
  const { data: likedPhotos } = useGetLikedPhotos()
  return (
    <PhotoGridPage
      title="Tus fotos favoritas"
      photos={likedPhotos?.items ?? []}
    />
  )
}
