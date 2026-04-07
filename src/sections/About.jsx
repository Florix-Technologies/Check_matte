import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
}

export default function About() {
  const { ref, y } = useParallax(30)
  return (
    <section id="about" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.24),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-rose-300">About the Show</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A bold blend of love, strategy, and emotional intelligence.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            CHECK MATE is a dating reality show where every connection is a move on the board. Contestants must balance heartfelt vulnerability with mind games, always staying two steps ahead to win the heart of the Jack of Hearts.
          </p>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Packed with emotional intelligence, romantic tension, and strategic gameplay, the show is built for viewers who love drama, passion, and intelligent matchmaking.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          style={{ y }}
          className="glass-card border border-white/10 bg-slate-950/75 p-6 shadow-glow"
        >
          <div className="h-full rounded-[28px] border border-white/10 bg-black/60 p-6">
            <div className="h-full rounded-[24px] border border-white/5 bg-gradient-to-br from-rose-500/10 via-transparent to-black/80 p-6">
              <div className="flex h-full flex-col justify-between rounded-[22px] bg-slate-950/80 p-6 text-white">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-rose-500/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-rose-200">
                    Love. Strategy. Drama.
                  </div>
                  <h3 className="text-2xl font-semibold">Emotional intelligence meets mind games</h3>
                  <p className="text-sm leading-7 text-slate-300">
                    Players must read the room, decode intentions, and make every move count in a high-stakes romantic battlefield.
                  </p>
                </div>
                <div className="mt-6 rounded-3xl bg-white/5 p-5 text-slate-200 shadow-inner shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.24em] text-rose-200">Show format</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    <li>• Heart strategy challenges</li>
                    <li>• Intimate confessional moments</li>
                    <li>• Unexpected alliances and twists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
