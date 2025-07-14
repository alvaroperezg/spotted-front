import { useState } from "react"
import { Search } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { Input } from "@/presentation/components/atoms/Input"
import { Button } from "@/presentation/components/atoms/Button"
import { AlbumCard } from "@/presentation/components/molecules/AlbumCard"
import { FilterDropdown } from "@/presentation/components/molecules/FilterDropdown"
import { HeaderAlbums } from "@/presentation/components/organisms/HeaderAlbums"
import { useEnrichedAlbums } from "@/services/hooks/albums/useEnrichedAlbums"

interface FilterOption {
  id: string
  name: string
}

export default function AlbumsPage() {
  const [searchParams] = useSearchParams()
  const photographerId  = searchParams.get("id")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSpot, setSelectedSpot] = useState("all")
  const [selectedDate, setSelectedDate] = useState("")

  const countries: FilterOption[] = [{ id: "all", name: "Todos los países" }]
  const regions: FilterOption[] = [{ id: "all", name: "Todas las regiones" }]
  const spots: FilterOption[] = [{ id: "all", name: "Todos los sitios" }]

  const { albums } = useEnrichedAlbums()

  const filteredAlbums = albums.filter((album: any) => {
    if (photographerId && album.photographer.id.toString() !== photographerId) {
      return false
    }
    if (
      searchQuery &&
      !album.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !album.location.spot.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }
    if (selectedCountry !== "all" && album.location.country !== selectedCountry) {
      return false
    }
    if (selectedRegion !== "all" && album.location.region !== selectedRegion) {
      return false
    }
    if (selectedSpot !== "all" && album.location.spot !== selectedSpot) {
      return false
    }
    if (selectedDate && album.date !== selectedDate) {
      return false
    }
    return true
  })

  return (
    <div >
      <HeaderAlbums/>
      <div className="p-6 mx-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Surf Álbumes</h1>
          <p className="text-gray-500">Busca álbumes de fotógrafos de todo el mundo</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Buscar álbum"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-4 p-4 bg-white border border-gray-400 rounded-lg">
            <FilterDropdown
              label="All Countries"
              options={countries}
              selectedOption={selectedCountry}
              onSelect={setSelectedCountry}
            />
            <FilterDropdown
              label="All Regions"
              options={regions}
              selectedOption={selectedRegion}
              onSelect={setSelectedRegion}
            />
            <FilterDropdown
              label="All Spots"
              options={spots}
              selectedOption={selectedSpot}
              onSelect={setSelectedSpot}
            />
            <FilterDropdown label="Select date" options={[]} selectedOption={selectedDate} onSelect={setSelectedDate} />
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlbums.map((album:any) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              title={album.title}
              imageSrc={album.coverImage}
              location={`${album.location.spot}, ${album.location.region}, ${album.location.country}`}
              date={new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(new Date(album.date))}
              userId={album.user_id}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredAlbums.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se han encontrado álbumes con esos crterios de búsqueda</p>
            <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
