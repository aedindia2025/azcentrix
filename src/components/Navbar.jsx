import { useState, useEffect } from 'react'
import './Navbar.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ onHamburger }) {
  const [raised, setRaised] = useState(false)

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={raised ? 'raised' : ''}>
      <a href="#" className="logo">
        <div className="logo-icon">AZ</div>
        <span className="logo-name">Az<em>centrix</em></span>
      </a>
      <div className="nav-center">
        <a className="nav-link" href="#products">Products</a>
        <a className="nav-link" href="#why">Why Us</a>
        <a className="nav-link" href="#industries">Industries</a>
        <a className="nav-link" href="#tech">Technology</a>
        <a className="nav-link" href="#testimonials">Clients</a>
      </div>
      {/* <div className="nav-right">
        <button className="btn-text">Sign In</button>
        <button className="btn-nav-cta" onClick={() => scrollTo('contact')}>Request Demo →</button>
      </div> */}
      <button className="hamburger" onClick={onHamburger}>
        <span /><span /><span />
      </button>
    </nav>
  )
}
