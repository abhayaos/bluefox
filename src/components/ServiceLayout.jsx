import { Link } from 'react-router-dom'
import { FaArrowRight, FaComments } from 'react-icons/fa'

export default function ServiceLayout({ service, showDetails = true, features = [], after }) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-left">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
            Our Services / {service.category}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {service.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">{service.tagline}</h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">{service.intro}</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-md shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
          >
            <FaComments size={16} />
            Let's Start Conversation
          </a>
        </div>
      </section>

      {/* Feature boxes */}
      {features.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-6 pt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={22} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-700">
                  {feature.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {after}

      {/* Details */}
      {showDetails && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="text-slate-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Get Started
              <FaArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}