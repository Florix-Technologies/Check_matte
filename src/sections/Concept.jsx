import { motion } from 'framer-motion'

const cardData = [
  {
    title: 'Real Players',
    description: 'Bold contestants who enter the game with open hearts and strategic intent. They move like queens, knights, and bishops across the board of romance.',
    icon: '♟️',
    label: 'Open play',
    tag: 'The Brave',
  },
  {
    title: 'Checks',
    description: 'Hidden antagonists who challenge the couples and create tension with unexpected moves. They are the wildcards in the love match.',
    icon: '♛',
    label: 'Hidden danger',
    tag: 'The Shadow',
  }
]

export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] px-6 py-10 shadow-[0_40px_120px_rgba(139,0,0,0.3)] sm:px-10 lg:px-12">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(139,0,0,0.1),_transparent_50%)]" />

      <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">Concept</p>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The dating game is played like a chessboard.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-red-100/60 sm:text-lg">
            Every move is a statement. Contestants are cast as chess pieces — some revealing their true intentions, while others lurk in the shadows as hidden Checks.
          </p>

          {/* Decorative chess divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-red-700/0 via-red-600/50 to-red-700/0" />
            <span className="text-red-500 text-xl">♜</span>
            <div className="h-px flex-1 bg-gradient-to-r from-red-700/0 via-red-600/50 to-red-700/0" />
          </div>
        </motion.div>

        {/* Right cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="grid gap-5"
        >
          {cardData.map((card, i) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/40 bg-gradient-to-br from-[#2A0A0A] to-[#1A0A0A] p-6"
              style={{ boxShadow: '0 8px 32px rgba(139,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-700/20 to-transparent rounded-bl-[40px]" />

              {/* Left red border accent */}
              <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-gradient-to-b from-red-500 via-red-600 to-red-500/0 rounded-full" />

              <div className="flex items-start gap-4 pl-4">
                {/* Icon tile */}
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-red-950 border border-red-800/50 text-2xl shadow-inner">
                  {card.icon}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Tag pill */}
                  <span className="inline-block mb-2 rounded-full bg-red-900/40 border border-red-700/30 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em] text-red-300">
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                </div>
              </div>

              <p className="mt-4 pl-4 text-sm leading-7 text-red-100/50 transition-colors group-hover:text-red-100/80">
                {card.description}
              </p>

              {/* Bottom label */}
              <div className="mt-5 pl-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(200,16,46,0.8)]" />
                <span className="text-xs uppercase tracking-[0.2em] text-red-400 font-medium">{card.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}