import { useState } from "react";
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { useCreateAlbum } from "@/services/hooks/albums/useAlbums";
import { useUploadPhotos } from "@/services/hooks/photos/usePhotos";
import { SurfBreakSelector } from "@/presentation/components/molecules/SurfBreakSelector";

interface UploadAlbumFormProps {
  onClose: () => void;
}

export const UploadAlbumForm = ({ onClose }: UploadAlbumFormProps) => {
  const [albumTitle, setAlbumTitle] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [albumDate, setAlbumDate] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [surfBreakId, setSurfBreakId] = useState("");

  const { mutateAsync: createAlbum } = useCreateAlbum();
  const { mutateAsync: uploadPhotos } = useUploadPhotos();

  const handleCreateAlbum = async () => {
    try {
      const album = await createAlbum({
        title: albumTitle,
        date: new Date(albumDate).toISOString(),
        is_public: isPublic,
        surf_break_id: surfBreakId,
      });

      if (photos.length > 0) {
        const formData = new FormData();
        photos.forEach((p) => formData.append("images", p));
        await uploadPhotos({ albumId: album.data.id, formData });
      }

      onClose();
    } catch (error) {
      console.error("Error creando álbum:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-lg">
        <h3 className="text-lg font-bold">Nuevo Álbum</h3>
        <Input
          placeholder="Título del álbum"
          value={albumTitle}
          onChange={(e) => setAlbumTitle(e.target.value)}
        />
        <Input
          type="date"
          value={albumDate}
          onChange={(e) => setAlbumDate(e.target.value)}
        />
        <SurfBreakSelector onSelect={(id) => {
          setSurfBreakId(id);
        }} />
        <div className="flex items-center gap-2">
          <label htmlFor="isPublic">¿Público?</label>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </div>
        <Input
          type="file"
          multiple
          onChange={(e) => setPhotos(Array.from(e.target.files || []))}
        />
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleCreateAlbum}>Crear</Button>
        </div>
      </div>
    </div>
  );
};