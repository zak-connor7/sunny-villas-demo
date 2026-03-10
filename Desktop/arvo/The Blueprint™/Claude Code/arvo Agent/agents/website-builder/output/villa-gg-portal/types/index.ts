export type PaymentStatus = 'pending' | 'paid' | 'waived'
export type ExperienceBookingStatus = 'pending' | 'paid' | 'cancelled' | 'refunded'
export type ExperienceCategory = 'FOOD' | 'AIR' | 'LAND' | 'SEA' | 'CULTURE' | 'PARTY' | 'HEALTH'

export interface Booking {
  id: string
  reservation_code: string
  guest_name: string
  guest_email: string
  guest_phone?: string
  check_in: string
  check_out: string
  guest_count: number
  total_eur: number     // in cents
  deposit_eur: number   // in cents
  balance_eur: number   // in cents
  deposit_status: PaymentStatus
  balance_status: PaymentStatus
  notes?: string
  created_at: string
  updated_at: string
}

export interface Experience {
  id: string
  slug: string
  name: string
  category: ExperienceCategory
  description: string
  duration_text?: string
  price_eur: number     // in cents
  price_note?: string
  image_url?: string
  available: boolean
  sort_order: number
}

export interface ExperienceBooking {
  id: string
  booking_id: string
  experience_id: string
  guest_name: string
  guest_email: string
  quantity: number
  total_eur: number     // in cents
  stripe_session_id?: string
  stripe_payment_intent?: string
  status: ExperienceBookingStatus
  preferred_date?: string
  notes?: string
  created_at: string
  // Joined
  experience?: Experience
  booking?: Pick<Booking, 'reservation_code' | 'guest_name'>
}
