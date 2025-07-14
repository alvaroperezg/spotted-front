import Stripe from "stripe"
import express from "express"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const router = express.Router()

router.post("/api/v1/orders/:orderId/stripe/client-secret", async (req, res) => {
  const { orderId } = req.params

  const YOUR_DOMAIN = "http://localhost:5173"
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Fotos de surf",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
    metadata: {
      order_id: orderId,
    },
  })

  res.json({ session_id: session.id })
})

export default router
