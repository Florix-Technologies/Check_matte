import { motion } from 'framer-motion'

const steps = [
  { title: 'Auditions', description: 'Talented contestants enter the arena and reveal their first moves.', icon: '🎤' },
  { title: 'Entry', description: 'The cast enters the villa, forming alliances and first impressions.', icon: '🚪' },
  { title: 'Tasks', description: 'Romantic and strategic challenges test hearts and minds.', icon: '🧠' },
  { title: 'Clues', description: 'Hidden clues surface to expose secrets and shift power.', icon: '🔍' },
  { title: 'Elimination', description: 'One player is sent home as the tension reaches its peak.', icon: '⚔️' },
  { title: 'Finale', description: 'The last move decides who wins love and the crown.', icon: '🏆' }
]

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 px-6 py-12 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-16 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_16%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-rose-300">How It Works</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The journey through love is mapped like a cinematic mission.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Follow the dramatic sequence of events from first auditions to the finale, where every move is strategic and every emotion is amplified.
          </p>
        </div>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-6 lg:items-center">
          <div className="hidden lg:block absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants}
              className="relative flex flex-col rounded-[32px] border border-white/10 bg-slate-900/80 p-5 text-slate-100 shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-slate-900/95"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 to-red-600 text-2xl shadow-lg shadow-black/30">
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-rose-200/80">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{step.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-300" />
                {index === 0 ? 'Start' : index === steps.length - 1 ? 'Finale' : 'Next move'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
