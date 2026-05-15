import './Nav.css'
import { NAV_LINKS } from '../../data/content'

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-brand">
        <span className="nav-dot" />
        Charlene Chai
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="https://mail.google.com/mail/?view=cm&to=charlenechaichi2004@gmail.com" target="_blank" rel="noreferrer" className="nav-cta">
        Get in touch
      </a>
    </nav>
  )
}