import React from "react"
import { ImageIcon } from "lucide-react"
import { Label } from "@/presentation/components/atoms/Label"
import { Input } from "@/presentation/components/atoms/Input"
import { Checkbox } from "@/presentation/components/atoms/Checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/atoms/Card"
import type { UploadedImage, ImageConfig } from "@/services/models/Photo"

interface ImageConfigurationCardProps {
  selectedImageIndex: number | null
  uploadedImages: UploadedImage[]
  imageConfig: ImageConfig
  updateImageConfig: (changes: Partial<ImageConfigurationCardProps["imageConfig"]>) => void
}

export const ImageConfigurationCard: React.FC<ImageConfigurationCardProps> = ({
  selectedImageIndex,
  uploadedImages,
  imageConfig,
  updateImageConfig,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuración de Imagen</CardTitle>
      </CardHeader>
      <CardContent>
        {selectedImageIndex !== null ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <img
                src={uploadedImages[selectedImageIndex].preview || "/placeholder.svg"}
                alt="Selected"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium">Imagen {selectedImageIndex + 1}</p>
                <p className="text-sm text-gray-500">{uploadedImages[selectedImageIndex].file.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="premium"
                  checked={imageConfig.isPremium}
                  onCheckedChange={(checked) => updateImageConfig({ isPremium: checked === true })}
                />
                <Label htmlFor="premium">Imagen Premium</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cover"
                  checked={imageConfig.isCover}
                  onCheckedChange={(checked) => updateImageConfig({ isCover: checked === true })}
                />
                <Label htmlFor="cover">Imagen de portada del álbum</Label>
              </div>

              {imageConfig.isPremium && (
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (€)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={imageConfig.price ?? ""}
                    onChange={(e) => updateImageConfig({ price: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <ImageIcon className="mx-auto h-12 w-12 mb-2" />
            <p>Selecciona una imagen del slider para configurarla</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
