import { useNavigate } from "react-router-dom"
import { Button } from '@/presentation/components/atoms/Button'
import { AlbumCard } from '@/presentation/components/molecules/AlbumCard'
import { useEnrichedAlbums } from "@/services/hooks/albums/useEnrichedAlbums"

export function GallerySection() {
  const navigate = useNavigate()
  const { albums } = useEnrichedAlbums()

  const recentAlbums = [...albums]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

  const navAlbums = () => {
    navigate(`/albumes/`)
  }

  return (
    <section className="px-6 py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Álbumes recientes</h2>
        <p className="text-gray-600 mb-6">Discover the latest surf photography from around the world</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {recentAlbums.map((album:any) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              imageSrc={album.coverImage}
              location={`${album.location.spot}, ${album.location.region}, ${album.location.country}`}
              date={new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(new Date(album.date))}
              userId={album.user_id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 pt-10">
        <Button onClick={navAlbums} variant="outline">Ver todos los álbumes</Button>
      </div>
    </section>
  )
}
