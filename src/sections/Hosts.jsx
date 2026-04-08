import { motion } from 'framer-motion'

const hosts = [
  {
    name: 'Ari King',
    role: 'Lead Host',
    description: 'A charismatic strategist who navigates the drama and guides contestants through every thrilling twist.',
    icon: '🕶️',
    stat: '3 Seasons',
    statLabel: 'Experience'
  },
  {
    name: 'Nova Vale',
    role: 'Co-Host',
    description: 'A fierce storyteller who brings warmth, intrigue, and poetic commentary to each elimination.',
    icon: '✨',
    stat: '12 Episodes',
    statLabel: 'Per Season'
  }
]

export default function Hosts() {
  return (
    <section id="hosts" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] px-6 py-14 shadow-[0_40px_120px_rgba(139,0,0,0.3)] sm:px-10 sm:py-20 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,16,46,0.1),_transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-red-400">Meet the Hosts</p>
          <h2 className="mt-4 font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The guides behind every suspenseful move.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hosts.map((host, index) => (
            <motion.article
              key={host.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#200A0A] p-8"
              style={{ boxShadow: '0 8px 40px rgba(139,0,0,0.18), inset 0 1px 0 rgba(255,100,100,0.05)' }}
            >
              {/* Diagonal top-right accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-900/30 to-transparent rounded-bl-[60px]" />

              {/* Animated left border */}
              <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-red-600/0 via-red-600 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center gap-5 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-950 border border-red-800/40 text-4xl shadow-inner">
                    {host.icon}
                  </div>
                  {/* Glow dot */}
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-[#200A0A] shadow-[0_0_8px_rgba(200,16,46,0.8)]" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">{host.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-red-400">{host.role}</p>
                </div>
              </div>

              <p className="text-sm leading-7 text-red-100/50 group-hover:text-red-100/80 transition-colors mb-6">
                {host.description}
              </p>

              {/* Stat bar */}
              <div className="flex items-center justify-between rounded-xl bg-red-950/40 border border-red-900/30 px-5 py-3">
                <span className="text-xs uppercase tracking-[0.2em] text-red-400/70">{host.statLabel}</span>
                <span className="text-sm font-semibold text-red-300">{host.stat}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}