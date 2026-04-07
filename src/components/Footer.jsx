export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-10 text-slate-300 shadow-[0_-20px_80px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold shadow-lg shadow-fuchsia-500/20">
              CM
            </span>
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.24em]">CHECK MATE</p>
              <p className="text-sm text-slate-400">A dark, dramatic dating reality experience.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-[auto_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#concept" className="transition hover:text-white">
              Concept
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="Instagram" className="transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M7.75 2.5h8.5A5.25 5.25 0 0 1 21.5 7.75v8.5A5.25 5.25 0 0 1 16.25 21.5h-8.5A5.25 5.25 0 0 1 2.5 16.25v-8.5A5.25 5.25 0 0 1 7.75 2.5Zm0 1.5A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4H7.75Zm8.5 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M8.29 20.25c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.35-.012-.524A8.18 8.18 0 0 0 22 5.92a8.276 8.276 0 0 1-2.357.637 4.1 4.1 0 0 0 1.804-2.27 8.216 8.216 0 0 1-2.605.98 4.102 4.102 0 0 0-6.993 3.743A11.636 11.636 0 0 1 3.147 4.7a4.072 4.072 0 0 0 1.27 5.47 4.077 4.077 0 0 1-1.858-.512v.05a4.103 4.103 0 0 0 3.292 4.018 4.1 4.1 0 0 1-1.853.07 4.105 4.105 0 0 0 3.832 2.83A8.233 8.233 0 0 1 2 18.19a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23.5 6.21a3.01 3.01 0 0 0-2.12-2.13C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.38.58A3.01 3.01 0 0 0 .5 6.21 31.13 31.13 0 0 0 0 12a31.13 31.13 0 0 0 .5 5.79 3.01 3.01 0 0 0 2.12 2.13C4.44 20.5 12 20.5 12 20.5s7.56 0 9.38-.58a3.01 3.01 0 0 0 2.12-2.13A31.13 31.13 0 0 0 24 12a31.13 31.13 0 0 0-.5-5.79ZM9.75 15.5V8.5l6 3.5-6 3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-slate-500 sm:px-8 lg:px-12">
        © 2026 CHECK MATE. All rights reserved.
      </div>
    </footer>
  )
}
