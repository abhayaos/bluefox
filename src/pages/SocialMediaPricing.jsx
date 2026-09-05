import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaStar } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: 'Rs 15,000',
    period: '/ mon',
    subtitle: 'For marketing newbies and small house teams',
    button: 'Select Plan',
    bestValue: false,
    seeMore: false,
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
    seeMore: false,
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

export default function SocialMediaPricing() {
  const [expanded, setExpanded] = useState({})

  return (
    <main className="flex-1 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Subscription Plan</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Social Media Packages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right social media package to grow your brand and engage your audience.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-start">
          {plans.map((p) => {
            const showAll = expanded[p.name] || !p.seeMore
            const shown = showAll ? p.features : p.features.slice(0, VISIBLE)
            return (
              <div
                key={p.name}
                className="flex flex-col w-full sm:w-[48%] lg:w-[23%] border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                {p.bestValue && (
                  <div className="bg-primary-100 text-primary-900 text-xs font-semibold text-center py-1.5 flex items-center justify-center gap-1">
                    <FaStar size={10} className="fill-primary" />
                    Best Value
                  </div>
                )}
                <div
                  className={`text-white p-6 text-center ${
                    p.bestValue ? 'bg-primary' : 'bg-secondary'
                  }`}
                >
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-gray-300 text-xs mt-1">{p.subtitle}</p>
                  <div className="mt-3">
                    <span className="text-3xl font-bold">{p.price}</span>
                    <span className="text-gray-300 text-sm"> {p.period}</span>
                  </div>
                </div>

                <div className="p-5">
                  <ul className="flex flex-col gap-1.5">
                    {shown.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 text-xs text-gray-600 leading-snug">
                        <FaCheck className="text-primary mt-0.5 shrink-0" size={10} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {p.seeMore && (
                    <button
                      onClick={() => setExpanded((prev) => ({ ...prev, [p.name]: !prev[p.name] }))}
                      className="flex items-center gap-1 text-primary text-xs font-medium mt-4 hover:text-primary-700"
                    >
                      <span>{showAll ? 'See Less' : 'See More'}</span>
                      <FiChevronDown
                        className={`transition-transform ${showAll ? 'rotate-180' : ''}`}
                        size={12}
                      />
                    </button>
                  )}

                  <Link
                    to="/contact"
                    className={`block text-center py-2.5 rounded-lg font-medium text-xs mt-5 transition-colors ${
                      p.bestValue
                        ? 'bg-primary text-white hover:bg-primary-700'
                        : 'bg-primary text-white hover:bg-primary-700'
                    }`}
                  >
                    {p.button}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            *Note: All of the above packages are exclusive of VAT.
            <br />
            Contract: Minimum 3 months.
          </p>
        </div>
      </div>
    </main>
  )
}