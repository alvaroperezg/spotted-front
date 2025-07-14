import { useAuth } from "@/application/contexts/AuthContext"
import PhotographerDashboard from "../templates/PhotographerDashboard"
import SurferDashboard from "../templates/SurferDashboard"

const DashboardPage = () => {
  const { user } = useAuth()

  if (user?.is_photographer) {
    return <PhotographerDashboard />
  }

  return <SurferDashboard />
}

export default DashboardPage