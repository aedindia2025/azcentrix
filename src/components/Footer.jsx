import bgFooter from '../assets/bg_footer_1.png'
import './Footer.css'

const footerLinks = [
  {
    heading: 'Solutions',
    links: [
      'HRMS', 'CRM', 'ERP Suite', 'Service Ticketing',
      'RFID Tracking', 'Video Analytics',
    ],
  },
  {
    heading: 'Support',
    links: [
      'Help Center', 'Contact Support', 'System Status',
      'Report Vulnerability', 'Service Level Agreement',
    ],
  },
  {
    heading: 'Company',
    links: [
      'About Us', 'Our Leadership', 'Global Presence',
      'Careers', 'Press & Media', 'Investor Relations',
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <img src={bgFooter} className="footer-bg-deco" alt="" aria-hidden="true" />
      <div className="footer-top">
        <div className="footer-brand">
          {/* Logo */}
          <a href="/" className="footer-logo">
            <div className="footer-logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,24 2,24" fill="none" stroke="#0058bf" strokeWidth="2.5"/>
                <line x1="14" y1="2" x2="14" y2="24" stroke="#0058bf" strokeWidth="1.5"/>
              </svg>
            </div>
            <span>Azcentrix</span>
          </a>

          <p className="footer-desc">
            We build future-ready software, AI systems, and cloud infrastructure
            that empower organizations worldwide.
          </p>

          {/* Social icons */}
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a1a2a"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer-col">
              <h4>{col.heading}</h4>
              <div className="col-underline" />
              <ul>
                {col.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Azcentrix. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
          <span>|</span>
          <a href="#">Term of service</a>
          <span>|</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
