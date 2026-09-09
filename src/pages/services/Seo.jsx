import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUsers, FaCalendarAlt, FaProjectDiagram, FaThumbsUp, FaMedal, FaMousePointer, FaCheck } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import seoHero from '../../assets/services/SEO-pana.svg'

const service = services.find((s) => s.slug === 'seo')

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
    desc: 'Elevate your online presence with our unparalleled SEO expertise.',
  },
  {
    icon: FaMedal,
    title: 'Best Quality',
    desc: 'At Blue Fox, you can find excellence and innovative SEO solutions.',
  },
  {
    icon: FaMousePointer,
    title: 'Interactive Interface',
    desc: 'Immerse your audience with an engaging interface that keeps them exploring.',
  },
]

const industries = [
  {
    title: 'Travel and Trekking',
    desc: 'Boost your travel and trekking business with targeted SEO strategies that increase website visibility, attract adventure seekers, and convert traffic into bookings.',
  },
  {
    title: 'E-Commerce',
    desc: 'Drive sales and increase online visibility with our e-commerce SEO solutions, optimizing product listings, enhancing site architecture, and attracting targeted traffic.',
  },
  {
    title: 'Hospitals and Healthcare',
    desc: 'Optimize your healthcare website for better visibility, attract more patients, and improve local search rankings with our tailored SEO strategies and content solutions.',
  },
  {
    title: 'Educational and Others',
    desc: 'Increase enrollment and engagement by optimizing your educational platform for search engines, improving content visibility, and reaching prospective students effectively.',
  },
]

const planSections = [
  'Initial Website Analysis',
  'On Page Setup',
  'Technical SEO',
  'Off Page SEO',
  'Local SEO',
  'Monthly Report',
]

const pricingPlans = [
  {
    name: 'Standard',
    price: 'Rs 34,000',
    period: '/ month',
    subtitle: 'Preferred For Small Businesses',
    button: 'Select Plan',
    features: {
      'Initial Website Analysis': [
        'Upto 10 Keyword Ranking',
        'Site Audit',
        'Competitor Analysis',
        'Google Analytics Setup',
        'Google Search Console Setup',
        'Robots.Txt Creation',
        'Sitemap Creation',
      ],
      'On Page Setup': [
        'Keyword Research',
        'Few Major Pages Meta And Heading Tag Optimization',
        'URL Optimization',
        'Image Optimization',
        '2 SEO Optimized Blog Articles',
        'Few Existing Content Optimization',
      ],
      'Technical SEO': [
        'Canonical URL Addition',
        'Custom 404 Page Setup',
        'OG Tags',
        'Page Redirection',
        'Sitemap',
        'Robots.Txt',
        'Browser Compatibility Check',
        'Page Speed Optimization',
      ],
      'Off Page SEO': ['Quora Posting', 'Reddit Posting'],
      'Local SEO': ['GMB Setup & Optimization', 'Google Map Creation'],
      'Monthly Report': [
        'Work Done Report',
        'On Page Report',
        'Traffic By Country',
        'Traffic Comparison',
        'Top 10 Performing Pages',
        'Top 10 Keywords',
        'Clicks, Impression, Position',
      ],
    },
    note: 'No Dedicated Project Manager',
  },
  {
    name: 'Professional',
    price: 'Rs 56,000',
    period: '/ month',
    subtitle: 'Preferred For Mid Size Businesses',
    button: 'Select Plan',
    features: {
      'Initial Website Analysis': [
        'Upto 20 Keyword Ranking',
        'Site Audit',
        'Competitor Analysis',
        'Google Analytics Setup',
        'Google Search Console Setup',
        'Robots.Txt Creation',
        'Sitemap Creation',
      ],
      'On Page Setup': [
        'Keyword Research',
        'Keyword Mapping',
        'Major Pages Meta And Heading Tag Optimization',
        'URL Optimization',
        'Image Optimization',
        '4 SEO Optimized Blog Articles',
        'Existing Major Page Content Optimization',
      ],
      'Technical SEO': [
        'Canonical URL Addition',
        'Custom 404 Page Setup',
        'OG Tags',
        'Page Redirection',
        'Sitemap',
        'Robots.Txt',
        'Browser Compatibility Check',
        'Page Speed Optimization',
        'Broken Link Fixing',
        'Site Architecture',
        'Mobile Friendliness',
        'Solve Keyword Cannibalization',
        'Hreflang Tags',
        'Competitor Backlink Research',
        'Bing Webmaster Optimization',
      ],
      'Off Page SEO': [
        'Link Building',
        'Guest Blogging',
        'Few Directory Submission',
        'Few Weekly Post On Quora',
        'Few Weekly Post On Reddit',
        'Schema Implementation',
        'Conversion Tracking',
        'Few Infographic Creation And Sharing',
      ],
      'Local SEO': ['GMB Setup & Optimization', 'GMB Posting', 'Google Map Creation', 'Few Local Citation'],
      'Monthly Report': [
        'Work Done Report',
        'On Page Report',
        'Backlink Report',
        'Traffic By Country',
        'Traffic Comparison',
        'Top 10 Performing Pages',
        'Top 10 Keywords',
        'Clicks, Impression, Position',
      ],
    },
    note: 'Dedicated Project Manager',
  },
  {
    name: 'Premium',
    price: 'Rs 88,000',
    period: '/ month',
    subtitle: 'Preferred For Large Businesses',
    button: 'Select Plan',
    features: {
      'Initial Website Analysis': [
        'Upto 40 Keyword Ranking',
        'Site Audit',
        'Competitor Analysis',
        'Google Analytics Setup',
        'Google Search Console Setup',
        'Robots.Txt Creation',
        'Sitemap Creation',
      ],
      'On Page Setup': [
        'Keyword Research',
        'Keyword Mapping',
        'Major Pages Meta And Heading Tag Optimization',
        'URL Optimization',
        'Image Optimization',
        '6 SEO Optimized Blog Articles',
        'Existing Major Page Content Optimization',
      ],
      'Technical SEO': [
        'Canonical URL Addition',
        'Custom 404 Page Setup',
        'OG Tags',
        'Page Redirection',
        'Sitemap',
        'Robots.Txt',
        'Browser Compatibility Check',
        'Page Speed Optimization',
        'Broken Link Fixing',
        'Site Architecture',
        'Mobile Friendliness',
        'Solve Keyword Cannibalization',
        'Hreflang Tags',
        'Competitor Backlink Research',
        'Bing Webmaster Optimization',
      ],
      'Off Page SEO': [
        'Link Building',
        'Guest Blogging',
        'Few Directory Submission',
        'Active On Quora',
        'Active On Reddit',
        'Schema Implementation',
        'Conversion Tracking',
        'Monthly 1 Infographic Creation And Sharing',
      ],
      'Local SEO': ['GMB Setup & Optimization', 'GMB Posting', 'Google Map Creation', 'Local Citation'],
      'Monthly Report': [
        'Work Done Report',
        'On Page Report',
        'Backlink Report',
        'Traffic By Country',
        'Traffic Comparison',
        'Top 10 Performing Pages',
        'Top 10 Keywords',
        'Clicks, Impression, Position',
      ],
    },
    note: 'Dedicated Project Manager',
  },
  {
    name: 'Premium Plus',
    price: 'Contact Sales',
    period: '',
    subtitle: 'Preferred For Highly Competitive Businesses',
    button: 'Quick Enquiry',
    features: {
      'Initial Website Analysis': [
        'Upto 60 Keyword Ranking',
        'Site Audit',
        'Competitor Analysis',
        'Google Analytics Setup',
        'Google Search Console Setup',
        'Robots.Txt Creation',
        'Sitemap Creation',
      ],
      'On Page Setup': [
        'Keyword Research',
        'Keyword Mapping',
        'Major Pages Meta And Heading Tag Optimization',
        'URL Optimization',
        'Image Optimization',
        '8 SEO Optimized Blog Articles',
        'Existing Major Page Content Optimization',
      ],
      'Technical SEO': [
        'Canonical URL Addition',
        'Custom 404 Page Setup',
        'OG Tags',
        'Page Redirection',
        'Sitemap',
        'Robots.Txt',
        'Browser Compatibility Check',
        'Page Speed Optimization',
        'Broken Link Fixing',
        'Site Architecture',
        'Mobile Friendliness',
        'Solve Keyword Cannibalization',
        'Hreflang Tags',
        'Competitor Backlink Research',
        'Bing And Other Webmaster Optimization',
      ],
      'Off Page SEO': [
        'Link Building',
        'Guest Blogging',
        'Few Directory Submission',
        'Active On Quora',
        'Active On Reddit',
        'Schema Implementation',
        'Conversion Tracking',
        'Monthly 1 Infographic Creation And Sharing',
      ],
      'Local SEO': ['GMB Setup & Optimization', 'GMB Posting', 'Google Map Creation', 'Local Citation'],
      'Monthly Report': [
        'Work Done Report',
        'On Page Report',
        'Backlink Report',
        'Traffic By Country',
        'Traffic Comparison',
        'Top 10 Performing Pages',
        'Top 10 Keywords',
        'Clicks, Impression, Position',
      ],
    },
    note: 'Dedicated Project Manager',
  },
]

const COLLAPSED_PER_SECTION = 2

function SeoPricingGrid() {
  const [expanded, setExpanded] = useState({})

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {pricingPlans.map((p) => {
          const showAll = expanded[p.name]
          return (
            <div
              key={p.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="rounded-t-3xl bg-gradient-to-br from-primary to-primary-700 p-6 text-center text-white">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-primary-100 text-xs mt-1">{p.subtitle}</p>
                <div className="mt-3">
                  <span className="text-4xl font-bold">{p.price}</span>
                  {p.period && <span className="text-primary-100 text-sm"> {p.period}</span>}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {planSections.map((section) => {
                  const items = showAll
                    ? p.features[section]
                    : p.features[section].slice(0, COLLAPSED_PER_SECTION)
                  return (
                    <div key={section} className="mb-5">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#0b7be5] mb-2">
                        {section}
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {items.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-[13px] text-slate-600 leading-snug"
                          >
                            <FaCheck className="text-[#0b7be5] mt-0.5 shrink-0" size={11} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}

                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [p.name]: !prev[p.name] }))}
                  className="flex items-center gap-1 text-[#0b7be5] text-xs font-semibold mt-auto mb-4 hover:underline"
                >
                  <span>{showAll ? 'See Less' : 'Read More'}</span>
                  <FiChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} size={13} />
                </button>

                <p className="text-xs text-slate-500 mb-4">{p.note}</p>
                <Link
                  to="/contact"
                  className="block text-center rounded-full py-3 bg-[#0b7be5] text-white text-sm font-semibold transition-colors hover:bg-primary-700"
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
          Contract: Minimum 6 months.
        </p>
      </div>
    </>
  )
}

const roadmap = [
  { number: '01', title: 'Requirement Gathering', desc: 'We tailor SEO strategies to client goals, aligning with their aspirations for enhanced online visibility.' },
  { number: '02', title: 'Industry Analysis', desc: 'We analyze market trends and competitors to shape SEO strategies and capitalize on industry opportunities.' },
  { number: '03', title: 'Website Audit', desc: 'We audit website for technical, content, & user experience improvements, optimizing performance and visibility.' },
  { number: '04', title: 'Planning of SEO Strategies', desc: 'Using website audit findings, we craft custom SEO strategies to optimize your online presence effectively.' },
  { number: '05', title: 'Executing SEO strategies', desc: 'We execute SEO tactics like on-page optimization, content creation, and link building to boost rankings.' },
  { number: '06', title: 'Analysis and Monitoring', desc: 'We monitor traffic, rankings, and conversions to assess strategy effectiveness and refine for improvement.' },
  { number: '07', title: 'Progress Review', desc: 'We regularly review SEO progress, analyzing data to adjust strategies for optimal campaign performance.' },
  { number: '08', title: 'Redefine SEO Strategy', desc: 'We refine SEO tactics based on performance insights to align with your goals for steady online growth.' },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

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
        Our Search Engine Optimization (SEO) pricing plan
      </h2>

      <SeoPricingGrid />
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
          Our SEO Roadmap
        </h2>
        <p className="text-slate-600 text-lg text-center mb-12">
          A clear and proven path from audit to growth
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

    {/* Partners */}
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
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
  </>
)

export default function Seo() {
  return <ServiceLayout service={service} showDetails={false} heroImage={seoHero} after={sections} />
}