import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { FaUsers, FaCalendarAlt, FaProjectDiagram, FaThumbsUp, FaMedal, FaMousePointer, FaCheck, FaStar, FaAward, FaLightbulb, FaChartLine, FaHeadset } from 'react-icons/fa'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import socialMediaHero from '../../assets/services/Social media-bro.svg'

const service = services.find((s) => s.slug === 'social-media-marketing')

const stats = [
  { icon: FaUsers, value: '80+', label: 'Team Member & Growing' },
  { icon: FaCalendarAlt, value: '6', label: 'Long Years Of Experience' },
  { icon: FaProjectDiagram, value: '400+', label: 'Successful Projects' },
  { icon: FaThumbsUp, value: '300+', label: 'Happy Clients' },
]

const features = [
  {
    icon: FaThumbsUp,
    title: 'Satisfaction Guarantee',
    desc: 'Elevate your online presence with our unparalleled marketing expertise.',
  },
  {
    icon: FaMedal,
    title: 'Best Quality',
    desc: 'At Blue Fox, you can find excellence and innovative marketing solutions.',
  },
  {
    icon: FaMousePointer,
    title: 'Interactive Interface',
    desc: 'Immerse your audience with an engaging interface that keeps them exploring.',
  },
]

const industries = [
  {
    title: 'Healthcare And Hospitals',
    desc: 'In healthcare, trust is crucial. We craft compelling social media content that positions your organization as a leader, building patient trust and attracting new clients.',
  },
  {
    title: 'Educational Industries',
    desc: 'Elevate your educational institution with our tailored social media strategies. We attract students, engage alumni, and showcase your unique strengths online.',
  },
  {
    title: 'Share Brokers',
    desc: 'In share brokerage, credibility is crucial. We create compelling social media content to establish your brokerage as a trusted leader, attracting new investors effectively.',
  },
  {
    title: 'Travels And Others',
    desc: 'Specializing in crafting captivating social media campaigns that inspire wanderlust and drive bookings. Let\u2019s elevate your travel brand\u2019s online presence together!',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Rs 15,000',
    period: '/ mon',
    subtitle: 'For marketing newbies and small house teams',
    button: 'Select Plan',
    bestValue: false,
    features: [
      'Platform ( Facebook, Instagram)',
      'Copywriting',
      'Post Scheduling',
      '5 Graphical banners',
      '1 free festive post',
    ],
  },
  {
    name: 'Basic',
    price: 'Rs 28,000',
    period: '/ mon',
    subtitle: 'For new but established companies seeking to grow',
    button: 'Select Plan',
    bestValue: true,
    features: [
      'Platform ( Facebook, Instagram)',
      'Page Setup and Optimization',
      'Planning and Strategy',
      'Profile/Cover image creation',
      'Monthly Content Calendar',
      '10 graphical banners',
      '2 GIF/Reels',
      '1 Free Festive Post',
      'Ad budget $20 (included)',
      'Scheduling the post',
      'Monitor and Analysis',
      'Monthly Performance Report',
      'Ads Management',
    ],
  },
  {
    name: 'Standard',
    price: 'Rs 38,000',
    period: '/ mon',
    subtitle: 'For those looking to grow their business/brand',
    button: 'Select Plan',
    bestValue: false,
    seeMore: true,
    features: [
      'Platform ( Facebook, Instagram, as per your need)',
      'Page Setup and Optimization',
      'Competitor Analysis',
      'Planning and Strategy',
      'Profile/Cover image creation',
      'Keyword-based content',
      'Monthly Content Calendar',
      '15 graphical banners',
      '4 GIF/Reels',
      'Voice-over for Reels',
      '2 Free Festive Post',
      'Ad budget $30 (included)',
    ],
  },
  {
    name: 'Premium',
    price: 'Rs 55,000',
    period: '/ mon',
    subtitle: 'For those looking to grow their business/brand',
    button: 'Select Plan',
    bestValue: false,
    seeMore: true,
    features: [
      'Platform ( Facebook, Instagram, Linkedin, as per your need)',
      'Page Setup and Optimization',
      'Competitor Analysis',
      'Planning and Strategy',
      'Profile/Cover image creation',
      'Keyword-based content',
      'Monthly Content Calendar',
      '20 graphical banners',
      '6 GIF/Reels',
      'Voice-over for Reels',
      '3 Free Festive Post',
      'Ad budget $50 (included)',
    ],
  },
]

const VISIBLE = 6

function SmmPricingGrid() {
  const [expanded, setExpanded] = useState({})

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((p) => {
          const showAll = expanded[p.name] || !p.seeMore
          const shown = showAll ? p.features : p.features.slice(0, VISIBLE)
          return (
            <div
              key={p.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              {p.bestValue && (
                <div className="flex items-center justify-center gap-1 rounded-t-3xl bg-[#a9d6ff] text-primary-900 text-xs font-semibold py-1.5">
                  <FaStar size={10} className="fill-primary" />
                  Best Value
                </div>
              )}
              <div
                className={`text-white p-6 text-center ${
                  p.bestValue
                    ? 'bg-gradient-to-br from-primary to-primary-700'
                    : 'bg-gradient-to-br from-secondary to-[#25415f]'
                }`}
              >
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-primary-100 text-xs mt-1">{p.subtitle}</p>
                <div className="mt-3">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-primary-100 text-sm"> {p.period}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <ul className="flex flex-col gap-1.5">
                  {shown.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-slate-600 leading-snug">
                      <FaCheck className="text-[#0b7be5] mt-0.5 shrink-0" size={11} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {p.seeMore && (
                  <button
                    onClick={() => setExpanded((prev) => ({ ...prev, [p.name]: !prev[p.name] }))}
                    className="flex items-center gap-1 text-[#0b7be5] text-xs font-semibold mt-4 mb-4 hover:underline"
                  >
                    <span>{showAll ? 'See Less' : 'Read More'}</span>
                    <FiChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} size={13} />
                  </button>
                )}

                <Link
                  to="/contact"
                  className="block text-center rounded-full py-3 bg-[#0b7be5] text-white text-sm font-semibold transition-colors mt-auto hover:bg-primary-700"
                >
                  {p.button}
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          *Note: All of the above packages are exclusive of VAT.
          <br />
          Contract: Minimum 3 months.
        </p>
      </div>
    </>
  )
}

const roadmap = [
  { number: '01', title: 'Initial Consultation', desc: 'Understand your specific goals, values, and unique brand identity through our first meeting.' },
  { number: '02', title: 'Audience Analysis', desc: 'Research & precisely define your target audience to create content tailored to their preferences & behaviors.' },
  { number: '03', title: 'Platform Selection', desc: 'Identify and select the most effective social media platforms that best suit your business.' },
  { number: '04', title: 'Content Calendar', desc: 'Develop a structured monthly content calendar to ensure consistent and organized posting.' },
  { number: '05', title: 'Creative Design', desc: 'Create compelling graphics and visuals that resonate with your brand and audience.' },
  { number: '06', title: 'Consistent Posting', desc: 'Maintain a regular posting schedule to keep your audience engaged and informed.' },
  { number: '07', title: 'Paid Advertising', desc: 'Execute targeted ad campaigns to expand your reach and achieve defined marketing objectives.' },
  { number: '08', title: 'Analysis and Reporting', desc: 'Analyze campaign results, generate insightful reports, and use data for optimizing future strategies.' },
]

const portfolio = [
  { name: 'AIMS Education', initials: 'AE' },
  { name: 'ACCA at Seekshya', initials: 'AS' },
  { name: 'Secured Securities', initials: 'SS' },
]

const whyChooseUs = [
  {
    icon: FaAward,
    title: 'Strategic Approach',
    desc: 'We strategize social media marketing plans around your goals and target audience for impactful results.',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Content',
    desc: 'We excel in creating compelling, resonant content that sets you apart online.',
  },
  {
    icon: FaChartLine,
    title: 'Data-Driven Insights',
    desc: 'We use advanced analytics for actionable insights, optimizing your social strategy for maximum ROI.',
  },
  {
    icon: FaHeadset,
    title: 'Exceptional Customer Service',
    desc: 'As a top SMM agency, we prioritize customer satisfaction with dedicated support for digital success.',
  },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

const faqs = [
  {
    q: 'What are your SMM packages?',
    body: [
      {
        t: 'p',
        text: 'We offer Starter, Basic, Standard, and Premium SMM packages. Each package includes platform management, content creation, graphical banners, scheduling, and analytics \u2014 with higher tiers adding reels, paid advertising, and deeper reporting.',
      },
    ],
  },
  {
    q: 'Which industries do you provide SMM services for?',
    body: [
      {
        t: 'p',
        text: 'We work across healthcare and hospitals, educational industries, share brokers, travel and trekking, and more \u2014 adapting our strategies to fit any sector.',
      },
    ],
  },
  {
    q: 'Which social media platforms do you work with?',
    body: [
      {
        t: 'p',
        text: 'We manage all major platforms including Facebook, LinkedIn, and Instagram, with paid advertising and advanced analytics to maximize your return on investment.',
      },
    ],
  },
  {
    q: 'How do you create a social media marketing plan and strategy?',
    body: [
      {
        t: 'p',
        text: 'Our roadmap moves through Initial Consultation, Audience Analysis, Platform Selection, Content Calendar, Creative Design, Consistent Posting, Paid Advertising, and Analysis & Reporting.',
      },
    ],
  },
  {
    q: 'How do you determine the most suitable social media platforms for my business?',
    body: [
      {
        t: 'p',
        text: 'Based on your audience analysis and business goals, we identify the platforms where your customers are most active and where your content will perform best.',
      },
    ],
  },
  {
    q: 'Do you provide paid advertising on social media?',
    body: [
      {
        t: 'p',
        text: 'Yes. Our packages include ad management and ad budget options, and higher tiers run strategic paid campaigns to expand reach and hit your marketing objectives.',
      },
    ],
  },
  {
    q: 'Is Social Media Marketing and Digital Marketing the same?',
    body: [
      {
        t: 'p',
        text: 'No. Social media marketing is a part of digital marketing. Digital marketing also includes SEO, content writing, pay-per-click, and graphic design \u2014 a combination we can unify into one cohesive strategy.',
      },
    ],
  },
  {
    q: 'Why should I choose Social Media Marketing for my business?',
    body: [
      {
        t: 'p',
        text: 'SMM builds a strong online presence, engages your targeted audience, boosts brand awareness, and drives leads \u2014 all backed by data-driven insights and ongoing optimization.',
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
    {/* Stats bar */}
    <section className="max-w-6xl mx-auto px-6 pt-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-primary/10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`group flex flex-col items-center gap-3 p-6 md:p-7 text-center border-slate-200 ${
              i === 1 || i === 3 ? 'border-l' : ''
            } ${i >= 2 ? 'border-t lg:border-t-0 lg:border-l' : ''}`}
          >
            <span className="w-11 h-11 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <stat.icon size={18} />
            </span>
            <p className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-primary-200 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Feature boxes */}
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
              <h3 className="font-heading text-xl font-semibold text-slate-700">{feature.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Industries */}
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
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

    {/* Pricing */}
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Pricing Plan</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Our Social Media Marketing (SMM) pricing plan
      </h2>

      <SmmPricingGrid />
    </section>

    {/* Roadmap */}
    <section className="bg-[#a9d6ff]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Roadmap</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
          Our SMM Roadmap
        </h2>
        <p className="text-slate-600 text-lg text-center mb-12">
          A clear and proven path from consultation to growth
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {roadmap.slice(0, 4).map((step) => (
              <div key={step.number} className="flex items-start gap-5 rounded-2xl bg-white p-7">
                <span className="font-heading text-4xl font-bold leading-none text-primary shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {roadmap.slice(4).map((step) => (
              <div key={step.number} className="flex items-start gap-5 rounded-2xl bg-white p-7">
                <span className="font-heading text-4xl font-bold leading-none text-primary shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Portfolio */}
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Portfolio</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Some of our Recent Social Media Marketing (SMM)
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary-50 to-[#a9d6ff]/40">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-700 font-heading text-2xl font-bold text-white shadow-lg">
                {project.initials}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#0b7be5]">Recent SMM Project</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why choose us */}
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
        We understand the importance of effective social media marketing services in today&apos;s
        digital landscape. With our expertise and dedication, we offer professional social media
        marketing services tailored to elevate your brand&apos;s online presence.
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

    {/* Partners */}
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

    {/* FAQ */}
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
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

export default function SocialMediaMarketing() {
  return <ServiceLayout service={service} showDetails={false} heroImage={socialMediaHero} after={sections} />
}