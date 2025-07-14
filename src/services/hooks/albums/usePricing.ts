import { useQuery, useMutation } from "@tanstack/react-query";
import { getBasePricing, getAlbumPricing, updateAlbumPricing } from "@/services/api/albums/pricingAlbum";

export const useBasePricing = () => {
  return useQuery({
    queryKey: ["basePricing"],
    queryFn: getBasePricing,
  });
};

export const useAlbumPricing = (albumId: string, enabled = true) => {
  return useQuery({
    queryKey: ["albumPricing", albumId],
    queryFn: () => getAlbumPricing(albumId),
    enabled: enabled && !!albumId,
  });
};

export const useUpdateAlbumPricing = () => {
  return useMutation({
    mutationFn: ({ albumId, pricing }: { albumId: string; pricing: { quantity: number; price: number }[] }) =>
      updateAlbumPricing(albumId, pricing),
  });
};