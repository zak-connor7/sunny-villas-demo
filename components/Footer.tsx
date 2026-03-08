import { Mail, Phone, MapPin } from 'lucide-react'

const links = [
  { label: 'Villas', href: '#villas' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Activities', href: '#activities' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111008] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="font-display text-2xl text-white tracking-wide mb-1">
                Sunny Villas
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c49a6c] font-body">
                Halkidiki, Greece
              </div>
            </div>
            <p className="text-white/40 text-sm font-body font-light leading-relaxed">
              Private luxury villas with pools and panoramic Aegean sea views. Feeling special in a
              magic place.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-body mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-[#c49a6c] text-sm font-body font-light transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-body mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+306945796792"
                className="flex items-center gap-3 text-white/60 hover:text-[#c49a6c] text-sm font-body font-light transition-colors duration-300"
              >
                <Phone size={14} className="text-[#c49a6c]" />
                +30 694 579 6792
              </a>
              <a
                href="mailto:info@sunnyvillashalkidiki.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#c49a6c] text-sm font-body font-light transition-colors duration-300"
              >
                <Mail size={14} className="text-[#c49a6c]" />
                info@sunnyvillashalkidiki.com
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm font-body font-light">
                <MapPin size={14} className="text-[#c49a6c]" />
                Chaniotis, Halkidiki, 63085 Greece
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body tracking-widest uppercase">
            © {new Date().getFullYear()} Sunny Villas Resort & Spa Halkidiki
          </p>
          <p className="text-white/20 text-xs font-body">
            Feeling special in a magic place ✦
          </p>
        </div>
      </div>
    </footer>
  )
}
