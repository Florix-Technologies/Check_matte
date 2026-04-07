import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
}

export default function TheAlmighty() {
  return (
    <section id="the-almighty" className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/95 px-6 py-20 text-center text-white shadow-[0_40px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-10 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-black/90 opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.24),_transparent_18%),radial-gradient(circle_at_center,_rgba(59,130,246,0.16),_transparent_22%)] opacity-70" />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-8"
        >
          <div className="mx-auto h-24 w-24 rounded-full border border-purple-400/40 bg-purple-500/10 shadow-[0_0_60px_rgba(168,85,247,0.35)] animate-pulse-slow" />
          <p className="text-sm uppercase tracking-[0.36em] text-rose-300/90">The Almighty</p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            An invisible power moves every heart and every move.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Behind the romance and the rivalry, a mysterious authority watches from the shadows, shaping fate with every twist and pulse of the game.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
