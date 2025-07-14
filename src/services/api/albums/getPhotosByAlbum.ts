import { httpClient } from "../httpClient";

export const getPhotosByAlbum = async (albumId: string) => {
  const response = await httpClient.get(`/api/v1/albums/${albumId}/photos`)
  return response.data.items
}
