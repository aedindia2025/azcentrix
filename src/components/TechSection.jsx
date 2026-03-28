import './TechSection.css'

const TECHS = [
  { num: '01', icon: '☁️', title: 'Cloud-Native Core',       desc: 'Kubernetes-orchestrated microservices with multi-region deployment on AWS, Azure, and GCP. Scales horizontally without configuration.' },
  { num: '02', icon: '🤖', title: 'Embedded AI Engine',       desc: 'ML models for predictive analytics, anomaly detection, face recognition, and process automation baked into every product layer.' },
  { num: '03', icon: '🔐', title: 'Zero-Trust Security',      desc: 'Identity-first architecture with MFA, TLS 1.3, SOC monitoring, and real-time threat intelligence at every network layer.' },
  { num: '04', icon: '⚡', title: 'Event-Driven Pipeline',    desc: 'Apache Kafka backbone ensures millisecond data propagation between all modules — from RFID scan to financial ledger update.' },
  { num: '05', icon: '🔌', title: 'Open Integration Layer',   desc: 'REST and GraphQL APIs with full SDKs, webhooks, and a marketplace of 200+ pre-built connectors for third-party systems.' },
  { num: '06', icon: '📋', title: 'Compliance Automation',    desc: 'GDPR, PDPA, HIPAA, and SOC 2 frameworks enforced automatically, with data residency controls and audit-ready reporting.' },
]

export default function TechSection() {
  return (
    <section className="tech-section" id="tech">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Architecture</div>
          <h2 className="h2" style={{ textAlign: 'center' }}>Engineering That<br /><span className="c">Never Compromises</span></h2>
          <p className="body-lg" style={{ textAlign: 'center', margin: '12px auto 0', color: 'rgba(255,255,255,0.45)' }}>
            Every product in the Azcentrix suite is built on shared infrastructure designed for enterprise reliability.
          </p>
        </div>
        <div className="tech-grid reveal">
          {TECHS.map(t => (
            <div key={t.num} className="tech-cell">
              <div className="tech-num">{t.num}</div>
              <span className="tech-icon">{t.icon}</span>
              <div className="tech-title">{t.title}</div>
              <div className="tech-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
