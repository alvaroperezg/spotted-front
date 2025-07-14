import { Input } from "@/presentation/components/atoms/Input";
import { SurfBreakSelector } from "@/presentation/components/molecules/SurfBreakSelector";

interface CreateAlbumFormProps {
  albumTitle: string;
  albumDate: string;
  isPublic: boolean;
  surfBreakId: string;
  setAlbumTitle: (value: string) => void;
  setAlbumDate: (value: string) => void;
  setIsPublic: (value: boolean) => void;
  setSurfBreakId: (id: string) => void;
}

export const CreateAlbumForm = ({
  albumTitle,
  albumDate,
  isPublic,
  surfBreakId,
  setAlbumTitle,
  setAlbumDate,
  setIsPublic,
  setSurfBreakId,
}: CreateAlbumFormProps) => {

  return (
    <div className="p-6 bg-white rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold">Datos del álbum</h2>
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
      <SurfBreakSelector onSelect={(id) => setSurfBreakId(id)} />
      <div className="flex items-center gap-2">
        <label htmlFor="isPublic">¿Público?</label>
        <input
          type="checkbox"
          id="isPublic"
          checked={isPublic}
          onChange={() => setIsPublic(!isPublic)}
        />
      </div>
    </div>
  );
};
