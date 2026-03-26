import { useEffect, useRef, useState } from 'react'
import './Services.css'
import hrmsImg from '../assets/HRMS.jpeg'

const industries = [
  {
    title: 'HRMS',
    desc: 'Comprehensive Human Resource Management System to streamline payroll, attendance, leave, and employee lifecycle from a single platform.',
    gradient: 'linear-gradient(135deg, #0a3d7c 0%, #061d3f 100%)',
    accent: '#60a5fa',
    img: hrmsImg,
  },
  {
    title: 'CRM',
    desc: 'Powerful Customer Relationship Management tools to track leads, manage pipelines, and nurture customer relationships that drive revenue.',
    gradient: 'linear-gradient(135deg, #065f46 0%, #022c21 100%)',
    accent: '#34d399',
  },
  {
    title: 'ERP Suite',
    desc: 'Integrated Enterprise Resource Planning solution connecting finance, procurement, inventory, and operations into one unified ecosystem.',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e0a45 100%)',
    accent: '#a78bfa',
  },
  {
    title: 'Service Ticketing',
    desc: 'Smart helpdesk and ticketing platform that automates issue tracking, escalation, and resolution to deliver superior customer support.',
    gradient: 'linear-gradient(135deg, #0e7490 0%, #0a3d52 100%)',
    accent: '#22d3ee',
  },
  {
    title: 'Hostel Management',
    desc: 'End-to-end hostel administration system covering room allocation, fee collection, attendance, and resident communication.',
    gradient: 'linear-gradient(135deg, #92400e 0%, #3d1a04 100%)',
    accent: '#fbbf24',
  },
  {
    title: 'Library Management',
    desc: 'Digital library solution for cataloguing, issue tracking, fine management, and member access — reducing manual effort drastically.',
    gradient: 'linear-gradient(135deg, #065f46 0%, #013322 100%)',
    accent: '#6ee7b7',
  },
  {
    title: 'Toll Management',
    desc: 'Automated toll collection and vehicle monitoring system with real-time reporting, RFID integration, and seamless barrier control.',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0b1740 100%)',
    accent: '#93c5fd',
  },
  {
    title: 'RFID Tracking',
    desc: 'Real-time asset and personnel tracking using RFID technology for warehouses, campuses, hospitals, and manufacturing units.',
    gradient: 'linear-gradient(135deg, #701a75 0%, #2e0634 100%)',
    accent: '#e879f9',
  },
  {
    title: 'VMS (Vehicle Management System)',
    desc: 'Complete fleet and vehicle management platform with live GPS tracking, maintenance scheduling, fuel monitoring, and driver analytics.',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #331008 100%)',
    accent: '#fb923c',
  },
  {
    title: 'Video Analytics',
    desc: 'AI-powered video surveillance analytics for crowd detection, intrusion alerts, behaviour analysis, and intelligent monitoring.',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #042f2c 100%)',
    accent: '#2dd4bf',
  },
  {
    title: 'Face Recognition (FRS)',
    desc: 'Advanced facial recognition system for secure access control, attendance automation, and identity verification across facilities.',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #0a0920 100%)',
    accent: '#818cf8',
  },
  {
    title: 'Visitor Management',
    desc: 'Smart visitor check-in system with digital registration, badge printing, host notifications, and complete visitor log management.',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #02261c 100%)',
    accent: '#4ade80',
  },
]

function IndustryRow({ item, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {index > 0 && <div className="ind-divider" />}
      <div
        ref={ref}
        className={`ind-row${visible ? ' visible' : ''}`}
        style={{ transitionDelay: `${index * 0.08}s` }}
      >
        <div className="ind-text">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
        <div className="ind-img" style={{ background: item.gradient }}>
          {item.img
            ? <img src={item.img} alt={item.title} className="ind-img-photo" />
            : <>
                <div className="ind-img-lines" style={{ '--accent': item.accent }} />
                <span className="ind-img-label" style={{ color: item.accent }}>{item.title[0]}</span>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default function Services() {
  const leftRef = useRef(null)
  const [leftVisible, setLeftVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setLeftVisible(true) },
      { threshold: 0.2 }
    )
    if (leftRef.current) obs.observe(leftRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="services-section">
      <div className="services-inner">

        {/* ── Sticky Left Panel ── */}
        <div className={`svc-left${leftVisible ? ' visible' : ''}`} ref={leftRef}>
          <span className="svc-tag">WHAT WE BUILD</span>
          <h2>Our Core<br />Products &<br />Solutions</h2>
          <p>
            From enterprise management systems to AI-powered surveillance — we build
            powerful, scalable software that transforms how organizations operate.
          </p>
          <a href="#contact" className="svc-discover-btn">
            <span className="btn-text">Schedule A Meeting</span>
            <span className="btn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </span>
          </a>
        </div>

        {/* ── Scrollable Right Panel ── */}
        <div className="svc-right">
          {industries.map((item, i) => (
            <IndustryRow key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
