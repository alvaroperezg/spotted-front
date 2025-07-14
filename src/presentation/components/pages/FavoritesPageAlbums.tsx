import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { FavoriteCard } from "@/presentation/components/molecules/FavoriteCard"
import type { FavoriteAlbum } from "@/presentation/components/types/album"
import { useGetLikedPhotos } from "@/services/hooks/photos/usePhotoLikes"

export default function FavoritesPage() {
  const [showOnlyPurchased, setShowOnlyPurchased] = useState(false)
  const [albums, setAlbums] = useState<FavoriteAlbum[]>([
    {
      id: "1",
      title: "Perfect Barrel at Pipeline",
      photographer: "John Doe",
      price: 25.99,
      isPurchased: true,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      title: "Sunset Cutback at Malibu",
      photographer: "Mike Kelly",
      price: 19.99,
      isPurchased: false,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      title: "Perfect Barrel at Pipeline",
      photographer: "John Doe",
      price: 25.99,
      isPurchased: true,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      title: "Sunset Cutback at Malibu",
      photographer: "Mike Kelly",
      price: 19.99,
      isPurchased: false,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "5",
      title: "Perfect Barrel at Pipeline",
      photographer: "John Doe",
      price: 25.99,
      isPurchased: true,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "6",
      title: "Sunset Cutback at Malibu",
      photographer: "Mike Kelly",
      price: 19.99,
      isPurchased: false,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "7",
      title: "Perfect Barrel at Pipeline",
      photographer: "John Doe",
      price: 25.99,
      isPurchased: true,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "8",
      title: "Sunset Cutback at Malibu",
      photographer: "Mike Kelly",
      price: 19.99,
      isPurchased: false,
      imageUrl: "/placeholder.svg?height=200&width=200",
    },
  ])
  const { data: likedPhotos} = useGetLikedPhotos();
  console.log(likedPhotos)
  const handleBuy = (id: string) => {
    setAlbums(
      albums.map((album) => {
        if (album.id === id) {
          return { ...album, isPurchased: true }
        }
        return album
      }),
    )
  }

  const toggleFilter = () => {
    setShowOnlyPurchased(!showOnlyPurchased)
  }

  const filteredAlbums = showOnlyPurchased ? albums.filter((album) => album.isPurchased) : albums

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tus álbumes favoritos</h1>
        <Button variant="outline" onClick={toggleFilter} className="text-gray-600 hover:text-gray-800">
          {showOnlyPurchased ? "Mostrar todos" : "Filtrar descargados"}
        </Button>
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAlbums.map((album) => (
          <FavoriteCard key={album.id} album={album} onBuy={handleBuy} />
        ))}
      </div>

      {/* Empty State */}
      {filteredAlbums.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tienes álbumes favoritos</p>
        </div>
      )}
    </div>
  )
}
