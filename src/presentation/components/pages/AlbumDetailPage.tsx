import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Heart, ShoppingCart, MapPin, Clock, ArrowLeft } from "lucide-react"
import { HeaderAlbums } from "@/presentation/components/organisms/HeaderAlbums"
import { PhotoModal } from "@/presentation/components/molecules/PhotoModal"
import type { Photo } from "@/presentation/components/types/photo"

export default function AlbumDetailPage() {
  const { id } = useParams()
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Surf Photo ${i + 1}`,
    price: "€ 8.05",
    time: "08:20 AM",
    image: "/placeholder.svg",
  }))

  const openPhoto = (photo: Photo) => {
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
              Back to albums
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <h1 className="text-3xl font-bold text-gray-900">Album Sesión {id}</h1>
                <div className="flex items-center text-gray-600 text-sm mt-2 sm:mt-0">
                  <MapPin className="w-4 h-4 mr-1" />
                  California USA
                  <span className="mx-2">•</span>
                  <span>dd/mm/aaaa</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full h-10 w-10 object-cover"
                />
                <span className="font-medium text-gray-900">John Doe</span>
              </div>
            </div>
          </div>

          {/* Viewing text */}
          <div className="mb-6">
            <p className="text-gray-700">Viewing photos from the album</p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <img src={photo.image} alt={photo.title} onClick={() => openPhoto(photo)} className="object-cover h-full w-full" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <ShoppingCart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{photo.title}</h3>
                    <span className="font-semibold text-gray-900">{photo.price}</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {photo.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPhoto && (
        <PhotoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          photo={{
            title: selectedPhoto.title,
            subtitle: "Aerial maneuver",
            image: selectedPhoto.image,
            author: "Alex Johnson",
            time: selectedPhoto.time
          }}
        />
      )}
    </div>
    
  )
}
