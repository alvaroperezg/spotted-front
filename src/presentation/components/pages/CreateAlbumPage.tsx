import { useDropzone } from "react-dropzone"
import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/presentation/components/atoms/Button" 
import { DragAndDropUploader } from "@/presentation/components/molecules/DragAndDropUploader";
import { UploadedImagesSlider } from "@/presentation/components/molecules/UploadedImagesSlider";
import { ImageConfigurationCard } from "@/presentation/components/molecules/ImageConfigCard";
import { CreateAlbumForm } from "@/presentation/components/organisms/CreateAlbumForm";
import { useCreateAlbum } from "@/services/hooks/albums/useAlbums";
import { useUploadPhotos } from "@/services/hooks/photos/usePhotos";
import type { UploadedImage, ImageConfig } from "@/services/models/Photo";
import { useSetAlbumCoverPhoto } from "@/services/hooks/albums/useSetAlbumCoverPhoto";

export default function CreateAlbumPage() {
  const navigate = useNavigate()
  const [albumTitle, setAlbumTitle] = useState("")
  const [albumDate, setAlbumDate] = useState("")
  const [isPublic, setIsPublic] = useState(true)
  const [surfBreakId, setSurfBreakId] = useState("")

  const { mutateAsync: createAlbum } = useCreateAlbum();
  const { mutateAsync: uploadPhotos } = useUploadPhotos();
  const { mutateAsync: setCoverPhoto } = useSetAlbumCoverPhoto();
  
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)

  const [imageConfig, setImageConfig] = useState<ImageConfig>({
    isPremium: false,
    isCover: false,
    price: 0,
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages: UploadedImage[] = acceptedFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      preview: URL.createObjectURL(file),
      isPremium: false,
      isCover: false,
      price: 0,
    }))

    setUploadedImages((prev) => [...prev, ...newImages])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: true,
  })

  const removeImage = (id: string) => {
    setUploadedImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id)
      if (selectedImageIndex !== null && prev[selectedImageIndex]?.id === id) {
        setSelectedImageIndex(null)
        setImageConfig({ isPremium: false, isCover: false, price: 0 })
      }
      return filtered
    })
  }

  const selectImage = (index: number) => {
    setSelectedImageIndex(index)
    const image = uploadedImages[index]
    setImageConfig({
      isPremium: image.isPremium,
      isCover: image.isCover,
      price: image.price,
    })
  }

  const updateImageConfig = (config: Partial<ImageConfig>) => {
    if (selectedImageIndex === null) return

    const newConfig = { ...imageConfig, ...config }
    setImageConfig(newConfig)

    setUploadedImages((prev) =>
      prev.map((img, index) => (index === selectedImageIndex ? { ...img, ...newConfig } : img)),
    )
  }

  const handleCreateAlbum = async () => {
    try {
      const album = await createAlbum({
        title: albumTitle,
        date: new Date(albumDate).toISOString(),
        is_public: isPublic,
        surf_break_id: surfBreakId,
      });

      if (uploadedImages.length > 0) {
        const formData = new FormData();
        uploadedImages.forEach((p, index) => {
          formData.append("files", p.file, p.file.name);
        });
        await uploadPhotos({ albumId: album.data.id, formData });
        const coverImage =
        uploadedImages.find((img) => img.isCover) || uploadedImages[0];

        if (!coverImage) {
          console.error("No se ha subido ninguna imagen.");
          return;
        }

        try {
          await setCoverPhoto({ albumId: album.data.id, photoId: coverImage.id });
        } catch (err) {
          console.error("Error al asignar imagen de portada:", err);
        }
      }

      navigate(`/albumes`);
    } catch (error: any) {
      console.error("❌ Error creando álbum o subiendo fotos:");
      if (error.response) {
      } else if (error.request) {
        console.error("📡 No se recibió respuesta:", error.request);
      } else {
        console.error("📡 Error al configurar la request:", error.message);
      }
    }
  }

  const visibleImages = uploadedImages.slice(currentSliderIndex, currentSliderIndex + 4)
  const canScrollLeft = currentSliderIndex > 0
  const canScrollRight = currentSliderIndex + 4 < uploadedImages.length

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lado Izquierdo - Upload y Slider */}
          <div className="space-y-6 h-full">
              <DragAndDropUploader
                getRootProps={getRootProps}
                getInputProps={getInputProps}
                isDragActive={isDragActive}
                uploadedImages={uploadedImages}
              />
            {/* Slider de Imágenes */}
            {uploadedImages.length > 0 && (
               <UploadedImagesSlider
               uploadedImages={uploadedImages}
               visibleImages={visibleImages}
               currentSliderIndex={currentSliderIndex}
               selectedImageIndex={selectedImageIndex}
               canScrollLeft={canScrollLeft}
               canScrollRight={canScrollRight}
               selectImage={selectImage}
               removeImage={removeImage}
               setCurrentSliderIndex={setCurrentSliderIndex}
             />
            )}
          </div>

          {/* Lado Derecho - Formularios */}
          <div className="space-y-6">
            {/* Datos del Álbum */}
            <CreateAlbumForm
              albumTitle={albumTitle}
              albumDate={albumDate}
              isPublic={isPublic}
              surfBreakId={surfBreakId}
              setAlbumTitle={setAlbumTitle}
              setAlbumDate={setAlbumDate}
              setIsPublic={setIsPublic}
              setSurfBreakId={setSurfBreakId}
            />
            {/* Configuración de Imagen Seleccionada */}
           
            <ImageConfigurationCard
              selectedImageIndex={selectedImageIndex}
              uploadedImages={uploadedImages}
              imageConfig={imageConfig}
              updateImageConfig={updateImageConfig}
            />
            {/* Botón Crear */}
            <Button
              onClick={handleCreateAlbum}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!albumTitle || uploadedImages.length === 0}
            >
              Crear Álbum
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
