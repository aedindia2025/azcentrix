import { useEffect, useRef, useState } from 'react'
import './About.css'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const years = useCountUp(12, 1800, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about-section" ref={ref}>
      <div className="about-container">

        {/* Top heading */}
        <div className={`about-header${visible ? ' visible' : ''}`}>
          <span className="about-tag">OUR COMPANY</span>
          <h2>
            We run all kinds of IT services that<br />
            vow your <span className="highlight">success</span>
          </h2>
        </div>

        {/* Two column body */}
        <div className={`about-body${visible ? ' visible' : ''}`}>

          {/* Left — years + link */}
          <div className="about-left">
            <div className="years-block">
              <span className="years-num">{years}</span>
              <div className="years-label">
                <span>YEARS'</span>
                <span>EXPERIENCE</span>
                <span>IN IT</span>
              </div>
            </div>
            <a href="#contact" className="about-stories">
              Learn more about our Success Stories
            </a>
          </div>

          {/* Right — description + discover */}
          <div className="about-right">
            <p>
              Azcentrix specializes in technological and IT-related services such as
              product engineering, warranty management, building cloud, infrastructure,
              network, and more. We put a strong focus on the needs of your business
              to figure out solutions that best fits your demand and nail it.
            </p>
            <a href="#contact" className="about-discover">
              Discover now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
