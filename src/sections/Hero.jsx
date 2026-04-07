import { motion } from 'framer-motion'




const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Full-section Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-100">
          <source src="/videos/Dating_Show_Trailer_Check_Mate.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.18),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(248,113,113,0.14),_transparent_28%)]" />
      <div className="absolute inset-0 z-30 bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.92))]" />
      <div className="absolute inset-0 overflow-hidden z-40">
        <div className="hero-particle left-[10%] top-[15%] h-28 w-28 blur-3xl" />
        <div className="hero-particle left-[80%] top-[10%] h-20 w-20 blur-2xl" />
        <div className="hero-particle left-[20%] bottom-[20%] h-24 w-24 blur-3xl" />
        <div className="hero-particle left-[70%] bottom-[25%] h-32 w-32 blur-3xl" />
      </div>

      <div className="relative z-50 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-200/80">
              A Youth Driven Dating Reality Show
            </span>
            <h1 className="text-5xl font-black uppercase tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              CHECK MATE
              <span className="block text-4xl font-semibold text-rose-400 sm:text-5xl lg:text-6xl">– Jack of Hearts</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Step into a cinematic arena where strategy, romance, and high-stakes drama collide. The ultimate dating competition for a new generation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#concept"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-red-600 to-black px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_24px_80px_rgba(244,63,94,0.28)] transition hover:scale-[1.01]"
              >
                Watch Trailer
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-white/30 hover:bg-white/10"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
