import { useState, useEffect, useRef } from 'react'
import {
  Users, Handshake, Building2, HeadphonesIcon,
  BedDouble, BookOpen, Car, Radio,
  Video, ScanSearch, ScanFace, BadgeCheck,
  Smartphone, Network, ShieldCheck, GitMerge,
  ArrowRight,
} from 'lucide-react'
import hrmsImg from '../assets/HRMS.jfif'
import crmImg from '../assets/CRM.png'
import lmsImg from '../assets/LMS.png'
import hostelImg from '../assets/Hostel.png'
import rfidImg from '../assets/Rfid.png'
import gatepassImg from '../assets/gatepass.png'
import erpImg from '../assets/Erp.avif'
import frsImg from '../assets/FRS.jpg'
import visitorImg from '../assets/Visitormanagement-2.jpg'
import serviceTicketingImg from '../assets/ServiceTicketing.png'
import vmsImg from '../assets/VMS.jpg'
import videoAnalyticsImg from '../assets/Visitor-management.jpg'
import mdmImg from '../assets/MDM.jpg'
import nmsImg from '../assets/NMS.jpg'  
import firewall from '../assets/Firewall.jpg'
import sdwan from '../assets/SD-WAN.jpg'
import './Products.css'

const PRODUCTS = [
  { id: 'p1',  name: 'HRMS',                  cat: 'enterprise',     Icon: Users,          img: hrmsImg, desc: 'End-to-end HR covering recruitment, payroll, attendance, leaves, and performance management.',          tags: ['Payroll', 'Attendance', 'Analytics'], top: '#0f9b6e' },
  { id: 'p2',  name: 'CRM',                   cat: 'enterprise',     Icon: Handshake,      img: crmImg,  desc: 'Intelligent CRM with pipeline management, lead scoring, automation, and customer analytics.',            tags: ['Pipeline', 'SaaS', 'AI'],            top: '#2563eb' },
  { id: 'p3',  name: 'ERP Suite',              cat: 'enterprise',     Icon: Building2,      img: erpImg,              desc: 'Full-stack enterprise resource planning — finance, procurement, supply chain, and operations.',          tags: ['Finance', 'Supply Chain'],           top: '#f59e0b' },
  { id: 'p4',  name: 'Service Ticketing',      cat: 'enterprise',     Icon: HeadphonesIcon, img: serviceTicketingImg, desc: 'ITIL-aligned service desk with SLA tracking, automation rules, and self-service portal.',               tags: ['ITIL', 'Automation'],                top: '#16a34a' },
  { id: 'p5',  name: 'Hostel Management',      cat: 'management',     Icon: BedDouble,      img: hostelImg,  desc: 'Room allocation, fee management, mess module, and inmate activity tracking.',                           tags: ['Education', 'Mobile App'],           top: '#7c3aed' },
  { id: 'p6',  name: 'Library Management',     cat: 'management',     Icon: BookOpen,       img: lmsImg,     desc: 'Smart library with RFID cataloguing, digital lending, fine management, and usage analytics.',           tags: ['RFID', 'Digital'],                   top: '#db2777' },
  { id: 'p7',  name: 'Toll Management',        cat: 'management',     Icon: Car,            img: gatepassImg,desc: 'Automated toll collection with FASTag, RFID, lane management, and revenue dashboards.',                 tags: ['RFID', 'Govt Ready'],                top: '#ea580c' },
  { id: 'p8',  name: 'RFID Tracking',          cat: 'management',     Icon: Radio,          img: rfidImg,    desc: 'Real-time asset and people tracking with passive/active RFID, geofencing, and alerts.',                 tags: ['IoT', 'Real-Time'],                  top: '#0891b2' },
  { id: 'p9',  name: 'VMS',                    cat: 'security',       Icon: Video,          img: vmsImg,     desc: 'Centralised video management with multi-camera control, intelligent playback, and archiving.',           tags: ['HD Video', 'AI Search'],             top: '#2563eb' },
  { id: 'p10', name: 'Video Analytics',        cat: 'security',       Icon: ScanSearch,     img: videoAnalyticsImg, desc: 'Deep learning analytics for crowd counting, intrusion detection, and behavioural analysis.',             tags: ['Deep Learning', 'Edge AI'],          top: '#dc2626' },
  { id: 'p11', name: 'Face Recognition (FRS)', cat: 'security',       Icon: ScanFace,       img: frsImg,     desc: '99.9% accurate biometric face recognition for access control, attendance, and identity.',                tags: ['Biometric', 'AI'],                   top: '#7c3aed' },
  { id: 'p12', name: 'Visitor Management',     cat: 'security',       Icon: BadgeCheck,     img: visitorImg, desc: 'Digital visitor registration, badge printing, host alerts, and compliance audit trails.',                tags: ['Digital', 'Compliance'],             top: '#ea580c' },
  { id: 'p13', name: 'MDM',                    cat: 'infrastructure', Icon: Smartphone,     img: mdmImg,     desc: 'Mobile Device Management — policy enforcement, remote wipe, app distribution, and compliance.',         tags: ['iOS', 'Android', 'Windows'],         top: '#16a34a' },
  { id: 'p14', name: 'NMS',                    cat: 'infrastructure', Icon: Network,        img: nmsImg,     desc: 'Network Monitoring with real-time topology, SNMP polling, alerting, and performance baselines.',         tags: ['SNMP', 'NETFLOW'],                   top: '#f59e0b' },
  { id: 'p15', name: 'Firewall & UTM',         cat: 'infrastructure', Icon: ShieldCheck,    img:firewall,  desc: 'Next-gen firewall with IPS, web filtering, application control, and VPN management.',                   tags: ['NGFW', 'UTM', 'IPS'],                top: '#dc2626' },
  { id: 'p16', name: 'SD-WAN',                cat: 'infrastructure', Icon: GitMerge,       img:sdwan, desc: 'Software-defined WAN with zero-touch provisioning, multi-cloud routing, and QoS policies.',             tags: ['ZTP', 'Multi-Cloud'],                top: '#0891b2' },
]

const FILTERS = ['all', 'enterprise', 'security', 'infrastructure', 'management']

export default function Products() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)
  const rowRefs = useRef([])

  useEffect(() => {
    rowRefs.current = rowRefs.current.slice(0, visible.length)
    const timers = []
    const observers = []

    rowRefs.current.forEach((el, i) => {
      if (!el) return
      el.classList.remove('row-visible')
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => el.classList.add('row-visible'), i * 60)
          timers.push(t)
          obs.disconnect()
        }
      }, { threshold: 0.15 })
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      timers.forEach(clearTimeout)
      observers.forEach(o => o.disconnect())
    }
  }, [filter, visible.length])

  return (
    <section className="products" id="products">
      <div className="section-inner">
        <div className="prod-layout">

          {/* Sticky left panel */}
          <div className="prod-sticky">
            <div className="eyebrow">Product Suite</div>
            <h2 className="h2">50+ Products.<br /><span className="c">One Platform.</span></h2>
            <p className="body-lg">Every solution built to integrate natively with the others — eliminating data silos from day one.</p>
            <a href="#contact" className="btn-green prod-cta">
              Schedule A Meeting <ArrowRight size={15} strokeWidth={2} />
            </a>
            <div className="filter-bar">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`filt${filter === f ? ' on' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling product list */}
          <div className="prod-list">
            {visible.map((p, i) => (
              <div
                key={p.id}
                className="prod-row"
                ref={el => rowRefs.current[i] = el}
              >
                <div className="prod-row-inner">
                  <div className="prod-row-text">
                    <div className="prod-row-name">{p.name}</div>
                    <div className="prod-row-desc">{p.desc}</div>
                    <div className="prod-tags">
                      {p.tags.map(t => <span key={t} className="prod-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="prod-preview" style={{ background: p.top }}>
                    {p.img
                      ? <img src={p.img} alt={p.name} className="prod-preview-img" />
                      : <p.Icon size={52} strokeWidth={1.2} color="rgba(255,255,255,0.85)" />
                    }
                  </div>
                </div>
              </div>
            ))}

            {/* More to come */}
            <div className="prod-more-row">
              <span className="prod-more-btn">
                <span className="prod-more-dots">
                  <span /><span /><span />
                </span>
                More to Come
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
