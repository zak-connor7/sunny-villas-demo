'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const images = [
  { src: '/images/welcome-slider-01.webp', alt: 'Private pool overlooking Toroneos Bay' },
  { src: '/images/welcome-slider-02.webp', alt: 'Resort overview and hillside setting' },
  { src: '/images/welcome-slider-03.webp', alt: 'Pool terrace and garden views' },
  { src: '/images/villa-grande.webp', alt: 'Grande Villa exterior' },
  { src: '/images/two-bedroom-villa.webp', alt: 'Two Bedroom Villa' },
  { src: '/images/spa-homepage.webp', alt: 'Spa Villa with private pool' },
  { src: '/images/exclusive-villa.webp', alt: 'Exclusive Villa' },
  { src: '/images/homepage-spa.webp', alt: 'On-site spa facility' },
  { src: '/images/grande-villa-description-block.jpg', alt: 'Grande Villa interior' },
  { src: '/images/header-home.jpg', alt: 'Aerial view of Sunny Villas resort' },
]

export default function GalleryPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : null))
  const next = () => setLightboxIndex(i => (i !== null ? (i + 1) % images.length : null))

  return (
    <main>
      <Nav />

      {/* Page header */}
      <section className="bg-cream pt-[120px] pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-rust font-medium mb-5">
            Gallery
          </p>
          <h1 className="font-display text-[36px] md:text-[56px] leading-[1.04] text-navy uppercase">
            See The Villas.
          </h1>
        </div>
      </section>

      {/* Image grid */}
      <section className="bg-white py-12 lg:py-16" ref={ref}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map(({ src, alt }, i) => (
              <motion.button
                key={i}
                className="relative overflow-hidden cursor-pointer group"
                style={{ aspectRatio: i === 0 || i === 5 ? '4/5' : '4/3' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Prev/Next */}
            <button
              className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            <button
              className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative w-[90vw] h-[80vh] max-w-[1200px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[12px] tracking-[0.1em]">
              {lightboxIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
