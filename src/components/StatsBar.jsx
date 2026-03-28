import { useState, useEffect, useRef } from 'react'
import './StatsBar.css'

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  function start() {
    if (started.current) return
    started.current = true
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const p = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }

  return [count, start]
}

export default function StatsBar() {
  const ref = useRef(null)
  const [c1, start1] = useCounter(50)
  const [c2, start2] = useCounter(100)
  const [c3, start3] = useCounter(15)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        start1(); start2(); start3()
        obs.disconnect()
      }
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats-bar" ref={ref}>
      <div className="stats-bar-inner reveal">
        <div className="stat-block">
          <div className="stat-num"><span>{c1}</span><span className="stat-accent">+</span></div>
          <div className="stat-label">Enterprise Products</div>
        </div>
        <div className="stat-block">
          <div className="stat-num"><span>{c2}</span><span className="stat-accent">+</span></div>
          <div className="stat-label">Clients </div>
        </div>
        <div className="stat-block">
          <div className="stat-num"><span>{c3}</span><span className="stat-accent">+</span></div>
          <div className="stat-label">Years in Business</div>
        </div>
        <div className="stat-block">
          <div className="stat-num">99<span className="stat-accent">.9%</span></div>
          <div className="stat-label">Guaranteed Uptime SLA</div>
        </div>
      </div>
    </div>
  )
}
