import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import type { Contact } from "@/presentation/components/types/messagesPage.ts"

export function ContactItem({
  contact,
  isActive,
  onClick,
}: {
  contact: Contact
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`flex items-center gap-3 p-3 cursor-pointer rounded-md ${
        isActive ? "bg-blue-50" : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar className="h-10 w-10">
          <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
          <AvatarFallback>{contact.initials}</AvatarFallback>
        </Avatar>
        {contact.status === "online" && (
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-white"></span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <p className="font-medium truncate">{contact.name}</p>
          {contact.lastMessageTime && <span className="text-xs text-gray-500">{contact.lastMessageTime}</span>}
        </div>
        {contact.lastMessage && <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>}
      </div>
      {contact.unreadCount && contact.unreadCount > 0 ? (
        <span className="flex-shrink-0 h-5 w-5 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center">
          {contact.unreadCount}
        </span>
      ) : null}
    </div>
  )
}