import { httpClient } from "../httpClient";
import type { Pricing } from "@/services/models/Pricing"

export const getBasePricing = () => httpClient.get("/api/v1/albums/base-pricing");

export const getAlbumPricing = (albumId: string) =>
  httpClient.get(`/api/v1/albums/${albumId}/pricing`);

export const updateAlbumPricing = (
  albumId: string,
  pricing: Pricing[]
) => {
  return httpClient.put(`/api/v1/albums/${albumId}/pricing`, {
    pricing,
  });
};
