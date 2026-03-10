'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Section {
  title: string
  content: React.ReactNode
}

const SECTIONS: Section[] = [
  {
    title: 'Split — 6km Away',
    content: (
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        <p>
          Split is one of the most extraordinary cities on the Adriatic. At its centre is Diocletian's Palace — a Roman emperor's retirement home that became the city. People have lived inside it for 1,700 years. Cafés, restaurants, apartments, a cathedral, all built into what was originally a fortified palace.
        </p>
        <p>
          The old city is completely walkable and best explored without a plan. The Riva promenade runs along the waterfront — good for a morning coffee or evening drink watching the ferries.
        </p>
        <p>
          <strong className="text-white">Getting there:</strong> 10-minute taxi from the villa. Uber works too. If you're driving, parking is at Joker (10-minute walk to the palace gates).
        </p>
        <p>
          <strong className="text-white">Best time:</strong> Early morning (before 9am) or early evening (6pm onwards) when the day visitors leave.
        </p>
      </div>
    ),
  },
  {
    title: 'Marjan Hill',
    content: (
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        <p>
          Marjan Hill is a forested peninsula that juts out from Split's old city — walking and cycling trails through pine forest, wild swimming spots, and the best views in the area. On a clear day you can see Hvar, Brač, and the Mosor mountains all at once.
        </p>
        <p>
          The walk takes 20–30 minutes depending on how far you go. Start from the Varoš neighbourhood, follow the path up through the trees, and come out at the viewing terrace. Then drop down to the rocky swimming spots on the north side.
        </p>
        <p>
          <strong className="text-white">Getting there:</strong> 20 minutes from the villa by taxi or car. Drop off at Bene beach and walk up.
        </p>
      </div>
    ),
  },
  {
    title: 'The Islands',
    content: (
      <div className="space-y-4 text-sm text-muted leading-relaxed">
        <div>
          <p className="text-white font-semibold mb-1">Hvar</p>
          <p>The most popular island — known for its old town, lavender fields, and nightlife. Worth a full day. The harbour is beautiful; the hills above are even better. Go early, leave before the crowd builds up in the afternoon.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">Brač</p>
          <p>Famous for Zlatni Rat — a distinctive cape beach that shifts shape with the current. The stone from Brač was used to build Diocletian's Palace, and also the White House. A half-day works well here.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">Vis</p>
          <p>The furthest island from Split, the least touristy, and the most interesting. Untouched feel. Good restaurants in the two main towns (Vis Town and Komiža). Blue Cave is nearby if you want to go.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">Šolta</p>
          <p>Quiet, green, and close. Good for swimming and olive oil. Not as dramatic as the others but peaceful and never crowded.</p>
        </div>
        <p>
          <strong className="text-white">Getting there:</strong> Ferries from Split harbour (daily). Private boat is the best way — see the Experiences section to book. Catamarans are faster for Hvar.
        </p>
      </div>
    ),
  },
  {
    title: 'Restaurants',
    content: (
      <div className="space-y-4 text-sm text-muted leading-relaxed">
        <div>
          <p className="text-white font-semibold mb-1">Amigos — 5 minutes</p>
          <p>The villa's local. Proper sit-down Dalmatian food — fresh fish, grilled meat, good Dalmatian wine. Not touristy. Worth going at least once. Book ahead in high season.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">Lungo Mare — 5 minutes</p>
          <p>Street food on the waterfront promenade. Casual, quick, always good. Best for lunch or a late-night snack after a day on the water.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">In Split</p>
          <p>Konoba Fetivi (hidden in the old city, traditional, no frills, excellent fish). Dvor (by the sea wall, good for a long lunch). Bokeria (wine bar and small plates, good for the evening).</p>
        </div>
        <p>
          <strong className="text-white">Note:</strong> The villa's breakfast and optional on-site dining means you may not need to go far. Grgo can recommend and book anything based on your group's plans.
        </p>
      </div>
    ),
  },
  {
    title: 'Getting Around',
    content: (
      <div className="space-y-3 text-sm text-muted leading-relaxed">
        <p>
          <strong className="text-white">Car rental:</strong> Recommended if you want to explore beyond Split. The coast road south towards Omiš and the Cetina Canyon is spectacular. Pick up from Split airport — 20 minutes from the villa.
        </p>
        <p>
          <strong className="text-white">Taxis / Uber:</strong> Both work well in the area. Split centre is a €8–12 fare from the villa. Save Grgo's number — he can usually sort a transfer quickly.
        </p>
        <p>
          <strong className="text-white">Beach:</strong> 2-minute walk from the villa. The waterfront promenade runs along the shore.
        </p>
        <p>
          <strong className="text-white">Airport (SPU):</strong> 20 minutes from the villa. Direct flights from most UK and European airports. Private transfers can be arranged — ask Grgo.
        </p>
      </div>
    ),
  },
]

function AccordionSection({ section }: { section: Section }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-5 text-left group"
      >
        <span className="font-semibold text-[15px] text-white group-hover:text-orange transition-colors">
          {section.title}
        </span>
        <ChevronDown
          size={18}
          className={`text-muted transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6">{section.content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function WelcomePackPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">
          Everything you need to know
        </p>
        <h1
          className="font-display text-white leading-none"
          style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}
        >
          WELCOME<br />PACK
        </h1>
        <p className="mt-3 text-muted text-sm leading-relaxed max-w-lg">
          Grgo knows this coast better than anyone. These are his recommendations — the places, the routes, and everything worth knowing before you arrive.
        </p>
      </div>

      <div className="bg-surface border border-border">
        {SECTIONS.map((section) => (
          <AccordionSection key={section.title} section={section} />
        ))}
      </div>

      <div className="bg-surface border border-border p-5">
        <p className="text-[11px] uppercase tracking-widest text-muted font-semibold mb-2">Questions?</p>
        <p className="text-sm text-muted leading-relaxed">
          Grgo is always on hand. Message him directly —{' '}
          <a href="mailto:info@villagg.com" className="text-white hover:text-orange transition-colors">
            info@villagg.com
          </a>{' '}
          or WhatsApp. He'll sort whatever you need.
        </p>
      </div>
    </div>
  )
}
