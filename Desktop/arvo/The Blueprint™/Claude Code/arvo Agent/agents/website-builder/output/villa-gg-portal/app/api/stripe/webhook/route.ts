import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const meta = session.metadata!

    // In production: insert into Supabase experience_bookings table
    //   await supabase.from('experience_bookings').upsert({
    //     booking_id: meta.bookingId,
    //     experience_id: meta.experienceId,
    //     guest_name: session.customer_details?.name || '',
    //     guest_email: meta.guestEmail,
    //     quantity: parseInt(meta.quantity),
    //     total_eur: session.amount_total || 0,
    //     stripe_session_id: session.id,
    //     stripe_payment_intent: session.payment_intent as string,
    //     status: 'paid',
    //     preferred_date: meta.preferredDate || null,
    //     notes: meta.notes || null,
    //   }, { onConflict: 'stripe_session_id' })

    // Send guest confirmation email
    // await sendExperienceConfirmation({
    //   to: meta.guestEmail,
    //   guestName: session.customer_details?.name || '',
    //   experienceName: meta.experienceName,
    //   totalEur: session.amount_total || 0,
    //   preferredDate: meta.preferredDate,
    //   reservationCode: meta.reservationCode,
    // })

    // Notify Grgo
    // await sendGrgoNotification({
    //   experienceName: meta.experienceName,
    //   guestEmail: meta.guestEmail,
    //   reservationCode: meta.reservationCode,
    //   totalEur: session.amount_total || 0,
    //   preferredDate: meta.preferredDate,
    //   notes: meta.notes,
    // })

    console.log(`Experience booking fulfilled: ${meta.experienceName} for ${meta.reservationCode}`)
  }

  return NextResponse.json({ received: true })
}
