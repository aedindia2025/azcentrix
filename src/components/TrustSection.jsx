import { useEffect, useRef, useState } from 'react'
import pattern2 from '../assets/pattern-2.webp'
import './TrustSection.css'

export default function TrustSection() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="trust-section" ref={ref}>
      {/* Subtle grid overlay */}
      <div className="trust-grid-overlay" />

      <div className="trust-container">

        {/* Left content */}
        <div className={`trust-content${inView ? ' visible' : ''}`}>
          <span className="trust-tag">WHY CHOOSE US</span>
          <h2 className="trust-heading">
            <span className="trust-heading-white">Trusted Partners in</span>
            <span className="trust-heading-white">Fortifying </span>
            <span className="trust-heading-muted">Software</span>
            <br />
            <span className="trust-heading-muted">Protecting Businesses</span>
          </h2>

          <p className="trust-desc">
            Azcentrix is a leading provider of comprehensive enterprise software solutions,
            delivering robust systems that safeguard your operations and accelerate growth.
          </p>
          <p className="trust-desc">
            With a team of seasoned technology experts and developers, we offer a full range of
            services including HR automation, AI-powered security, real-time tracking, and
            intelligent surveillance systems.
          </p>

          <div className="trust-actions">
            <a href="#" className="trust-btn-outline">Learn More</a>
            <a href="#" className="trust-btn-primary">Get Started</a>
          </div>

          {/* Stats row */}
          <div className="trust-stats">
            <div className="trust-stat">
              <strong>12+</strong>
              <span>Years Experience</span>
            </div>
            <div className="trust-stat-divider" />
            <div className="trust-stat">
              <strong>500+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="trust-stat-divider" />
            <div className="trust-stat">
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right — pattern image card */}
        <div className={`trust-card-wrap${inView ? ' visible' : ''}`}>
          <div className="trust-card">
            <div className="trust-card-glow" />
            <img src={pattern2} alt="Security pattern" className="trust-pattern-img" />
            <div className="trust-card-dot trust-card-dot-1" />
            <div className="trust-card-dot trust-card-dot-2" />
            <div className="trust-card-dot trust-card-dot-3" />
          </div>
        </div>

      </div>
    </section>
  )
}
