import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import FloatingParticles from './components/FloatingParticles'
import Hero from './sections/Hero'
import About from './sections/About'
import Concept from './sections/Concept'
import HowItWorks from './sections/HowItWorks'
import EliminationFinale from './sections/EliminationFinale'
import Hosts from './sections/Hosts'
import TheAlmighty from './sections/TheAlmighty'
import Features from './sections/Features'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './components/Footer'
import Lenis from 'lenis'

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

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
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <FloatingParticles />
      <div className="pointer-events-none fixed left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-500/30 to-transparent blur-3xl" style={{ transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)` }} />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.18),_transparent_35%)]" />
      <div className="relative overflow-hidden">
        <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

        <main className="mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
          </motion.div>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <About />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <Concept />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <HowItWorks />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <EliminationFinale />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <Hosts />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <TheAlmighty />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <Features />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <Testimonials />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionFade}
            className="mt-24"
          >
            <CTA />
          </motion.section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
