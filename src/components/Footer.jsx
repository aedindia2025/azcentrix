import './Footer.css'

const FOOTER_COLS = [
  { title: 'Products',  links: ['HRMS', 'CRM', 'ERP', 'Service Ticketing', 'Hostel Management', 'Library Management'] },
  { title: 'Security',  links: ['Firewall & UTM', 'SD-WAN', 'NMS', 'MDM', 'Face Recognition', 'Video Analytics'] },
  { title: 'Company',   links: ['About Us', 'Careers', 'Partners', 'Newsroom', 'Blog', 'Contact'] },
  { title: 'Resources', links: ['Documentation', 'API Reference', 'Case Studies', 'Webinars', 'Status Page', 'Support Portal'] },
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
