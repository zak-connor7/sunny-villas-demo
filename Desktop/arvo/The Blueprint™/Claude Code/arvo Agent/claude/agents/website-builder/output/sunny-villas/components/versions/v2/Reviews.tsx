'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    platform: 'T',
    date: '2024',
    quote:
      'My family and I stayed at Sunny Villas for 12 nights. It was one of the best summer experiences that we had. The villa had everything we needed and the views over the bay were extraordinary.',
  },
  {
    platform: 'B',
    date: '2024',
    quote:
      'Everything was perfect. The villas are really great and have everything needed. Quite spacious and everything is clean and well maintained. The view from them is amazing.',
  },
  {
    platform: 'G',
    date: '2024',
    quote:
      'Beautiful villa! Unrealistic view! Super clean! Very friendly staff! One of the best experiences we have had in Greece. We will definitely be returning.',
  },
  {
    platform: 'T',
    date: '2023',
    quote:
      'Elena and her team did an amazing job. Arranging food deliveries, organising a personal boat trip and even giving us a lift to the local supermarket. Nothing was too much trouble.',
  },
  {
    platform: 'B',
    date: '2024',
    quote:
      'The house really had everything. We stayed 2 weeks and it was the best 2 weeks we could dream of. The house and the pool was so nice. The owner gave excellent service.',
  },
  {
    platform: 'G',
    date: '2023',
    quote:
      'The owners are just so helpful and could not do enough for us. The villas are well-furnished and the views are spectacular. We have already recommended Sunny Villas to friends and family.',
  },
]

const platformLabel: Record<string, string> = {
  G: 'Google',
  B: 'Booking.com',
  T: 'TripAdvisor',
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      className="bg-white p-8 md:p-10 flex flex-col"
    >
      <p className="text-[14px] leading-[1.85] text-muted flex-1 mb-6">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-5 border-t border-border">
        <span className="text-[11px] font-semibold text-navy tracking-[0.1em] uppercase">
          {platformLabel[review.platform]}
        </span>
        <span className="text-[11px] text-muted">{review.date}</span>
      </div>
    </motion.div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="reviews" className="bg-cream py-24 lg:py-32" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
              What Guests Say
            </p>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-navy uppercase">
              Guest Reviews.
            </h2>
          </div>
          <div className="flex items-center gap-3 mb-2 shrink-0">
            <span className="font-display text-[48px] text-navy leading-none">9.1</span>
            <div>
              <p className="text-[11px] font-semibold text-navy tracking-[0.1em] uppercase">Rated</p>
              <p className="text-[11px] text-muted">Booking.com</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
