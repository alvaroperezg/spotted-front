import { useNavigate } from "react-router-dom"
import PhotographerCard from "@/presentation/components/molecules/PhotographerCard"
import { Button } from "@/presentation/components/atoms/Button"

interface Photographer {
  id: string
  name: string
  location: string
  imageUrl: string
}

interface PhotographerSectionProps {
  photographers?: Photographer[]
  onDiscoverMore?: () => void
  onProfileClick?: (id: string) => void
  onChatClick?: (id: string) => void
}

export function PhotographerSection({
  photographers = [],
  onDiscoverMore,
  onProfileClick,
  onChatClick,
}: PhotographerSectionProps) {
  // Default photographers data if none provided
  const defaultPhotographers: Photographer[] = [
    {
      id: "1",
      name: "John Doe",
      location: "Pipeline, Hawaii",
      imageUrl: "/images//photog1.png",
    },
    {
      id: "2",
      name: "John Doe",
      location: "Pipeline, Hawaii",
      imageUrl: "/images//photog2.png",
    },
    {
      id: "3",
      name: "John Doe",
      location: "Pipeline, Hawaii",
      imageUrl: "/images//photog3.png",
    },
    {
      id: "4",
      name: "John Doe",
      location: "Pipeline, Hawaii",
      imageUrl: "/images//photog4.png",
    },
  ]

  const displayPhotographers = photographers.length > 0 ? photographers : defaultPhotographers
  const navigate = useNavigate()
  
  const handleDiscoverMore = () => {
    navigate("/fotografos")
  }
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Fotógrafos destacados</h1>
          <h3 className="text-blue-500 text-lg max-w-2xl mx-auto">
            Conoce a los talentosos fotógrafos que capturan los mejores momentos del surf en todo el mundo.
          </h3>
        </div>

        {/* Photographers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              id={photographer.id}
              name={photographer.name}
              location={photographer.location}
              imageUrl={photographer.imageUrl}
              onProfileClick={onProfileClick}
              onChatClick={onChatClick}
            />
          ))}
        </div>

        {/* Discover More Button */}
        <div className="text-center">
          <Button variant="outline" className="text-gray-600 hover:text-gray-800" onClick={handleDiscoverMore}>
            Descubrir más fotógrafos
          </Button>
        </div>
      </div>
    </section>
  )
}
