import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "@/presentation/components/atoms/Card"
import { Avatar, AvatarImage, AvatarFallback } from "@/presentation/components/atoms/Avatar"
import { MapPin, Calendar } from "lucide-react"

interface AlbumCardProps {
  id?: string
  title: string
  imageSrc: string
  location: string
  date: string
  photoCount: number
  userName: string
  avatar?: string
  navigateTo?: string
}

export function AlbumCard({
  id,
  title,
  imageSrc,
  location,
  date,
  photoCount,
  userName,
  avatar,
}: AlbumCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/album/${id}`)
  }

  // Generar iniciales dinámicamente desde el nombre
  const getInitials = (name: string) => {
    const words = name.trim().split(" ")
    if (words.length === 0) return "?"
    if (words.length === 1) return words[0][0].toUpperCase()
    return (words[0][0] + words[1][0]).toUpperCase()
  }

  return (
    <Card className="w-full  overflow-hidden rounded-xl cursor-pointer hover:shadow-md transition-shadow" onClick={handleClick}>
      {/* Imagen principal */}
      <div className="relative h-64 w-full">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Cabecera */}
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
          <div className="text-right">
            <p className="text-lg font-medium text-sky-500">{date}</p>
            <p className="text-sm text-slate-500">{photoCount} photos</p>
          </div>
        </div>
      </CardHeader>

      {/* Ubicación */}
      <CardContent className="pb-2">
        <div className="flex items-center text-sky-500">
          <MapPin className="mr-1 h-5 w-5" />
          <span>{location}</span>
        </div>
      </CardContent>

      {/* Avatar del usuario */}
      <CardFooter className="border-t border-slate-100 pt-4">
        <div className="flex items-center">
          <Avatar className="mr-3 h-10 w-10">
            <AvatarImage src={avatar || ""} alt={userName} />
            <AvatarFallback className="text-sm text-sky-500 bg-sky-100">
              {getInitials(userName)}
            </AvatarFallback>
          </Avatar>
          <span className="text-lg text-slate-600">{userName}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
