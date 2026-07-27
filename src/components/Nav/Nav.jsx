import './Nav.css'
import { NAV_LINKS } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

// "Achievements" and "About" both live inside the same <section id="writing">
// (they're side-by-side columns), so both map to the same top-level section
// for the purposes of tracking scroll position.
const HREF_TO_SECTION = {
  '#projects': 'projects',
  '#writing': 'writing',
  '#about': 'writing',
}
const TOP_LEVEL_SECTIONS = ['home', 'projects', 'writing']

export default function Nav() {
  const active = useActiveSection(TOP_LEVEL_SECTIONS)

  return (
    <>
      <nav className="nav">
        <a href="#home" className="nav-brand">
          <span className="nav-dot" />
          Charlene Chai
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l, i) => {
            const isActive = active !== null && HREF_TO_SECTION[l.href] === active
            return (
              <li key={l.href}>
                <a href={l.href} className={isActive ? 'is-active' : ''}>
                  <span className="nav-link-index">{String(i + 1).padStart(2, '0')}.</span>
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>
        <a href="https://mail.google.com/mail/?view=cm&to=charlenechaichi2004@gmail.com" target="_blank" rel="noreferrer" className="nav-cta">
          Get in touch
        </a>
      </nav>

      <div className="section-rail" aria-hidden="true">
        {NAV_LINKS.map((l) => {
          const isActive = active !== null && HREF_TO_SECTION[l.href] === active
          return (
            <a
              key={l.href}
              href={l.href}
              className={`section-rail-dot ${isActive ? 'is-active' : ''}`}
              aria-label={l.label}
            >
              <span className="section-rail-tooltip">{l.label}</span>
            </a>
          )
        })}
      </div>
    </>
  )
}