import { Logo } from '@/presentation/components/atoms/Logo';
import { Button } from '@/presentation/components/atoms/Button';
import { NavActions } from '@/presentation/components/molecules/NavActions';

export function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 border-b bg-white shadow-sm">
      <Logo />
      <nav className="flex space-x-8 text-sm text-gray-700">
        <a href="/dashboard" className="hover:text-black">Home</a>
        <a href="/albumes" className="hover:text-black">Busca tu álbum</a>
        <a href="#" className="hover:text-black">Área de fotógrafo</a>
      </nav>
      <div>
        <Button  variant="link" className="text-sm text-blue-600 ">Regístrame</Button>
        <Button  variant="default" className="text-sm text-white bg-blue-400 hover:bg-white hover:text-blue-500 hover:border-cyan-500">Iniciar sesión</Button>
      </div>
    </header>
  )
}
