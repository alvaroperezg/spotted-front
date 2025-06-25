import { Search, ChevronDown, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/presentation/components/atoms/Input";
import { Button } from "@/presentation/components/atoms/Button";
import { Badge } from '@/presentation/components/atoms/Badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/presentation/components/atoms/Dropdown-menu"
import { MetricCard } from "@/presentation/components/molecules/MetricCard"

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-10000",
      customer: "Surfer 1000",
      date: "4/11/2025",
      status: "Pending",
      payment: "Pending",
      amount: "$19.99",
    },
    {
      id: "ORD-10001",
      customer: "Surfer 1001",
      date: "4/21/2025",
      status: "Processing",
      payment: "Paid",
      amount: "$59.98",
    },
    {
      id: "ORD-10002",
      customer: "Surfer 1002",
      date: "4/1/2025",
      status: "Completed",
      payment: "Failed",
      amount: "$119.97",
    },
    {
      id: "ORD-10003",
      customer: "Surfer 1003",
      date: "4/18/2025",
      status: "Cancelled",
      payment: "Refunded",
      amount: "$199.96",
    },
    {
      id: "ORD-10004",
      customer: "Surfer 1004",
      date: "4/27/2025",
      status: "Refunded",
      payment: "Pending",
      amount: "$299.95",
    },
    {
      id: "ORD-10005",
      customer: "Surfer 1005",
      date: "4/27/2025",
      status: "Pending",
      payment: "Paid",
      amount: "$19.99",
    },
    {
      id: "ORD-10004",
      customer: "Surfer 1004",
      date: "4/27/2025",
      status: "Refunded",
      payment: "Pending",
      amount: "$299.95",
    },
    {
      id: "ORD-10005",
      customer: "Surfer 1005",
      date: "4/27/2025",
      status: "Pending",
      payment: "Paid",
      amount: "$19.99",
    },
    {
      id: "ORD-10006",
      customer: "Surfer 1006",
      date: "4/11/2025",
      status: "Processing",
      payment: "Failed",
      amount: "$59.98",
    },
    {
      id: "ORD-10007",
      customer: "Surfer 1007",
      date: "4/11/2025",
      status: "Completed",
      payment: "Refunded",
      amount: "$119.97",
    },
    {
      id: "ORD-10008",
      customer: "Surfer 1008",
      date: "4/27/2025",
      status: "Cancelled",
      payment: "Pending",
      amount: "$199.96",
    },
  ]

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "secondary"
      case "processing":
        return "default"
      case "completed":
        return "default"
      case "cancelled":
        return "secondary"
      case "refunded":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getPaymentVariant = (payment: string) => {
    switch (payment.toLowerCase()) {
      case "pending":
        return "secondary"
      case "paid":
        return "default"
      case "failed":
        return "destructive"
      case "refunded":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100"
      case "processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "cancelled":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      case "refunded":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const getPaymentColor = (payment: string) => {
    switch (payment.toLowerCase()) {
      case "pending":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100"
      case "paid":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "failed":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "refunded":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl font-bold">Órdenes y ventas</h2>
        <p className="text-sm text-muted-foreground">
          Bienvenido, John Doe. Aquí tienes una visión general de tu negocio fotográfico.
        </p>
      </div>
      <div className="py-6 w-60">
        <MetricCard
          title="Total facturado"
          amount="12.450€"
          growth="12.5€"
          positive={true}
        />
      </div>
      {/* Header with Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Buscar orden" className="pl-10 max-w-md" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Ordenar por estatus
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Todos</DropdownMenuItem>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Processing</DropdownMenuItem>
            <DropdownMenuItem>Completed</DropdownMenuItem>
            <DropdownMenuItem>Cancelled</DropdownMenuItem>
            <DropdownMenuItem>Refunded</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-2 font-medium text-gray-500">Order ID</th>
                <th className="text-left py-4 px-2 font-medium text-gray-500">Customer</th>
                <th className="text-left py-4 px-2 font-medium text-gray-500">Date</th>
                <th className="text-left py-4 px-2 font-medium text-gray-500">Status</th>
                <th className="text-left py-4 px-2 font-medium text-gray-500">Payment</th>
                <th className="text-left py-4 px-2 font-medium text-gray-500">Amount</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-2 font-medium text-gray-900">{order.id}</td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-900">{order.customer}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{order.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </td>
                  <td className="py-4 px-2">
                    <Badge className={getPaymentColor(order.payment)}>{order.payment}</Badge>
                  </td>
                  <td className="py-4 px-2 font-medium text-gray-900">{order.amount}</td>
                  <td className="py-4 px-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Cancelar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
