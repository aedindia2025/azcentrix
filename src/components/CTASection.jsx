import { Phone } from 'lucide-react'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="section-inner">
        <div className="cta-box reveal">
          <div className="eyebrow" style={{ color: 'var(--teal)' }}>Get Started</div>
          <h2 className="cta-h">Ready to Run Your<br />Enterprise on Azcentrix?</h2>
          <p className="cta-sub">Talk with our solution architects. Get a personalised demo configured for your industry.</p>
          <div className="cta-actions">
            {/* <button className="btn-cta-white" onClick={() => { window.location = 'mailto:sales@azcentrix.com' }}>
              Request a Demo
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button> */}
            <button className="btn-cta-outline"><Phone size={14} strokeWidth={1.8} style={{ marginRight: 6, verticalAlign: 'middle' }} />Talk to Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}
