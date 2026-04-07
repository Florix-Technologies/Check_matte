import { motion } from 'framer-motion'

const hosts = [
  {
    name: 'Ari King',
    role: 'Lead Host',
    description: 'A charismatic strategist who navigates the drama and guides contestants through every thrilling twist.',
    icon: '🕶️'
  },
  {
    name: 'Nova Vale',
    role: 'Co-Host',
    description: 'A fierce storyteller who brings warmth, intrigue, and poetic commentary to each elimination.',
    icon: '✨'
  }
]

export default function Hosts() {
  return (
    <section id="hosts" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/95 px-6 py-14 text-white shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-20 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.12),_transparent_24%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-rose-300">Meet the Hosts</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The guides behind every suspenseful move.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Introducing the hosts who command the stage, rally the cast, and deliver the unforgettable moments that define the game.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hosts.map((host, index) => (
            <motion.article
              key={host.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-8 text-left shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-slate-900/95"
            >
              <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 opacity-20 blur-3xl" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-white/5 text-4xl shadow-lg shadow-black/30 transition group-hover:scale-105">
                  {host.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{host.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-rose-300/90">{host.role}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300 transition group-hover:text-white">
                {host.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-rose-300 transition group-hover:text-white">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-300" />
                Guides the story
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
