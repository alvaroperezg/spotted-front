export interface Body_upload_photos_to_album_api_v1_albums__album_id__photos_post {
  files: string[];
}

export interface PhotoCoverUpdate {
  photo_id: string;
}

export interface PhotoResponse {
  id: string;
  album_id: string;
  watermark_url: any;
  thumbnail_url: any;
  photo_metadata: any;
  is_premium: boolean;
  premium_price: any;
  is_liked?: any;
}

export interface PhotoUpdate {
  is_premium: boolean;
  premium_price: any;
}

export interface UploadedImage {
  id: string
  file: File
  preview: string
  isPremium: boolean
  isCover: boolean
  price: number
}

export interface ImageConfig {
  isPremium: boolean
  isCover: boolean
  price: number
}