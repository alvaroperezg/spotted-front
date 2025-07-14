import { httpClient } from "../httpClient";

export const createAlbum = (albumData: { title: string;
  date: string; 
  is_public: boolean;
  surf_break_id: string; }) =>
  httpClient.post("/api/v1/albums/", albumData);

export const uploadPhotos = (albumId: string, formData: FormData) =>
  httpClient.post(`/api/v1/albums/${albumId}/photos`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getAlbums = () => httpClient.get("/api/v1/albums/");
