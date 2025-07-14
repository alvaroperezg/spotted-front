import { MessageCircle } from "lucide-react"
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent } from "@/presentation/components/atoms/Card"

interface PhotographerCardProps {
  id: string
  name: string
  location: string
  imageUrl: string
  onProfileClick?: (id: string) => void
  onChatClick?: (id: string) => void
}

export default function PhotographerCard({
  id,
  name,
  location,
  imageUrl,
  onProfileClick,
  onChatClick,
}: PhotographerCardProps) {
  return (
    <Card className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Photographer Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} - Photographer`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <CardContent className="p-4">
        {/* Name */}
        <h3 className="font-semibold text-blue-600 mb-1">{name}</h3>

        {/* Location */}
        <p className="text-blue-500 text-sm mb-4">{location}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            onClick={() => onProfileClick?.(id)}
          >
            Profile
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            onClick={() => onChatClick?.(id)}
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
