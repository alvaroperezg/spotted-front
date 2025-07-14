import { X, Heart, ShoppingCart, Clock, User } from "lucide-react"
import { useTogglePhotoLike } from "@/services/hooks/photos/usePhotoLikes";
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";
import type { PhotoResponse } from "@/services/models/Photo";
import type { AlbumResponse } from "@/services/models/Album";

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  photo: PhotoResponse
  album: AlbumResponse
}

export function PhotoModal({ isOpen, onClose, photo, album }: PhotoModalProps) {
  if (!isOpen) return null
  const { handleToggleLike } = useTogglePhotoLike();
  const togglePhoto = useOrderStore((state) => state.togglePhoto)
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl relative">
        {/* Close button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">{album.title}</h2>
          {/* {album.description && <p className="text-sm text-gray-500 mb-4">{album.description}</p>} */}

          <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={photo.thumbnail_url}
              alt={album.title}
              className="object-contain max-h-[400px] w-full"
            />
          </div>

          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 gap-3">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              <span>{album.user_id}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{album.date ? new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              }).format(new Date(album.date)) : "?"}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-100" onClick={(e) => handleToggleLike(e, photo)}>
                <Heart className="w-4 h-4" />
                Añadir a favoritos
              </button>
              <button className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-100" onClick={() => togglePhoto(photo, album)}>
                <ShoppingCart className="w-4 h-4" />
                Añadir al carrito 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
