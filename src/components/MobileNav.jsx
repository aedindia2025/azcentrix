import './MobileNav.css'

export default function MobileNav({ show, onClose }) {
  return (
    <div className={`mobile-nav${show ? ' show' : ''}`}>
      <button className="mobile-close" onClick={onClose}>✕</button>
      <a href="#products" onClick={onClose}>Products</a>
      <a href="#why" onClick={onClose}>Why Azcentrix</a>
      <a href="#industries" onClick={onClose}>Industries</a>
      <a href="#tech" onClick={onClose}>Technology</a>
      <a href="#testimonials" onClick={onClose}>Clients</a>
      <a href="#contact" onClick={onClose}>Contact</a>
    </div>
  )
}
