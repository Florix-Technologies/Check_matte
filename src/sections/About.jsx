import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } }
}

export default function About() {
  const { ref, y } = useParallax(30)

  return (
    <section id="about" className="relative overflow-hidden rounded-[36px] border border-red-900/30 bg-[#1A0A0A] p-8 shadow-[0_40px_120px_rgba(139,0,0,0.2)] sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,16,46,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,0,0,0.08),_transparent_40%)]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left — Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-red-400">About the Show</p>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A bold blend of love, strategy, and emotional intelligence.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-red-100/60 sm:text-lg">
            CHECK MATE is a dating reality show where every connection is a move on the board. Contestants must balance heartfelt vulnerability with mind games, always staying two steps ahead to win the heart of the Jack of Hearts.
          </p>
          <p className="max-w-2xl text-base leading-8 text-red-100/60 sm:text-lg">
            Packed with emotional intelligence, romantic tension, and strategic gameplay, the show is built for viewers who love drama, passion, and intelligent matchmaking.
          </p>
        </motion.div>

      <motion.div
  ref={ref}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionFade}
  className="relative overflow-hidden rounded-2xl border border-red-900/30 bg-[#200A0A] p-6"
  style={{ y, boxShadow: '0 8px 40px rgba(139,0,0,0.2), inset 0 1px 0 rgba(255,100,100,0.05)' }}
>
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-800/25 to-transparent rounded-bl-[48px]" />
          {/* Left accent bar */}
          <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-red-500 via-red-600 to-red-500/0 rounded-full" />

          <div className="pl-5 space-y-5">
            {/* Tag */}
            <span className="inline-block rounded-full bg-red-900/40 border border-red-700/30 px-3 py-1 text-xs uppercase tracking-[0.24em] text-red-300">
              Love. Strategy. Drama.
            </span>

            <h3 className="text-xl font-semibold text-white">
              Emotional intelligence meets mind games
            </h3>

            <p className="text-sm leading-7 text-red-100/50">
              Players must read the room, decode intentions, and make every move count in a high-stakes romantic battlefield.
            </p>

            {/* Format list */}
            <div className="rounded-xl bg-red-950/40 border border-red-900/30 p-5 mt-2">
              <p className="text-xs uppercase tracking-[0.24em] text-red-400 mb-4">Show Format</p>
              <ul className="space-y-3">
                {['Heart strategy challenges', 'Intimate confessional moments', 'Unexpected alliances and twists'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-red-100/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(200,16,46,0.8)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}