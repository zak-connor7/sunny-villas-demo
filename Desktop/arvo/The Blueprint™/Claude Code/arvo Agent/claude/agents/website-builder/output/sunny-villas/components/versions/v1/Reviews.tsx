'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './About'

const reviews = [
  {
    name: 'Guest',
    platform: 'T',
    country: 'Verified Stay',
    date: '2024',
    quote:
      'My family and I stayed at Sunny Villas for 12 nights. It was one of the best summer experiences that we had. The villa had everything we needed and the views over the bay were extraordinary.',
  },
  {
    name: 'Guest',
    platform: 'B',
    country: 'Verified Stay',
    date: '2024',
    quote:
      'Everything was perfect. The villas are really great and have everything needed. Quite spacious and everything is clean and well maintained. The view from them is amazing.',
  },
  {
    name: 'Guest',
    platform: 'G',
    country: 'Verified Stay',
    date: '2024',
    quote:
      'Beautiful villa! Unrealistic view! Super clean! Very friendly staff! One of the best experiences we have had in Greece. We will definitely be returning.',
  },
  {
    name: 'Guest',
    platform: 'T',
    country: 'Verified Stay',
    date: '2023',
    quote:
      'Elena and her team did an amazing job — arranging food deliveries, organising a personal boat trip and even giving us a lift to the local supermarket. Nothing was too much trouble.',
  },
  {
    name: 'Guest',
    platform: 'B',
    country: 'Verified Stay',
    date: '2024',
    quote:
      'The house really had everything. We stayed 2 weeks and it was the best 2 weeks we could dream of. The house and the pool was so nice. The owner gave excellent service.',
  },
  {
    name: 'Guest',
    platform: 'G',
    country: 'Verified Stay',
    date: '2023',
    quote:
      'The owners are just so helpful and could not do enough for us. The villas are well-furnished and the views are spectacular. We have already recommended Sunny Villas to friends and family.',
  },
]

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const platformLabel: Record<string, string> = {
    G: 'Google',
    B: 'Booking.com',
    T: 'TripAdvisor',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1 }}
      className="bg-white rounded-sm p-6 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.12em] text-navy uppercase">
            {review.name}
          </p>
          <p className="text-[11px] text-muted">{review.country}</p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-navy shrink-0"
          style={{ border: '1.5px solid #dcd5c9' }}
          title={platformLabel[review.platform]}
        >
          {review.platform}
        </div>
      </div>

      <div className="border-b border-dashed border-border" />

      <p className="text-[13px] leading-relaxed text-muted flex-1">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-2">
        <span className="text-[11px] font-semibold text-navy/40 tracking-widest">
          ✦ {platformLabel[review.platform]}
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
    <section id="reviews" className="py-20 lg:py-28" style={{ background: '#f5efe6' }} ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex-1">
            <SectionDivider label="What Guests Say" />

            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
              <motion.h2
                className="font-display text-[36px] md:text-[50px] leading-[1.05] text-navy uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                What Our Guests Say.
              </motion.h2>

              <motion.div
                className="flex items-center gap-3 mb-2 shrink-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} className="w-4 h-4 rounded-full bg-rust/80" />
                  ))}
                </div>
                <span className="font-display text-4xl text-navy">9.1</span>
                <span className="text-[12px] font-semibold text-muted">Rated</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name + i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
