import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently centered in the viewport.
 * Pass the list of actual DOM section ids to observe (top-level sections only).
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        // Treat a section as "active" once it crosses the middle band of the viewport
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')])

  return active
}