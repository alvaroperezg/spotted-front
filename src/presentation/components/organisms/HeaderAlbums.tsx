import { Logo } from '@/presentation/components/atoms/Logo';
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"

export function HeaderAlbums() {
  return (
    <header className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm">
      <Logo />
      <nav className="flex space-x-8 text-sm text-gray-700">
        <a href="/albumes" className="hover:text-black">Busca tu álbum</a>
        <a href="/dashboard" className="hover:text-black">Volver al dashboard</a>
      </nav>
      <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">Jhon Doe</p>
            <p className="text-xs text-gray-500">jhon@example.com</p>
          </div>
        </div>
    </header>
  )
}
