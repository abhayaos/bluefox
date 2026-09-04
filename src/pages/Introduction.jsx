import { Link } from 'react-router-dom'

export default function Introduction() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto py-24 text-left mt-5">
          <p className="text-blue-600 font-medium text-sm tracking-wide uppercase mb-4">
            Welcome to Blue Fox
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-8">
            Make It Possible with <span className="text-blue-600">Blue Fox</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed text-left mt-4">
            Step into the future of IT solutions with Blue Fox. We offer you a wide range of
            services, including Web Development, SEO, Mobile App Development, and Digital
            Marketing! Let us be your trusted guide to navigate the dynamic digital landscape!
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}