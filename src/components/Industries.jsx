import { Factory, HeartPulse, GraduationCap, Landmark, Scale, Truck, Hotel, ShoppingCart } from 'lucide-react'
import './Industries.css'

const INDUSTRIES = [
  { Icon: Factory,        color: '#f59e0b', name: 'Manufacturing',  desc: 'ERP, shop-floor management, inventory, quality control, and production analytics.',              },
  { Icon: HeartPulse,     color: '#dc2626', name: 'Healthcare',     desc: 'Patient tracking, RFID asset management, visitor management, and facility security.',              },
  { Icon: GraduationCap,  color: '#7c3aed', name: 'Education',      desc: 'Campus ERP, library system, hostel management, attendance with face recognition.',                 },
  { Icon: Landmark,       color: '#2563eb', name: 'BFSI',           desc: 'CRM, compliance tools, identity verification, biometric access, and audit management.',              },
  { Icon: Scale,          color: '#0f9b6e', name: 'Government',     desc: 'Citizen services, e-governance, toll management, surveillance, and public infrastructure.',          },
  { Icon: Truck,          color: '#ea580c', name: 'Transportation',  desc: 'Toll systems, RFID vehicle tracking, fleet management, and traffic analytics.',                      },
  { Icon: Hotel,          color: '#db2777', name: 'Hospitality',    desc: 'Property management, VMS, guest analytics, access control, and POS integration.',                    },
  { Icon: ShoppingCart,   color: '#0891b2', name: 'Retail & FMCG', desc: 'Omnichannel CRM, inventory management, supply chain ERP, and shopper analytics.',                    },
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
              <div className="ind-icon" style={{ color: ind.color }}><ind.Icon size={32} strokeWidth={1.5} /></div>
              <div className="ind-name">{ind.name}</div>
              <div className="ind-desc">{ind.desc}</div>
              {/* <span className="ind-chip">{ind.chip}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
