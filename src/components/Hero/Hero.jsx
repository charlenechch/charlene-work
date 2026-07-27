import { useEffect, useRef, useCallback } from 'react'
import { useParallax } from '../../hooks/useParallax'
import './Hero.css'

export default function Hero() {
  const bgRef      = useRef(null)
  const orb1Ref    = useRef(null)
  const orb2Ref    = useRef(null)
  const contentRef = useRef(null)
  const wordRef    = useRef(null)
  const lineRef    = useRef(null)
  const enterRefs  = useRef([])

  const onScroll = useCallback(({ scrollY: y }) => {
    if (bgRef.current)
      bgRef.current.style.transform = `translateY(${y * 0.5}px)`
    if (orb1Ref.current)
      orb1Ref.current.style.transform = `translateY(${y * 0.8}px)`
    if (orb2Ref.current)
      orb2Ref.current.style.transform = `translateY(${y * 0.35}px)`
    if (contentRef.current)
      contentRef.current.style.transform = `translateY(${y * 0.15}px)`
    if (wordRef.current)
      wordRef.current.style.transform = `translateY(${y * -0.2}px)`
    if (lineRef.current)
      lineRef.current.style.transform = `translateX(${y * -0.35}px)`
  }, [])

  useParallax(onScroll)

  useEffect(() => {
    const timers = enterRefs.current.map((el, i) =>
      setTimeout(() => {
        if (el) el.classList.add('hero-in')
      }, 60 + i * 110)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const setEnterRef = useCallback((i) => (el) => {
    enterRefs.current[i] = el
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg-clip">
        <div className="hero-bg" ref={bgRef} />
        <div className="hero-orb1" ref={orb1Ref} />
        <div className="hero-orb2" ref={orb2Ref} />
        <div className="hero-line" ref={lineRef} />
      </div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-status hero-enter" ref={setEnterRef(0)}>
          <span className="hero-status-dot" />
          Open to Any Opportunity 
        </div>

        <h1 className="hero-headline hero-enter" ref={setEnterRef(1)}>
          Hi, I'm Charlene. <br /><br /> <br />

          A <em ref={wordRef} className="hero-accent">Computer Science</em> Fresh Graduate 
        </h1>

        <p className="hero-sub hero-enter" ref={setEnterRef(2)}>
          I'm a Computer Science graduate passionate about AI, data, cloud computing, and full-stack development. 
          I enjoy building practical applications that solve real-world problems while continuously expanding my skills in emerging technologies.
        </p>

        <div className="hero-ctas hero-enter" ref={setEnterRef(3)}>
          <a href="#projects" className="btn-primary">Projects</a>
          <a href="#writing" className="btn-ghost">Certifications →</a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span className="hero-scroll-text">scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}