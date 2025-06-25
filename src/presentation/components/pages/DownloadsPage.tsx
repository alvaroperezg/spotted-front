import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { DownloadCard } from "@/presentation/components/molecules/DownloadCard"
import type { DownloadItem } from "@/presentation/components/types/downloadPage.ts"

export default function DownloadsPage() {
  const [downloads] = useState<DownloadItem[]>([
    {
      id: "1",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "2",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "3",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "4",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "5",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "6",
      title: "Malibu Sunset Session",
      photographer: "Mike Kelly",
      photoDate: "Feb 22, 2023",
      downloadedDate: "Feb 23, 2023",
      resolution: "5000 x 3333",
      format: "JPG",
      size: "11.8 MB",
      orderNumber: "#O-1233",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
  ])

  const handleView = (id: string) => {
    console.log("View photo:", id)
    // Aquí puedes agregar la lógica para ver la foto en tamaño completo
  }

  const handleDownload = (id: string) => {
    console.log("Download photo:", id)
    // Aquí puedes agregar la lógica para descargar la foto
  }

  const handleFilter = () => {
    console.log("Filter downloads")
    // Aquí puedes agregar la lógica para filtrar descargas
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tus descargas</h1>
        </div>
        <Button variant="outline" onClick={handleFilter} className="text-gray-600 hover:text-gray-800">
          Filtrar descargas
        </Button>
      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloads.map((item) => (
          <DownloadCard key={item.id} item={item} onView={handleView} onDownload={handleDownload} />
        ))}
      </div>

      {/* Empty State */}
      {downloads.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tienes descargas disponibles</p>
        </div>
      )}
    </div>
  )
}
