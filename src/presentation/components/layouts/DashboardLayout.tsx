import { Outlet } from "react-router-dom"
import Sidebar from "@/presentation/components/molecules/Sidebar"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen pl-60">
      <Sidebar />
      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
