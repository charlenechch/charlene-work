import { useEffect } from 'react'

/**
 * On scroll, calls the provided callback with { scrollY }.
 * Passive listener — safe for performance.
 */
export function useParallax(callback) {
  useEffect(() => {
    const handler = () => callback({ scrollY: window.scrollY })
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [callback])
}
