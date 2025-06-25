import { Navigate } from 'react-router-dom'
import { useAuth } from '@/application/contexts/AuthContext'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, isLoading } = useAuth()

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
}
