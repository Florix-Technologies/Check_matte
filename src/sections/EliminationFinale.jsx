import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Elimination',
    description: 'Discover the hidden Check, expose the antagonist, and send them home before they strike again.',
    icon: '⚔️',
    accent: 'from-purple-500 via-fuchsia-500 to-red-500'
  },
  {
    title: 'Finale',
    description: 'The last confession lands with full weight — the winner is decided by truth, trust, and a final move.',
    icon: '👑',
    accent: 'from-blue-500 via-indigo-500 to-violet-500'
  }
]

export default function EliminationFinale() {
  return (
    <section id="elimination-finale" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 px-6 py-14 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-20 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.14),_transparent_18%)] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-rose-300">Elimination & Finale</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One reveal ends the game — one confession crowns the winner.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Find the Check first, then watch the finale confession decide whose heart and strategy survive the board.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.15, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-8 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-slate-900/95"
            >
              <div className={`absolute -right-10 top-10 h-40 w-40 rounded-full bg-gradient-to-br ${card.accent} opacity-20 blur-3xl`} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/5 text-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                </div>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-rose-300 transition group-hover:text-white">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-300" />
                {card.title === 'Elimination' ? 'Spot the Check' : 'Final confession'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
