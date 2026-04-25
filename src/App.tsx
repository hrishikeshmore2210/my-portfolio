import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}