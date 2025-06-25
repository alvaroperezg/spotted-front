import { useState } from "react"
import { Input } from "@/presentation/components/atoms/Input"
import { Button } from "@/presentation/components/atoms/Button"
import { LayoutGrid, ListFilter } from "lucide-react"
import { AlbumManageCard } from "@/presentation/components/molecules/AlbumManageCard"

const albumsData = [
  {
    id: 1,
    title: "papa Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
  {
    id: 2,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
  {
    id: 3,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
  {
    id: 4,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
  {
    id: 5,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
  {
    id: 6,
    title: "Pipeline Morning Session",
    location: "Pipeline, HI",
    image: "",
    views: 50,
    likes: 10,
    sales: 0,
    status: "Published",
  },
]

export default function DashboardAlbumsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "Published" | "Draft">("all")

  const filteredAlbums = albumsData.filter((album) => {
    const matchTitle = album.title.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || album.status === statusFilter
    return matchTitle && matchStatus
  })

  return (
    <div className="space-y-6 m-10">
      <div>
        <h2 className="text-2xl font-bold">Álbumes</h2>
        <p className="text-sm text-muted-foreground">
          Bienvenido, John Doe. Aquí tienes una visión general de tu negocio fotográfico.
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

        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="border rounded-md px-3 py-2 text-sm text-muted-foreground"
          >
            <option value="all">Todos los estados</option>
            <option value="Published">Publicado</option>
            <option value="Draft">Borrador</option>
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
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "space-y-4"
          }
        >
          {filteredAlbums.map((album) => (
            <AlbumManageCard key={album.id} {...album} status={album.status as "Published" | "Draft"} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No se encontraron álbumes.</p>
      )}
    </div>
  )
}
