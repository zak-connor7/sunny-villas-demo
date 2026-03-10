import { MapPin, Clock, Phone, Car, Plane } from 'lucide-react'

export default function ArrivalPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
          Everything you need for arrival
        </p>
        <h1
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}
        >
          ARRIVAL<br />INFO
        </h1>
      </div>

      {/* Address */}
      <InfoCard icon={<MapPin size={16} className="text-orange" />} title="Address">
        <p className="text-sm text-white font-semibold">Villa GG</p>
        <p className="text-sm text-muted">Mažuranićeva 20</p>
        <p className="text-sm text-muted">21312 Podstrana, Croatia</p>
        <a
          href="https://maps.google.com/?q=Mažuranićeva+20,+Podstrana,+Croatia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-[11px] uppercase tracking-widest font-bold text-orange hover:text-orange/80 transition-colors"
        >
          Open in Google Maps →
        </a>
      </InfoCard>

      {/* Check-in / Check-out */}
      <InfoCard icon={<Clock size={16} className="text-orange" />} title="Check-in & Check-out">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Check-in</p>
            <p className="text-white font-semibold text-lg">From 2:00 PM</p>
            <p className="text-muted text-[12px] mt-1">Early check-in may be possible — ask Grgo in advance.</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-1">Check-out</p>
            <p className="text-white font-semibold text-lg">By 11:00 AM</p>
            <p className="text-muted text-[12px] mt-1">Late check-out may be possible depending on the next booking.</p>
          </div>
        </div>
      </InfoCard>

      {/* Getting here */}
      <InfoCard icon={<Plane size={16} className="text-orange" />} title="Getting Here">
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <div>
            <p className="text-white font-semibold mb-1">By air</p>
            <p>Split Airport (SPU) is 20 minutes from the villa by car or transfer. Direct flights from most UK and major European cities. The airport is small and fast — 15 minutes from landing to outside, typically.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Private transfer</p>
            <p>Grgo can arrange a private transfer directly from the airport. Message him your flight details before arrival and he'll sort it. Recommended for large groups — avoids multiple taxis.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Car rental</p>
            <p>Available at the airport. Useful if you want to explore the coast, Mosor mountains, or drive down to Dubrovnik. Parking at the villa is straightforward.</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Taxi / Uber</p>
            <p>Both work from the airport. Roughly €25–35 for a standard cab to the villa. Uber tends to be slightly cheaper.</p>
          </div>
        </div>
      </InfoCard>

      {/* Driving */}
      <InfoCard icon={<Car size={16} className="text-orange" />} title="Driving to the Villa">
        <div className="space-y-2 text-sm text-muted leading-relaxed">
          <p>From Split Airport, take the A1/E65 south towards Split, then follow signs to Podstrana. The villa is on Mažuranićeva street, set back 100 metres from the beach promenade.</p>
          <p>Google Maps works well for navigation in Croatia. If you lose signal (unlikely), the beach road runs the entire length of Podstrana — the villa is easy to spot from the street.</p>
        </div>
      </InfoCard>

      {/* Contact */}
      <InfoCard icon={<Phone size={16} className="text-orange" />} title="Grgo's Contact">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-widest text-muted font-semibold">Email</span>
            <a href="mailto:info@villagg.com" className="text-sm text-white hover:text-orange transition-colors">
              info@villagg.com
            </a>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-[11px] uppercase tracking-widest text-muted font-semibold">Website</span>
            <a href="https://villagg.com" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-orange transition-colors">
              villagg.com
            </a>
          </div>
        </div>
        <p className="mt-4 text-[12px] text-muted leading-relaxed">
          Grgo is on-site and available throughout your stay. He knows everyone locally — from the best fish market to who has a boat going to Vis on Tuesday. Don't hesitate to ask.
        </p>
      </InfoCard>
    </div>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-surface border border-border p-5">
      <div className="flex items-center gap-2.5 mb-4">
        {icon}
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold">{title}</p>
      </div>
      {children}
    </div>
  )
}
