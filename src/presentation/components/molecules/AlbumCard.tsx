import { MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/presentation/components/atoms/Avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/presentation/components/atoms/Card"
import { useGetUser } from "@/services/hooks/user/useGetUser"
import { useAlbumPhotoCount } from "@/services/hooks/albums/useAlbumPhotoCount";
import { getInitials } from "@/presentation/components/lib/utils"

interface AlbumCardProps {
  id?: string
  title: string
  imageSrc: string
  location: string
  date: string
  userId: string
  navigateTo?: string
}

export function AlbumCard({
  id,
  title,
  imageSrc,
  location,
  date,
  userId
}: AlbumCardProps) {
  const navigate = useNavigate()
  const { data: user } = useGetUser(userId);
  const handleClick = () => {
    navigate(`/album/${id}`)
  }
  const { photoCount } = useAlbumPhotoCount(id!);

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
            <p className="text-sm text-slate-500">{photoCount} fotos</p>
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
            {user?.profile_picture ? (
              <AvatarImage src={user.profile_picture} alt={user.full_name} />
            ) : (
              <AvatarFallback className="text-sm text-sky-500 bg-sky-100">
                {getInitials(user?.full_name || user?.username || "")}
              </AvatarFallback>
            )}
          </Avatar>
          <span className="text-lg text-slate-600">{user?.username}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
