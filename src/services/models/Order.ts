export interface CreateOrderRequest {
  photo_ids: string[];
}

export interface CreateOrderResponse {
  id: string;
  total_amount: number;
  platform_fee: number;
  currency?: string;
  status: any;
  paid_at: any;
  created_at: string;
  items: any[];
  client_secret: string;
}

export interface OrderBase {
  id: string;
  total_amount: number;
  platform_fee: number;
  currency?: string;
  status: any;
  paid_at: any;
  created_at: string;
  items: any[];
}

export interface OrderDownloadPhoto {
  photo_id: string;
  download_url: string;
}

export interface OrderDownloadResponse {
  order_id: string;
  photos: any[];
}

export interface OrderItemOut {
  item_id: string;
  item_type?: string;
  price: number;
  access_granted?: boolean;
}

export interface OrderStatusEnum {}
