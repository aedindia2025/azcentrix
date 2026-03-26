import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Clients from './components/Clients'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import TrustSection from './components/TrustSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <TrustSection />
      <CaseStudies />
      <Footer />
    </>
  )
}
