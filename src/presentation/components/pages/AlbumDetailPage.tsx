import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Heart, ShoppingCart, MapPin, Clock, ArrowLeft, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Button } from "@/presentation/components/atoms/Button"
import { Skeleton } from "@/presentation/components/atoms/Skeleton"
import { PhotoModal } from "@/presentation/components/molecules/PhotoModal"
import { HeaderAlbums } from "@/presentation/components/organisms/HeaderAlbums"
import { useAlbumPhotos } from "@/services/hooks/albums/useAlbumPhotos"
import { useGetAlbum } from "@/services/hooks/albums/useGetAlbum"
import { useGeographicNames } from "@/services/hooks/continents/useGeographicNames";
import { useTogglePhotoLike } from "@/services/hooks/photos/usePhotoLikes";
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";
import { useGetUser } from "@/services/hooks/user/useGetUser";
import type { PhotoResponse } from "@/services/models/Photo";

export default function AlbumDetailPage() {
  const { id } = useParams()
  const { data: album, error } = useGetAlbum(id!, true);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoResponse | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: photos = [], isLoading } = useAlbumPhotos(id!)
  const { handleToggleLike } = useTogglePhotoLike();
  const photoIds = useOrderStore((state) => state.photoIds)
  const togglePhoto = useOrderStore((state) => state.togglePhoto)

  const albumData = album?.data;
  const { countryName, regionName } = useGeographicNames(
    albumData?.country_id,
    albumData?.region_id
  );
  const { data: user } = useGetUser(albumData?.user_id);
  const openPhoto = (photo: PhotoResponse) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }
  
  return (
    <div>
      <HeaderAlbums/>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="p-6 mx-20">
          {/* Header */}
          <div className="mb-8">
            <Link to="/albumes" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Volver a álbumes
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Album {albumData?.title || "?"}</h1>
                <div className="flex items-center text-gray-600 text-sm mt-2 sm:mt-0">
                  <MapPin className="w-4 h-4 mr-1" />
                  {regionName}, {countryName}
                  <span className="mx-2">•</span>
                  <span>{albumData?.date ? new Intl.DateTimeFormat("es-ES", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric"
                    }).format(new Date(albumData.date)) : "?"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-64 rounded-xl" />
              ))}
            </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((photo:any) => (
                  <Card key={photo.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3] bg-muted">
                      <img
                        src={
                          photo.thumbnail_url ||
                          `https://storage.googleapis.com/spotted-pre-photos/albums/${photo.album_id}/thumbnail/${photo.id}.png`
                        }
                        alt="Foto"
                        onClick={() => openPhoto(photo)}
                        className="object-cover w-full h-full cursor-pointer"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button variant="secondary" size="icon" onClick={(e) => handleToggleLike(e, photo)}>
                        <Heart
                          className={`w-4 h-4 transition-colors duration-200 ${
                            photo.is_liked ? "text-red-500 fill-red-500" : "text-gray-400"
                          }`}
                        />
                        </Button>
                        <Button variant="secondary" size="icon" onClick={() => togglePhoto(photo, albumData)}>
                          {photoIds.includes(photo.id) ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <ShoppingCart className="w-4 h-4" />
                            )}
                        </Button>
                      </div>
                    </div>
                    <CardContent className="py-3">
                      <div className="flex items-center justify-between text-sm font-medium text-foreground">
                        <span>Foto</span>
                        <span>{photo?.price || "€8.05"}</span>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {photo?.photo_metadata?.timestamp || "Sin hora"}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
        </div>
      </div>
      {selectedPhoto && (
        <PhotoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          // photo={{
          //   id: selectedPhoto.id,
          //   price: selectedPhoto.price || "8.05€",
          //   title: selectedPhoto.title,
          //   image: selectedPhoto.thumbnail_url! || "",
          //   author: user?.username || "?",
          //   time: albumData?.date ? new Intl.DateTimeFormat("es-ES", {
          //     day: "2-digit",
          //     month: "2-digit",
          //     year: "numeric"
          //   }).format(new Date(albumData.date)) : "?"
          // }}
          photo={selectedPhoto}
          album={albumData}
        />
      )}
    </div>
    
  )
}
