import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/presentation/components/atoms/Badge"
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import type {
  UpcomingSession,
  CompletedSession,
  CancelledSession,
} from "@/presentation/components/types/session.ts"

type Session = UpcomingSession | CancelledSession | CompletedSession

interface SessionCardProps {
  session: Session
  status: "upcoming" | "cancelled" | "completed"
  onViewDetails?: (id: string) => void
  onCancelSession?: (id: string) => void
  onUploadPhotos?: (id: string) => void
}

export function SessionCard({
  session,
  status,
  onViewDetails,
  onCancelSession,
  onUploadPhotos,
}: SessionCardProps) {
  return (
    <Card className="p-4 rounded-xl shadow-sm border border-gray-200 bg-white mt-5">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
          {/* Avatar y nombre */}
          <div className="flex flex-col min-w-[160px]">
            <h3 className="font-medium">{session.photographer.name}</h3>
            <p className="text-sm text-muted-foreground">Surfero</p>

            {status === "cancelled" && (
              <Badge className="mt-2 w-fit bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Cancelada
              </Badge>
            )}
            {status === "completed" && (
              <Badge className="mt-2 w-fit bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full shadow-sm">
                Completada
              </Badge>
            )}
          </div>

          {/* Info principal */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{session.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{session.location}</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-wrap gap-2 mt-2">
              <Button size="sm" variant="outline" onClick={() => onViewDetails?.(session.id)}>
                Ver detalles 
              </Button>

              {status === "upcoming" && (
                <Button size="sm" variant="outline" onClick={() => onCancelSession?.(session.id)}>
                  Cancelar sesión
                </Button>
              )}

              {status === "completed" && (
                <Button size="sm" className="bg-sky-600 text-white hover:bg-sky-700" onClick={() => onUploadPhotos?.(session.id)}>
                  Subir fotos
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
