'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  {
    src: '/images/welcome-slider-01.webp',
    alt: 'Sunny Villas private pool with sea view, Halkidiki',
  },
  {
    src: '/images/homepage-spa.webp',
    alt: 'Sunny Villas on-site spa and wellness',
  },
  {
    src: '/images/grande-villa-description-block.jpg',
    alt: 'Sunny Villas Grande Villa interior',
  },
  {
    src: '/images/welcome-slider-03.webp',
    alt: 'Sunny Villas resort grounds and pool',
  },
]

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white" ref={ref}>
      {/* Full-width image strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {galleryImages.map(({ src, alt }, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.09 }}
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="font-display text-[24px] md:text-[32px] text-navy leading-snug italic mb-6">
              &ldquo;We have stayed at many villas across Greece. The combination of the private pool, the sea view, and the service is something we have not found anywhere else at this level. We are already planning our return.&rdquo;
            </blockquote>
            <p className="text-[11px] font-semibold text-rust tracking-[0.14em] uppercase">
              Guest from the Netherlands · Via Booking.com
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
