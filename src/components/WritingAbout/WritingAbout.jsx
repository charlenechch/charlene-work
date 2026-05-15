import './WritingAbout.css'

const CERTIFICATIONS = [
  {
    id: 'nvidia',
    name: 'Getting Started with AI on Jetson Nano',
    issuer: 'NVIDIA',
    date: 'Dec 2024',
  },
  {
    id: 'cisco',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2024',
  },
]

const ACHIEVEMENTS = [
  {
    id: 'scholarship',
    title: 'Sarawak Energy Scholarship Recipient',
    year: '2023',
  },
  {
    id: 'top1',
    title: 'Unit Top Scorer — Technology in an Indigenous Context Project',
    year: null,
  },
  {
    id: 'top2',
    title: 'Unit Top Scorer — Computing Technology Innovation Project',
    year: null,
  },
]

export default function WritingAbout() {
  return (
    <section className="wa-section" id="writing">
      <div className="wa-grid">

        {/* Certifications */}
        <div>
          <p className="wa-eyebrow reveal">02 — Certifications</p>
          <h2 className="wa-title reveal reveal-delay-1">What I've earned</h2>
          <div className="wa-cert-list">
            {CERTIFICATIONS.map((c, i) => (
              <div key={c.id} className={`wa-cert reveal reveal-delay-${i + 1}`}>
                <div className="wa-cert-dot" />
                <div className="wa-cert-body">
                  <p className="wa-cert-name">{c.name}</p>
                  <p className="wa-cert-meta">{c.issuer} · {c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div id="about">
          <p className="wa-eyebrow reveal">03 — Achievements</p>
          <h2 className="wa-title reveal reveal-delay-1">Recognition</h2>
          <div className="wa-achieve-list reveal reveal-delay-2">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.id} className="wa-achieve-item">
                <span className="wa-achieve-num">0{i + 1}</span>
                <div className="wa-achieve-body">
                  <p className="wa-achieve-title">{a.title}</p>
                  {a.year && <p className="wa-achieve-year">{a.year}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}