import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Badge } from "@/presentation/components/atoms/Badge"
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/atoms/Card"
import type { UploadedImage } from "@/services/models/Photo"

interface Props {
  uploadedImages: UploadedImage[]
  visibleImages: UploadedImage[]
  currentSliderIndex: number
  selectedImageIndex: number| null;
  canScrollLeft: boolean
  canScrollRight: boolean
  selectImage: (index: number) => void
  removeImage: (id: string) => void
  setCurrentSliderIndex: (index: number) => void
}

export function UploadedImagesSlider({
  uploadedImages,
  visibleImages,
  currentSliderIndex,
  selectedImageIndex,
  canScrollLeft,
  canScrollRight,
  selectImage,
  removeImage,
  setCurrentSliderIndex,
}: Props) {
  if (uploadedImages.length === 0) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Imágenes Subidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {visibleImages.map((image, index) => {
              const actualIndex = currentSliderIndex + index
              return (
                <div
                  key={image.id}
                  className={`relative flex-shrink-0 w-24 h-24 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === actualIndex
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => selectImage(actualIndex)}
                >
                  <img
                    src={image.preview || "/placeholder.svg"}
                    alt={`Upload ${actualIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-1 left-1 flex flex-col gap-1">
                    {image.isPremium && (
                      <Badge className="text-xs px-1 py-0 bg-yellow-500">P</Badge>
                    )}
                    {image.isCover && (
                      <Badge className="text-xs px-1 py-0 bg-green-500">C</Badge>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeImage(image.id)
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )
            })}
          </div>

          {uploadedImages.length > 4 && (
            <>
              <Button
                variant="outline"
                size="sm"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-transparent"
                onClick={() => setCurrentSliderIndex(Math.max(0, currentSliderIndex - 1))}
                disabled={!canScrollLeft}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-transparent"
                onClick={() =>
                  setCurrentSliderIndex(Math.min(uploadedImages.length - 4, currentSliderIndex + 1))
                }
                disabled={!canScrollRight}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
