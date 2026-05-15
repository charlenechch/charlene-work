import Nav          from './components/Nav/Nav'
import Hero         from './components/Hero/Hero'
import Projects     from './components/Projects/Projects'
import WritingAbout from './components/WritingAbout/WritingAbout'
import Footer       from './components/Footer/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <WritingAbout />
      </main>
      <Footer />
    </>
  )
}
