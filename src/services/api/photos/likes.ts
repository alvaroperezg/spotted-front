import { httpClient } from "../httpClient";

export const likePhoto = async (photoId: string) => {
  const res = await httpClient.post(`/api/v1/photos/${photoId}/like`);
  return res.data;
};

export const unlikePhoto = async (photoId: string) => {
  const res = await httpClient.delete(`/api/v1/photos/${photoId}/like`);
  return res.data;
};

export const getLikedPhotos = async () => {
  const res = await httpClient.get("/api/v1/photos/liked");
  return res.data;
};
