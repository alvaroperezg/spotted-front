import { Avatar, AvatarFallback } from "@/presentation/components/atoms/Avatar"
import type { Message } from "@/presentation/components/types/messagesPage.ts"

export function ChatMessage({ message, isCurrentUser }: { message: Message; isCurrentUser: boolean }) {
  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}>
      {!isCurrentUser && (
        <Avatar className="h-8 w-8 mr-2 mt-1">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${isCurrentUser ? "text-blue-100" : "text-gray-500"}`}>{message.timestamp}</p>
      </div>
    </div>
  )
}