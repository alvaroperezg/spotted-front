import { AlbumCard } from '@/presentation/components/molecules/AlbumCard'
import { Button } from '@/presentation/components/atoms/Button'
import { useNavigate } from "react-router-dom"

export function GallerySection() {
  const navigate = useNavigate()

  const navAlbums = () => {
    navigate(`/albumes/`)
  }
  return (
    <section className="px-6 py-12 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Álbumes recientes</h2>
        <p className="text-gray-600 mb-6">Discover the latest surf photography from around the world</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image1.png'
            />
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image2.png'
            />
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image3.png'
            />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image4.png'
            />
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image5.png'
            />
          <AlbumCard
            title="Playa Hermosa"
            location="Costa Rica"
            date="05/06/2025"
            photoCount={30}
            userName='Lola Wave'
            imageSrc='/images/image6.png'
            />
        </div>
      </div>
      <div className="flex justify-center space-x-4 pt-10">
        <Button onClick={navAlbums} variant="outline">Ver todos los álbumes</Button>
      </div>
    </section>
  )
}
