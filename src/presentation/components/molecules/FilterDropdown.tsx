import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterOption {
  id: string
  name: string
}

export function FilterDropdown({
  label,
  options,
  selectedOption,
  onSelect,
}: {
  label: string;
  options: FilterOption[];
  selectedOption: string;
  onSelect: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.find((opt) => opt.id === selectedOption)?.name || label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
      >
        <span>{selected}</span>
        <ChevronDown className="h-4 w-4 ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => {
                onSelect(option.id);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
