'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Villas', href: '#villas' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#fdfaf6]/90 backdrop-blur-md border-b border-[#e5d9c8]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              className={`font-display text-2xl tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-[#1a1610]' : 'text-white'
              }`}
            >
              Sunny Villas
            </span>
            <span
              className={`text-[10px] tracking-[0.25em] uppercase font-body font-light transition-colors duration-300 ${
                scrolled ? 'text-[#c49a6c]' : 'text-white/70'
              }`}
            >
              Halkidiki, Greece
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-[0.1em] uppercase font-body font-light transition-colors duration-300 hover:text-[#c49a6c] ${
                  scrolled ? 'text-[#1a1610]' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm tracking-[0.1em] uppercase font-body font-medium border transition-all duration-300 hover:bg-[#c49a6c] hover:border-[#c49a6c] hover:text-white"
              style={{
                borderColor: scrolled ? '#c49a6c' : 'rgba(255,255,255,0.6)',
                color: scrolled ? '#c49a6c' : 'white',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-[#1a1610]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#1a1610] flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-4xl text-white hover:text-[#c49a6c] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-8 py-3 border border-[#c49a6c] text-[#c49a6c] text-sm tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
