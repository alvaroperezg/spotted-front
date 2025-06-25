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
    title: "titulo1",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#3b82f6",
  },
  {
    icon: <CircleIcon color="#3b82f6" />,
    title: "titulo2",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#3b82f6",
  },
  {
    icon: <CircleIcon color="#3b82f6" />,
    title: "titulo3",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
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
