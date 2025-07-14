import { useAlbumPhotos } from "./useAlbumPhotos";

export const useAlbumPhotoCount = (albumId: string) => {
  const { data: photos = [], isLoading, error } = useAlbumPhotos(albumId);
  const count = photos.length;

  return {
    photoCount: count,
    isLoading,
    error,
  };
};
