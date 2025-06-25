export interface Contact {
  id: string
  name: string
  avatar?: string
  initials: string
  status: "online" | "offline"
  lastMessage?: string
  lastMessageTime?: string
  unreadCount?: number
}

export interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
  isRead: boolean
}
