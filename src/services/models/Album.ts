export interface AlbumCreate {
  title: string;
  date: string;
  is_public: boolean;
  surf_break_id: string;
}

export interface AlbumResponse {
  title: string;
  date: string;
  is_public: boolean;
  id: string;
  user_id: string;
  country_id: string;
  region_id: string;
  surf_break_id: string;
  created_at: string;
  updated_at: string;
  pricing_packages: AlbumPricingResponse[];
}

export interface AlbumUpdate {
  title?: string | null;
  surf_break_id?: string | null;
  date?: string | null;
  is_public?: boolean | null;
}

export interface AlbumPricingBase {
  quantity: number;
  price: number;
}

export interface AlbumPricingCreate {
  pricing: AlbumPricingBase[];
}

export interface AlbumPricingResponse {
  quantity: number;
  price: number;
}

export interface AlbumWithCoverResponse {
  title: string;
  date: string;
  is_public: boolean;
  id: string;
  user_id: string;
  country_id: string;
  region_id: string;
  surf_break_id: string;
  created_at: string;
  updated_at: string;
  pricing_packages: AlbumPricingResponse[];
  cover_photo?: PhotoCoverPreview | null;
}

export interface PhotoCoverPreview {
  photo_id: string;
  watermark_url?: string | null;
  thumbnail_url?: string | null;
}
