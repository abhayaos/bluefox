import { Link, useParams } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import services from '../data/services'

export default function ServicePage() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20">
        <h1 className="font-heading text-7xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-lg text-slate-600 mb-8">Service not found</p>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Go Home
        </Link>
      </main>
    )
  }

  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">
            Our Services
          </p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="font-heading text-4xl font-bold text-slate-900 mb-4">
            {service.title}
          </h1>
          <p className="text-primary font-medium mb-3">{service.tagline}</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {service.intro}
          </p>
        </div>

        {service.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 30)} className="text-slate-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get Started
            <FaArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  )
}