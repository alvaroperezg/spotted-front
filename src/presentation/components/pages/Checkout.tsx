import { useEffect, useState } from 'react';
import { getClientSecret, createOrder } from '@/services/api/orders/orders';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@/presentation/components/atoms/Button';

export const Checkout = ({ albumId }: { albumId: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const initPayment = async () => {
      const { data: order } = await createOrder(albumId);
      setOrderId(order.id);
      const { data } = await getClientSecret(order.id);
      setClientSecret(data.client_secret);
    };

    initPayment();
  }, [albumId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button type="submit" disabled={!stripe} className="w-full">
        Pagar
      </Button>
    </form>
  );
};
