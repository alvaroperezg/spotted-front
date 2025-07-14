import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Bell, Heart, ShoppingBag, Calendar, Download, MessageSquare, Settings, LogOut, } from "lucide-react"
import { Badge } from "@/presentation/components/atoms/Badge"
import { Button } from "@/presentation/components/atoms/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { useAuth } from "@/application/contexts/AuthContext"
import { Logo } from '@/presentation/components/atoms/Logo'
import SurferIcon from "@/presentation/components/icons/Surfer"
import PhotographerIcon from "@/presentation/components/icons/Photographer" 

export default function Sidebar() {
  const location = useLocation()
  const { logout, user } = useAuth()
  const userRole = user?.is_photographer === true ? "photographer" : "surfer"
  const mode =  userRole === "photographer" ? "photographer" : "surfer"
  const activeColor = mode === "photographer" ? "orange" : "blue"

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", badge: 0, roles: ["surfer", "photographer"] },
    { icon: Bell, label: "Notificaciones", path: "/dashboard/notificaciones", badge: 3, roles: ["surfer", "photographer"] },
    { icon: Heart, label: "Favoritos", path: "/dashboard/favoritos", badge: 0, roles: ["surfer"] },
    { icon: Heart, label: "Álbumes", path: "/dashboard/albumes", badge: 0, roles: ["photographer"] },
    { icon: ShoppingBag, label: "Ordenes", path: "/dashboard/ordenes", badge: 0, roles: ["surfer"] },
    { icon: Calendar, label: "Sesiones", path: "/dashboard/sesiones", badge: 0, roles: ["surfer", "photographer"] },
    { icon: Calendar, label: "Transacciones", path: "/dashboard/ordenes", badge: 0, roles: ["photographer"] },
    { icon: Download, label: "Descargas", path: "/dashboard/descargas", badge: 0, roles: ["surfer"] },
    { icon: Download, label: "Gráficas", path: "/dashboard/graficas", badge: 0, roles: ["photographer"] },
    { icon: MessageSquare, label: "Mensajes", path: "/dashboard/mensajes", badge: 2, roles: ["surfer", "photographer"] },
    { icon: Settings, label: "Ajustes", path: "/dashboard/ajustes", badge: 0, roles: ["surfer", "photographer"] },
  ]
  
  const filteredNavItems = navItems.filter((item) => item.roles.includes(userRole ?? ""))

  return (
    <aside className="w-60 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center gap-2 w-36">
          <Logo />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {filteredNavItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? `bg-${activeColor}-50 text-${activeColor}-600`
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </div>
                {item.badge > 0 && (
                  <Badge className={`bg-${activeColor}-500 hover:bg-${activeColor}-600`}>
                    {item.badge}
                  </Badge>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 mt-auto relative">
        <div className="absolute inset-x-0 bottom-0 w-[15rem] pointer-events-none">
          {mode === "photographer" ? (
            <PhotographerIcon />
          ) : (
            <SurferIcon />
          )}
        </div>
        <div className="flex items-center gap-3 mb-3">
          <Avatar className={`h-12 w-12 bg-${activeColor}-100`}>
            <AvatarImage src="/placeholder.svg" alt={user?.full_name || "User"} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user?.full_name || "Jhon Doe"}</p>
            <p className="text-xs text-gray-500">{user?.email || "jhon@example.com"}</p>
          </div>
        </div>
        <Button
          variant="outline"
          className={`w-full border-${activeColor}-200 text-${activeColor}-500 hover:bg-${activeColor}-50 hover:text-${activeColor}-600`}
          onClick={logout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Cerrar sesión
        </Button>
      </div>

    </aside>
  )
}
