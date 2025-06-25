import { Eye, Heart, ShoppingBag, MapPin, Pencil, EyeIcon } from "lucide-react"
import { Button } from '@/presentation/components/atoms/Button';
import { Badge } from '@/presentation/components/atoms/Badge';
// import { cn } from "@/presentation/components/lib/utils"

type Props = {
  title: string
  location: string
  image?: string
  views: number
  likes: number
  sales: number
  status: "Published" | "Draft"
}

export const AlbumManageCard = ({
  title,
  location,
  image,
  views,
  likes,
  sales,
  status,
}: Props) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm flex flex-col">
      {/* Imagen */}
      <div className="relative h-40 bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-muted-foreground text-xs">Sin imagen</span>
        )}
        <Badge className="absolute top-3 right-3 bg-green-100 text-green-700">
          {status}
        </Badge>
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-sm text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>

        {/* Métricas */}
        <div className="flex justify-between text-xs text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {views} Views
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3" />
            {likes} Likes
          </div>
          <div className="flex items-center gap-1">
            <ShoppingBag className="h-3 w-3" />
            {sales} Sales
          </div>
        </div>

        {/* Acciones */}
        <div className="flex justify-between gap-2 mt-auto">
          <Button variant="outline" size="sm" className="w-full">
            <EyeIcon className="h-4 w-4 mr-1" />
            View
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <Pencil className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}
