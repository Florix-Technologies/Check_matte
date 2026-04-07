import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = ['Home', 'About', 'Concept', 'How It Works', 'Contact']

function normalizeAnchor(item) {
  return item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
}

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-500"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-sm text-white md:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.24em] text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-rose-500 to-fuchsia-500 text-sm font-black shadow-[0_20px_50px_rgba(239,68,68,0.22)]">
            CM
          </span>
          <span>CHECK MATE</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${normalizeAnchor(item)}`}
              className="transition text-slate-300 duration-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/20 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-2.5 h-[2px] w-full bg-current transition duration-300 ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-5 h-[2px] w-full bg-current transition duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="space-y-3">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${normalizeAnchor(item)}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-100 transition hover:border-white/20 hover:bg-white/10"
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
              className="w-full rounded-2xl border border-white/10 bg-gradient-to-r from-red-600 via-rose-500 to-fuchsia-500 px-4 py-3 text-base font-semibold text-white transition hover:opacity-95"
            >
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
