import { X, Heart, ShoppingCart, Clock, User } from "lucide-react"

interface PhotoModalProps {
  isOpen: boolean
  onClose: () => void
  photo: {
    title: string
    subtitle?: string
    image: string
    author: string
    time: string
  }
}

export function PhotoModal({ isOpen, onClose, photo }: PhotoModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl relative">
        {/* Close button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">{photo.title}</h2>
          {photo.subtitle && <p className="text-sm text-gray-500 mb-4">{photo.subtitle}</p>}

          <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={photo.image}
              alt={photo.title}
              className="object-contain max-h-[400px] w-full"
            />
          </div>

          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 gap-3">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              <span>{photo.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>{photo.time}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-100">
                <Heart className="w-4 h-4" />
                Add to Favorites
              </button>
              <button className="flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-gray-100">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
