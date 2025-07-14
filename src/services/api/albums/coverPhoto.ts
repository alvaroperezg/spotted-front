import { httpClient } from "../httpClient";

export const setAlbumCoverPhoto = (albumId: string, photoId: string) =>
  httpClient.patch(`/api/v1/albums/${albumId}/cover-photo`, {
    photo_id: photoId,
  });