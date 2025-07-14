import { useState } from "react"
import { Filter } from "lucide-react"
import { useAuth } from "@/application/contexts/AuthContext"
import { Button } from "@/presentation/components/atoms/Button"
import { SessionRequestCard } from "@/presentation/components/molecules/SessionRequestCard"
import { SessionCard } from "@/presentation/components/molecules/SessionCard"
import { AvailabilityCalendar } from "@/presentation/components/molecules/AvailabilityCalendar"
import { AvailabilityModal } from "@/presentation/components/molecules/AvailabilityModal"
import type { SessionRequest, UpcomingSession, CompletedSession, CancelledSession } from "@/presentation/components/types/session.ts"

export default function SessionsPage() {
  const [openModal, setOpenModal] = useState(false)
  const [activeTab, setActiveTab] = useState<"Futuras" | "Completadas" | "Canceladas"| "Disponibilidad">("Futuras")
  const { logout, user } = useAuth()
  const userRole = user?.is_photographer === true ? "photographer" : "surfer"
  const tabs = userRole === "photographer"
  ? ["Futuras", "Completadas", "Canceladas", "Disponibilidad"] as const
  : ["Futuras", "Completadas", "Canceladas"] as const;

  const [sessionRequests, setSessionRequests] = useState<SessionRequest[]>([
    {
      id: "1",
      surferId: "61",
      date: "June 1st, 2025",
      location: "Pipeline, Hawaii",
      notes: "Morning session, looking for barrel shots",
      status: "pending",
    },
  ])

  const [upcomingSessions, setUpcomingSessions] = useState<UpcomingSession[]>([
    {
      id: "1",
      photographer: {
        name: "John Doe",
        initials: "JD",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      date: "May 31st, 2025",
      time: "12:26 PM - 2:26 PM",
      location: "Pipeline, Hawaii",
      notes: "Looking for action shots during the morning session",
      status: "upcoming",
    },
  ])

  const [completedSessions, setCompletedSessions] = useState<CompletedSession[]>([
    {
      id: "1",
      photographer: {
        name: "John Doe",
        initials: "JD",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      date: "May 31st, 2025",
      time: "12:26 PM - 2:26 PM",
      location: "Pipeline, Hawaii",
      notes: "Looking for action shots during the morning session",
      status: "complete",
    },
  ])

  const [cancelledSessions, setCancelledSessions] = useState<CancelledSession[]>([
    {
      id: "1",
      photographer: {
        name: "Amy Lee",
        initials: "A",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      date: "May 30th, 2025",
      time: "12:26 PM - 2:26 PM",
      location: "Gold Coast, Australia",
      cancellationReason: "Equipment issues, need to reschedule",
      cancelledBy: "Amy Lee",
      status: "cancelled",
      notes: "Problemas de equipamiento",

    },
  ])

  const handleAcceptRequest = (id: string) => {
    console.log("Accepting request:", id)
    setSessionRequests((prev) => prev.filter((req) => req.id !== id))
  }

  const handleDeclineRequest = (id: string) => {
    console.log("Declining request:", id)
    setSessionRequests((prev) => prev.filter((req) => req.id !== id))
  }

  const handleViewDetails = (id: string) => {
    console.log("Viewing details for session:", id)
  }

  const handleCancelSession = (id: string) => {
    console.log("Cancelling session:", id)
  }

  const handleScheduleSession = () => {
    console.log("Schedule new session")
  }

  const getTabCount = (tab: string) => {
    switch (tab) {
      case "Futuras":
        return upcomingSessions.filter((s) => s.status === "upcoming").length
      case "Completadas":
        return completedSessions.length
      case "Canceladas":
        return cancelledSessions.length
      default:
        return 0
    }
  }

  const getSectionInfo = (tab: string) => {
    switch (tab) {
      case "Futuras":
        return {
          title: "Sesiones futuras",
          description: "Sesiones agendadas",
        }
      case "Completadas":
        return {
          title: "Sesiones completas",
          description: "Sesiones pasadas ya hechas",
        }
      case "Canceladas":
        return {
          title: "Sesiones canceladas",
          description: "Sesiones canceladas",
        }
      case "Disponibilidad":
        return {
          title: "Disponibilidad",
          description: "",
        }
      default:
        return {
          title: "Sesiones",
          description: "Todas las sesiones",
        }
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tus sesiones </h1>
        </div>
        <Button onClick={handleScheduleSession} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
          Agendar una sesión
        </Button>
      </div>

      {/* Session Requests */}
      {sessionRequests.length > 0 && (
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Peticiones de sesión</h2>
            <p className="text-sm text-gray-500">Sesiones pendientes</p>
          </div>

          <div className="space-y-4">
            {sessionRequests.map((request) => (
              <SessionRequestCard
                key={request.id}
                request={request}
                onAccept={handleAcceptRequest}
                onDecline={handleDeclineRequest}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
                {getTabCount(tab) > 0 && (
                  <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                    {getTabCount(tab)}+
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sessions Content */}
      <div>
        <div className="mb-4 border border-gray-300 shadow-sm p-4 rounded-2xl bg-white ">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">{getSectionInfo(activeTab).title}</h2>
              <p className="text-sm text-gray-500">{getSectionInfo(activeTab).description}</p>
            </div>
            {activeTab === "Futuras" && (
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            )}
          </div>
          <div className="space-y-4">
            {activeTab === "Futuras" &&
              upcomingSessions
                .filter((session) => session.status === "upcoming")
                .map((session) => (
                  <SessionCard
                    key={session.id}
                    session={session}
                    status= "upcoming" 
                    onViewDetails={handleViewDetails}
                    onCancelSession={handleCancelSession}
                  />
                ))}

            {activeTab === "Completadas" &&
              completedSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  status="completed"
                />
              ))}

            {activeTab === "Canceladas" &&
              cancelledSessions.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  status="cancelled"
                />
              ))}
            {activeTab === "Disponibilidad" && (
              <>
                <AvailabilityCalendar onAddAvailability={() => setOpenModal(true)}/>
                <AvailabilityModal open={openModal} onClose={() => setOpenModal(false)} />
              </>
              )}
          </div>
        </div>

        {/* Empty states */}
        {activeTab === "Futuras" &&
          upcomingSessions.filter((session) => session.status === "upcoming").length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No upcoming sessions</p>
            </div>
          )}

        {activeTab === "Completadas" && completedSessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No completed sessions found.</p>
          </div>
        )}

        {activeTab === "Canceladas" && cancelledSessions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cancelled sessions</p>
          </div>
        )}
      </div>
    </div>
  )
}
