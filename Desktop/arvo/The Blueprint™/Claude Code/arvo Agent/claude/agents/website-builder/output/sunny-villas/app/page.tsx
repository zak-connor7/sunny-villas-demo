import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Villas from '@/components/Villas'
import Amenities from '@/components/Amenities'
import Reviews from '@/components/Reviews'
import Retreats from '@/components/Retreats'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Villas />
<Amenities />
      <Reviews />
      <Retreats />
      <BookingCTA />
      <Footer />
    </main>
  )
}
