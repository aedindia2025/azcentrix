import { useEffect, useRef, useState } from 'react'
import dotMap from '../assets/dot_map_2-1.png'
import './Clients.css'

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

// Two rows — scroll in opposite directions
const row1 = [
  { name: 'botanix',   icon: '🌿' },
  { name: 'grovia',    icon: '◎' },
  { name: 'noursh',    icon: '✦' },
  { name: 'neurova',   icon: '⬤' },
  { name: 'omnix',     icon: '⬡' },
  { name: 'PeakLand',  icon: '📍' },
  { name: 'nuvanta',   icon: '▣' },
  { name: 'brightbox', icon: '☒' },
  { name: 'Velocore',  icon: '⚡' },
  { name: 'Zynthra',   icon: '◈' },
]

const row2 = [
  { name: 'Optiflux',  icon: '◉' },
  { name: 'Clarvex',   icon: '✧' },
  { name: 'Luminos',   icon: '◐' },
  { name: 'Terrabit',  icon: '⬟' },
  { name: 'Vexora',    icon: '⬢' },
  { name: 'Syndara',   icon: '◆' },
  { name: 'Pixvault',  icon: '▦' },
  { name: 'Nebulink',  icon: '◎' },
  { name: 'Driftly',   icon: '⤷' },
  { name: 'Crestify',  icon: '△' },
]

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-row">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((c, i) => (
          <div key={i} className="client-logo">
            <span className="client-icon">{c.icon}</span>
            <span className="client-name">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(25000, 2000, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="clients-section" ref={ref}>
      {/* World dot map background */}
      <img src={dotMap} className="clients-dotmap" alt="" aria-hidden="true" />

      {/* Heading */}
      <div className={`clients-header${visible ? ' visible' : ''}`}>
        <h2>
          Trusted by{' '}
          <span className="clients-count">
            {count.toLocaleString()}+
            <svg className="underline-svg" viewBox="0 0 160 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9 Q80 2 158 9" stroke="#0058bf" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </span>{' '}
          world-class brands<br />and organizations of all sizes
        </h2>
      </div>

      {/* Marquee rows */}
      <div className={`clients-marquee${visible ? ' visible' : ''}`}>
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  )
}
