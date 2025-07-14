import { useNavigate } from 'react-router-dom'
import { Header } from '@/presentation/components/organisms/Header'
import { HeroLayout } from '@/presentation/components/organisms/HeroLayout'
import { LoginSection } from '@/presentation/components/organisms/LoginSection'
import { Footer } from '@/presentation/components/organisms/Footer'
import heroWaveBg from '@/assets/images/hero-wave-bg.png'
import CircleIcon from '@/presentation/components/icons/Circle';
import { InfoSection } from '@/presentation/components/organisms/InfoSection'

const surferCards = [
  {
    icon: <CircleIcon color="#3b82f6" />,
    title: "Encuentra tus fotos. Reserva tu próxima sesión.",
    description: "¿Has surfeado hoy? Puede que ya tengas fotos esperándote. En Spotted puedes: Comprar fotos tuyas hechas por fotógrafos locales. Reservar sesiones privadas en cualquier spot con profesionales especializados en surf.",
    subtitle: "",
    accentColor: "#3b82f6",
  },
  {
    icon: <CircleIcon color="#3b82f6" />,
    title: "Todo en una plataforma pensada para ti:",
    description: "Pagos seguros vía Stripe Navegación simple y rápida Acceso directo a fotógrafos de confianza Apoya al talento local de cada spot Solo entra, búscate en la galería de tu playa… y guarda ese recuerdo para siempre.",
    subtitle: "",
    accentColor: "#3b82f6",
  },
  
]

export default function SurfersInfo() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <HeroLayout
          title="Plataforma para surfistas"
          text="Connecting surfers with photographers to discover and purchase stunning surf moments from beaches around the world."
          primaryButtonText="Registrarme ahora"
          primaryButtonAction={() => navigate("/albumes")}
          backgroundImage={heroWaveBg}
          textColorClass="text-blue-500"
          buttonVariant="outline"
          buttonColor="bg-blue-400" 
        />
      <InfoSection
        cards={surferCards}
      />
      <LoginSection/>
      <Footer/>
    </>
  )
}
