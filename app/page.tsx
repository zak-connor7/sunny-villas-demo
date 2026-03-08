import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Villas from '@/components/Villas'
import Amenities from '@/components/Amenities'
import Activities from '@/components/Activities'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Villas />
      <Amenities />
      <Activities />
      <BookCTA />
      <Footer />
    </main>
  )
}
