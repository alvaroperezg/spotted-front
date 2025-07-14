import { Trash2 } from "lucide-react";
import { Button } from "@/presentation/components/atoms/Button";
import { Separator } from "@/presentation/components/atoms/Separator"
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";
import { useGetUser } from "@/services/hooks/user/useGetUser"
import { useBasePricing } from "@/services/hooks/albums/usePricing"

interface Props {
  photoId: string;
  index: number;
  onRemove: (id: string) => void;
  showSeparator?: boolean;
}

export const ShoppingCard = ({ photoId, index, onRemove, showSeparator = true }: Props) => {
  const { photos, albums } = useOrderStore();
  const photo = photos.find((p) => p.id === photoId);
  const album = albums.find((a) => a.id === photo?.album_id);

  const { data: user } = useGetUser(album?.user_id!);
  const photoPrice = useBasePricing().data?.data[0].price
  if (!photo) return null;

  return (
    <div key={photo.id}>
      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex-shrink-0">
          <img
            src={photo.thumbnail_url || "/placeholder.svg"}
            alt={album?.title}
            className="w-20 h-20 object-cover rounded-md border"
          />
        </div>

        <div className="flex-grow">
          <h3 className="font-semibold text-gray-900 mb-1">{album?.title}</h3>
          <p className="text-sm text-gray-600 mb-1">por {user?.username || "Desconocido"}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500">
              {album?.date ? new Intl.DateTimeFormat("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(new Date(album.date)) : "Sin fecha"}
            </span>
          </div>
          <p className="font-bold text-blue-600">{photoPrice}€</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(photo.id)}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {showSeparator && <Separator className="my-4" />}
    </div>
  );
};
