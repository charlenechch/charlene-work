import './Nav.css'
import { NAV_LINKS } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

// Each nav link now maps 1:1 to its own top-level section.
const HREF_TO_SECTION = {
  '#home': 'home',
  '#projects': 'projects',
  '#writing': 'writing',
}
const TOP_LEVEL_SECTIONS = ['home', 'projects', 'writing']

function sectionNumber(href) {
  return TOP_LEVEL_SECTIONS.indexOf(HREF_TO_SECTION[href]) + 1
}

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
          {NAV_LINKS.map((l) => {
            const isActive = active !== null && HREF_TO_SECTION[l.href] === active
            return (
              <li key={l.href}>
                <a href={l.href} className={isActive ? 'is-active' : ''}>
                  <span className="nav-link-index">{String(sectionNumber(l.href)).padStart(2, '0')}.</span>
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