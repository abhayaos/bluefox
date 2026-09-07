import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import { FaThumbsUp, FaMedal, FaMousePointer, FaCheck, FaAward, FaUsers, FaLightbulb, FaClock } from 'react-icons/fa'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import webdevImg from '../../assets/home/Website_developlent.svg'
import appdevImg from '../../assets/home/App_Development.svg'
import uiuxImg from '../../assets/home/UI_UX.svg'
import seoImg from '../../assets/home/SEO_analytics_team-amico.svg'
import smmImg from '../../assets/home/Mobile_Marketing-pana.svg'
import graphicImg from '../../assets/home/Website_Creator-pana.svg'
import contentImg from '../../assets/home/Content Writing.svg'

const service = services.find((s) => s.slug === 'system-software-development')

const features = [
  {
    icon: FaThumbsUp,
    title: 'Satisfaction Guarantee',
    desc: 'Elevate online presence with unmatched development expertise.',
  },
  {
    icon: FaMedal,
    title: 'Best Quality Work',
    desc: 'Excellence and innovation define our development solutions.',
  },
  {
    icon: FaMousePointer,
    title: 'Interactive Interface',
    desc: 'Create an engaging interface for a optimal user experience.',
  },
]

const industries = [
  {
    title: 'E-Learning',
    desc: 'We develop exceptional e-Learning systems tailored to deliver dynamic educational content, manage courses, and track learner progress for optimized online learning experiences.',
  },
  {
    title: 'Logistics Management',
    desc: 'We specialize in developing advanced logistics management systems to streamline supply chain operations, track shipments, and enhance efficiency in real-time.',
  },
  {
    title: 'Poultry Management',
    desc: 'We develop innovative poultry management systems that optimize flock health, automate feeding, and enhance productivity through real-time monitoring and data analysis.',
  },
  {
    title: 'GPS Tracking',
    desc: 'We develop premium GPS tracking systems/software for real-time asset monitoring, route optimization, and enhanced fleet management.',
  },
]

const whyChooseUs = [
  {
    icon: FaAward,
    title: 'Robust Functionality',
    desc: 'We ensure top system performance and robust functionality, delivering a seamless user experience.',
  },
  {
    icon: FaUsers,
    title: 'Client-Centric Approach',
    desc: 'Our system or software development services are client-centric, precisely addressing your unique needs in every project.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovative System Design',
    desc: 'We transform your concept into reality by combining creative and user friendly design, and robust functionality.',
  },
  {
    icon: FaClock,
    title: 'Timely Project Delivery',
    desc: 'As a leading software development company in Nepal, we ensure your projects stay on track and meet deadlines.',
  },
]

const otherServices = [
  { title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your need.', link: '/services/website-development', img: webdevImg },
  { title: 'App Development', desc: 'Innovative and user-friendly mobile application designed to engage users.', link: '/services/app-development', img: appdevImg },
  { title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction', link: '/services/ui-ux', img: uiuxImg },
  { title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', link: '/services/seo', img: seoImg },
  { title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', link: '/services/social-media-marketing', img: smmImg },
  { title: 'Graphic Design', desc: 'Designs that Speak Your Brand\u2019s Narrative and Connect with Your Audience', link: '/services/graphic-design', img: graphicImg },
  { title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', link: '/services/content-writing', img: contentImg },
  { title: 'Pay Per Click', desc: 'Maximize your ROI and drive targeted traffic to your digital assets', link: '/services/pay-per-click', img: seoImg },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

const faqs = [
  {
    q: 'What types of software development services do you offer?',
    body: [
      {
        t: 'p',
        text: 'We develop custom systems and software for E-Learning, Logistics Management, Poultry Management, and GPS Tracking \u2014 along with bespoke solutions tailored to your business. From simple tools to complex enterprise systems, we build everything from scratch to finish.',
      },
    ],
  },
  {
    q: 'How much does it cost to develop custom software?',
    body: [
      {
        t: 'p',
        text: 'The cost of custom software depends on features, type, complexity, and your specific requirements. The higher the complexity, the higher the cost \u2014 but regardless of the price, you get complete value for your investment. Contact us for a tailored estimate.',
      },
    ],
  },
  {
    q: 'How long does it take to develop custom software?',
    body: [
      {
        t: 'p',
        text: 'The timeline depends on the scale, features, and complexity of the software. Larger, feature-rich systems take longer to develop. However, we follow a clear roadmap and keep projects on track to meet deadlines.',
      },
    ],
  },
  {
    q: 'What is the process of software development?',
    body: [
      {
        t: 'p',
        text: 'Our process flows through Requirement Analysis, Planning, Design (UI/UX), Development, System Testing & QA, Deployment, Maintenance & Monitoring, and Knowledge Transfer \u2014 ensuring reliable, high-quality delivery.',
      },
    ],
  },
  {
    q: 'How do you ensure the security of the software you develop?',
    body: [
      {
        t: 'p',
        text: 'We develop your system from scratch, allowing us to implement a comprehensive security approach that provides robust protection against potential threats and emerging risks.',
      },
    ],
  },
  {
    q: 'Do you offer support services and maintenance?',
    body: [
      {
        t: 'p',
        text: 'Yes, after deployment we provide ongoing support and maintenance for as long as you need, so your software stays secure, current, and running smoothly.',
      },
    ],
  },
]

function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 transition-colors duration-200 hover:text-[#0b7be5] ${
                isOpen ? 'text-[#0b7be5]' : ''
              }`}
            >
              <span>{faq.q}</span>
              <FiChevronDown
                className={`shrink-0 text-[#0b7be5] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                size={18}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 p-5 text-slate-600 leading-relaxed">
                  {faq.body.map((block, j) => {
                    if (block.t === 'ul') {
                      return (
                        <ul key={j} className="mb-3 list-disc space-y-1 pl-5">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }
                    if (block.t === 'ol') {
                      return (
                        <ol key={j} className="mb-3 list-decimal space-y-1 pl-5">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      )
                    }
                    return (
                      <p key={j} className="mb-3 last:mb-0">
                        {block.text}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const sections = (
  <>
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Industries We Serve</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Proud to deliver excellence every time
      </h2>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:grid-cols-2">
        {industries.map((industry, i) => {
          const blue = i === 1 || i === 2
          return (
            <div
              key={industry.title}
              className={`p-12 ${blue ? 'bg-[#0b7be5]' : 'bg-white'} ${
                i > 0 ? 'border-t border-slate-200' : ''
              } ${i % 2 === 1 ? 'sm:border-l sm:border-slate-200' : ''} ${
                i === 1 ? 'sm:border-t-0' : ''
              }`}
            >
              <h3 className={`font-heading text-2xl font-semibold ${blue ? 'text-white' : 'text-slate-700'}`}>
                {industry.title}
              </h3>
              <p className={`mt-4 text-lg leading-relaxed ${blue ? 'text-white/90' : 'text-slate-600'}`}>
                {industry.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
        We help you expand your business through tech
      </h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-12">
        Blue Fox has a team of highly skilled software developers and designers to provide you with
        the system or software of your choice. Therefore, we are the right software development
        company for all your design and development needs. Along with our exceptional software
        development services, some of our additional perks are as follows:
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((perk) => (
          <div
            key={perk.title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <perk.icon size={22} />
              </span>
              <FaCheck className="text-[#0b7be5]" size={14} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">{perk.title}</h3>
            <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Other Services</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        One Solution For All Your Digital Needs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {otherServices.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group rounded-2xl bg-white p-7 transition-colors duration-300 hover:bg-[#a9d6ff]"
          >
            <div className="mb-5 flex w-full items-center justify-center rounded-xl bg-primary-50/60 py-4">
              <img src={item.img} alt={item.title} className="w-36 h-36 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed group-hover:text-primary-900 transition-colors duration-300">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pt-10 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Valued Partners</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Trusted by Top-Rated Companies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {partnerships.map((partner) => (
          <div
            key={partner.alt}
            className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]"
          >
            <img src={partner.img} alt={partner.alt} className="h-14 object-contain" />
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="flex items-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">FAQs</p>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-left mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl text-left mb-12">
        Welcome to our FAQ section! Here you&apos;ll find quick answers to the most common questions
        about our products and services.
      </p>

      <Faq />
    </section>
  </>
)

export default function SystemSoftwareDevelopment() {
  return (
    <ServiceLayout service={service} showDetails={false} features={features} after={sections} />
  )
}