import InfoCard from '@/presentation/components/molecules/InfoCard'
import WaveDivider from '@/presentation/components/icons/WaveDivider'
import type { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  description: string
  subtitle?: string
  buttonText?: string
  accentColor?: string
  onClick?: () => void
}

interface InfoSectionProps {
  cards: InfoCardProps[]
}

export function InfoSection({ cards }: InfoSectionProps) {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className=" max-w-6xl mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className="w-full m-0">
        <WaveDivider fillColor="white" />
      </div>
    </div>
  )
}
