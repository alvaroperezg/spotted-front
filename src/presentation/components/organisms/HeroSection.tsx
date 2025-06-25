import { useNavigate } from "react-router-dom"
import { Button } from '@/presentation/components/atoms/Button'
import heroWaveBg from '@/assets/images/hero-wave-bg.png'

export function HeroSection() {
  const navigate = useNavigate()
  
  const navLogin = () => {
    navigate(`/login`)
  }
  const navAlbums = () => {
    navigate(`/albumes`)
  }
  return (
    <section className="relative pt-24 pb-[600px] overflow-hidden">
    <div className="absolute w-full">
      <img
        src={heroWaveBg}
        alt="Fondo hero decorativo"
        className="w-full h-auto pointer-events-none select-none"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#eaf3fd]" />
    </div>
    <div className="max-w-5xl relative z-[1] text-left ml-10">
      <h1 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
        Find your perfect wave,<br />captured forever
      </h1>
      <p className="text-lg text-blue-500 mb-10 max-w-2xl ">
        Connecting surfers with photographers to discover and purchase stunning surf moments from beaches around the world.
      </p>
      <div className="flex justify-left space-x-4">
        <Button variant="outline" onClick={navAlbums}>Explorar álbumes</Button>
        <Button variant="secondary" onClick={navLogin}>Iniciar sesión</Button>
      </div>
    </div>

  </section>
  )
}
