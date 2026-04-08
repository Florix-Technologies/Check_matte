import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navLinks = ['Home', 'About', 'Concept', 'How It Works', 'Contact']

function normalizeAnchor(item) {
  return item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-red-900/30 bg-[#1A0A0A]/90 shadow-[0_4px_30px_rgba(139,0,0,0.2)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-sm text-white md:px-8 lg:px-10">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.24em] text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 text-sm font-black shadow-[0_0_20px_rgba(200,16,46,0.4)] border border-red-600/30">
            CM
          </span>
          <span>CHECK MATE</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) =>
            isHome ? (
              <a
                key={item}
                href={`#${normalizeAnchor(item)}`}
                className="text-red-100/60 transition duration-200 hover:text-white"
              >
                {item}
              </a>
            ) : (
              <Link
                key={item}
                to={`/#${normalizeAnchor(item)}`}
                className="text-red-100/60 transition duration-200 hover:text-white"
              >
                {item}
              </Link>
            )
          )}

          {/* RULES LINK */}
          <Link
            to="/rules-and-regulations"
            className={`transition duration-200 ${
              location.pathname === '/rules-and-regulations'
                ? 'text-red-400'
                : 'text-red-100/60 hover:text-white'
            }`}
          >
            Rules & Regulations
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-900/40 bg-red-950/30 text-white transition hover:border-red-600/50 hover:bg-red-900/50 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="relative block h-5 w-5">
            <span className={`absolute left-0 top-0 h-[2px] w-full bg-current transition duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2.5 h-[2px] w-full bg-current transition duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-5 h-[2px] w-full bg-current transition duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-red-900/30 bg-[#1A0A0A]/95 px-5 pb-5 pt-3 backdrop-blur-xl md:hidden">
          <div className="space-y-3">
            {navLinks.map((item) =>
              isHome ? (
                <a
                  key={item}
                  href={`#${normalizeAnchor(item)}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-red-900/30 bg-red-950/30 px-4 py-3 text-base text-red-100 transition hover:border-red-700/50 hover:bg-red-900/40"
                >
                  {item}
                </a>
              ) : (
                <Link
                  key={item}
                  to={`/#${normalizeAnchor(item)}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-red-900/30 bg-red-950/30 px-4 py-3 text-base text-red-100 transition hover:border-red-700/50 hover:bg-red-900/40"
                >
                  {item}
                </Link>
              )
            )}

            {/* RULES MOBILE */}
            <Link
              to="/rules-and-regulations"
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-red-700/40 bg-red-950/40 px-4 py-3 text-base text-red-300 transition hover:border-red-600/60 hover:bg-red-900/50"
            >
              Rules & Regulations
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}