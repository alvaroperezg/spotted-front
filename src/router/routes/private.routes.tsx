import type { RouteObject } from 'react-router-dom'
import { ProtectedRoute } from '../guards/ProtectedRoute'
import DashboardLayout from '@/presentation/components/layouts/DashboardLayout'
import DashboardPage from '@/presentation/components/pages/DashboardPage'
import SessionsPage from '@/presentation/components/pages/SessionsPage'
import NotificationsPage from '@/presentation/components/pages/NotificationsPage'
import FavoritesPage from '@/presentation/components/pages/FavoritesPage'
import DownloadsPage from '@/presentation/components/pages/DownloadsPage'
import MessagesPage from '@/presentation/components/pages/MessagesPage'
import SettingsPage from '@/presentation/components/pages/SettingsPage'
import AlbumsPage from '@/presentation/components/pages/AlbumsPage'
import AlbumDetailPage from '@/presentation/components/pages/AlbumDetailPage'
import CreateAlbumPage from '@/presentation/components/pages/CreateAlbumPage'
import BookingPage from '@/presentation/components/pages/BookingPage'
import DashboardAlbumsPage from '@/presentation/components/pages/DashboardAlbumsPage'
import OrdersPage from '@/presentation/components/pages/OrdersPage'
import UsersTestPage from '@/presentation/components/pages/UsersTestPage'
import ShoppingCart from '@/presentation/components/pages/ShoppingCart'

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
      { path: 'ordenes', element: <OrdersPage/> },
    ]
  },
  { path: 'albumes', element: <AlbumsPage/> },
  { path: '/album/:id', element: <AlbumDetailPage/> },
  { path: '/album/crear', element: <CreateAlbumPage/> },
  { path: '/reservas', element: <BookingPage/> },
  { path: '/carrito', element: <ShoppingCart/> },
  { path: '/test', element: <UsersTestPage/> },
  

]
