import { NextRequest, NextResponse } from 'next/server'
import { ALL_SAMPLE_BOOKINGS } from '@/lib/sample-data'

// GET all bookings (admin)
export async function GET() {
  // In production: check Supabase admin session, then query bookings table
  return NextResponse.json(ALL_SAMPLE_BOOKINGS)
}

// POST create booking (admin)
export async function POST(request: NextRequest) {
  const body = await request.json()

  // Validate required fields
  const required = ['reservation_code', 'guest_name', 'guest_email', 'check_in', 'check_out', 'guest_count', 'total_eur', 'deposit_eur']
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  // In production: insert into Supabase bookings table
  // const { data, error } = await supabase.from('bookings').insert({ ...body }).select().single()
  // if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Sample mode: just return success
  const newBooking = {
    id: `booking-${Date.now()}`,
    ...body,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  return NextResponse.json(newBooking, { status: 201 })
}
