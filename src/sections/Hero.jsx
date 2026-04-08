import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#1A0A0A] text-white">
      
      {/* 🎬 Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
          <source src="/videos/Dating_Show_Trailer_Check_Mate.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🔥 Overlays */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,0,0,0.18),_transparent_40%)]" />
      <div className="absolute inset-0 z-30 bg-[linear-gradient(180deg,rgba(26,10,10,0.3),rgba(26,10,10,0.95))]" />

      {/* ❤️ Ambient Red Glow */}
      <div className="absolute inset-0 overflow-hidden z-40">
        <div className="absolute left-[10%] top-[15%] h-28 w-28 rounded-full bg-red-700/20 blur-3xl" />
        <div className="absolute left-[80%] top-[10%] h-20 w-20 rounded-full bg-red-600/15 blur-2xl" />
        <div className="absolute left-[20%] bottom-[20%] h-24 w-24 rounded-full bg-red-800/20 blur-3xl" />
        <div className="absolute left-[70%] bottom-[25%] h-32 w-32 rounded-full bg-red-700/15 blur-3xl" />
      </div>

      {/* 🎯 CONTENT */}
      <div className="relative z-50 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-8">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-8"
          >

            {/* 🔖 Badge */}
            <span className="inline-flex rounded-full border border-red-700/40 bg-red-950/50 px-4 py-2 text-xs uppercase tracking-[0.32em] text-red-300/80">
              A Youth Driven Dating Reality Show
            </span>

            {/* 🏆 Title */}
            <h1 className="font-['Playfair_Display'] text-5xl font-black uppercase tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
              CHECK MATE
              <span className="block text-4xl font-semibold italic text-red-400 sm:text-5xl lg:text-6xl">
                – Jack of Hearts
              </span>
            </h1>

            {/* ❤️ Divider */}
            <div className="flex items-center gap-3 max-w-xs">
              <div className="h-px flex-1 bg-gradient-to-r from-red-600/60 to-transparent" />
              <span className="text-red-500 text-sm">♥</span>
              <span className="text-red-500 text-sm">♟</span>
              <span className="text-red-500 text-sm">♥</span>
            </div>

            {/* 📄 Description */}
            <p className="max-w-2xl text-base leading-8 text-red-100/60 sm:text-lg">
              Step into a cinematic arena where strategy, romance, and high-stakes drama collide. The ultimate dating competition for a new generation.
            </p>

            {/* 🚀 CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              {/* ✅ FIXED ANCHOR BUTTON */}
              <a
                href="#concept"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-700 to-red-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(200,16,46,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(200,16,46,0.5)] border border-red-600/30"
              >
                Explore the Show
              </a>

              {/* BUTTON */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-red-800/40 bg-red-950/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-200 transition hover:border-red-600/60 hover:bg-red-900/40"
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