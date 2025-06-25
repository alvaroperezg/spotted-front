import { RouteObject } from 'react-router-dom'
import { useAuth } from '@/application/contexts/AuthContext'
import { ProtectedRoute } from '../guards/ProtectedRoute'
import DashboardLayout from '@/presentation/components/layouts/DashboardLayout'
import DashboardPage from '@/presentation/components/pages/DashboardPage'
import SessionsPage from '@/presentation/components/pages/SessionsPage'
import NotificationsPage  from '@/presentation/components/pages/NotificationsPage'
import FavoritesPage  from '@/presentation/components/pages/FavoritesPage'
import DownloadsPage from '@/presentation/components/pages/DownloadsPage'
import MessagesPage  from '@/presentation/components/pages/MessagesPage'
import SettingsPage   from '@/presentation/components/pages/SettingsPage'
import AlbumsPage   from '@/presentation/components/pages/AlbumsPage'
import AlbumDetailPage   from '@/presentation/components/pages/AlbumDetailPage'
import BookingPage   from '@/presentation/components/pages/BookingPage'
import DashboardAlbumsPage   from '@/presentation/components/pages/DashboardAlbumsPage'
import OrdersPage   from '@/presentation/components/pages/OrdersPage'
import UsersTestPage   from '@/presentation/components/pages/UsersTestPage'
import PhotographersInfo   from '@/presentation/components/templates/PhotographersInfo'
import SurfersInfo   from '@/presentation/components/templates/SurfersInfo'
import SpottedInfo   from '@/presentation/components/templates/SpottedInfo'

export const privateRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage/> },
      { path: 'sesiones', element: <SessionsPage/> },
      { path: 'notificaciones', element: <NotificationsPage/> },
      { path: 'favoritos', element: <FavoritesPage/> },
      { path: 'descargas', element: <DownloadsPage/> },
      { path: 'mensajes', element: <MessagesPage/> },
      { path: 'ajustes', element: <SettingsPage /> },
      { path: 'albumes', element: <DashboardAlbumsPage/> },
      { path: 'ventas', element: <OrdersPage/> },
    ]
  },
  { path: 'albumes', element: <AlbumsPage/> },
  { path: '/album/:id', element: <AlbumDetailPage/> },
  { path: '/reservas', element: <BookingPage/> },
  { path: '/test', element: <UsersTestPage/> },
  {
    path: '/info',
    children: [
      { path: 'spotted', element: <SpottedInfo/> },
      { path: 'surfers', element: <SurfersInfo/> },
      { path: 'photographers', element: <PhotographersInfo/> },
    ]
  }

]
