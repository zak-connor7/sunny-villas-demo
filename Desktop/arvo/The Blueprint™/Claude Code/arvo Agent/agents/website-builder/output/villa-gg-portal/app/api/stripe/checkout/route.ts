import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { verifyPortalToken } from '@/lib/auth'
import { SAMPLE_EXPERIENCES, ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'

export async function POST(request: NextRequest) {
  // Verify portal session
  const token = request.cookies.get('portal_session')?.value
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const session = await verifyPortalToken(token)
  if (!session) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  const { experienceId, quantity = 1, preferredDate, notes } = await request.json()

  if (!experienceId) {
    return NextResponse.json({ error: 'Experience ID required' }, { status: 400 })
  }

  // In production: fetch from Supabase
  const experience = SAMPLE_EXPERIENCES.find((e) => e.id === experienceId)
  const booking = ALL_SAMPLE_BOOKINGS.find((b) => b.id === session.bookingId)

  if (!experience || !experience.available) {
    return NextResponse.json({ error: 'Experience not found or unavailable' }, { status: 404 })
  }

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  const totalCents = experience.price_eur * quantity

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: experience.name,
              description: [
                experience.duration_text && `Duration: ${experience.duration_text}`,
                experience.price_note && `Pricing: ${experience.price_note}`,
              ].filter(Boolean).join(' · ') || undefined,
            },
            unit_amount: experience.price_eur,
          },
          quantity,
        },
      ],
      metadata: {
        bookingId: booking.id,
        reservationCode: booking.reservation_code,
        experienceId: experience.id,
        experienceName: experience.name,
        guestEmail: booking.guest_email,
        preferredDate: preferredDate || '',
        notes: notes || '',
        quantity: quantity.toString(),
      },
      customer_email: booking.guest_email,
      success_url: `${appUrl}/portal/${booking.reservation_code}/experiences?booked=true`,
      cancel_url: `${appUrl}/portal/${booking.reservation_code}/experiences/${experience.slug}`,
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
