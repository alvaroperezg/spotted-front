import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { likePhoto, unlikePhoto, getLikedPhotos } from "@/services/api/photos/likes";

export const useLikePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: likePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likedPhotos"] });
    },
  });
};

export const useUnlikePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: unlikePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likedPhotos"] });
    },
  });
};

export const useGetLikedPhotos = () => {
  return useQuery({
    queryKey: ["likedPhotos"],
    queryFn: getLikedPhotos,
  });
};

export function useTogglePhotoLike() {
  const { mutate: like } = useLikePhoto()
  const { mutate: unlike } = useUnlikePhoto()

  const handleToggleLike = (e: React.MouseEvent, photo: any) => {
    e.stopPropagation()

    if (photo.is_liked) {
      unlike(photo.id)
      photo.is_liked = false
    } else {
      like(photo.id)
      photo.is_liked = true
    }
  }

  return { handleToggleLike }
}