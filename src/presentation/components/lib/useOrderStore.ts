import { create } from "zustand"
import type { PhotoResponse } from "@/services/models/Photo"
import type { AlbumResponse } from "@/services/models/Album"

interface OrderStore {
  albums: AlbumResponse[]
  photos: PhotoResponse[]
  photoIds: string[]
  addPhoto: (photo: PhotoResponse, album?: AlbumResponse) => void
  removePhoto: (id: string) => void
  clearPhotos: () => void
  togglePhoto: (photo: PhotoResponse, album?: AlbumResponse) => void
}

export const useOrderStore = create<OrderStore>((set, get) => ({
  albums: [],
  photos: [],
  photoIds: [],

  addPhoto: (photo, album) => {
    set((state) => {
      if (state.photoIds.includes(photo.id)) return state
      const albumAlreadyStored = album
        ? state.albums.some((a) => a.id === album.id)
        : true
      return {
        photos: [...state.photos, photo],
        photoIds: [...state.photoIds, photo.id],
        albums: album && !albumAlreadyStored ? [...state.albums, album] : state.albums,
      }
    })
  },

  removePhoto: (id) => {
    const { photos, albums } = get()

    const photoToRemove = photos.find((p) => p.id === id)
    const albumIdToMaybeRemove = photoToRemove?.album_id

    set((state) => {
      const updatedPhotos = state.photos.filter((p) => p.id !== id)
      const updatedPhotoIds = state.photoIds.filter((pid) => pid !== id)

      const remainingPhotosFromAlbum = updatedPhotos.some(
        (p) => p.album_id === albumIdToMaybeRemove
      )
      const updatedAlbums = remainingPhotosFromAlbum
        ? state.albums
        : state.albums.filter((a) => a.id !== albumIdToMaybeRemove)

      return {
        photos: updatedPhotos,
        photoIds: updatedPhotoIds,
        albums: updatedAlbums,
      }
    })
  },

  clearPhotos: () => set({ photos: [], photoIds: [], albums: [] }),

  togglePhoto: (photo, album) => {
    const { photoIds, addPhoto, removePhoto } = get()
    if (photoIds.includes(photo.id)) {
      removePhoto(photo.id)
    } else {
      addPhoto(photo, album)
    }
  },
}))
