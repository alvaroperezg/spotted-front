import { useNavigate } from 'react-router-dom'
import InfoCard from '@/presentation/components/molecules/InfoCard';
import CircleIcon from '@/presentation/components/icons/Circle';
import SpottedIcon from '@/presentation/components/icons/Spotted';
import WaveIcon from '@/presentation/components/icons/Wave';
import WaveDivider from '@/presentation/components/icons/WaveDivider';

export function HomeInfoSection() {
  const navigate = useNavigate()
  const handleLearnMore = (cardType: string) => {
    navigate(`/info/${cardType}`);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Cómo funciona Spotted</h1>
        <h3 className="text-blue-500 text-center mb-12">Una plataforma fluida que conecta a fotógrafos de surf con surfistas en busca de sus momentos perfectos sobre las olas.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          <InfoCard
            icon={<CircleIcon color="#f97316" />}
            title="Para Fotógrafos"
            description="Sube tu sesión de fotos, establece tu precio, y empieza a ganar dinero, ¡sin comisiones!"
            subtitle="Pon en valor tu arte con Spotted"
            accentColor="#f97316"
            onClick={() => handleLearnMore('photographers')}
            buttonText = "Saber más"
          />
          <InfoCard
            icon={<SpottedIcon />}
            title="Spotted"
            description="Conectamos de manera sencilla a ambos, eliminando las barreras de coordinación, entrega de imágenes y pagos."
            accentColor="#000000"
            onClick={() => handleLearnMore('spotted')}
            buttonText = "Saber más"
          />
          <InfoCard
            icon={<WaveIcon color="#3b82f6" />}
            title="Para Surfistas"
            description="Encuentra tus fotos fácilmente a través de nuestros filtros, selecciona las mejores y añádelas a tu carrito."
            subtitle="¡Ya tienes tus recuerdos para siempre!"
            accentColor="#3b82f6"
            onClick={() => handleLearnMore('surfers')}
            buttonText = "Saber más"
          />
        </div>
      </div>
      <div className="w-full m-0 "><WaveDivider fillColor="white"/></div> 
    </div>
  );
}
