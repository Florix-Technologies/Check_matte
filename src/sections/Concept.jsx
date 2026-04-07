import { motion } from 'framer-motion'

const cardData = [
  {
    title: 'Real Players',
    description: 'Bold contestants who enter the game with open hearts and strategic intent. They move like queens, knights, and bishops across the board of romance.',
    accent: 'bg-gradient-to-br from-red-500 to-rose-500',
    icon: '♟️'
  },
  {
    title: 'Checks',
    description: 'Hidden antagonists who challenge the couples and create tension with unexpected moves. They are the wildcards in the love match.',
    accent: 'bg-gradient-to-br from-slate-700 to-black',
    icon: '♛'
  }
]

export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 px-6 py-10 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_35%)]" />
      <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-rose-300">Concept</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The dating game is played like a chessboard.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Every move is a statement. Contestants are cast as chess pieces, some revealing their true intentions, while others lurk in the shadows as hidden Checks — antagonists who disrupt the romance and test emotional intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="grid gap-6"
        >
          {cardData.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-slate-900/95"
            >
              <div className={`absolute -left-10 top-8 h-32 w-32 rounded-full blur-3xl opacity-60 ${card.accent}`} />
              <div className="relative flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.accent} text-2xl shadow-lg shadow-black/30`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-rose-200/80">{card.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300 transition group-hover:text-white">
                {card.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-rose-300 transition group-hover:text-rose-100">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-300" />
                {card.title === 'Checks' ? 'Hidden danger' : 'Open play'}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
