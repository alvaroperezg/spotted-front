import { useNavigate } from "react-router-dom"
import { Calendar, Eye, MapPin, Star, ImageIcon } from "lucide-react"
import type { Photographer } from "@/presentation/components/types/photographer.ts"

interface BookingSessionCardProps {
  photographer: Photographer
}

export function BookingSessionCard({ photographer }: BookingSessionCardProps) {
  const navigate = useNavigate()

  const goToAlbums = (photographerId: number) => {
    navigate(`/albumes?id=${photographerId}`)
  }
  return (
    <div onClick={() => goToAlbums(photographer.id)} className="bg-gray-100 rounded-lg overflow-hidden">
      {/* Photographer Image */}
      <div className="relative h-[20rem] bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
        <ImageIcon className="h-8 w-8 text-white opacity-50" />

        {photographer.online && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Online
          </div>
        )}

        {/* Photographer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center mb-1">
            <div className="h-10 w-10 rounded-full bg-white mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium">{photographer.name}</h3>
              <div className="flex items-center text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{photographer.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photographer Details */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-medium mr-2">{photographer.rating}</span>
            <span className="text-gray-500 text-sm">• {photographer.albums} albums</span>
          </div>
          <div className="font-bold text-gray-900">{photographer.price}</div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {photographer.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-md ${
                tag === "Big Wave"
                  ? "bg-blue-100 text-blue-700"
                  : tag === "Aerial"
                  ? "bg-gray-100 text-gray-700"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{photographer.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 flex-1">
            <Eye className="h-4 w-4 mr-2" />
            View Portfolio
          </button>
          <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex-1">
            <Calendar className="h-4 w-4 mr-2" />
            Book Session
          </button>
        </div>
      </div>
    </div>
  )
}
