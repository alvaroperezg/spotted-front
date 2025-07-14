import { useState } from "react"
import { Input } from "@/presentation/components/atoms/Input"
import { Button } from "@/presentation/components/atoms/Button"

interface GearSectionProps {
  label: string
  items: string[]
  onAdd: (item: string) => void
  onRemove: (index: number) => void
  onEdit: (index: number, newValue: string) => void
}

export function GearSection({ label, items, onAdd, onRemove, onEdit }: GearSectionProps) {
  const [newItem, setNewItem] = useState("")

  const handleAdd = () => {
    if (newItem.trim()) {
      onAdd(newItem.trim())
      setNewItem("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="space-y-4">
      <p className="font-semibold">{label}</p>

      {items.map((item, index) => (
        <div key={`${label}-${index}`} className="flex space-x-2">
          <Input
            value={item}
            onChange={(e) => onEdit(index, e.target.value)}
            className="flex-1"
            placeholder="Editar elemento"
          />
          <Button variant="outline" className="bg-red-500 hover:bg-red-600 hover:text-white text-white" onClick={() => onRemove(index)}>
            Borrar
          </Button>
        </div>
      ))}

      <div className="flex space-x-2">
        <Input
          placeholder="Escribe y agrega de forma rápida"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1"
        />
        <Button onClick={handleAdd} className="bg-orange-500 hover:bg-orange-600 text-white" disabled={!newItem.trim()}>
          Añadir
        </Button>
      </div>
    </div>
  )
}
