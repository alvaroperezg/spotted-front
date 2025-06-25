import { useState } from "react"
import { Button } from "@/presentation/components/atoms/Button"
import { Input } from "@/presentation/components/atoms/Input"
import { Card, CardContent } from "@/presentation/components/atoms/Card"
import { Label } from "@/presentation/components/atoms/Label"

type PricingPack = {
  amount: number
  price: string
}

export function PricingForm() {
  const [photoPrice, setPhotoPrice] = useState("10 EUR")
  const [videoPrice, setVideoPrice] = useState("20 EUR")

  const [photoPacks, setPhotoPacks] = useState<PricingPack[]>([
    { amount: 5, price: "20 Euros" },
    { amount: 5, price: "20 Euros" },
    { amount: 5, price: "20 Euros" },
  ])

  const [videoPacks, setVideoPacks] = useState<PricingPack[]>([
    { amount: 5, price: "20 Euros" },
    { amount: 5, price: "20 Euros" },
    { amount: 5, price: "20 Euros" },
  ])

  const [newPhotoPack, setNewPhotoPack] = useState<PricingPack>({ amount: 0, price: "" })
  const [newVideoPack, setNewVideoPack] = useState<PricingPack>({ amount: 0, price: "" })

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        {/* Precio por FOTO */}
        <div>
          <Label className="block mb-1 font-semibold">Precio por FOTO</Label>
          <div className="flex gap-2">
            <Input value={photoPrice} onChange={(e) => setPhotoPrice(e.target.value)} />
            <Button variant="outline">Editar</Button>
          </div>
        </div>

        {/* Pack de fotos */}
        <div>
          <Label className="block mb-1 font-semibold">Precio por pack de fotos</Label>
          <div className="space-y-2">
            {photoPacks.map((pack, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <Input value={`Fotos del pack`} disabled className="w-36" />
                <Input
                  type="number"
                  value={pack.amount}
                  onChange={(e) => {
                    const updated = [...photoPacks]
                    updated[idx].amount = parseInt(e.target.value)
                    setPhotoPacks(updated)
                  }}
                  className="w-24"
                />
                <Input value={`Precio`} disabled className="w-24" />
                <Input
                  value={pack.price}
                  onChange={(e) => {
                    const updated = [...photoPacks]
                    updated[idx].price = e.target.value
                    setPhotoPacks(updated)
                  }}
                  className="w-40"
                />
                <Button variant="outline" className="text-sm">
                  Editar
                </Button>
                <Button
                  variant="destructive"
                  className="text-sm"
                  onClick={() => setPhotoPacks(photoPacks.filter((_, i) => i !== idx))}
                >
                  Borrar
                </Button>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <Input disabled value="Fotos del pack" className="w-36" />
              <Input
                type="number"
                placeholder="Fotos"
                value={newPhotoPack.amount || ""}
                onChange={(e) =>
                  setNewPhotoPack({ ...newPhotoPack, amount: parseInt(e.target.value) || 0 })
                }
                className="w-24"
              />
              <Input disabled value="Precio" className="w-24" />
              <Input
                placeholder="Coloca un precio"
                value={newPhotoPack.price}
                onChange={(e) =>
                  setNewPhotoPack({ ...newPhotoPack, price: e.target.value })
                }
                className="w-40"
              />
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  if (newPhotoPack.amount && newPhotoPack.price) {
                    setPhotoPacks([...photoPacks, newPhotoPack])
                    setNewPhotoPack({ amount: 0, price: "" })
                  }
                }}
              >
                + Crear pack
              </Button>
            </div>
          </div>
        </div>

        {/* Precio por VIDEO */}
        <div>
          <Label className="block mb-1 font-semibold">Precio por VIDEO</Label>
          <div className="flex gap-2">
            <Input value={videoPrice} onChange={(e) => setVideoPrice(e.target.value)} />
            <Button variant="outline">Editar</Button>
          </div>
        </div>

        {/* Pack de videos */}
        <div>
          <Label className="block mb-1 font-semibold">Precio por pack de Videos</Label>
          <div className="space-y-2">
            {videoPacks.map((pack, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <Input value={`Fotos del pack`} disabled className="w-36" />
                <Input
                  type="number"
                  value={pack.amount}
                  onChange={(e) => {
                    const updated = [...videoPacks]
                    updated[idx].amount = parseInt(e.target.value)
                    setVideoPacks(updated)
                  }}
                  className="w-24"
                />
                <Input value={`Precio`} disabled className="w-24" />
                <Input
                  value={pack.price}
                  onChange={(e) => {
                    const updated = [...videoPacks]
                    updated[idx].price = e.target.value
                    setVideoPacks(updated)
                  }}
                  className="w-40"
                />
                <Button variant="outline" className="text-sm">
                  Editar
                </Button>
                <Button
                  variant="destructive"
                  className="text-sm"
                  onClick={() => setVideoPacks(videoPacks.filter((_, i) => i !== idx))}
                >
                  Borrar
                </Button>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <Input disabled value="Fotos del pack" className="w-36" />
              <Input
                type="number"
                placeholder="Fotos"
                value={newVideoPack.amount || ""}
                onChange={(e) =>
                  setNewVideoPack({ ...newVideoPack, amount: parseInt(e.target.value) || 0 })
                }
                className="w-24"
              />
              <Input disabled value="Precio" className="w-24" />
              <Input
                placeholder="Coloca un precio"
                value={newVideoPack.price}
                onChange={(e) =>
                  setNewVideoPack({ ...newVideoPack, price: e.target.value })
                }
                className="w-40"
              />
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  if (newVideoPack.amount && newVideoPack.price) {
                    setVideoPacks([...videoPacks, newVideoPack])
                    setNewVideoPack({ amount: 0, price: "" })
                  }
                }}
              >
                + Crear pack
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
