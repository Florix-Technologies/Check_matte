import { motion } from 'framer-motion'

const gameFeatures = [
  {
    title: 'Tasks',
    description: 'Contestants compete in high-energy challenges that test chemistry, strategy, and emotional instinct.',
    icon: '♟️'
  },
  {
    title: 'Dates',
    description: 'Intimate moments are staged like chapters in a romance thriller, each with high stakes.',
    icon: '♥️'
  },
  {
    title: 'Strategy',
    description: 'Every move is calculated; alliances form and betrayals play out like a chess match.',
    icon: '♞'
  },
  {
    title: 'Immunity',
    description: 'Powerful advantages protect players from elimination and shift the game’s momentum.',
    icon: '🛡️'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/90 px-6 py-10 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-14 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-rose-300">Game Features</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The rules of romance are written like a game.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            Each feature blends romantic drama with strategic gameplay in a powerful, cinematic package.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gameFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 text-left shadow-[0_30px_70px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-rose-400/50 hover:bg-white/10"
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-rose-500/10 to-transparent opacity-60" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-500 to-red-600 text-2xl shadow-lg shadow-black/30 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300 transition group-hover:text-white">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
