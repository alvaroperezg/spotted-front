import { Card, CardContent, CardFooter, CardHeader } from "@/presentation/components/atoms/Card"
import { Avatar, AvatarFallback } from "@/presentation/components/atoms/Avatar"
import { MapPin } from 'lucide-react'

interface ImageCardProps {
  title?: string
  location?: string
  date?: string
  photoCount?: number
  userName?: string
  userInitials?: string
  imageSrc?: string
}

export default function ImageCard({
  title = "Morning Session #1",
  location = "Pipeline, North Shore, Hawaii",
  date = "Apr 28, 2025",
  photoCount = 30,
  userName = "John Doe",
  userInitials = "JD",
  imageSrc = "/surf-session.png",
}: ImageCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-xl">
      {/* Image Section */}
      <div className="relative h-[400px] w-full">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Surf session at ${location}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info Section */}
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
          <div className="text-right">
            <p className="text-lg font-medium text-sky-500">{date}</p>
            <p className="text-sm text-slate-500">{photoCount} photos</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center text-sky-500">
          <MapPin className="mr-1 h-5 w-5" />
          <span>{location}</span>
        </div>
      </CardContent>

      <CardFooter className="border-t border-slate-100 pt-4">
        <div className="flex items-center">
          <Avatar className="mr-3 h-10 w-10 bg-sky-100">
            <AvatarFallback className="text-sky-500">{userInitials}</AvatarFallback>
          </Avatar>
          <span className="text-lg text-slate-600">{userName}</span>
        </div>
      </CardFooter>
    </Card>
  )
}