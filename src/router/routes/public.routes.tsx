import type { RouteObject } from 'react-router-dom'
import { PublicRoute } from '../guards/PublicRoute'
import HomePage from '@/presentation/components/pages/HomePage'
import LoginPage from '@/presentation/components/pages/Login'
import RegisterPage from '@/presentation/components/pages/RegisterPage'
import ForgotPasswordPage from '@/presentation/components/pages/ForgotPasswordPage'
import ResetPasswordPage from '@/presentation/components/pages/ResetPasswordPage'
import SpottedInfo from '@/presentation/components/templates/SpottedInfo'
import SurfersInfo from '@/presentation/components/templates/SurfersInfo'
import PhotographersInfo from '@/presentation/components/templates/PhotographersInfo'

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  { path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    )
  },
  { path: '/registro',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    )
  },
  { path: '/forgot-password',
    element: (
      <PublicRoute>
        <ForgotPasswordPage />
      </PublicRoute>
    )
  },
  { path: '/reset-password',
    element: (
      <PublicRoute>
        <ResetPasswordPage />
      </PublicRoute>
    )
  },
  {
    path: '/info',
    children: [
      { path: 'spotted', element: <SpottedInfo/> },
      { path: 'surfers', element: <SurfersInfo/> },
      { path: 'photographers', element: <PhotographersInfo/> },
    ]
  }
]
