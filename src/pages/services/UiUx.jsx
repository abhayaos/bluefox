import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import { FaThumbsUp, FaMedal, FaMousePointer } from 'react-icons/fa'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import webdevImg from '../../assets/home/Website_developlent.svg'
import appdevImg from '../../assets/home/App_Development.svg'
import systemdevImg from '../../assets/home/Programmer-amico.svg'
import seoImg from '../../assets/home/SEO_analytics_team-amico.svg'
import smmImg from '../../assets/home/Mobile_Marketing-pana.svg'
import graphicImg from '../../assets/home/Website_Creator-pana.svg'
import contentImg from '../../assets/home/Content Writing.svg'
import uiuxHero from '../../assets/services/UI-UX differences-rafiki.svg'

const service = services.find((s) => s.slug === 'ui-ux')

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
    title: 'E-Commerce',
    desc: 'Explore how our UI/UX design expertise optimizes user journeys, boosts conversions, and enhances brand loyalty in the dynamic e-commerce sector.',
  },
  {
    title: 'E-Learning',
    desc: 'Discover how our tailored UI/UX design solutions empower seamless navigation, engaging content delivery, and optimal learning experiences in the evolving e-learning landscape.',
  },
  {
    title: 'Travel and Trekking',
    desc: 'Learn how our specialized UI/UX design enhances user engagement, simplifies booking processes, and ensures memorable journeys in the travel and trekking industries.',
  },
  {
    title: 'Logistics',
    desc: 'Explore how our UI/UX design solutions improve fleet management, streamline tracking processes, and enhance user interfaces for seamless logistics operations.',
  },
]

const otherServices = [
  { title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your need.', link: '/services/website-development', img: webdevImg },
  { title: 'App Development', desc: 'Innovative and user-friendly mobile application designed to engage users.', link: '/services/app-development', img: appdevImg },
  { title: 'System/Software Development', desc: 'System/software developed according to your business needs.', link: '/services/system-software-development', img: systemdevImg },
  { title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', link: '/services/seo', img: seoImg },
  { title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', link: '/services/social-media-marketing', img: smmImg },
  { title: 'Graphic Design', desc: 'Designs that Speak Your Brand\u2019s Narrative and Connect with Your Audience', link: '/services/graphic-design', img: graphicImg },
  { title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', link: '/services/content-writing', img: contentImg },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

const faqs = [
  {
    q: 'What is UI/UX design, and why is it important?',
    body: [
      {
        t: 'p',
        text: 'UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design shapes how users feel and move through your product. Great UI/UX makes your website or app intuitive, accessible, and enjoyable \u2014 guiding users smoothly toward their goals and keeping them engaged.',
      },
    ],
  },
  {
    q: 'What does the UI/UX design process involve?',
    body: [
      {
        t: 'p',
        text: 'Our process covers research, wire-framing, prototyping, visual design, usability testing, and iteration \u2014 ensuring a responsive and consistent experience across every device.',
      },
    ],
  },
  {
    q: 'How does responsive design factor into UI/UX?',
    body: [
      {
        t: 'p',
        text: 'Responsive design ensures your interface adapts seamlessly to any screen size, keeping layouts, navigation, and interactions consistent and usable on mobile, tablet, and desktop.',
      },
    ],
  },
  {
    q: 'How can UI/UX design contribute to brand consistency?',
    body: [
      {
        t: 'p',
        text: 'We align colors, typography, components, and tone with your brand identity, so every screen reinforces a cohesive, recognizable experience across all touchpoints.',
      },
    ],
  },
  {
    q: 'How can UI/UX design improve user engagement?',
    body: [
      {
        t: 'p',
        text: 'By removing friction and creating clear, delightful interactions, thoughtful UI/UX keeps users exploring longer, reduces frustration, and encourages repeat visits.',
      },
    ],
  },
  {
    q: 'How does UI/UX design impact conversion rates and business goals?',
    body: [
      {
        t: 'p',
        text: 'Intuitive layouts, clear calls-to-action, and smooth user journeys directly reduce drop-off and increase conversions, turning visitors into customers and supporting your growth goals.',
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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
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

    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16">
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
            <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-black transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20">
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

    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
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

export default function UiUx() {
  return (
    <ServiceLayout service={service} showDetails={false} features={features} heroImage={uiuxHero} after={sections} />
  )
}