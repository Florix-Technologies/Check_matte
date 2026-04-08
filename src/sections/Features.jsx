import { motion } from 'framer-motion'

const gameFeatures = [
  { title: 'Tasks', description: 'Contestants compete in high-energy challenges that test chemistry, strategy, and emotional instinct.', icon: '♟️', number: '01' },
  { title: 'Dates', description: 'Intimate moments staged like chapters in a romance thriller, each with high stakes.', icon: '♥️', number: '02' },
  { title: 'Strategy', description: 'Every move is calculated; alliances form and betrayals play out like a chess match.', icon: '♞', number: '03' },
  { title: 'Immunity', description: 'Powerful advantages protect players from elimination and shift the game\'s momentum.', icon: '🛡️', number: '04' }
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] px-6 py-10 shadow-[0_40px_120px_rgba(139,0,0,0.3)] sm:px-10 sm:py-14 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(200,16,46,0.12),_transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-red-400">Game Features</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The rules of romance are written like a game.
          </h2>
          <p className="mt-4 text-base leading-8 text-red-100/60 sm:text-lg">
            Each feature blends romantic drama with strategic gameplay in a cinematic package.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gameFeatures.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#200A0A] p-6 cursor-default"
              style={{ boxShadow: '0 4px 24px rgba(139,0,0,0.15), inset 0 1px 0 rgba(255,100,100,0.05)' }}
            >
              {/* Big number watermark */}
              <span className="absolute -right-2 -top-4 text-7xl font-black text-red-950/60 select-none pointer-events-none leading-none">
                {feature.number}
              </span>

              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-950 border border-red-800/40 text-xl">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm leading-6 text-red-100/50 group-hover:text-red-100/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}