import { NextRequest, NextResponse } from 'next/server'
import { signPortalToken } from '@/lib/auth'
import { SAMPLE_BOOKING, ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'

export async function POST(request: NextRequest) {
  const { reservationCode } = await request.json()

  if (!reservationCode) {
    return NextResponse.json({ error: 'Reservation code required' }, { status: 400 })
  }

  // --- Sample data mode ---
  // In production, replace this block with a Supabase query:
  //   const { data: booking } = await supabase
  //     .from('bookings')
  //     .select('id, reservation_code')
  //     .eq('reservation_code', reservationCode)
  //     .single()
  const booking = ALL_SAMPLE_BOOKINGS.find(
    (b) => b.reservation_code === reservationCode.toUpperCase()
  )
  // --- End sample data mode ---

  if (!booking) {
    return NextResponse.json({ error: 'Reservation not found' }, { status: 404 })
  }

  const token = await signPortalToken({
    bookingId: booking.id,
    reservationCode: booking.reservation_code,
  })

  const response = NextResponse.json({
    success: true,
    reservationCode: booking.reservation_code,
  })

  response.cookies.set('portal_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return response
}
