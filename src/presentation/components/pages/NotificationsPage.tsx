import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import type { Notification } from "@/presentation/components/types/notification.ts"
import { NotificationCard } from "@/presentation/components/molecules/NotificationCard"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
    {
      id: "2",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
    {
      id: "3",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
    {
      id: "4",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
    {
      id: "5",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
    {
      id: "6",
      title: "Alert title",
      message: "This is an alert message",
      timestamp: "5 min ago",
      avatar: "/placeholder.svg?height=40&width=40",
      userInitials: "JD",
      isRead: false,
    },
  ])

  const handleDismiss = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const handleLearnMore = (id: string) => {
    console.log("Learn more clicked for notification:", id)
    // Aquí puedes agregar la lógica para mostrar más detalles
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notificaciones</h1>
        <Button variant="outline" onClick={handleClearAll} className="text-gray-600 hover:text-gray-800">
          Borrar todas las notificaciones
        </Button>
      </div>

      {/* Notifications list */}
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tienes notificaciones</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onDismiss={handleDismiss}
              onLearnMore={handleLearnMore}
            />
          ))
        )}
      </div>
    </div>
  )
}
