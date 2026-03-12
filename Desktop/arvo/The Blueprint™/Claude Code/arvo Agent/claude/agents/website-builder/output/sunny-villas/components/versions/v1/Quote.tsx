'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  {
    src: '/images/welcome-slider-01.webp',
    alt: 'Sunny Villas — private pool with sea view, Halkidiki',
  },
  {
    src: '/images/homepage-spa.webp',
    alt: 'Sunny Villas — on-site spa and wellness',
  },
  {
    src: '/images/grande-villa-description-block.jpg',
    alt: 'Sunny Villas — Grande Villa interior',
  },
  {
    src: '/images/welcome-slider-03.webp',
    alt: 'Sunny Villas — resort grounds and pool',
  },
]

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Testimonial */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar placeholder — initial letter */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-white font-display text-[22px]"
            style={{ background: '#b8674b' }}
          >
            A
          </div>
          <div>
            <p className="text-[12px] font-semibold text-navy tracking-[0.14em] uppercase mb-1">
              A. — Netherlands · Via Booking.com · 2024
            </p>
            <blockquote className="font-display text-[22px] md:text-[28px] text-navy leading-snug italic">
              &ldquo;We have stayed at many villas across Greece. The combination of the private pool, the sea view, and the service — especially the daily room service — is something we have not found anywhere else at this level. We are already planning our return.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* 4-image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map(({ src, alt }, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              style={{ borderRadius: 4, aspectRatio: '4/3' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.09 }}
            >
              <Image src={src} alt={alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
