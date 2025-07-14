import { ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/application/contexts/AuthContext"
import { Logo } from '@/presentation/components/atoms/Logo';
import { Button } from "@/presentation/components/atoms/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { getInitials } from "@/presentation/components/lib/utils"

export function HeaderAlbums() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm">
      <Logo />
      <nav className="flex space-x-8 text-sm text-gray-700">
        <a href="/albumes" className="hover:text-black">Busca tu álbum</a>
        <a href="/dashboard" className="hover:text-black">Volver al dashboard</a>
      </nav>
      <div className="flex items-center gap-2">
          <Avatar className="mr-3 h-10 w-10">
            {user?.profile_picture ? (
              <AvatarImage src={user.profile_picture} alt={user.full_name} />
            ) : (
              <AvatarFallback className="text-sm text-sky-500 bg-sky-100">
                {getInitials(user?.full_name || user?.username || "")}
              </AvatarFallback>
            )}
          </Avatar>
          {user ? (
              <div className="flex items-center gap-3 text-sm">
                <div className="text-sm">
                  <p className="font-medium">{user.full_name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <div className="text-sm">
                  <ShoppingCart className="w-4 h-4" onClick={() => navigate("/carrito")}/>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => navigate("/registro")}
                  variant="link"
                  className="text-sm text-blue-600"
                >
                  Regístrame
                </Button>
                <Button
                  onClick={() => navigate("/login")}
                  variant="default"
                  className="text-sm text-white bg-blue-400 hover:bg-white hover:text-blue-500 hover:border-cyan-500"
                >
                  Iniciar sesión
                </Button>
              </div>
            )}

        </div>
    </header>
  )
}
