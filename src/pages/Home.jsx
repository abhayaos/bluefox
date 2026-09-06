import { Link } from 'react-router-dom'
import {
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaPalette,
  FaPhoneAlt,
  FaProjectDiagram,
  FaSearch,
  FaShareAlt,
  FaPaintBrush,
  FaPenNib,
  FaUsers,
} from 'react-icons/fa'

const metrics = [
  { value: '6+', label: 'Years Experience', icon: FaCalendarAlt },
  { value: '400+', label: 'Delivered Projects', icon: FaProjectDiagram },
  { value: '80+', label: 'Skilled Engineers', icon: FaUsers },
  { value: '99.98%', label: 'On-Time Delivery', icon: FaClock },
]

const services = [
  { title: 'Website Design and Development In Nepal', desc: 'Highly functional & visually appealing website designed to meet your need.', icon: FaGlobe, link: '/services/website-development' },
  { title: 'App Development in Nepal', desc: 'Innovative and user-friendly mobile application designed to engage users.', icon: FaMobileAlt, link: '/services/app-development' },
  { title: 'System/Software Development', desc: 'System/software developed according to your business needs.', icon: FaLayerGroup, link: '/services/system-software-development' },
  { title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction', icon: FaPalette, link: '/services/ui-ux' },
  { title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', icon: FaSearch, link: '/services/seo' },
  { title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', icon: FaShareAlt, link: '/services/social-media-marketing' },
  { title: 'Graphic Design', desc: 'Designs that Speak Your Brand\u2019s Narrative and Connect with Your Audience', icon: FaPaintBrush, link: '/services/graphic-design' },
  { title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', icon: FaPenNib, link: '/services/content-writing' },
]

export default function Home() {
  return (
    <main className="flex-1">
      {/* lefted hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14 text-left">
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-7">
            Transform Your Vision Into A{' '}
            <span className="relative inline-block text-primary">
              Digital Reality
              <span aria-hidden className="absolute left-0 -bottom-2 h-2 w-full -rotate-1 rounded-[50%] bg-primary-200" />
              <span aria-hidden className="absolute left-3 -bottom-4 h-1.5 w-[88%] rotate-2 rounded-full bg-primary-100" />
              <span aria-hidden className="absolute inset-x-[-6px] -inset-y-1.5 -rotate-1 border-2 border-dashed border-primary/40 rounded-lg" />
              <span aria-hidden className="absolute inset-x-[-12px] -inset-y-2.5 rotate-1 border-2 border-dotted border-primary-200 rounded-md" />
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
            We deliver enterprise custom software, resilient cloud architecture, cutting-edge
            mobile apps, and hyper-growth performance engineering designed to scale your
            business across borders.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary text-white px-9 py-3.5 font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Let's Get Started
            </Link>
            <Link
              to="/our-work"
              className="relative inline-flex items-center px-4 py-3.5 font-semibold text-slate-700 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Discover Our Work
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest">INSTANT CONSULTATION</span>
            <a href="tel:+9779817303073" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <FaPhoneAlt size={12} />
              +977 9817303073
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="max-w-5xl mx-auto px-6 pb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-primary/10 overflow-hidden">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`group flex flex-col items-center gap-3 p-6 md:p-7 text-center border-slate-200 ${
                  i === 1 || i === 3 ? 'border-l' : ''
                } ${i >= 2 ? 'border-t lg:border-t-0 lg:border-l' : ''}`}
              >
                <span className="w-11 h-11 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <metric.icon size={18} />
                </span>
                <p className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-primary-200 bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Services</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Exceptional Services For Your Business Growth
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Discover our wide range of digital solutions to enhance your online presence.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:border-primary-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-white transition-colors duration-300" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-primary-50 px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="text-left lg:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Ready to engineer your next digital platform?
            </h2>
            <p className="text-slate-600 max-w-xl leading-relaxed">
              Speak directly with our senior software architects in Itahari and Kathmandu.
              No delays, guaranteed delivery timelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+9779802755603"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary text-white px-6 py-3.5 font-semibold shadow-md hover:bg-primary-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FaPhoneAlt size={14} />
              +977 9802755603
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3.5 font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FaCalendarAlt size={14} />
              Schedule Briefing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}