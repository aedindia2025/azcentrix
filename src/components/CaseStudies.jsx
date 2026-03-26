import { useEffect, useRef, useState } from 'react'
import './CaseStudies.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Operational Efficiency',
    desc: 'Automate repetitive workflows across HR, finance, and operations — cutting manual effort by up to 70% and freeing your team to focus on growth.',
    screenBg: 'linear-gradient(135deg, #0058bf 0%, #003d8a 100%)',
    screenIcon: '⚙️',
    screenTitle: 'Smart Automation',
    screenStat: '70%',
    screenStatLabel: 'Effort Reduced',
    badgeTitle: 'Operational Efficiency',
    badgeDesc: 'Automate processes across your entire organization.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: 'Real-Time Intelligence',
    desc: 'Gain instant visibility into your entire organization with live dashboards, AI-powered analytics, and predictive reporting tools.',
    screenBg: 'linear-gradient(135deg, #065f46 0%, #022c21 100%)',
    screenIcon: '📊',
    screenTitle: 'Live Analytics',
    screenStat: '99%',
    screenStatLabel: 'Uptime SLA',
    badgeTitle: 'Real-Time Intelligence',
    badgeDesc: 'Live dashboards and predictive reporting tools.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'Enterprise-Grade Security',
    desc: 'Role-based access control, encrypted data storage, and AI-driven surveillance keep your assets and information protected around the clock.',
    screenBg: 'linear-gradient(135deg, #1e1b4b 0%, #0a0920 100%)',
    screenIcon: '🔒',
    screenTitle: 'Access Control',
    screenStat: '99.5%',
    screenStatLabel: 'Accuracy Rate',
    badgeTitle: 'Enterprise Security',
    badgeDesc: 'AI-driven protection around the clock.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Our modular platforms grow with your business — from a 50-person team to a 50,000-node enterprise, without disruption or re-implementation.',
    screenBg: 'linear-gradient(135deg, #134e4a 0%, #042f2c 100%)',
    screenIcon: '🚀',
    screenTitle: 'Scale On Demand',
    screenStat: '500+',
    screenStatLabel: 'Projects Delivered',
    badgeTitle: 'Scalable Architecture',
    badgeDesc: 'Grows from startup to enterprise seamlessly.',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [screenVisible, setScreenVisible] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  // Auto-cycle
  useEffect(() => {
    const t = setInterval(() => {
      setScreenVisible(false)
      setTimeout(() => {
        setActiveFeature(i => (i + 1) % features.length)
        setScreenVisible(true)
      }, 350)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const switchFeature = (i) => {
    if (i === activeFeature) return
    setScreenVisible(false)
    setTimeout(() => { setActiveFeature(i); setScreenVisible(true) }, 350)
  }

  const f = features[activeFeature]

  return (
    <section className="feat-section" ref={ref}>
      <div className="feat-container">

        {/* ── Left: laptop mockup ── */}
        <div className={`feat-visual${inView ? ' visible' : ''}`}>

          {/* Laptop */}
          <div className="feat-laptop">
            <div className="feat-laptop-lid">
              <div className="feat-laptop-bezel">
                {/* Screen */}
                <div
                  className={`feat-laptop-screen${screenVisible ? ' show' : ''}`}
                  style={{ background: f.screenBg }}
                >
                  {/* Fake browser bar */}
                  <div className="feat-screen-bar">
                    <div className="feat-screen-dots">
                      <span /><span /><span />
                    </div>
                    <div className="feat-screen-url">azcentrix.com/solutions</div>
                  </div>

                  {/* Screen content */}
                  <div className="feat-screen-body">
                    <div className="feat-screen-overlay" />
                    <div className="feat-screen-content">
                      <div className="feat-screen-icon">{f.screenIcon}</div>
                      <div className="feat-screen-title">{f.screenTitle}</div>
                      <div className="feat-screen-stat">{f.screenStat}</div>
                      <div className="feat-screen-stat-label">{f.screenStatLabel}</div>
                      <div className="feat-screen-bars">
                        {[75, 55, 88, 42, 65].map((w, i) => (
                          <div key={i} className="feat-screen-bar-row">
                            <div className="feat-screen-bar-fill" style={{ width: `${w}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Camera dot */}
                <div className="feat-laptop-cam" />
              </div>
            </div>
            {/* Hinge */}
            <div className="feat-laptop-hinge" />
            {/* Base */}
            <div className="feat-laptop-base">
              <div className="feat-laptop-notch" />
            </div>
          </div>

          {/* Floating dark badge */}
          <div className={`feat-badge${screenVisible ? ' show' : ''}`}>
            <div className="feat-badge-icon">{f.screenIcon}</div>
            <div className="feat-badge-text">
              <strong>{f.badgeTitle}</strong>
              <span>{f.badgeDesc}</span>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="feat-deco-dot feat-deco-dot-1" />
          <div className="feat-deco-dot feat-deco-dot-2" />
          <div className="feat-deco-dot feat-deco-dot-3" />
        </div>

        {/* ── Right: feature list ── */}
        <div className={`feat-list-wrap${inView ? ' visible' : ''}`}>
          <span className="feat-tag">WHY CHOOSE US</span>
          <h2 className="feat-heading">
            Solutions built for <span className="feat-highlight">real impact</span>
          </h2>

          <div className="feat-list">
            {features.map((item, i) => (
              <div
                key={i}
                className={`feat-item${activeFeature === i ? ' active' : ''}`}
                onMouseEnter={() => switchFeature(i)}
                onClick={() => switchFeature(i)}
              >
                <div className="feat-item-icon">{item.icon}</div>
                <div className="feat-item-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {activeFeature === i && <div className="feat-item-line" />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
