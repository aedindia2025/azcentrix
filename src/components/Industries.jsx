import './Industries.css'

const INDUSTRIES = [
  { icon: '🏭', name: 'Manufacturing',   desc: 'ERP, shop-floor management, inventory, quality control, and production analytics.',              chip: '8 modules' },
  { icon: '🏥', name: 'Healthcare',      desc: 'Patient tracking, RFID asset management, visitor management, and facility security.',              chip: '6 modules' },
  { icon: '🎓', name: 'Education',       desc: 'Campus ERP, library system, hostel management, attendance with face recognition.',                 chip: '7 modules' },
  { icon: '🏦', name: 'BFSI',           desc: 'CRM, compliance tools, identity verification, biometric access, and audit management.',             chip: '5 modules' },
  { icon: '🏛️', name: 'Government',     desc: 'Citizen services, e-governance, toll management, surveillance, and public infrastructure.',         chip: '9 modules' },
  { icon: '🚗', name: 'Transportation',  desc: 'Toll systems, RFID vehicle tracking, fleet management, and traffic analytics.',                     chip: '5 modules' },
  { icon: '🏨', name: 'Hospitality',     desc: 'Property management, VMS, guest analytics, access control, and POS integration.',                   chip: '6 modules' },
  { icon: '🛒', name: 'Retail & FMCG',  desc: 'Omnichannel CRM, inventory management, supply chain ERP, and shopper analytics.',                   chip: '6 modules' },
]

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Industries</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>Purpose-Built for<br /><span className="c">Every Sector</span></h2>
          <p className="body-lg" style={{ margin: '12px auto 0', textAlign: 'center' }}>Domain-specific workflows, compliance templates, and integrations for 12+ verticals.</p>
        </div>
        <div className="ind-grid reveal">
          {INDUSTRIES.map(ind => (
            <div key={ind.name} className="ind-card">
              <span className="ind-icon">{ind.icon}</span>
              <div className="ind-name">{ind.name}</div>
              <div className="ind-desc">{ind.desc}</div>
              <span className="ind-chip">{ind.chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
