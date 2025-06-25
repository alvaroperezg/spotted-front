import { ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/presentation/components/atoms/Card"
import { Button } from "@/presentation/components/atoms/Button"
import { Badge } from '@/presentation/components/atoms/Badge'

import type { FavoriteAlbum } from "@/presentation/components/types/album"

interface FavoriteCardProps {
  album: FavoriteAlbum
  onBuy: (id: string) => void
}

export function FavoriteCard({ album, onBuy }: FavoriteCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Album Image */}
      <div className="relative aspect-square bg-gray-100">
        {album.isPurchased && (
          <Badge className="absolute top-2 left-2 z-10 bg-green-500 text-white">
            Comprado
          </Badge>
        )}
        <img src={album.imageUrl || "/placeholder.svg"} alt={album.title} className="w-full h-full object-cover" />
      </div>

      {/* Album Info */}
      <CardContent className="p-3">
        <h3 className="font-medium text-gray-900 truncate">{album.title}</h3>
        <p className="text-sm text-gray-500">{album.photographer}</p>
      </CardContent>

      {/* Price and Buy Button */}
      <CardFooter className="p-3 pt-0 flex justify-between items-center">
        <span className="font-medium">${album.price.toFixed(2)}</span>
        {!album.isPurchased && (
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 px-3 border-gray-200"
            onClick={() => onBuy(album.id)}
          >
            <ShoppingCart className="w-3 h-3 mr-1" />
            Buy
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}