import { useState, useEffect } from 'react'
import './Header.css'

const navItems = [
  { label: 'Home', href: '/', active: true },
  {
    label: 'Pages',
    href: '#',
    dropdown: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Team Details', href: '#' },
    ],
  },
  {
    label: 'Services',
    href: '#',
    dropdown: [
      { label: 'Web Development', href: '#' },
      { label: 'Cloud Solutions', href: '#' },
      { label: 'Consulting', href: '#' },
    ],
  },
  {
    label: 'Projects',
    href: '#',
    dropdown: [
      { label: 'Projects Style 1', href: '#' },
      { label: 'Projects Style 2', href: '#' },
    ],
  },
  {
    label: 'Blog',
    href: '#',
    dropdown: [
      { label: 'Blog Classic', href: '#' },
      { label: 'Blog Single View', href: '#' },
    ],
  },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="site-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,24 2,24" fill="none" stroke="#05c8f9" strokeWidth="2.5" />
              <line x1="14" y1="2" x2="14" y2="24" stroke="#05c8f9" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="logo-text">Azcentrix</span>
        </a>

        {/* Desktop Nav */}
        <nav className={`main-nav${mobileOpen ? ' open' : ''}`}>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.label} className={`nav-item${item.dropdown ? ' has-dropdown' : ''}${item.active ? ' active' : ''}`}>
                <a href={item.href}>
                  {item.label}
                  {item.dropdown && <span className="nav-arrow">&#9662;</span>}
                </a>
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href}>{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="header-right">
          <a href="#contact" className="header-quote-btn">Request a Quote</a>
          <span className="tollfree">Tollfree : (+123 456 7890)</span>
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
