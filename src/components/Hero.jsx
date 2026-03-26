import { useEffect, useState } from 'react'
import bgImg from '../assets/bgimg01.png'
import './Hero.css'

export default function Hero() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero-section">
      {/* Ambient glows */}
      <div className="glow glow-left" />
      <div className="glow glow-purple" />

      {/* Full-height ribbon image — right side */}
      <img src={bgImg} className="hero-bgimg" alt="" aria-hidden="true" />

      {/* Text content */}
      <div className={`hero-content${animate ? ' is-visible' : ''}`}>

        {/* Row 1 — "Build your" centered */}
        <div className="row row-1">
          <div className="mask"><h1 className="hw slide-left d1">Build your</h1></div>
        </div>

        {/* Row 2 — subtitle LEFT | "team the" RIGHT */}
        <div className="row row-2">
          <div className="subtitle-col fade-in d2">
            <p>Our vast experience, thought leadership and<br />commitment to digitization invention</p>
            <div className="sub-line" />
          </div>
          <div className="teamthe-col">
            <div className="mask"><h1 className="hw cyan slide-left d2">team</h1></div>
            <div className="mask"><h1 className="hw slide-right d2">the</h1></div>
          </div>
        </div>

        {/* Row 3 — "easy way" centered */}
        <div className="row row-3">
          <div className="mask"><h1 className="hw slide-left d3">easy way</h1></div>
        </div>

        {/* Row 4 — CTA */}
        <div className="row row-4 fade-in d4">
          <a href="#contact" className="cta-btn">Start Free Trail</a>
          <p className="cta-desc">
            High degree of the sensitivity and specificity<br />
            to prescribe recommended actions
          </p>
        </div>

      </div>
    </section>
  )
}
