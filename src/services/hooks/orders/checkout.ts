import { getClientSecret } from "@/services/api/orders/orders"
import { stripePromise } from "@/lib/stripe"

export const handleCheckout = async (orderId: string) => {
  const res = await getClientSecret(orderId)
  console.log(res.data)
  const sessionId = res.data.session_id

  const stripe = await stripePromise
  await stripe?.redirectToCheckout({ sessionId })
}
