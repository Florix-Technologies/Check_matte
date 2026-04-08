import './index.css'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import FloatingParticles from './components/FloatingParticles'
import Hero from './sections/Hero'
import About from './sections/About'
import Concept from './sections/Concept'
import HowItWorks from './sections/HowItWorks'
import EliminationFinale from './sections/EliminationFinale'
import Hosts from './sections/Hosts'
import Footer from './components/Footer'
import Lenis from 'lenis'

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
}

function App() {
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
  document.documentElement.classList.add('dark')
}, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1A0A0A] text-[#FAFAFA] transition-colors duration-500 dark:bg-[#1A0A0A] dark:text-[#FAFAFA]">
      <FloatingParticles />

      {/* Red mouse glow */}
      <div
        className="pointer-events-none fixed left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-red-600/20 to-transparent blur-3xl z-0"
        style={{ transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)` }}
      />

      {/* Red ambient top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,_rgba(200,16,46,0.18),_transparent_35%)]" />

      <div className="relative overflow-hidden">
        {/* Navbar 
        <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        */}
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Hero />
          </motion.div>

          {[About, Concept, HowItWorks, EliminationFinale, Hosts].map((Section, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="mt-24"
            >
              <Section />
            </motion.section>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App