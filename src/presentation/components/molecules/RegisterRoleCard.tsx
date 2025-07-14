import { Card, CardContent } from "@/presentation/components/atoms/Card";
import { cn } from "@/presentation/components/lib/utils"; 

type RoleCardProps = {
  label: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
  color: string;
  icon: React.ReactNode;
  size: string;
  selectedStyle: string;
};

export const RoleCard = ({ label, selected, onSelect, color, icon, size, selectedStyle }: RoleCardProps) => {
  return (
    <Card
      className={cn(
        "w-full p-2 border cursor-pointer transition flex flex-col items-center justify-center gap-1",
        selected ? `${selectedStyle} shadow-sm`: "border-muted bg-white"
      )}
      onClick={onSelect}
    >
      <CardContent className="flex flex-col items-center justify-center w-20 h-20 p-2">
        <div className="flex items-center justify-center h-10 mb-1">
          <div className={`${size} flex items-center justify-center`}>{icon}</div>
        </div>
        <span className={`text-xs font-medium ${color} leading-none text-center`}>
          {label}
        </span>
      </CardContent>

    </Card>

  );
};
