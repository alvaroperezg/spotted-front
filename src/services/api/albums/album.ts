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

export const getAlbums = (user_id?: string) => httpClient.get("/api/v1/albums/", {
  params: {
    user_id,
  },
});

export const updateAlbum = (id: string, data: any) =>
  httpClient.patch(`/api/v1/albums/${id}`, data);

export const getAlbumPhotos = (albumId: string) =>
  httpClient.get(`/api/v1/albums/${albumId}/photos`);

export const setAlbumCover = (albumId: string, photoId: string) =>
  httpClient.patch(`/api/v1/albums/${albumId}/cover-photo`, {
    photo_id: photoId,
  });

  export const getAlbum = (albumId: string) =>
    httpClient.get(`/api/v1/albums/${albumId}`);
  
  export const deleteAlbum = async (albumId: string): Promise<void> => {
    const response = await httpClient.delete(`/api/v1/albums/${albumId}`)
    return response.data
  }  
