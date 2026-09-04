import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
} from 'react-icons/fa'

const services = [
  { title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your needs.', link: '/services' },
  { title: 'App Development', desc: 'Innovative and user-friendly mobile application designed to engage users.', link: '/services' },
  { title: 'System/Software Development', desc: 'System/software developed according to your business needs.', link: '/services' },
  { title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction.', link: '/services' },
  { title: 'SEO', desc: 'Custom SEO solutions for enhanced search engine visibility and growth.', link: '/services' },
  { title: 'Social Media Marketing', desc: 'Build a strong online presence and engage with your targeted audience.', link: '/services' },
]

const steps = [
  { num: '01', title: 'Requirement Gathering', desc: 'We start our collaboration by collecting client requirements, listing and compiling them to build the process from scratch.' },
  { num: '02', title: 'Plan & Resources', desc: 'After gathering requirements, we devise a strategic path and select resources to offer clients a clear roadmap.' },
  { num: '03', title: 'Design & Develop', desc: 'We turn strategic ideas into digital products that are visually appealing and technically robust.' },
  { num: '04', title: 'Quality Assurance', desc: 'We rigorously test and validate to ensure all elements work correctly and meet the required standards.' },
  { num: '05', title: 'Deployment', desc: 'Once the product meets standards, we deploy it, releasing products or updates safely and efficiently.' },
  { num: '06', title: 'Support & Maintenance', desc: 'In the final stage, we maintain systems to ensure smooth operation, security, and reliability.' },
]

const stats = [
  { value: '6', label: 'Years of Experience In This Field' },
  { value: '400', label: 'Projects Completed In The Past Years' },
  { value: '80', label: 'Skilled Team Members' },
]

const testimonials = [
  { name: 'Spadan Neupane', role: 'CEO, Itahari Medical Hall', text: 'The UI/UX design team at Blue Fox Pvt Ltd is exceptional. They transformed our platform with stunning designs and intuitive interfaces. Our users love the seamless experience, and it has significantly improved engagement rates!' },
  { name: 'Samrat Dahal', role: 'CEO, Web Host Nepal', text: 'Blue Fox Pvt Ltd has elevated our brand\'s online presence with their strategic social media campaigns. Their creative content and consistent engagement strategies have helped us connect with our audience like never before!' },
  { name: 'Rabindra Niraula', role: 'Owner, Lotus Multi-Training Center', text: 'Their graphic design and digital marketing services are top-notch. The creative visuals and targeted campaigns not only boosted our visibility but also doubled our sales. Blue Fox truly understands the art of branding!' },
]

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-6">
              #1 Digital Agency in Nepal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              Transform your vision into a{' '}
              <span className="text-blue-600">Digital Reality</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Turn your business ideas into future possibilities with the best IT company in
              Nepal. We build digital products that grow your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-7 py-3.5 font-semibold shadow-lg shadow-green-600/25 hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Let's Get Started
                <FaArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-blue-50 border-4 border-blue-100 flex items-center justify-center text-center">
              <div className="px-8">
                <p className="text-6xl font-black text-blue-600">BF</p>
                <p className="text-gray-500 mt-2 font-medium">Think Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exceptional Services For Your Business Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our wide range of digital solutions to enhance your online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                <FaCheckCircle className="text-blue-600 group-hover:text-white transition-colors duration-300" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-2">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enjoy seamless service with our easy steps!
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Efficient workflow from requirements gathering to support and maintenance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <span className="text-5xl font-black text-blue-100">{step.num}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-black text-amber-300">{stat.value}</p>
              <p className="text-blue-100 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Top IT Company in Nepal, committed to your digital growth
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are a top IT company in Nepal, committed to providing comprehensive digital
              solutions to enhance your online presence. Let's join hands and work together to
              take your brand to the next level with the best IT services.
            </p>
            <Link
              to="/about/introduction"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-7 py-3.5 font-semibold hover:bg-green-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              About Us
              <FaArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-4xl font-black text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <FaQuoteLeft className="text-blue-200 mb-4" size={32} />
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}