import { PROJECTS } from '../../data/content'
import './Projects.css'

function FeaturedCard({ project }) {
  return (
    <div className="project-card project-card--featured reveal">

      <div className="project-featured-header">
        <p className="project-meta">{project.type} · {project.year}</p>
        <h3 className="project-title--featured">{project.title}</h3>
      </div>

      {/* Full-width desc + tags — shown at ≤1050px, hidden at desktop */}
      <div className="project-desc-block--full">
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
        </div>
      </div>

      <div className="project-featured-body">
        <div className="project-thumb">
          <video
            src="/sarawakeats.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="project-body">
          {/* Inline desc + tags — shown at desktop, hidden at ≤1050px */}
          <p className="project-desc project-desc--inline">{project.description}</p>
          <div className="project-tags project-tags--inline">
            {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
          </div>
          <ul className="project-contributions">
            {project.contributions.map((c) => (
              <li key={c.num} className="project-contrib">
                <span className="project-contrib-num">{c.num}</span>
                <span className="project-contrib-text">
                  <strong>{c.title}</strong> — {c.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer — inside body at desktop, full-width below 883px */}
      <div className="project-featured-footer">
        <a href={project.github} className="project-link">GitHub →</a>
        {project.live && <a href={project.live} className="project-link">Live site →</a>}
      </div>

    </div>
  )
}

// function SmallCard({ project, delay }) {
//   return (
//     <div className={`project-card reveal reveal-delay-${delay}`}>
//       <div className="project-thumb--small" style={{ background: project.thumbColor }}>
//         <span className="project-emoji">{project.thumbEmoji}</span>
//       </div>
//       <div className="project-body">
//         <p className="project-meta">{project.type} · {project.year}</p>
//         <h3 className="project-title">{project.title}</h3>
//         <p className="project-desc">{project.description}</p>
//         <div className="project-tags">
//           {project.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
//         </div>
//         <div className="project-links">
//           <a href={project.github} className="project-link">GitHub →</a>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured)
  // const small    = PROJECTS.filter((p) => !p.featured)

  return (
    <>
      <section className="projects-featured-snap" id="projects">
        <p className="section-eyebrow reveal">01 — Projects</p>
        <h2 className="section-title reveal reveal-delay-1">Things I've built</h2>
        <div className="projects-grid">
          {featured.map((p) => <FeaturedCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* {small.length > 0 && (
        <section className="projects-small-snap">
          <div className="projects-grid">
            {small.map((p, i) => <SmallCard key={p.id} project={p} delay={i + 1} />)}
          </div>
        </section>
      )} */}
    </>
  )
}