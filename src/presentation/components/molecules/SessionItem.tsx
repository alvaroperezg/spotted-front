import { Calendar } from "lucide-react"
import { Badge } from "@/presentation/components/atoms/Badge"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Button } from "@/presentation/components/atoms/Button"

interface SessionItemProps {
  photographer: {
    name: string
    role: string
    avatar: string
  }
  session: {
    title: string
    date: string
    time: string
    location: string
    status: "confirmed" | "pending"
  }
}
export function SessionItem({ photographer, session }: SessionItemProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start">
          {/* Columna 1: Avatar + nombre + rol */}
          <div className="flex items-start gap-3 mr-10">
            <img
              src={photographer.avatar || "/placeholder.svg"}
              alt={photographer.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{photographer.name}</p>
              <p className="text-sm text-gray-500">{photographer.role}</p>
            </div>
          </div>

          {/* Columna 2: Título de sesión + detalles */}
          <div className="min-w-0">
            <p className="font-medium text-gray-800">{session.title}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{session.date}, {session.time}</span>
              <span className="mx-2">•</span>
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 13.5C13.3807 13.5 14.5 12.3807 14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C14 18 20 15.4183 20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11C4 15.4183 10 18 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{session.location}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="text-xs">
                Ver detalles de la sesión
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                Mensajes
              </Button>
            </div>
          </div>

          {/* Columna 3: Estado */}
          <div>
            {session.status === "confirmed" ? (
              <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
            ) : (
              <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
            )}
          </div>
        </div>

        {/* Acciones */}
        
      </CardContent>
    </Card>
  )
}