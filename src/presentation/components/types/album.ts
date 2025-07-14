export interface DetailedAlbum {
  id: string
  title: string
  location: {
    spot: string
    region: string
    country: string
  }
  date: string
  photoCount: number
  photographer: {
    id: number,
    name: string
    avatar?: string
    initials: string
  }
  coverImage: string
}

export interface FavoriteAlbum {
  id: string
  title: string
  photographer: string
  price: number
  isPurchased: boolean
  imageUrl: string
}
