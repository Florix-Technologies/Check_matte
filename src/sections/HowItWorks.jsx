import { motion } from 'framer-motion'

const steps = [
  { title: 'Auditions', description: 'Talented and Bold contestants enter the arena and reveal their first moves.', icon: '🎤' },
  { title: 'Entry', description: 'The cast enters the villa, forming alliances and first impressions.', icon: '🚪' },
  { title: 'Tasks', description: 'Romantic and strategic challenges test hearts and minds.', icon: '🧠' },
  { title: 'Clues', description: 'Hidden clues surface to expose secrets and shift power.', icon: '🔍' },
  { title: 'Elimination', description: 'One player is sent home as the tension reaches its peak.', icon: '⚔️' },
  { title: 'Finale', description: 'The last move decides who wins love and the crown.', icon: '🏆' }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] px-6 py-12 shadow-[0_40px_120px_rgba(139,0,0,0.3)] sm:px-10 sm:py-16 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,16,46,0.12),_transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-400">How It Works</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The journey through love, mapped like a mission.
          </h2>
          <p className="mt-4 text-base leading-8 text-red-100/60 sm:text-lg">
            Follow the dramatic sequence from first auditions to the finale.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#200A0A] p-6"
              style={{ boxShadow: '0 4px 24px rgba(139,0,0,0.12), inset 0 1px 0 rgba(255,100,100,0.04)' }}
            >
              {/* Step number — diagonal badge */}
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-950 border border-red-800/40 text-xs font-bold text-red-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Connecting line (visual only on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 w-4 h-px bg-red-800/30 z-10" />
              )}

              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-950/80 border border-red-800/30 text-xl shadow-inner">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm leading-6 text-red-100/50 group-hover:text-red-100/75 transition-colors">
                {step.description}
              </p>

              {/* Bottom status tag */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-4 rounded-full bg-red-600/60 group-hover:w-6 group-hover:bg-red-500 transition-all duration-300" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-500/70">
                  {index === 0 ? 'Start here' : index === steps.length - 1 ? 'Final move' : 'Next step'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}