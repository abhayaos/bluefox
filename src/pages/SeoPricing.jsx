import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const sections = [
  'Initial Website Analysis',
  'On Page Setup',
  'Technical SEO',
  'Off Page SEO',
  'Local SEO',
  'Monthly Report',
]

const plans = [
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
      'Local SEO': [
        'GMB Setup & Optimization',
        'GMB Posting',
        'Google Map Creation',
        'Few Local Citation',
      ],
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
      'Local SEO': [
        'GMB Setup & Optimization',
        'GMB Posting',
        'Google Map Creation',
        'Local Citation',
      ],
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
      'Local SEO': [
        'GMB Setup & Optimization',
        'GMB Posting',
        'Google Map Creation',
        'Local Citation',
      ],
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

export default function SeoPricing() {
  const [expanded, setExpanded] = useState({})

  return (
    <main className="flex-1 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Subscription Plan</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          SEO Pricing
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Choose the right SEO package to boost your search rankings and drive organic traffic to your website.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => {
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
                  {sections.map((section) => {
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
                    to={`/contact?package=${encodeURIComponent(`SEO ${p.name}`)}`}
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
      </div>
    </main>
  )
}