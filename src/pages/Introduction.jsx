import { FaQuoteLeft, FaCogs, FaTrophy, FaPuzzlePiece, FaUserTie, FaCalendarCheck, FaHeadset, FaMountain, FaBullseye } from 'react-icons/fa'
import mdImage from '../assets/about/md.jpg'

const stats = [
  { value: '80+', label: 'Team Members' },
  { value: '6+', label: 'Years Of Experience' },
  { value: '400+', label: 'Projects' },
  { value: '300+', label: 'Happy Clients' },
]

const features = [
  { icon: FaCogs, title: 'Customized Solutions' },
  { icon: FaTrophy, title: 'Proven Track Record' },
  { icon: FaPuzzlePiece, title: 'Diverse Expertise' },
  { icon: FaUserTie, title: 'Client-Centric Approach' },
  { icon: FaCalendarCheck, title: 'On-Time Project' },
  { icon: FaHeadset, title: 'Dedicated Support' },
]

export default function Introduction() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-left">
          <h1 className="font-heading text-5xl font-bold text-gray-900 mb-8">
            Make It Possible with{' '}
            <span className="relative inline-block text-primary">
              Blue Fox
              <span aria-hidden className="absolute left-0 -bottom-2 h-2.5 w-full -rotate-1 rounded-[50%] bg-primary-200" />
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed text-left">
            Step into the future of IT solutions with Blue Fox. We offer you a wide range of
            services, including Web Development, SEO, Mobile App Development, and Digital
            Marketing! Let us be your trusted guide to navigate the dynamic digital landscape!
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</p>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Empowering Businesses with Prominent IT Solutions
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <feature.icon size={24} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-gradient-to-b from-white to-[#eef2ff] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <div className="flex items-center justify-center gap-4 text-primary mb-4">
                <span className="h-px w-10 bg-primary" />
                <p className="text-xs font-bold tracking-[0.25em] uppercase">Who We Are</p>
                <span className="h-px w-10 bg-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                Your trusted partner specializing in IT solutions
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p>
                  Blue Fox Pvt Ltd. is a revenue-based project company specializing in the IT
                  sector. We are especially working in the field of website design and software
                  development in Nepal. Not only that, our other services include mobile app
                  development, digital marketing and graphics designing. We are your best IT
                  partner and believe that website and digital marketing are the only ways to
                  promote growing businesses digitally.
                </p>
                <p>
                  Located at Itahari-6, Paruhang Chowk, Nepal our B2B (Business to Business)
                  company aims at transforming and updating tech services to deliver quality
                  outputs. Blue Fox is the only choice for your web problems due to brilliant
                  teamwork, passionate team members, and first-class service delivery. Since 2017,
                  the company has proved to be award-winning technology solutions to clients. Our
                  projects are fully successful in terms of time, cost, design, and performance.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="rounded-2xl bg-white p-8">
                <div className="flex items-center gap-4 mb-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shrink-0">
                  <FaMountain size={24} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-900">Our Mission</h3>
              </div>
                <p className="text-slate-600 leading-relaxed">
                  We directly approach our goal and prove to be best with our clients by
                  evaluating their resources in the best possible way. We are in the developing
                  stage but never showcase it as our limitations. Our business empowers you and
                  your company in the right manner so that there is a long-term relationship
                  between clients, employees, and other stakeholders.
                </p>
              </div>

              <hr className="mx-auto w-24 border-slate-300 my-6" />

              <div className="rounded-2xl bg-white p-8">
                <div className="flex items-center gap-4 mb-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shrink-0">
                  <FaBullseye size={24} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-900">Our Vision</h3>
              </div>
                <p className="text-slate-600 leading-relaxed">
                  Our effort is endless to make Blue Fox a systematic and qualitative company in
                  the IT sector. Every business requires digital identification in today's era.
                  Digital marketing is not a luxury but a necessity for your brand identification.
                  Website is the most reliable tool for digital marketing which is even suggested
                  by legal authorities in the case of Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD message */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">Message from the Managing Director</p>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            A Note From Our Leadership
          </h2>

          <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-center rounded-2xl bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff] p-8 md:p-12">
            <div className="mx-auto lg:mx-0">
              <div className="group relative mx-auto lg:w-72">
                <span className="absolute -top-6 -right-6 z-0 h-32 w-32 rounded-full bg-primary/10" />
                <span className="absolute -bottom-6 -left-6 z-0 h-28 w-28 rounded-full bg-[#a9d6ff]/50" />
                <img
                  src={mdImage}
                  alt="Mitra Thapa Magar, Managing Director, Blue Fox Pvt. Ltd."
                  className="relative z-10 rounded-2xl object-cover shadow-xl shadow-primary/10 transition-all duration-300 group-hover:grayscale group-hover:brightness-75 lg:w-full"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-center rounded-b-2xl bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-heading text-lg font-bold text-white">Mitra Thapa Magar</p>
                  <p className="mt-0.5 text-xs text-[#a9d6ff]">Managing Director, Blue Fox Pvt. Ltd.</p>
                </div>
              </div>
            </div>

            <div className="text-left">
              <FaQuoteLeft className="text-primary/30 mb-4" size={36} />
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                At Blue Fox, we believe great design and smart technology should work hand in hand.
                Our mission is to help businesses think digitally — building brands, websites, and
                experiences that truly stand out. I'm proud of the work our team delivers every day,
                and grateful for the trust our clients place in us. As we grow, our commitment stays
                the same: honest work, built to last.
              </p>
              <div className="flex items-center gap-3">
                <span className="h-12 w-1 rounded-full bg-primary" />
                <div>
                  <p className="font-heading text-xl font-bold text-slate-900">Mitra Thapa Magar</p>
                  <p className="text-primary font-medium">Managing Director, Blue Fox Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-slate-100 bg-gradient-to-b from-white to-[#eef2ff] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-slate-200 last:border-r-0">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="text-primary mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}