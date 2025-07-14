import { Card, CardContent } from '@/presentation/components/atoms/Card';

export const PaymentSuccess = () => (
  <Card className="max-w-md mx-auto mt-20 text-center p-6">
    <CardContent>
      <h1 className="text-2xl font-bold mb-2">✅ ¡Pago realizado con éxito!</h1>
      <p className="text-muted-foreground">
        Gracias por tu compra. Puedes descargar tus fotos desde tu cuenta.
      </p>
    </CardContent>
  </Card>
);
