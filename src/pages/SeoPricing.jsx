import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

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

export default function SeoPricing() {
  return (
    <main className="flex-1 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Subscription Plan</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SEO Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right SEO package to boost your search rankings and drive organic traffic to your website.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className="flex flex-col w-full sm:w-[48%] lg:w-[23%] border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="bg-secondary text-white p-6 text-center">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-300 text-xs mt-1">{p.subtitle}</p>
                <div className="mt-3">
                  <span className="text-3xl font-bold">{p.price}</span>
                  {p.period && <span className="text-gray-300 text-sm"> {p.period}</span>}
                </div>
              </div>

              <div className="p-5">
                {sections.map((section) => (
                  <div key={section} className="mb-5">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {section}
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {p.features[section].map((feature) => (
                        <li key={feature} className="flex items-start gap-1.5 text-xs text-gray-600 leading-snug">
                          <FaCheck className="text-primary mt-0.5 shrink-0" size={10} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <p className="text-xs text-gray-500 mb-5">{p.note}</p>
                <Link
                  to="/contact"
                  className="block text-center py-2.5 bg-primary text-white rounded-lg font-medium text-xs hover:bg-primary-700 transition-colors"
                >
                  {p.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            *Note: All of the above packages are exclusive of VAT.
            <br />
            Contract: Minimum 6 months.
          </p>
        </div>
      </div>
    </main>
  )
}