import { ReactNode } from 'react';
import { Button } from '@/presentation/components/atoms/Button'

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  subtitle?: string;
  buttonText?: string;
  accentColor?: string;
  onClick?: () => void;
}

export default function InfoCard({
  icon,
  title,
  description,
  subtitle,
  buttonText = "",
  accentColor = "#f97316",
  onClick
}: InfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center text-center h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 
        className="text-xl font-medium mb-4" 
        style={{ color: accentColor }}
      >
        {title}
      </h3>
      <p className="text-gray-500 mb-4">
        {description}
      </p>
      {subtitle && (
        <p className="text-gray-400 mb-6">
          {subtitle}
        </p>
      )}
      {buttonText && (
        <div className="mt-auto pt-4">
          <Button onClick={onClick} variant="outline" style={{ color: accentColor, borderColor: accentColor }}>
            {buttonText}
          </Button>
        </div>)}
    </div>
  );
}