const testimonials = [
  {
    quote: 'The onboarding flow felt polished from day one. The motion and gradients create a premium first impression.',
    name: 'Mina Shah',
    title: 'VP Product, FinFlow'
  },
  {
    quote: 'Super easy to customize and the responsive layout works flawlessly across mobile, tablet, and desktop.',
    name: 'Jackson Reed',
    title: 'Founder, Spark Labs'
  },
  {
    quote: 'The dark mode toggle paired with glassmorphism gives our landing page a luxury feel without being heavy.',
    name: 'Avery Cole',
    title: 'Design Lead, Nova Studio'
  }
]

export default function Testimonials() {
  return (
    <section id="about" className="space-y-8">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-500">Customer voices</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Loved by modern teams building digital products.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="glass-card p-6">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-200">“{item.quote}”</p>
            <div className="mt-6 border-t border-slate-200/60 pt-5 text-sm text-slate-600 dark:border-slate-700/60 dark:text-slate-300">
              <p className="font-semibold text-slate-950 dark:text-white">{item.name}</p>
              <p>{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
