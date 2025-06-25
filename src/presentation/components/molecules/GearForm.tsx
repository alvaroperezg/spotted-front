import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Label } from "@/presentation/components/atoms/Label"

type GearItem = string

const GearSection = ({
  label,
  items,
  onAdd,
  onRemove,
  onEdit,
}: {
  label: string
  items: GearItem[]
  onAdd: (item: string) => void
  onRemove: (index: number) => void
  onEdit: (index: number, newValue: string) => void
}) => {
  const [newItem, setNewItem] = useState("")

  return (
    <div className="mb-6">
      <Label className="block mb-2 font-semibold">{label}</Label>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Input
              value={item}
              className="flex-1"
              onChange={(e) => onEdit(index, e.target.value)}
            />
            <Button
              variant="outline"
              className="text-sm font-medium"
              onClick={() => onEdit(index, item)}
            >
              Editar
            </Button>
            <Button
              variant="destructive"
              className="text-sm"
              onClick={() => onRemove(index)}
            >
              Borrar
            </Button>
          </div>
        ))}

        <div className="flex gap-2 items-center">
          <Input
            placeholder="Escribe y agrega de forma rápida"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            onClick={() => {
              if (newItem.trim() !== "") {
                onAdd(newItem.trim())
                setNewItem("")
              }
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
}

export function GearForm() {
  const [cameras, setCameras] = useState<GearItem[]>(["Cámara 1", "Cámara 2"])
  const [lenses, setLenses] = useState<GearItem[]>(["Lente 1"])
  const [accessories, setAccessories] = useState<GearItem[]>(["Accesorio 1"])

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <GearSection
          label="Cámaras"
          items={cameras}
          onAdd={(item) => setCameras((prev) => [...prev, item])}
          onRemove={(index) =>
            setCameras((prev) => prev.filter((_, i) => i !== index))
          }
          onEdit={(index, newValue) =>
            setCameras((prev) =>
              prev.map((item, i) => (i === index ? newValue : item))
            )
          }
        />

        <GearSection
          label="Lentes"
          items={lenses}
          onAdd={(item) => setLenses((prev) => [...prev, item])}
          onRemove={(index) =>
            setLenses((prev) => prev.filter((_, i) => i !== index))
          }
          onEdit={(index, newValue) =>
            setLenses((prev) =>
              prev.map((item, i) => (i === index ? newValue : item))
            )
          }
        />

        <GearSection
          label="Accesorios extra"
          items={accessories}
          onAdd={(item) => setAccessories((prev) => [...prev, item])}
          onRemove={(index) =>
            setAccessories((prev) => prev.filter((_, i) => i !== index))
          }
          onEdit={(index, newValue) =>
            setAccessories((prev) =>
              prev.map((item, i) => (i === index ? newValue : item))
            )
          }
        />
      </CardContent>
    </Card>
  )
}
