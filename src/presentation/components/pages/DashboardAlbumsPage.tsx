import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LayoutGrid, ListFilter } from "lucide-react"
import { useAuth } from "@/application/contexts/AuthContext"
import { Input } from "@/presentation/components/atoms/Input"
import { Button } from "@/presentation/components/atoms/Button"
import { AlbumManageCard } from "@/presentation/components/molecules/AlbumManageCard"
import { useAlbums } from "@/services/hooks/albums/useAlbums"
import { useEnrichedAlbums } from "@/services/hooks/albums/useEnrichedAlbums"

const albumsDataCode = [
  {
    id: 1,
    title: "papa Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
  {
    id: 2,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
  {
    id: 3,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
  {
    id: 4,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
  {
    id: 5,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
  {
    id: 6,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Publicado",
  },
]

export default function DashboardAlbumsPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "Publicado" | "Borrador">("all")
  const { albums: enrichedAlbums } = useEnrichedAlbums()

  const albumsData = enrichedAlbums|| albumsDataCode
  const filteredAlbums = albumsData.filter((album:any) => {
    const matchTitle = album.title.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || album.status === statusFilter
    return matchTitle && matchStatus
  })
  
  return (
    <div className="space-y-6 m-10">
      <div>
        <h2 className="text-2xl font-bold">Álbumes</h2>
        <p className="text-sm text-muted-foreground">
          Bienvenido, {user?.full_name}. Aquí tienes una visión general de tu negocio fotográfico.
        </p>
      </div>

      {/* Buscador y filtros */}
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
        <Input
          placeholder="Buscar álbum..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
        />
        <Button
          variant="outline"
          onClick={() => navigate(`/album/crear`)
        }
        >
          Crear álbum
        </Button>

        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="border rounded-md px-3 py-2 text-sm text-muted-foreground"
          >
            <option value="all">Todos los estados</option>
            <option value="Publicado">Publicado</option>
            <option value="Borrador">Borrador</option>
          </select>

          <div className="flex gap-1 border rounded-md overflow-hidden">
            <Button
              size="sm"
              variant={viewMode === "grid" ? "default" : "ghost"}
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "default" : "ghost"}
              onClick={() => setViewMode("list")}
            >
              <ListFilter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Resultados */}
      {filteredAlbums.length > 0 ? (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredAlbums.map((album:any) => (
            <AlbumManageCard
              key={album.id}
              id={album.id}
              title={album.title}
              location={`${album.location.spot}, ${album.location.region}, ${album.location.country}`}
              cover_photo={album.cover_photo?.thumbnail_url || ""}
              views={album.views ?? 0}
              likes={album.likes ?? 0}
              sales={album.sales ?? 0}
              status={album.is_public ? "Publicado" : "Borrador"}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No se encontraron álbumes.</p>
      )}
      {/* {showModal && <UploadAlbumForm onClose={() => setShowModal(false)} />} */}
    </div>
  )
}
