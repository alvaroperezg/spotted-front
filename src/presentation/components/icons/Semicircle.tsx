interface SemicircleIconProps {
  className?: string
}

export default function SemicircleIcon({ className }: SemicircleIconProps) {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="150" cy="150" r="140" stroke="#F57C3B" strokeWidth="10" fill="none" />
    </svg>
  );
}