import { useRef } from "react"
import { CameraIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }  from "@/presentation/components/atoms/Dropdown-menu"


export function ProfilePictureUploader({ imageUrl, onImageUpload }: {
  imageUrl: string
  onImageUpload: (file: File) => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageUpload(file)
    }
  }

  return (
    <div className="relative w-fit">
      <Avatar className="h-20 w-20">
        <AvatarImage src={imageUrl} alt="Foto de perfil" />
        <AvatarFallback>FP</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow hover:bg-gray-100"
            aria-label="Cambiar imagen"
          >
            <CameraIcon className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => fileInputRef.current?.click()}
          >
            Subir nueva imagen
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Input oculto */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
    </div>
  )
}
