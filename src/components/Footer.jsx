import './Footer.css'
import { MapPin, Phone } from 'lucide-react'

const FOOTER_COLS = [
  { title: 'Products',  links: ['HRMS', 'CRM', 'ERP', 'Service Ticketing', 'Hostel Management', 'Library Management'] },
  { title: 'Security',  links: ['Firewall & UTM', 'SD-WAN', 'NMS', 'MDM', 'Face Recognition', 'Video Analytics'] },
  { title: 'Company',   links: ['About Us', 'Careers','Contact'] },
  { title: 'Resources', links: ['Documentation', 'API Reference'] },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="foot-brand">
            <a href="#" className="logo">
              <div className="logo-icon">AZ</div>
              <span className="logo-name">Az<em>centrix</em></span>
            </a>
            <p>Enterprise software solutions engineered for scale, security, and seamless integration — across every domain of your organisation.</p>
            <address className="foot-address">
              <div className="foot-address-row">
                <MapPin size={14} className="foot-icon" />
                <div className="foot-address-lines">
                  <span>119, 1st Floor, Haritha Towers,</span>
                  <span>St Marys Rd, Abiramapuram,</span>
                  <span>Chennai, Tamil Nadu – 600 018</span>
                </div>
              </div>
              <div className="foot-address-row">
                <Phone size={14} className="foot-icon" />
                <a href="tel:+914442348081" className="foot-phone">+91 44 4234 8081</a>
              </div>
            </address>
            <div className="foot-socials">
              {['in', '𝕏', '▶', 'f'].map(s => <a key={s} className="soc" href="#">{s}</a>)}
            </div>
          </div>
          {FOOTER_COLS.map(col => (
            <div key={col.title} className="foot-col">
              <h5>{col.title}</h5>
              <ul className="foot-links">
                {col.links.map(link => <li key={link}><a href="#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© 2025 Azcentrix Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="footer-legal">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Sitemap'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
