import './Hero.css'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="hero-badge">
            <div className="badge-dot">✦</div>
            <span>Trusted by 500+ enterprises in 28 countries</span>
          </div>
          <h1 className="hero-headline">
            The Operating System<br />for Your <span className="hl">Enterprise</span>
          </h1>
          <p className="hero-sub">
            Azcentrix delivers 50+ deeply integrated software solutions — HRMS, ERP, CRM, AI Security, Network Management and more — designed for organisations that refuse to compromise.
          </p>
          <div className="hero-actions">
            <button className="btn-green" onClick={() => scrollTo('products')}>
              Explore Products
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>Schedule a Demo</button>
          </div>
          
        </div>

        <div className="hero-visual">
          <div className="float-badge fb-top">
            <div className="fb-icon">🚀</div>
            <div className="fb-text">
              <strong>Deploy in days</strong>
              <span>Zero-friction onboarding</span>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dash-header">
              <div className="dash-dots">
                <div className="dash-dot" style={{ background: '#ff5f57' }} />
                <div className="dash-dot" style={{ background: '#febc2e' }} />
                <div className="dash-dot" style={{ background: '#28c840' }} />
              </div>
              <span className="dash-title">azcentrix — enterprise console</span>
            </div>
            <div className="dash-body">
              <div className="dash-row">
                <div className="metric-tile green-tile">
                  <div className="m-label">Active Users</div>
                  <div className="m-value">12,480</div>
                  <div className="m-delta">↑ 8.3% this week</div>
                </div>
                <div className="metric-tile">
                  <div className="m-label">Modules Live</div>
                  <div className="m-value">50+</div>
                  <div className="m-delta" style={{ color: 'var(--blue)' }}>All operational</div>
                </div>
              </div>
              <div className="dash-list">
                {[
                  { icon: '👥', bg: '#e6f6f1', name: 'HRMS', statusClass: 'status-live', label: '● Live' },
                  { icon: '🔥', bg: '#eff6ff', name: 'Next-Gen Firewall', statusClass: 'status-live', label: '● Live' },
                  { icon: '📊', bg: '#fef9ec', name: 'ERP Analytics v3', statusClass: 'status-beta', label: '◎ Beta' },
                  { icon: '🫠', bg: '#fdf2f8', name: 'Face Recognition', statusClass: 'status-live', label: '● Live' },
                ].map(item => (
                  <div key={item.name} className="dash-list-item">
                    <div className="dli-icon" style={{ background: item.bg }}>{item.icon}</div>
                    <span className="dli-name">{item.name}</span>
                    <span className={`dli-status ${item.statusClass}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="float-badge fb-bottom">
            <div className="fb-icon">🛡️</div>
            <div className="fb-text">
              <strong>99.98% Uptime</strong>
              <span>Enterprise SLA guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
