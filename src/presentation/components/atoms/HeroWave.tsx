import { FC } from 'react'

export const HeroWave: FC = () => {
  return (
    <svg
  viewBox="0 0 2400 2490"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute -z-10 w-[2400px] max-w-none h-auto top-[102px] left-[-239px] pointer-events-none"
>
      <defs>
        <linearGradient id="paint0_linear_1_2" x1="1200" y1="0" x2="1200" y2="2490" gradientUnits="userSpaceOnUse">
          <stop stopColor="#528AFF" />
          <stop offset="1" stopColor="#F28C5E" />
        </linearGradient>
      </defs>
      <path
        d="M0 0H2400V2490C2095.33 2230.11 1710.01 2063.35 1200 2063.35C689.988 2063.35 304.666 2230.11 0 2490V0Z"
        fill="url(#paint0_linear_1_2)"
      />
    </svg>
  )
}
