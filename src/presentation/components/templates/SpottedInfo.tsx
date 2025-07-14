import { useNavigate } from 'react-router-dom'
import { Header } from '@/presentation/components/organisms/Header'
import { HeroLayout } from '@/presentation/components/organisms/HeroLayout'
import { LoginSection } from '@/presentation/components/organisms/LoginSection'
import { Footer } from '@/presentation/components/organisms/Footer'
import heroWaveBg from '@/assets/images/hero-wave-bg.png'
import CircleIcon from '@/presentation/components/icons/Circle';
import { InfoSection } from '@/presentation/components/organisms/InfoSection'

const spottedCards = [
  {
    icon: <CircleIcon color="#000000" />,
    title: "titulo1",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#000000",
  },
  {
    icon: <CircleIcon color="#000000" />,
    title: "titulo2",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#000000",
  },
  {
    icon: <CircleIcon color="#000000" />,
    title: "titulo3",
    description: "Organiza y publica tus fotos de manera sencilla para que surfistas puedan encontrarlas.",
    subtitle: "Control total de tu contenido",
    accentColor: "#000000",
  },
]

export default function SpottedInfo() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <HeroLayout
          title="Plataforma para spotted"
          text="Connecting surfers with photographers to discover and purchase stunning surf moments from beaches around the world."
          primaryButtonText="Registrarme ahora"
          primaryButtonAction={() => navigate("/albumes")}
          backgroundImage={heroWaveBg}
          textColorClass="text-black"
          buttonVariant="outline"
          buttonColor="bg-black" 
        />
      <InfoSection
        cards={spottedCards}
      />
      <LoginSection/>
      <Footer/>
    </>
  )
}
