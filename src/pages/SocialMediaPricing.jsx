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

export default function SocialMediaPricing() {
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
          Social Media Packages
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Choose the right social media package to grow your brand and engage your audience.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => {
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
                    to={`/contact?package=${encodeURIComponent(`SMM ${p.name}`)}`}
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
      </div>
    </main>
  )
}