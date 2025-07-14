import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { FavoriteCard } from "@/presentation/components/molecules/PhotoGridCard"
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";

interface PhotoGridPageProps {
  title: string
  photos: any[] 
}

export default function PhotoGridPage({ title, photos }: PhotoGridPageProps) {
  const [showOnlyPurchased, setShowOnlyPurchased] = useState(false)
  const photoIds = useOrderStore((state) => state.photoIds)
  const togglePhoto = useOrderStore((state) => state.togglePhoto)

  const toggleFilter = () => {
    setShowOnlyPurchased(!showOnlyPurchased)
  }

  const filteredPhotos = showOnlyPurchased
    ? photos.filter((photo) => photo.access_granted)
    : photos

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <Button
          variant="outline"
          onClick={toggleFilter}
          className="text-gray-600 hover:text-gray-800"
        >
          {showOnlyPurchased ? "Mostrar todos" : "Filtrar descargados"}
        </Button>
      </div>

      {/* Grid de fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <FavoriteCard key={photo.id} photo={photo} onBuy={togglePhoto} />
        ))}
      </div>

      {/* Empty state */}
      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay fotos para mostrar</p>
        </div>
      )}
    </div>
  )
}