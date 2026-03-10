import type { Booking, Experience, ExperienceBooking } from '@/types'

export const SAMPLE_BOOKING: Booking = {
  id: 'booking-sample-001',
  reservation_code: 'GG-4291-SPL',
  guest_name: 'James & Sophie Thornton',
  guest_email: 'james.thornton@email.com',
  guest_phone: '+44 7700 900123',
  check_in: '2026-07-12',
  check_out: '2026-07-19',
  guest_count: 14,
  total_eur: 1050000,   // €10,500
  deposit_eur: 315000,  // €3,150 (30%)
  balance_eur: 735000,  // €7,350
  deposit_status: 'paid',
  balance_status: 'pending',
  notes: 'Large family group celebrating 25th wedding anniversary. Interested in private chef dinner and boat trip.',
  created_at: '2026-03-01T10:00:00Z',
  updated_at: '2026-03-01T10:00:00Z',
}

export const SAMPLE_EXPERIENCES: Experience[] = [
  // FOOD
  {
    id: 'exp-001',
    slug: 'private-chef-dinner',
    name: 'Private Chef Dinner',
    category: 'FOOD',
    description: 'A full sit-down dinner prepared and served at the villa by a private chef. Fresh Dalmatian ingredients, multiple courses, paired with local wines. Perfect for groups celebrating something special.',
    duration_text: '3–4 hours',
    price_eur: 150000,  // €1,500 for the group
    price_note: 'per group (up to 20)',
    image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    available: true,
    sort_order: 1,
  },
  {
    id: 'exp-002',
    slug: 'pizza-cocktail-evening',
    name: 'Artisan Pizza & Cocktail Evening',
    category: 'FOOD',
    description: 'Wood-fired artisan pizzas made on-site with a pop-up cocktail bar. Relaxed, social, and a serious step up from ordering in. Best paired with the pool terrace at sunset.',
    duration_text: '2–3 hours',
    price_eur: 80000,  // €800
    price_note: 'per group (up to 20)',
    image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    available: true,
    sort_order: 2,
  },
  {
    id: 'exp-003',
    slug: 'cooking-class',
    name: 'Dalmatian Cooking Class',
    category: 'FOOD',
    description: 'Learn to cook traditional Dalmatian dishes with a local chef. Peka, fresh fish, and homemade bread. Eat what you make — it\'s always good.',
    duration_text: '3 hours',
    price_eur: 6000,  // €60 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    available: true,
    sort_order: 3,
  },
  // AIR
  {
    id: 'exp-004',
    slug: 'helicopter-coastal-flight',
    name: 'Helicopter Coastal Flight',
    category: 'AIR',
    description: 'A private helicopter flight over the Dalmatian coastline — Split, the islands, and the Adriatic from above. The most dramatic view in Croatia. Book in advance, availability is limited.',
    duration_text: '30 minutes',
    price_eur: 100000,  // €1,000 per flight
    price_note: 'per flight (up to 4 people)',
    image_url: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
    available: true,
    sort_order: 4,
  },
  // SEA
  {
    id: 'exp-005',
    slug: 'private-boat-trip',
    name: 'Private Boat Trip',
    category: 'SEA',
    description: 'A full-day private boat charter to the islands. Pick from Hvar, Brač, Vis, or Šolta — or combine them. Skipper included. Lunch and drinks on board. The best day you\'ll have all week.',
    duration_text: 'Full day (8–10 hours)',
    price_eur: 180000,  // €1,800
    price_note: 'per boat (up to 12 people)',
    image_url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    available: true,
    sort_order: 5,
  },
  {
    id: 'exp-006',
    slug: 'sea-kayaking',
    name: 'Sea Kayaking',
    category: 'SEA',
    description: 'Guided sea kayaking along the coastline from Podstrana — caves, hidden coves, and clear Adriatic water. Good for all fitness levels. Gear and guide included.',
    duration_text: '3 hours',
    price_eur: 5000,   // €50 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=800&q=80',
    available: true,
    sort_order: 6,
  },
  // LAND
  {
    id: 'exp-007',
    slug: 'split-guided-tour',
    name: 'Split Guided Tour',
    category: 'LAND',
    description: 'A private guided tour of Split with a local historian — Diocletian\'s Palace, the old city walls, the hidden backstreets, and the best spots most visitors miss. 2km from the villa by taxi.',
    duration_text: '2.5 hours',
    price_eur: 8000,  // €80 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    available: true,
    sort_order: 7,
  },
  {
    id: 'exp-008',
    slug: 'marjan-hill-hike',
    name: 'Marjan Hill Morning Hike',
    category: 'LAND',
    description: 'A guided morning hike through the forested Marjan peninsula — the lungs of Split. Trails through pine forest, wild swimming spots, and views across the old city to the islands. A 20-minute drive from the villa.',
    duration_text: '2 hours',
    price_eur: 4500,  // €45 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    available: true,
    sort_order: 8,
  },
  // CULTURE
  {
    id: 'exp-009',
    slug: 'painting-workshop',
    name: 'Painting Workshop',
    category: 'CULTURE',
    description: 'A relaxed outdoor painting workshop at the villa — local artist, all materials provided, no experience needed. Choose between watercolour and acrylic. A good afternoon activity between swims.',
    duration_text: '2 hours',
    price_eur: 5500,  // €55 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    available: true,
    sort_order: 9,
  },
  // PARTY
  {
    id: 'exp-010',
    slug: 'pool-party-setup',
    name: 'Pool Party Setup',
    category: 'PARTY',
    description: 'Full pool party setup — DJ, sound system, bar setup with mixologist, lighting, and floats. The rooftop terrace or lower pool area. Three hours of setup time, you enjoy the rest.',
    duration_text: '4–6 hours',
    price_eur: 200000,  // €2,000
    price_note: 'per event',
    image_url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
    available: true,
    sort_order: 10,
  },
  // HEALTH
  {
    id: 'exp-011',
    slug: 'morning-yoga-session',
    name: 'Morning Yoga Session',
    category: 'HEALTH',
    description: 'A private yoga session on the rooftop terrace at sunrise — instructor comes to the villa, all equipment provided. Open to all levels. Best way to start a Croatia morning.',
    duration_text: '75 minutes',
    price_eur: 12000,  // €120 per session
    price_note: 'per session (up to 10 people)',
    image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    available: true,
    sort_order: 11,
  },
  {
    id: 'exp-012',
    slug: 'in-villa-massage',
    name: 'In-Villa Massage',
    category: 'HEALTH',
    description: 'A professional massage therapist comes to the villa — Swedish, deep tissue, or sports. Set up poolside or in your room. Book multiple sessions and the therapist stays for the morning.',
    duration_text: '60 or 90 minutes',
    price_eur: 9000,  // €90 per person
    price_note: 'per person',
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    available: true,
    sort_order: 12,
  },
]

export const SAMPLE_EXPERIENCE_BOOKINGS: ExperienceBooking[] = [
  {
    id: 'eb-001',
    booking_id: 'booking-sample-001',
    experience_id: 'exp-005',
    guest_name: 'James & Sophie Thornton',
    guest_email: 'james.thornton@email.com',
    quantity: 1,
    total_eur: 180000,
    stripe_session_id: 'cs_test_sample',
    stripe_payment_intent: 'pi_test_sample',
    status: 'paid',
    preferred_date: '2026-07-15',
    notes: 'Interested in visiting Hvar and Vis if possible.',
    created_at: '2026-03-05T14:30:00Z',
  },
]

// Additional bookings for admin view
export const ALL_SAMPLE_BOOKINGS: Booking[] = [
  SAMPLE_BOOKING,
  {
    id: 'booking-sample-002',
    reservation_code: 'GG-7734-SPL',
    guest_name: 'The Eriksson Family',
    guest_email: 'anders.eriksson@gmail.com',
    guest_phone: '+46 70 123 4567',
    check_in: '2026-07-26',
    check_out: '2026-08-02',
    guest_count: 18,
    total_eur: 1400000,
    deposit_eur: 420000,
    balance_eur: 980000,
    deposit_status: 'paid',
    balance_status: 'pending',
    notes: 'Swedish family, 18 guests. Vegetarian options needed for 4 people.',
    created_at: '2026-02-20T09:00:00Z',
    updated_at: '2026-02-20T09:00:00Z',
  },
  {
    id: 'booking-sample-003',
    reservation_code: 'GG-2218-SPL',
    guest_name: 'Marco & Giulia Rossi',
    guest_email: 'marco.rossi@outlook.it',
    guest_phone: '+39 333 456 7890',
    check_in: '2026-08-16',
    check_out: '2026-08-23',
    guest_count: 12,
    total_eur: 1100000,
    deposit_eur: 330000,
    balance_eur: 770000,
    deposit_status: 'paid',
    balance_status: 'paid',
    notes: 'Italian couple celebrating 50th birthday. Full villa for extended family.',
    created_at: '2026-01-15T11:00:00Z',
    updated_at: '2026-03-01T08:00:00Z',
  },
]
