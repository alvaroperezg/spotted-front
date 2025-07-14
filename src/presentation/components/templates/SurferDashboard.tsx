import { useNavigate } from "react-router-dom";
import { Search, Calendar } from "lucide-react"
import { useAuth } from "@/application/contexts/AuthContext" 
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/presentation/components/atoms/Tabs"
import { SpotCard } from "@/presentation/components/molecules/SpotCard"
import { SessionItem } from "@/presentation/components/molecules/SessionItem"


export default function SurferDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth()
  const popularSpots = [
    {
      id: 1,
      name: "Pipeline",
      location: "North Shore, Hawaii",
      albumCount: 124,
      image: "/placeholder.svg?height=160&width=300",
    },
    {
      id: 2,
      name: "Pipeline",
      location: "North Shore, Hawaii",
      albumCount: 124,
      image: "/placeholder.svg?height=160&width=300",
    },
    {
      id: 3,
      name: "Pipeline",
      location: "North Shore, Hawaii",
      albumCount: 124,
      image: "/placeholder.svg?height=160&width=300",
    },
    {
      id: 4,
      name: "Pipeline",
      location: "North Shore, Hawaii",
      albumCount: 124,
      image: "/placeholder.svg?height=160&width=300",
    },
  ]

  const sessions = [
    {
      id: 1,
      photographer: {
        name: "Alex Smith",
        role: "Surfer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      session: {
        title: "Morning Surf Shoot",
        date: "Tomorrow",
        time: "7:00 AM",
        location: "Pipeline, Hawaii",
        status: "confirmed" as const,
      },
    },
    {
      id: 2,
      photographer: {
        name: "Alex Smith",
        role: "Surfer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      session: {
        title: "Morning Surf Shoot",
        date: "Tomorrow",
        time: "7:00 AM",
        location: "Pipeline, Hawaii",
        status: "pending" as const,
      },
    },
  ]

  const navSesiones = () => {
    navigate(`/dashboard/sesiones`)
  }
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard de surfero</h1>
        <p className="text-gray-500">Bienvenido de vuelta, {user?.username || "Surfero"}</p>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Search and Buy Photos Card */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Busca y compra fotografías</h2>
            <p className="text-gray-500 mb-4">
              Descubre tus mejores momentos de surf capturados por fotógrafos profesionales.
            </p>
            <Button onClick={() => navigate("/albumes")} variant="outline" className="w-2/3 border-blue-200 text-blue-500 bg-blue-50 hover:text-blue-50 hover:bg-blue-300">
              <Search className="w-4 h-4 mr-2" />
              Explora Albums
            </Button>
          </CardContent>
        </Card>

        {/* Book a Session Card */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Reserva una sesión de fotos</h2>
            <p className="text-gray-500 mb-4">
              Descubre tus mejores momentos de surf capturados por fotógrafos profesionales.
            </p>
            <Button onClick={() => navigate("/reservas")} variant="outline" className="w-2/3 border-orange-200 text-orange-500 bg-orange-50 hover:text-orange-50 hover:bg-orange-300">
              <Calendar className="w-4 h-4 mr-2" />
              Reserva una sesión
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Popular Spots Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Spots populares</h2>
          </div>
          <Button variant="outline" className="text-gray-600">
            Ver todos los spots
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularSpots.map((spot) => (
            <SpotCard
              key={spot.id}
              image={spot.image}
              name={spot.name}
              location={spot.location}
              albumCount={spot.albumCount}
            />
          ))}
        </div>
      </div>

      {/* Sessions & Messages Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-1">Mensajes y sesiones</h2>
          <p className="text-gray-500 mb-4">Maneja tus próximas sesiones </p>

          <Tabs defaultValue="sesiones">
            <TabsList className="mb-4 w-3/4">
              <TabsTrigger className="w-full" value="sesiones">Sesiones</TabsTrigger>
              <TabsTrigger className="w-full" value="mensajes">Mensajes</TabsTrigger>
            </TabsList>
            <TabsContent value="sesiones">
              <div className="space-y-2">
                {sessions.map((session) => (
                  <SessionItem key={session.id} photographer={session.photographer} session={session.session} />
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" onClick={navSesiones} className="text-gray-600">
                  Ver todas las sesiones
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="mensajes">
              <p className="text-gray-500 py-4">No hay mensajes nuevos.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
