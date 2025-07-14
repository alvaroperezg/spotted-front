import { useNavigate } from 'react-router-dom'
import { Header } from '@/presentation/components/organisms/Header'
import { HeroLayout } from '@/presentation/components/organisms/HeroLayout'
import { GallerySection } from '@/presentation/components/organisms/GallerySection'
import { HomeInfoSection } from '@/presentation/components/organisms/HomeInfoSection'
import { PhotographerSection } from '@/presentation/components/organisms/PhotographerSection'
import { LoginSection } from '@/presentation/components/organisms/LoginSection'
import { Footer } from '@/presentation/components/organisms/Footer'
import heroWaveBg from '@/assets/images/hero-wave-bg.png'

export function HomeTemplate() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <HeroLayout
          title="Find your perfect wave, 
          captured forever"
          text="Connecting surfers with photographers to discover and purchase stunning surf moments from beaches around the world."
          primaryButtonText="Explorar álbumes"
          primaryButtonAction={() => navigate("/albumes")}
          secondaryButtonText="Iniciar sesión"
          secondaryButtonAction={() => navigate("/login")}
          backgroundImage={heroWaveBg}
          textColorClass="text-blue-500"
          buttonVariant="outline"
        />
      <GallerySection />
      <HomeInfoSection/>
      <PhotographerSection/>
      <LoginSection/>
      <Footer/>
    </>
  )
}
