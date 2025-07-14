export interface HTTPValidationError {
  detail?: any[];
}

export interface PaginatedAlbumResponse {
  items: any[];
  total: number;
  limit: number;
  offset: number;
  has_more: boolean;
}

export interface PaginatedPhotoResponse {
  items: any[];
  total: number;
  limit: number;
  offset: number;
  has_more: boolean;
}

export interface ValidationError {
  loc: any[];
  msg: string;
  type: string;
}
