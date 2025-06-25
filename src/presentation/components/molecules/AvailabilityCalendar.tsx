import { useState } from "react"
import { DatePopover } from "@/presentation/components/molecules/DatePopover"
import { Button } from "@/presentation/components/atoms/Button"
import { Plus } from "lucide-react"
import { format, addWeeks, subWeeks } from "date-fns"
import { cn } from "@/presentation/components/lib/utils"

export function AvailabilityCalendar({ onAddAvailability }: { onAddAvailability: () => void }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()))

  const days = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    return date
  })
  
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date)
    }
  }

  return (
    <div >
      <div className="flex justify-between items-center mb-4">
        <DatePopover selectedDate={currentDate} onSelectDate={handleDateSelect} />
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDate(subWeeks(currentDate, 1))}
          >
            ‹
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
          >
            ›
          </Button>
          <Button variant="outline" size="sm" onClick={onAddAvailability}>
            <Plus className="h-4 w-4 mr-1" />
            Agregar disponibilidad
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((date, i) => (
          <div
            key={i}
            className={cn(
              "h-24 border rounded-md p-2 text-center text-sm",
              new Date().toDateString() === date.toDateString() && "bg-blue-100 font-bold"
            )}
          >
            <div className="text-gray-600">{format(date, "EEE")}</div>
            <div className="text-gray-900">{format(date, "d")}</div>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">Pincha para ver la disponibilidad o editarla</p>
    </div>
  )
}
