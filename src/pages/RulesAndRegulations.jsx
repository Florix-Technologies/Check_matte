import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RulesAndRegulations() {
  return (
    <div className="min-h-screen bg-[#1A0A0A] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-32 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          {/* Badge */}
          <span className="inline-flex rounded-full border border-red-700/40 bg-red-950/50 px-4 py-2 text-xs uppercase tracking-[0.32em] text-red-300/80">
            Official Guidelines
          </span>

          {/* Title */}
          <h1 className="font-['Playfair_Display'] text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Rules & Regulations
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600/60" />
            <span className="text-red-500">♟</span>
            <span className="text-red-500">♥</span>
            <span className="text-red-500">♟</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-600/60" />
          </div>

          {/* Coming soon card */}
          <div
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-red-900/30 bg-[#200A0A] p-12"
            style={{ boxShadow: '0 8px 40px rgba(139,0,0,0.18)' }}
          >
            <div className="space-y-4">
              <div className="text-5xl">⚖️</div>
              <h2 className="text-2xl font-semibold text-white">Content Coming Soon</h2>
              <p className="text-sm leading-7 text-red-100/50 max-w-md mx-auto">
                The rules and regulations for both hosts and contestants will be published here. Check back soon for the official guidelines.
              </p>
              <div className="pt-4">
                
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-red-800/40 bg-red-950/30 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-red-200 transition hover:border-red-600/60 hover:bg-red-900/40"
                >
                  ← Back to Home
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}