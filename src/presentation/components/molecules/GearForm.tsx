import { useState, useEffect } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { GearSection } from "@/presentation/components/molecules/GearSection"
import type { Equipment } from "@/services/models/Photographer"

interface GearFormProps {
  initialData?: Equipment
  onSave?: (equipment: Equipment) => void
  loading?: boolean
}

export function GearForm({ initialData, onSave, loading = false }: GearFormProps) {
  const [cameras, setCameras] = useState<string[]>(initialData?.cameras || [])
  const [lenses, setLenses] = useState<string[]>(initialData?.lenses || [])
  const [accessories, setAccessories] = useState<string[]>(initialData?.accessories || [])

  useEffect(() => {
    setCameras(initialData?.cameras || [])
    setLenses(initialData?.lenses || [])
    setAccessories(initialData?.accessories || [])
  }, [initialData])

  const handleAddCamera = (item: string) => {
    setCameras((prev) => [...prev, item])
  }

  const handleAddLense = (item: string) => {
    setLenses((prev) => [...prev, item])
  }

  const handleAddAccessory = (item: string) => {
    setAccessories((prev) => [...prev, item])
  }

  const handleSave = () => {
    onSave?.({ cameras, lenses, accessories })
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <GearSection
          label="Cámaras"
          items={cameras}
          onAdd={handleAddCamera}
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
          onAdd={handleAddLense}
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
          onAdd={handleAddAccessory}
          onRemove={(index) =>
            setAccessories((prev) => prev.filter((_, i) => i !== index))
          }
          onEdit={(index, newValue) =>
            setAccessories((prev) =>
              prev.map((item, i) => (i === index ? newValue : item))
            )
          }
        />

        <div className="pt-4">
          <Button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Guardando..." : "Guardar equipo"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
