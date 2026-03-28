import './WhySection.css'

const WHY_POINTS = [
  { icon: '🔗', title: 'Native Cross-Module Integration', desc: 'All 50+ products share a common data layer. HR data flows to Payroll to ERP to Analytics — without a single API call from your team.' },
  { icon: '⚡', title: 'Go Live in Days, Not Months', desc: 'Cloud-native deployment, pre-configured industry templates, and dedicated onboarding engineers get you operational fast.' },
  { icon: '🛡️', title: 'Zero-Trust Security by Default', desc: 'ISO 27001 certified. Every module ships with role-based access, audit trails, MFA, and end-to-end encryption — no add-ons needed.' },
  { icon: '📊', title: 'Unified Intelligence Dashboard', desc: 'Predictive analytics and AI-driven insights surface across all modules — from headcount forecasting to network anomaly detection.' },
  { icon: '🌍', title: 'Global Compliance Ready', desc: 'GDPR, PDPA, SOC 2, and region-specific regulatory frameworks are built in, not bolted on.' },
]

const MODULES = [
  { bg: '#e6f6f1', icon: '👥', name: 'HRMS + Payroll',    sub: '3,240 active sessions' },
  { bg: '#eff6ff', icon: '🏢', name: 'ERP Suite',          sub: 'Finance · Procurement · Ops' },
  { bg: '#fef2f2', icon: '🔥', name: 'Network Security',   sub: 'Firewall · SD-WAN · NMS' },
  { bg: '#f5f3ff', icon: '🎥', name: 'AI Security Suite',  sub: 'VMS · FRS · Video Analytics' },
  { bg: '#fff7ed', icon: '📡', name: 'RFID & Tracking',    sub: 'Toll · Assets · Fleet' },
]

export default function WhySection() {
  return (
    <section className="why" id="why">
      <div className="section-inner">
        <div className="reveal">
          <div className="eyebrow">Why Azcentrix</div>
          <h2 className="h2">Built Different.<br /><span className="c">By Design.</span></h2>
          <p className="body-lg">We don't build isolated tools. We build a connected fabric that runs your entire organisation.</p>
        </div>
        <div className="why-grid">
          <div className="why-left reveal">
            <div className="why-points">
              {WHY_POINTS.map(wp => (
                <div key={wp.title} className="wp">
                  <div className="wp-icon">{wp.icon}</div>
                  <div>
                    <h4>{wp.title}</h4>
                    <p>{wp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-right reveal">
            <div className="platform-card">
              <div className="pc-header">
                <span className="pc-title">Azcentrix Platform — Live Status</span>
                <div className="pc-status">
                  <div className="pc-status-dot" />
                  All Systems Operational
                </div>
              </div>
              <div className="pc-body">
                {MODULES.map(m => (
                  <div key={m.name} className="pc-module">
                    <div className="pcm-icon" style={{ background: m.bg }}>{m.icon}</div>
                    <div className="pcm-info">
                      <div className="pcm-name">{m.name}</div>
                      <div className="pcm-sub">{m.sub}</div>
                    </div>
                    <span className="pcm-badge">LIVE</span>
                  </div>
                ))}
              </div>
              <div className="pc-footer">
                {[{ num: '512', lbl: 'Deployments' }, { num: '28', lbl: 'Countries' }, { num: '99.98%', lbl: 'Uptime' }].map(s => (
                  <div key={s.lbl} className="pc-footer-stat">
                    <div className="pcfs-num">{s.num}</div>
                    <div className="pcfs-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
