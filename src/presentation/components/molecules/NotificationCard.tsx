import { Check, Clock, X, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import type { Notification } from "@/presentation/components/types/notification.ts"

interface NotificationCardProps {
  notification: Notification
  onDismiss: (id: string) => void
  onLearnMore: (id: string) => void
}

export function NotificationCard({ notification, onDismiss, onLearnMore }: NotificationCardProps) {
  return (
    <Card className="relative border border-gray-200 rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Checkmark icon */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="w-10 h-10">
              <AvatarImage src={notification.avatar || "/placeholder.svg"} alt="User" />
              <AvatarFallback className="bg-orange-100 text-orange-600">{notification.userInitials}</AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-gray-400" />
              <h3 className="font-medium text-gray-900">{notification.title}</h3>
              <span className="text-sm text-gray-500">{notification.timestamp}</span>
            </div>
            <p className="text-gray-600 mb-3">{notification.message}</p>

            {/* Action buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onLearnMore(notification.id)}
                className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Saber más
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
              <button onClick={() => onDismiss(notification.id)} className="text-gray-500 hover:text-gray-700 text-sm">
                Descartar
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => onDismiss(notification.id)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
