'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'

const villas = ['Grande Villa', 'Two Bedroom Villa', 'Spa Villa', 'Exclusive Villa', 'Not sure yet']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function ContactClient() {
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.1 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire this to an email service (e.g. Resend, Formspree)
    setSubmitted(true)
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.web-dynamic.gr/sunnyvillas/images/homepage-header-02.jpg"
            alt="Contact Sunny Villas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#c49a6c]" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase font-body">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-[#c49a6c]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(44px,7vw,90px)] text-white leading-none drop-shadow-lg"
          >
            Let&apos;s Plan Your
            <br />
            <span className="italic text-[#e8bc88]">Perfect Stay</span>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#fdfaf6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left: Contact details */}
            <motion.div
              ref={formRef}
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              className="lg:col-span-2 flex flex-col gap-12"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-[#c49a6c]" />
                  <span className="text-[#c49a6c] text-xs tracking-[0.3em] uppercase font-body">
                    Find Us
                  </span>
                </div>
                <h2 className="font-display text-3xl text-[#1a1610] mb-4 leading-tight">
                  We&apos;re here to make it easy
                </h2>
                <p className="text-[#6b5e52] font-body font-light leading-relaxed">
                  Whether you have a question about a villa, want to check availability, or just want
                  to talk through what&apos;s right for you — we&apos;re a real team and we respond quickly.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <a
                  href="tel:+306945796792"
                  className="group flex items-start gap-4 p-5 border border-[#e5d9c8] hover:border-[#c49a6c] transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#f0e8d8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c49a6c] transition-colors duration-300">
                    <Phone size={16} className="text-[#c49a6c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body mb-1">Call us</div>
                    <div className="text-[#1a1610] font-body font-medium">+30 694 579 6792</div>
                  </div>
                </a>

                <a
                  href="mailto:info@sunnyvillashalkidiki.com"
                  className="group flex items-start gap-4 p-5 border border-[#e5d9c8] hover:border-[#c49a6c] transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#f0e8d8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c49a6c] transition-colors duration-300">
                    <Mail size={16} className="text-[#c49a6c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body mb-1">Email us</div>
                    <div className="text-[#1a1610] font-body font-medium">info@sunnyvillashalkidiki.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 border border-[#e5d9c8]">
                  <div className="w-10 h-10 bg-[#f0e8d8] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#c49a6c]" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body mb-1">Location</div>
                    <div className="text-[#1a1610] font-body font-medium">Chaniotis, Halkidiki</div>
                    <div className="text-[#9a8878] font-body text-sm">63085, Greece</div>
                  </div>
                </div>
              </motion.div>

              {/* Book direct CTA */}
              <motion.div variants={fadeUp} className="bg-[#1a1610] p-8">
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-body mb-3">Ready to book?</p>
                <p className="font-display text-2xl text-white mb-6 leading-tight">
                  Skip the form — book directly online
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3 bg-[#c49a6c] text-white text-sm tracking-[0.15em] uppercase font-body font-medium hover:bg-[#a07840] transition-colors duration-300 group"
                >
                  Book Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Enquiry form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#e5d9c8]">
                  <div className="text-[#c49a6c] text-4xl mb-6">✦</div>
                  <h3 className="font-display text-3xl text-[#1a1610] mb-4">Thank you</h3>
                  <p className="text-[#6b5e52] font-body font-light max-w-sm leading-relaxed">
                    We&apos;ve received your enquiry and will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        First Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your first name"
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm placeholder:text-[#c4b8aa] focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your last name"
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm placeholder:text-[#c4b8aa] focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm placeholder:text-[#c4b8aa] focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 ..."
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm placeholder:text-[#c4b8aa] focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                      Villa of Interest
                    </label>
                    <select
                      className="bg-[#fdfaf6] border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm focus:outline-none focus:border-[#c49a6c] transition-colors duration-300 cursor-pointer appearance-none"
                    >
                      <option value="">Select a villa...</option>
                      {villas.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm focus:outline-none focus:border-[#c49a6c] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[#9a8878] font-body">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us a bit about your stay — number of guests, any special occasions, questions..."
                      className="bg-transparent border border-[#e5d9c8] px-4 py-3.5 text-[#1a1610] font-body text-sm placeholder:text-[#c4b8aa] focus:outline-none focus:border-[#c49a6c] transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-4 bg-[#1a1610] text-white text-sm tracking-[0.2em] uppercase font-body font-medium hover:bg-[#c49a6c] transition-colors duration-300 flex items-center justify-center gap-3 group"
                  >
                    Send Enquiry
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  <p className="text-[#9a8878] text-xs font-body text-center">
                    We respond to all enquiries within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
