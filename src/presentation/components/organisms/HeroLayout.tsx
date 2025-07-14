import type { ReactNode } from "react"
import { Button } from '@/presentation/components/atoms/Button'
import SemicircleIcon from '@/presentation/components/icons/Semicircle'

interface HeroLayoutProps {
  title: string
  text: string
  primaryButtonText: string
  primaryButtonAction: () => void
  secondaryButtonText?: string
  secondaryButtonAction?: () => void
  backgroundImage?: string
  imageSideContent?: ReactNode
  textColorClass?: string
  buttonVariant?: 'default' |'secondary' | 'outline'
  buttonColor?: string
}

export function HeroLayout({
  title,
  text,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  backgroundImage,
  imageSideContent,
  textColorClass = 'text-blue-500',
  buttonVariant = "outline",
  buttonColor = "bg-blue-400"
}: HeroLayoutProps) {
  return (
    <section className="relative pt-24 pb-[500px] ">
      <SemicircleIcon className="absolute top-[35rem] left-[9.5rem] w-50 z-[4]"/>
      {backgroundImage && (
        <div className="absolute w-full">
          <img
            src={backgroundImage}
            alt="Fondo decorativo"
            className="w-full h-auto pointer-events-none select-none relative  z-[6] "
          />
          <div className="absolute  z-[8] top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#eaf3fd]" />
        </div>
      )}

      <div className="max-w-5xl relative z-[10] text-left ml-10 w-[40%]">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          {title}
        </h1>
        <p className={`text-lg mb-10 max-w-2xl ${textColorClass}`}>
          {text}
        </p>
        <div className="flex justify-left space-x-4 ">
          <Button className={`text-white ${buttonColor}`} variant={buttonVariant} onClick={primaryButtonAction}>
            {primaryButtonText}
          </Button>
          {secondaryButtonText && secondaryButtonAction && (
            <Button variant="outline" className="text-blue-500" onClick={secondaryButtonAction}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>


      {imageSideContent && (
        <div className="absolute right-0 top-0 h-full overflow-hidden z-0">
          {imageSideContent}
        </div>
      )}
    </section>
  )
}
