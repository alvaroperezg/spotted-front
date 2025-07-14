import { Eye, Download, Calendar } from "lucide-react"
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent, CardFooter } from "@/presentation/components/atoms/Card"
import type { DownloadItem } from "@/presentation/components/types/downloadPage.ts"

interface DownloadCardProps {
  item: DownloadItem
  onView: (id: string) => void
  onDownload: (id: string) => void
}

export function DownloadCard({ item, onView, onDownload }: DownloadCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Image */}
      <div className="aspect-square bg-gray-100">
        <img src={item.imageUrl || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
        <p className="text-sm text-gray-500 mb-3">por {item.photographer}</p>

        {/* Photo Details */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Foto: {item.photoDate}</span>
          </div>
          <div className="flex items-center">
            <Download className="w-4 h-4 mr-1" />
            <span>Descargado: {item.downloadedDate}</span>
          </div>
          <div>Resolución: {item.resolution}</div>
          <div>Tamaño: {item.size}</div>
          <div>Formato: {item.format}</div>
          <div>Order: {item.orderNumber}</div>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onView(item.id)}>
          <Eye className="w-4 h-4 mr-1" />
          Ver
        </Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={() => onDownload(item.id)}>
          <Download className="w-4 h-4 mr-1" />
          Descargar de nuevo
        </Button>
      </CardFooter>
    </Card>
  )
}