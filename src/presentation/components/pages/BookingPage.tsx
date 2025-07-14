import { Search, ChevronDown, Filter } from "lucide-react"
import { BookingSessionCard } from "@/presentation/components/molecules/BookingSessionCard"
import { HeaderAlbums } from "@/presentation/components/organisms/HeaderAlbums"

export default function BookingPage() {
  const photographers = [
    {
      id: 1,
      name: "John Doe",
      location: "Pipeline, Hawaii",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description: "Professional surf photographer with 10+ years of experience capturing the best waves in Hawaii...",
      online: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      name: "John Doe",
      location: "Pipeline, Hawaii",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description: "Professional surf photographer with 10+ years of experience capturing the best waves in Hawaii...",
      online: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "John Doe",
      location: "Pipeline, Hawaii",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description: "Professional surf photographer with 10+ years of experience capturing the best waves in Hawaii...",
      online: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "John Doe",
      location: "Pipeline, Hawaii",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description: "Professional surf photographer with 10+ years of experience capturing the best waves in Hawaii...",
      online: true,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      name: "Mike Kelly",
      location: "Malibu, California",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description:
        "Professional surf photographer with 10+ years of experience capturing the best waves in California...",
      online: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      name: "Mike Kelly",
      location: "Malibu, California",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description:
        "Professional surf photographer with 10+ years of experience capturing the best waves in California...",
      online: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      name: "Mike Kelly",
      location: "Malibu, California",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description:
        "Professional surf photographer with 10+ years of experience capturing the best waves in California...",
      online: false,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      name: "Mike Kelly",
      location: "Malibu, California",
      rating: 4.8,
      albums: 24,
      price: "$120/hr",
      tags: ["Big Wave", "Aerial", "Underwater"],
      description:
        "Professional surf photographer with 10+ years of experience capturing the best waves in California...",
      online: false,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div> 
      <HeaderAlbums/>
      <div className="p-6 mx-20">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reserva una sesión de fotos</h1>
          <p className="text-gray-600">Find and book photographers for your next surf session</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search photographers..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative min-w-[180px]">
                <select className="appearance-none w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All regions</option>
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia</option>
                  <option>Oceania</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>

              <div className="relative min-w-[180px]">
                <select className="appearance-none w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All locations</option>
                  <option>Hawaii</option>
                  <option>California</option>
                  <option>Australia</option>
                  <option>Bali</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>

              <button className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50">
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  <span>More filters</span>
                </div>
                <span className="ml-2 bg-gray-100 text-gray-700 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  0
                </span>
              </button>
            </div>
          </div>

          <div className="mt-3">
            <button className="text-blue-600 text-sm hover:underline">Clear all</button>
          </div>
        </div>

        {/* Photographers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {photographers.map((photographer) => (
          <BookingSessionCard key={photographer.id} photographer={photographer} />
        ))}
        </div>
      </div>
    </div>
  )
}
