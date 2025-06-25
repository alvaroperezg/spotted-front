import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/presentation/components/atoms/Dialog"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { Textarea } from "@/presentation/components/atoms/Textarea"
import { Checkbox } from "@/presentation/components/atoms/Checkbox"
import { useState } from "react"

export function AvailabilityModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [recurring, setRecurring] = useState(false)
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const handleSave = () => {
    // guardar lógica aquí
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Availability</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Set your availability for photography sessions.
          </p>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid gap-1">
            <label className="text-sm font-medium">Date</label>
            <Input type="date" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Start Time</label>
              <Input type="time" defaultValue="09:00" />
            </div>
            <div>
              <label className="text-sm font-medium">End Time</label>
              <Input type="time" defaultValue="17:00" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox checked={recurring} onCheckedChange={(val) => setRecurring(!!val)} />
            <span className="text-sm font-medium">Recurring weekly</span>
          </div>

          {recurring && (
            <div className="flex flex-wrap gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Button
                  key={day}
                  variant={selectedDays.includes(day) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </Button>
              ))}
            </div>
          )}

          <Textarea placeholder="Any additional information about your availability" />

          <div className="flex justify-end gap-2 mt-4">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Availability</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
