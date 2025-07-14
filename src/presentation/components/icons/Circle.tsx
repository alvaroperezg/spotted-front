interface CircleIconProps {
    color?: string;
    size?: number;
  }
  
  export default function CircleIcon({ color = "#f97316", size = 60 }: CircleIconProps) {
    return (
      <div 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          backgroundColor: color,
          borderRadius: '50%'
        }}
      />
    );
  }