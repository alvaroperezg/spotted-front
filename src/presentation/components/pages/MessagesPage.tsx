import { useState } from "react"
import { Phone, Video, Info, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/components/atoms/Avatar"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { ContactItem } from "@/presentation/components/molecules/ContactItem"
import { ChatMessage } from "@/presentation/components/molecules/ChatMessage"
import type { Contact, Message } from "@/presentation/components/types/messagesPage.ts"

export default function MessagesPage() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      initials: "SJ",
      status: "online",
      lastMessageTime: "11:55 AM",
      lastMessage: "Sin mensajes",
    },
    {
      id: "2",
      name: "Alex Brown",
      initials: "AB",
      status: "offline",
      lastMessageTime: "10:25 AM",
      lastMessage: "Sin mensajes",
    },
  ])

  const [activeContactId, setActiveContactId] = useState<string>("2")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      senderId: "2",
      text: "Hi John, do you have any photos from J-Bay last month?",
      timestamp: "8:25 AM",
      isRead: true,
    },
    {
      id: "2",
      senderId: "current-user",
      text: "Hey Alex! Yes, I have a whole album from J-Bay. I'll send you the link.",
      timestamp: "8:35 AM",
      isRead: true,
    },
    {
      id: "3",
      senderId: "current-user",
      text: "Here you go: https://spotted.com/albums/j-bay-july-2023. Let me know if you see any you like!",
      timestamp: "8:45 AM",
      isRead: true,
    },
  ])
  const [searchQuery, setSearchQuery] = useState("")
  const [newMessage, setNewMessage] = useState("")

  const activeContact = contacts.find((contact) => contact.id === activeContactId)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: "current-user",
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isRead: false,
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white">
      {/* Título fuera del contenedor */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Mensajes</h1>
        <p className="text-sm text-gray-500">Chats con los surferos</p>
      </div>
  
      <div className="flex h-[calc(100vh-180px)] border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Sidebar de contactos */}
        <div className="w-72 border-r border-gray-200 flex flex-col">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
            <Input
              placeholder="Busca conversaciones..."
              className="pl-8 bg-gray-50 border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
              <svg
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
  
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                isActive={contact.id === activeContactId}
                onClick={() => setActiveContactId(contact.id)}
              />
            ))}
          </div>
        </div>
  
        {/* Panel de mensajes */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header del chat */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={activeContact?.avatar || "/placeholder.svg"} alt={activeContact?.name} />
                <AvatarFallback>{activeContact?.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium">{activeContact?.name}</h2>
                <p className="text-xs text-gray-500">{activeContact?.status === "online" ? "Online" : "Offline"}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Info className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>
  
          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                isCurrentUser={message.senderId === "current-user"}
              />
            ))}
          </div>
  
          {/* Input de mensaje */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                placeholder="Escribe un mensaje..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-600">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
