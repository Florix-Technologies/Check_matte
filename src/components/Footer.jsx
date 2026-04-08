export default function Footer() {
  return (
    <footer className="border-t border-red-900/30 bg-[#1A0A0A] py-10 text-red-100/50 shadow-[0_-10px_40px_rgba(139,0,0,0.15)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 to-red-900 text-sm font-bold shadow-[0_0_16px_rgba(200,16,46,0.35)] border border-red-700/30">
              CM
            </span>
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.24em] text-white">CHECK MATE</p>
              <p className="text-sm text-red-100/40">A strategic dating reality experience.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-[auto_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-5 text-sm text-red-100/40">
            {['Home', 'About', 'Concept', 'How It Works', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="transition hover:text-red-300">
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-red-100/40">
            {[
              { label: 'Instagram', path: 'M7.75 2.5h8.5A5.25 5.25 0 0 1 21.5 7.75v8.5A5.25 5.25 0 0 1 16.25 21.5h-8.5A5.25 5.25 0 0 1 2.5 16.25v-8.5A5.25 5.25 0 0 1 7.75 2.5Zm0 1.5A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4H7.75Zm8.5 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z' },
              { label: 'Twitter', path: 'M8.29 20.25c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.35-.012-.524A8.18 8.18 0 0 0 22 5.92a8.276 8.276 0 0 1-2.357.637 4.1 4.1 0 0 0 1.804-2.27 8.216 8.216 0 0 1-2.605.98 4.102 4.102 0 0 0-6.993 3.743A11.636 11.636 0 0 1 3.147 4.7a4.072 4.072 0 0 0 1.27 5.47 4.077 4.077 0 0 1-1.858-.512v.05a4.103 4.103 0 0 0 3.292 4.018 4.1 4.1 0 0 1-1.853.07 4.105 4.105 0 0 0 3.832 2.83A8.233 8.233 0 0 1 2 18.19a11.616 11.616 0 0 0 6.29 1.84' },
              { label: 'YouTube', path: 'M23.5 6.21a3.01 3.01 0 0 0-2.12-2.13C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.38.58A3.01 3.01 0 0 0 .5 6.21 31.13 31.13 0 0 0 0 12a31.13 31.13 0 0 0 .5 5.79 3.01 3.01 0 0 0 2.12 2.13C4.44 20.5 12 20.5 12 20.5s7.56 0 9.38-.58a3.01 3.01 0 0 0 2.12-2.13A31.13 31.13 0 0 0 24 12a31.13 31.13 0 0 0-.5-5.79ZM9.75 15.5V8.5l6 3.5-6 3.5Z' }
            ].map(({ label, path }) => (
              <a key={label} href="#" aria-label={label} className="transition hover:text-red-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-red-900/20 px-6 pt-6 text-center text-xs text-red-100/25 sm:px-8 lg:px-12">
        © 2026 CHECK MATE. All rights reserved.
      </div>
    </footer>
  )
}