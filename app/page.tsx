import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  )
}
