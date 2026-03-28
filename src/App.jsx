import { useState, useEffect } from 'react'
import MobileNav from './components/MobileNav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import StatsBar from './components/StatsBar'
import Products from './components/Products'
import WhySection from './components/WhySection'
import Industries from './components/Industries'
import TechSection from './components/TechSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  return (
    <>
      <MobileNav show={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Navbar onHamburger={() => setMobileOpen(v => !v)} />
      <Hero />
      <Ticker />
      <StatsBar />
      <Products />
      <WhySection />
      <Industries />
      <TechSection />
      <CTASection />
      <Footer />
    </>
  )
}
