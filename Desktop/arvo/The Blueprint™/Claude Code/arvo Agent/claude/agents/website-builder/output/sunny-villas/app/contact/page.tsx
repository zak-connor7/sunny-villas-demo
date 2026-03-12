'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

export default function ContactPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <>
      <Nav />
      <main className="pt-[72px] bg-cream min-h-screen">
        <section className="py-20 lg:py-28" ref={ref}>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85 }}
              className="mb-16"
            >
              <h1 className="font-display text-[42px] md:text-[60px] leading-[1.05] text-navy uppercase mb-4">
                Get in Touch.
              </h1>
              <p className="text-[14px] text-rust italic mb-6">
                We&apos;d love to hear from you.
              </p>
              <p className="text-[14px] leading-relaxed text-muted max-w-xl">
                Whether you&apos;re ready to book, have a question about the villas, or want to discuss a retreat or event — reach out by phone, email, or through our booking system.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone size={20} strokeWidth={1.5} className="text-rust mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] text-navy uppercase mb-1">Phone</p>
                      <a href="tel:+306945796792" className="text-[14px] text-muted hover:text-navy transition-colors">
                        +30 6945796792
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={20} strokeWidth={1.5} className="text-rust mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] text-navy uppercase mb-1">Email</p>
                      <a href="mailto:info@sunnyvillashalkidiki.com" className="text-[14px] text-muted hover:text-navy transition-colors">
                        info@sunnyvillashalkidiki.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin size={20} strokeWidth={1.5} className="text-rust mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] text-navy uppercase mb-1">Address</p>
                      <p className="text-[14px] text-muted">
                        Hanioti, Kassandra<br />
                        630 85, Halkidiki<br />
                        Greece
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram size={20} strokeWidth={1.5} className="text-rust mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.1em] text-navy uppercase mb-1">Social</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="https://www.instagram.com/sunny_villas_resort_and_spa/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-muted hover:text-navy transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://www.facebook.com/sunnyvillashalkidiki"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-muted hover:text-navy transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-white uppercase px-7 py-3.5 transition-opacity hover:opacity-90"
                    style={{ background: '#b8674b' }}
                  >
                    Book Now
                  </a>
                  <a
                    href="mailto:info@sunnyvillashalkidiki.com"
                    className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.12em] font-semibold text-navy uppercase px-7 py-3.5 border border-navy hover:bg-navy hover:text-cream transition-colors"
                  >
                    Send an Email
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full"
              >
                <div className="w-full overflow-hidden" style={{ aspectRatio: '4/3', borderRadius: 4 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.5!2d23.596!3d39.981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8c0a5b5b5b5b5%3A0x0!2sSunny+Villas+Resort+%26+Spa!5e0!3m2!1sen!2sgr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sunny Villas Resort & Spa location"
                  />
                </div>
                <p className="text-[11px] text-muted mt-3">
                  On the hillside above Hanioti, Kassandra Peninsula — 10 minutes from the beach.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
