'use client'

import Image from 'next/image'

const BOOKING_URL = 'https://sunnyvillasresortandspa.reserve-online.net/'
const CHECKIN_URL = 'https://form.jotform.com/201057247858864'

export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.svg"
                alt="Sunny Villas"
                width={28}
                height={28}
                className="brightness-0 invert opacity-70"
              />
              <div>
                <p className="font-display text-[12px] tracking-[0.24em] text-white leading-none">
                  SUNNY VILLAS
                </p>
                <p className="text-[8px] tracking-[0.16em] text-white/35 uppercase mt-0.5">
                  Halkidiki, Greece
                </p>
              </div>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px]">
              Eleven private villas with heated pools and hotel service on the Kassandra Peninsula.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="text-[11px] font-semibold text-white/50 mb-5 tracking-[0.1em] uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Villas', href: '/#villas' },
                { label: 'Experiences', href: '/experiences' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Amenities', href: '/#amenities' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-[13px] text-white/35 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book column */}
          <div>
            <h4 className="text-[11px] font-semibold text-white/50 mb-5 tracking-[0.1em] uppercase">
              Book
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/35 hover:text-white transition-colors"
                >
                  Check Availability
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sunnyvillashalkidiki.com"
                  className="text-[13px] text-white/35 hover:text-white transition-colors"
                >
                  Enquire Directly
                </a>
              </li>
              <li>
                <a
                  href={CHECKIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/35 hover:text-white transition-colors"
                >
                  Online Check-In
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social column */}
          <div>
            <h4 className="text-[11px] font-semibold text-white/50 mb-5 tracking-[0.1em] uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+306945796792" className="text-[13px] text-white/35 hover:text-white transition-colors">
                  +30 6945796792
                </a>
              </li>
              <li>
                <a href="mailto:info@sunnyvillashalkidiki.com" className="text-[13px] text-white/35 hover:text-white transition-colors">
                  info@sunnyvillashalkidiki.com
                </a>
              </li>
              <li className="text-[13px] text-white/35">
                Hanioti, Kassandra, 630 85
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/sunny_villas_resort_and_spa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-white/35 hover:text-white transition-colors uppercase tracking-[0.08em]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/sunnyvillashalkidiki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-white/35 hover:text-white transition-colors uppercase tracking-[0.08em]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-14 pt-10 border-t border-white/[0.06]">
          <div className="grid md:grid-cols-[1fr_400px] gap-8 items-end">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-white/30 font-medium mb-2">Find Us</p>
              <p className="text-[13px] text-white/40 leading-relaxed max-w-sm">
                On the hillside above Hanioti, Kassandra Peninsula. Ten minutes from the beach.
              </p>
            </div>
            <div className="overflow-hidden rounded-sm" style={{ aspectRatio: '16/9' }}>
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
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-white/20">
            &copy; 2025 Sunny Villas Resort &amp; Spa. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20">
            Website by <a href="https://arvodigital.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">arvo Digital</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
