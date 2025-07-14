import { useNavigate } from "react-router-dom"
import { ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/presentation/components/atoms/Button"
import { Separator } from "@/presentation/components/atoms/Separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/atoms/Card"
import { ShoppingCard } from "@/presentation/components/molecules/ShoppingCard"
import { HeaderAlbums } from "@/presentation/components/organisms/HeaderAlbums"
import { useOrderStore } from "@/presentation/components/lib/useOrderStore";
import { useBasePricing } from "@/services/hooks/albums/usePricing"
import { createOrder } from "@/services/api/orders/orders"
import { handleCheckout } from "@/services/hooks/orders/checkout" 

export default function ShoppingCart() {
  const navigate = useNavigate()
  const photos = useOrderStore((state: any) => state.photos)
  const photoIds = useOrderStore((state: any) => state.photoIds)
  const removePhoto = useOrderStore((state: any) => state.removePhoto)
  const photoPrice = useBasePricing().data?.data[0].price

  const removeItem = (photoId: string) => {
    removePhoto(photoId);
  }

  const subtotal = photoPrice * photos.length
  const tax = subtotal * 0.1 
  const total = subtotal + tax

  if (photos.length === 0) {
    return (
      <div>
        <HeaderAlbums/>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-6">Descubre fotografías increíbles de surf y añádelas a tu carrito</p>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/albumes")}>Explorar Albums</Button>
          </div>
        </div>
      </div>
    )
  }

  const onCheckoutClick = async () => {
    try {
      const order = await createOrder(photoIds)
      // console.log(order.data.id)
      // await handleCheckout('722de84b0af8')
      await handleCheckout(order.data.id)
    } catch (err) {
      console.error("Fallo al iniciar el pago", err)
    }
  }

  return (
    <div>
      <HeaderAlbums/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" className="text-gray-600" onClick={() => navigate("/albumes")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuar comprando
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Carrito de compras</h1>
          <p className="text-gray-600">Revisa tus fotografías seleccionadas antes de proceder al pago</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Fotografías seleccionadas ({photos.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {photos.map((item:any, index:any) => (
                  <ShoppingCard
                  key={item.id}
                  photoId={item.id}
                  index={index}
                  onRemove={removeItem}
                  showSeparator={index < (photoIds?.length || 0) - 1}
                />
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Resumen del pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({photos.length} fotos)</span>
                    <span className="font-medium">{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Impuestos</span>
                    <span className="font-medium">{tax.toFixed(2)}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">{total.toFixed(2)}€</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" onClick={onCheckoutClick}>
                    Proceder al pago
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="pt-4 space-y-2 text-xs text-gray-500">
                  <p>✓ Descarga inmediata después del pago</p>
                  <p>✓ Resolución alta disponible</p>
                  <p>✓ Licencia de uso personal incluida</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
