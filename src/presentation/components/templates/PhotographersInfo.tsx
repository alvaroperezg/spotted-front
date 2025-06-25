import { useNavigate } from 'react-router-dom'
import { Header } from '@/presentation/components/organisms/Header'
import { HeroLayout } from '@/presentation/components/organisms/HeroLayout'
import { LoginSection } from '@/presentation/components/organisms/LoginSection'
import { Footer } from '@/presentation/components/organisms/Footer'
import heroWaveBg from '@/assets/images/hero-wave-bg.png'
import CircleIcon from '@/presentation/components/icons/Circle';
import { InfoSection } from '@/presentation/components/organisms/InfoSection'

const photographerCards = [
  {
    icon: <CircleIcon color="#f97316" />,
    title: "titulo1",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#f97316",
  },
  {
    icon: <CircleIcon color="#f97316" />,
    title: "titulo2",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#f97316",
  },
  {
    icon: <CircleIcon color="#f97316" />,
    title: "titulo3",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#f97316",
  },
]

export default function PhotographersInfo() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <HeroLayout
          title="Plataforma para fotógrafos"
          text="Connecting surfers with photographers to discover and purchase stunning surf moments from beaches around the world."
          primaryButtonText="Registrarme ahora"
          primaryButtonAction={() => navigate("/albumes")}
          backgroundImage={heroWaveBg}
          textColorClass="text-orange-500"
          buttonVariant="outline"
          buttonColor="bg-orange-400" 
        />
      <InfoSection
        cards={photographerCards}
      />
      <LoginSection/>
      <Footer/>
    </>
  )
}
