import { httpClient } from "../httpClient";

export const createOrder = async (photoIds: string[]) =>
  httpClient.post("/api/v1/orders/", { photo_ids: photoIds });

export const getOrders = async () => {
  return httpClient.get("/api/v1/orders/");
};

export const getOrderById = async (orderId: string) => {
  return httpClient.get(`/api/v1/orders/${orderId}`);
};

export const deleteOrder = async (orderId: string) => {
  return httpClient.delete(`/api/v1/orders/${orderId}`);
};

export const getClientSecret = async (orderId: string) =>
  httpClient.get(`/api/v1/orders/${orderId}/stripe/client-secret`);

export const downloadPhotos = async (orderId: string) =>
  httpClient.get(`/api/v1/orders/${orderId}/download`, { responseType: "blob" });