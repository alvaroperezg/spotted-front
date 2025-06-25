// src/components/molecules/SessionRequestCard.tsx
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Badge } from "@/presentation/components/atoms/Badge"
import { Calendar, MapPin } from "lucide-react"
import type { SessionRequest } from "@/presentation/components/types/session.ts"

interface Props {
  request: SessionRequest
  onAccept: (id: string) => void
  onDecline: (id: string) => void
}

export function SessionRequestCard({ request, onAccept, onDecline }: Props) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-4">
        <div className="grid grid-cols-[200px_1fr_180px] gap-6 items-start">
          <div>
            <h3 className="font-semibold text-sm text-gray-900">Petición de sesión</h3>
            <p className="text-sm text-gray-500">De: Surfer ID {request.surferId}</p>
            <Badge className="mt-2 bg-[#FF9200] text-xs px-2 py-0.5 rounded-xl shadow-sm">
              Pendiente
            </Badge>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>{request.date}</span>
            </div>
            <p>
              <span className="font-medium text-gray-800">Notas:</span>{" "}
              {request.notes}
            </p>
            <div className="flex gap-2 pt-1">
              <Button
                size="sm"
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => onAccept(request.id)}
              >
                ✓ Aceptar
              </Button>
              <Button size="sm" variant="outline" onClick={() => onDecline(request.id)}>
                ✗ Rechazar
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600 whitespace-nowrap text-left">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
            <span>{request.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
