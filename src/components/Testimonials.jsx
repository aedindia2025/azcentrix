import './Testimonials.css'

const TESTIMONIALS = [
  {
    text: '"Azcentrix HRMS and ERP completely eliminated the reconciliation nightmare across our 12 manufacturing plants. What took 3 weeks now happens automatically every night."',
    av: 'RK', avBg: 'linear-gradient(135deg,#0f9b6e,#0bc5a0)',
    name: 'Rajesh Kumar', role: 'CIO — National Infrastructure Corp',
  },
  {
    text: '"The RFID Toll Management system went live in under 3 weeks. Automated billing cut our processing costs by 60% and the real-time dashboards are exceptional."',
    av: 'SP', avBg: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    name: 'Sunita Patel', role: 'Director of Ops — Highway Authority',
  },
  {
    text: '"FRS and NMS gave our 40-campus network complete visibility. Face recognition accuracy is outstanding and the centralised security console changed how we operate."',
    av: 'AM', avBg: 'linear-gradient(135deg,#2563eb,#7c3aed)',
    name: 'Aisha Mohammed', role: 'VP Technology — State University',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Client Stories</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>What Our Clients<br /><span className="c">Actually Say</span></h2>
        </div>
        <div className="t-grid reveal">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="t-card">
              <div className="t-stars">
                {Array(5).fill(null).map((_, i) => <span key={i} className="t-star">★</span>)}
              </div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-av" style={{ background: t.avBg }}>{t.av}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
