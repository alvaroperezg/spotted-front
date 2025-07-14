import { useNavigate } from 'react-router-dom';
import { Button } from "@/presentation/components/atoms/Button"
import WaveDivider from '@/presentation/components/icons/WaveDivider';

interface LoginSectionProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function LoginSection({
  title = "¿Listo para empezar?",
  subtitle = "Ingresa a Spotted y encuentra tu mejor ola",
  primaryButtonText = "Iniciar Sesión",
  secondaryButtonText = "¿Quiénes somos?",
  onSecondaryClick,
}: LoginSectionProps) {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate('/login');
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden w-2/3 ml-[16%] rounded-3xl bg-gradient-to-b from-[#BFDBFE] to-[#FFFFFF]">
      <div className="absolute inset-x-0 bottom-0">
        <WaveDivider fillColor="#BFDBFE"/>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{title}</h2>
        <p className="text-blue-500 text-lg md:text-xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-blue-500 border-blue-200 hover:bg-blue-50 px-8 py-3 text-lg"
            onClick={handleLoginClick}
          >
            {primaryButtonText}
          </Button>
          <Button
            size="lg"
            className="bg-blue-400 hover:bg-blue-600 text-white px-8 py-3 text-lg"
            onClick={onSecondaryClick}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
