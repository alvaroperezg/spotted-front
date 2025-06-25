import { RouteObject } from 'react-router-dom'
import HomePage from '@/presentation/components/pages/HomePage'
import LoginPage from '@/presentation/components/pages/Login'
import { PublicRoute } from '../guards/PublicRoute'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    )
  }
]
