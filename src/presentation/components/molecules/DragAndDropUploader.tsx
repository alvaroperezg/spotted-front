import { Upload } from "lucide-react";
import type { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";
import { Badge } from "@/presentation/components/atoms/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/atoms/Card";
import type { UploadedImage } from "@/services/models/Photo";

interface DragAndDropUploader {
  getRootProps: () => DropzoneRootProps;
  getInputProps: () => DropzoneInputProps;
  isDragActive: boolean;
  uploadedImages: UploadedImage[];
}

export const DragAndDropUploader = ({
  getRootProps,
  getInputProps,
  isDragActive,
  uploadedImages,
}: DragAndDropUploader) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subir Fotografías</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors min-h-[480px] items-center justify-center flex ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          {isDragActive ? (
            <p className="text-blue-600">Suelta las imágenes aquí...</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                Arrastra y suelta tus imágenes aquí, o haz clic para seleccionar
              </p>
              <p className="text-sm text-gray-500">Soporta: JPG, PNG, WEBP</p>
            </div>
          )}
        </div>

        {uploadedImages.length > 0 && (
          <div className="mt-4">
            <Badge variant="secondary">
              {uploadedImages.length} imagen{uploadedImages.length !== 1 ? "es" : ""} subida
              {uploadedImages.length !== 1 ? "s" : ""}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
