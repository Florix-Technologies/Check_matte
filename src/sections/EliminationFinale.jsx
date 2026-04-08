import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Elimination',
    description: 'Discover the hidden Check, expose the antagonist, and send them home before they strike again.',
    icon: '⚔️',
    label: 'Spot the Check',
    tag: 'The Reveal',
  },
  {
    title: 'Finale',
    description: 'The last confession lands with full weight — the winner is decided by truth, trust, and a final move.',
    icon: '👑',
    label: 'Final confession',
    tag: 'The Crown',
  }
]

export default function EliminationFinale() {
  return (
    <section id="elimination-finale" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] px-6 py-14 shadow-[0_40px_120px_rgba(139,0,0,0.25)] sm:px-10 sm:py-20 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,0,0,0.1),_transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-red-400">Elimination & Finale</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One reveal ends the game — one confession crowns the winner.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-red-100/60 sm:text-lg">
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
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#200A0A] p-8"
              style={{ boxShadow: '0 8px 40px rgba(139,0,0,0.18), inset 0 1px 0 rgba(255,100,100,0.05)' }}
            >
              {/* Corner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-900/30 to-transparent rounded-bl-[60px]" />

              {/* Hover top glow line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Left accent bar */}
              <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-red-600/0 via-red-600 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-950 border border-red-800/40 text-3xl shadow-inner">
                    {card.icon}
                  </div>
                  <div>
                    {/* Tag pill */}
                    <span className="inline-block mb-1 rounded-full bg-red-900/40 border border-red-700/30 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em] text-red-300">
                      {card.tag}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                </div>

                <p className="text-sm leading-7 text-red-100/50 group-hover:text-red-100/80 transition-colors">
                  {card.description}
                </p>

                {/* Bottom label */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1 w-4 rounded-full bg-red-600/60 group-hover:w-6 group-hover:bg-red-500 transition-all duration-300" />
                  <span className="text-xs uppercase tracking-[0.2em] text-red-400 font-medium">{card.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}