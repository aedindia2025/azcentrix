import { useState } from 'react'
import {
  Users, Handshake, Building2, HeadphonesIcon,
  BedDouble, BookOpen, Car, Radio,
  Video, ScanSearch, ScanFace, BadgeCheck,
  Smartphone, Network, ShieldCheck, GitMerge,
} from 'lucide-react'
import './Products.css'

const PRODUCTS = [
  { id: 'p1',  name: 'HRMS',                 cat: 'enterprise',     Icon: Users,           bg: '#e6f6f1', desc: 'End-to-end HR covering recruitment, payroll, attendance, leaves, and performance management.',          tags: ['Payroll', 'Attendance', 'Analytics'], top: '#0f9b6e' },
  { id: 'p2',  name: 'CRM',                  cat: 'enterprise',     Icon: Handshake,       bg: '#eff6ff', desc: 'Intelligent CRM with pipeline management, lead scoring, automation, and customer analytics.',            tags: ['Pipeline', 'SaaS', 'AI'],            top: '#2563eb' },
  { id: 'p3',  name: 'ERP Suite',             cat: 'enterprise',     Icon: Building2,       bg: '#fff7ed', desc: 'Full-stack enterprise resource planning — finance, procurement, supply chain, and operations.',          tags: ['Finance', 'Supply Chain'],           top: '#f59e0b' },
  { id: 'p4',  name: 'Service Ticketing',     cat: 'enterprise',     Icon: HeadphonesIcon,  bg: '#f0fdf4', desc: 'ITIL-aligned service desk with SLA tracking, automation rules, and self-service portal.',               tags: ['ITIL', 'Automation'],                top: '#16a34a' },
  { id: 'p5',  name: 'Hostel Management',     cat: 'management',     Icon: BedDouble,       bg: '#faf5ff', desc: 'Room allocation, fee management, mess module, and inmate activity tracking.',                           tags: ['Education', 'Mobile App'],           top: '#7c3aed' },
  { id: 'p6',  name: 'Library Management',    cat: 'management',     Icon: BookOpen,        bg: '#fdf2f8', desc: 'Smart library with RFID cataloguing, digital lending, fine management, and usage analytics.',           tags: ['RFID', 'Digital'],                   top: '#db2777' },
  { id: 'p7',  name: 'Toll Management',       cat: 'management',     Icon: Car,             bg: '#fff7ed', desc: 'Automated toll collection with FASTag, RFID, lane management, and revenue dashboards.',                 tags: ['RFID', 'Govt Ready'],                top: '#ea580c' },
  { id: 'p8',  name: 'RFID Tracking',         cat: 'management',     Icon: Radio,           bg: '#ecfeff', desc: 'Real-time asset and people tracking with passive/active RFID, geofencing, and alerts.',                 tags: ['IoT', 'Real-Time'],                  top: '#0891b2' },
  { id: 'p9',  name: 'VMS',                   cat: 'security',       Icon: Video,           bg: '#eff6ff', desc: 'Centralised video management with multi-camera control, intelligent playback, and archiving.',           tags: ['HD Video', 'AI Search'],             top: '#2563eb' },
  { id: 'p10', name: 'Video Analytics',       cat: 'security',       Icon: ScanSearch,      bg: '#fef2f2', desc: 'Deep learning analytics for crowd counting, intrusion detection, and behavioural analysis.',             tags: ['Deep Learning', 'Edge AI'],          top: '#dc2626' },
  { id: 'p11', name: 'Face Recognition (FRS)',cat: 'security',       Icon: ScanFace,        bg: '#faf5ff', desc: '99.9% accurate biometric face recognition for access control, attendance, and identity.',                tags: ['Biometric', 'AI'],                   top: '#7c3aed' },
  { id: 'p12', name: 'Visitor Management',    cat: 'security',       Icon: BadgeCheck,      bg: '#fff7ed', desc: 'Digital visitor registration, badge printing, host alerts, and compliance audit trails.',                tags: ['Digital', 'Compliance'],             top: '#ea580c' },
  { id: 'p13', name: 'MDM',                   cat: 'infrastructure', Icon: Smartphone,      bg: '#f0fdf4', desc: 'Mobile Device Management — policy enforcement, remote wipe, app distribution, and compliance.',         tags: ['iOS', 'Android', 'Windows'],         top: '#16a34a' },
  { id: 'p14', name: 'NMS',                   cat: 'infrastructure', Icon: Network,         bg: '#fff7ed', desc: 'Network Monitoring with real-time topology, SNMP polling, alerting, and performance baselines.',         tags: ['SNMP', 'NETFLOW'],                   top: '#f59e0b' },
  { id: 'p15', name: 'Firewall & UTM',        cat: 'infrastructure', Icon: ShieldCheck,     bg: '#fef2f2', desc: 'Next-gen firewall with IPS, web filtering, application control, and VPN management.',                   tags: ['NGFW', 'UTM', 'IPS'],                top: '#dc2626' },
  { id: 'p16', name: 'SD-WAN',               cat: 'infrastructure', Icon: GitMerge,        bg: '#ecfeff', desc: 'Software-defined WAN with zero-touch provisioning, multi-cloud routing, and QoS policies.',             tags: ['ZTP', 'Multi-Cloud'],                top: '#0891b2' },
]

const FILTERS = ['all', 'enterprise', 'security', 'infrastructure', 'management']

export default function Products() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)

  return (
    <section className="products" id="products">
      <div className="section-inner">
        <div className="products-head reveal">
          <div>
            <div className="eyebrow">Product Suite</div>
            <h2 className="h2">50+ Products. <span className="c">One Platform.</span></h2>
            <p className="body-lg">Every solution built to integrate natively with the others — eliminating data silos from day one.</p>
          </div>
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
        <div className="prod-grid">
          {visible.map(p => (
            <div key={p.id} className="prod-card" style={{ '--t': p.top }}>
              <style>{`.prod-card:hover::after{background:linear-gradient(90deg,${p.top},${p.top}aa)}`}</style>
              <div className="prod-icon" style={{ background: p.bg, color: p.top }}><p.Icon size={26} strokeWidth={1.6} /></div>
              <div className="prod-cat">{p.cat}</div>
              <div className="prod-name">{p.name}</div>
              <div className="prod-desc">{p.desc}</div>
              <div className="prod-footer">
                <div className="prod-tags">
                  {p.tags.map(t => <span key={t} className="prod-tag">{t}</span>)}
                </div>
                <a href="#" className="prod-link">→</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
