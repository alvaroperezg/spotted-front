import { useState } from "react"
import { CalendarDays } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/presentation/components/atoms/Button"
import { Calendar } from "@/presentation/components/atoms/Calendar"
import { Popover, PopoverTrigger, PopoverContent,} from "@/presentation/components/atoms/Popover"

type Props = {
  label?: string
  selectedDate?: Date
  onSelectDate: (date: Date | undefined) => void
}

export function DatePopover({ label = "Seleccionar fecha", selectedDate, onSelectDate }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[280px] justify-start text-left font-normal"
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPP", { locale: es }) : label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            onSelectDate(date)
            setOpen(false)
          }}
          locale={es}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
