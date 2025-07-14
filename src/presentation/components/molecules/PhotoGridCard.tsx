import { Crown, ShoppingCart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/presentation/components/atoms/Card"
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";
import type { PhotoResponse } from "@/services/models/Photo"

interface FavoriteCardProps {
  photo: PhotoResponse;
  onBuy: (photo: PhotoResponse) => void;
  isSelected?: boolean; 
}

export function FavoriteCard({ photo, onBuy }: FavoriteCardProps) {

  const photoIds = useOrderStore((state) => state.photoIds);

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-0">
        <img
          src={photo.thumbnail_url || "/placeholder.svg"}
          alt="Foto favorita"
          className="w-full h-auto object-cover"
        />
        {photo.is_premium && (
          <Crown className="absolute top-2 right-2 text-yellow-400 w-5 h-5" />
        )}

        <button
          onClick={() => onBuy(photo)}
          className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow"
        >
          {photoIds.includes(photo.id) ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
        </button>
      </CardContent>
    </Card>
  );
}
