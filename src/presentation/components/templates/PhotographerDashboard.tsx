import { Calendar, MapPin, MessageCircle, MoreHorizontal, TrendingUp, Upload, DollarSign, Camera } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/presentation/components/atoms/Tabs"
import { Button } from '@/presentation/components/atoms/Button';
import { Avatar, AvatarImage, AvatarFallback } from "@/presentation/components/atoms/Avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/presentation/components/atoms/Table"

export default function Dashboard() {
  const sessions = [
    {
      id: 1,
      client: "Alex Smith",
      type: "Surfer",
      session: "Morning Surf Shoot",
      date: "Tomorrow, 7:00 AM",
      location: "Pipeline, Hawaii",
      status: "Confirmed",
      statusColor: "bg-green-100 text-green-800",
      avatarUrl: "/avatars/alex-smith.jpg",
    },
    {
      id: 2,
      client: "Taylor Reed",
      type: "Surfer",
      session: "Sunset Portraits",
      date: "Friday, 5:30 PM",
      location: "Santa Monica, CA",
      status: "Pending",
      statusColor: "bg-orange-100 text-orange-800",
      avatarUrl: "/avatars/taylor-reed.jpg",
    },
    {
      id: 3,
      client: "Jordan Lee",
      type: "Surfer",
      session: "Beach Lifestyle Shoot",
      date: "Saturday, 9:00 AM",
      location: "Bondi Beach, Australia",
      status: "Cancel",
      statusColor: "bg-red-100 text-red-800",
      avatarUrl: "/avatars/jordan-lee.jpg",
    },
  ]

  const recentSales = [
    {
      order: "S-1234",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        initials: "SJ",
        avatarUrl: "",
      },
      items: "Pipeline Morning Session (5 photos)",
      amount: "$129.99",
      status: "completed",
      date: "2 hours ago",
    },
    {
      order: "S-1233",
      customer: {
        name: "Alex Brown",
        email: "alex@example.com",
        initials: "AB",
        avatarUrl: "",
      },
      items: "Malibu Sunset Session (3 photos)",
      amount: "$89.99",
      status: "completed",
      date: "5 hours ago",
    },
    {
      order: "S-1232",
      customer: {
        name: "Michael Davis",
        email: "michael@example.com",
        initials: "MD",
        avatarUrl: "",
      },
      items: "Uluwatu Big Waves (8 photos)",
      amount: "$199.99",
      status: "completed",
      date: "Yesterday",
    },
  ]

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John Doe! Here's an overview of your photography business.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total facturado</p>
              <p className="text-2xl font-bold text-gray-900">12.450€</p>
              <p className="text-sm text-green-600 mt-1">+12.5€ que el mes anterior</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total facturado</p>
              <p className="text-2xl font-bold text-gray-900">12.450€</p>
              <p className="text-sm text-green-600 mt-1">+12.5€ que el mes anterior</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Albumes subidos</p>
              <p className="text-2xl font-bold text-gray-900">26</p>
              <p className="text-sm text-gray-500 mt-1">63 fotos subidas</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Upload className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Total facturado</p>
              <p className="text-2xl font-bold text-gray-900">12.450€</p>
              <p className="text-sm text-green-600 mt-1">+12.5€ que el mes anterior</p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Camera className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Sessions & Messages */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Sessions & Messages</h2>
            <p className="text-gray-600">Manage your upcoming photography sessions</p>
          </div>

          <Tabs defaultValue="sessions" className="w-full">
            <TabsList className="bg-muted flex-wrap justify-center">
              <TabsTrigger className="flex-1 sm:w-[20rem] text-center" value="sessions">Sesiones</TabsTrigger>
              <TabsTrigger className="flex-1 sm:w-[20rem] text-center" value="messages">Mensajes</TabsTrigger>
            </TabsList>

            <TabsContent value="sessions">
              <div className="space-y-4 mt-4">
                {sessions.map((session) => (
                  <div
                  key={session.id}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 p-4 border border-gray-200 rounded-lg"
                >
                  {/* Columna 1: Avatar + nombre */}
                  <div className="flex items-center gap-3 sm:w-[180px]">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={session.avatarUrl} alt={session.client} />
                      <AvatarFallback>{getInitials(session.client)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{session.client}</p>
                      <p className="text-xs text-muted-foreground">{session.type}</p>
                    </div>
                  </div>
                
                  {/* Columna 2: Detalles + botones */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <p className="font-medium text-gray-900">{session.session}</p>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${session.statusColor}`}
                      >
                        {session.status}
                      </span>
                    </div>
                
                    <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {session.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {session.location}
                      </div>
                    </div>
                
                    <div className="mt-2 flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" className="text-sm w-full sm:w-auto">
                        Ver detalles de la sesión
                      </Button>
                      <Button
                        variant="outline"
                        className="text-sm border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Mensajes
                      </Button>
                    </div>
                  </div>
                </div>
                
                
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" className="text-sm">
                  Ver todas las sesiones
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="messages">
              <div className="text-sm text-muted-foreground mt-4">
                No hay mensajes nuevos.
              </div>
            </TabsContent>
          </Tabs>
        </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Actividad Reciente</h2>
          <p className="text-gray-600">Última actividad de tu cuenta</p>
        </div>
        <Tabs defaultValue="sells" className="w-full">
            <TabsList className="bg-muted flex-wrap justify-center">
              <TabsTrigger className="flex-1 sm:w-[20rem] text-center" value="sells">Ventas recientes</TabsTrigger>
              <TabsTrigger className="flex-1 sm:w-[20rem] text-center" value="albums">Albums recientes</TabsTrigger>
            </TabsList>

            <TabsContent value="sells">
              <div className="rounded-lg overflow-hidden border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200 bg-gray-200 hover:bg-gray-200">
                    <TableHead className="py-3 px-4 text-black">Order</TableHead>
                    <TableHead className="py-3 px-4 text-black">Customer</TableHead>
                    <TableHead className="py-3 px-4 text-black">Items</TableHead>
                    <TableHead className="py-3 px-4 text-black">Amount</TableHead>
                    <TableHead className="py-3 px-4 text-black">Status</TableHead>
                    <TableHead className="py-3 px-4 text-black">Date</TableHead>
                    <TableHead className="py-3 px-4 text-black text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale, index) => (
                    <TableRow key={index} className="border-b border-gray-100 hover:bg-muted/50">
                      <TableCell className="py-4 px-4 text-sm font-medium text-gray-900">{sale.order}</TableCell>
                      <TableCell className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={sale.customer.avatarUrl} />
                            <AvatarFallback>{sale.customer.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{sale.customer.name}</p>
                            <p className="text-xs text-gray-500">{sale.customer.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-4 text-sm text-gray-900">{sale.items}</TableCell>
                      <TableCell className="py-4 px-4 text-sm font-medium text-gray-900">{sale.amount}</TableCell>
                      <TableCell className="py-4 px-4">
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          {sale.status}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-4 text-sm text-gray-500">{sale.date}</TableCell>
                      <TableCell className="py-4 px-4 text-right">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" className="text-sm">
                  Ver todas las ventas
                </Button>
              </div>
            </TabsContent>


            <TabsContent value="albums">
              <div className="text-sm text-muted-foreground mt-4">
                No hay mensajes nuevos.
              </div>
            </TabsContent>
          </Tabs>
      </div>
    </div>
  )
}
