export default function CTA() {
  return (
    <section id="how-it-works" className="rounded-[32px] border border-slate-200/70 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 shadow-glow backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/50">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Ready to launch?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Start building your next product with a premium landing page foundation.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Packed with a modern visual system, responsive sections, and motion-powered interactions so you can ship faster.
          </p>
        </div>

        <div className="grid gap-4 rounded-[28px] border border-white/80 bg-white/90 p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/80">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Book a walkthrough</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">15 min setup call</p>
          </div>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>Custom brand direction</p>
            <p>Responsive section polish</p>
            <p>Motion and interaction review</p>
          </div>
          <a
            href="mailto:hello@checkmate.com"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  )
}
