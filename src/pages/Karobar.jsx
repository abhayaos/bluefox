import { useState } from 'react'
import {
  FaExchangeAlt,
  FaUsers,
  FaBoxes,
  FaChartLine,
  FaLaptop,
  FaUserCog,
  FaImage,
  FaBell,
  FaWhatsapp,
  FaCheck,
  FaTag,
  FaCopy,
} from 'react-icons/fa'
import karobarHero from '../assets/hero-karobar.jpg'

const highlights = [
  {
    stat: '3 Lakhs+',
    label: 'Businesses Trust Karobar',
  },
  {
    stat: '20+',
    label: 'Insightful Business Reports',
  },
  {
    stat: '100%',
    label: 'Works Online & Offline',
  },
  {
    stat: '24/7',
    label: 'Manage from Anywhere',
  },
]

const features = [
  {
    icon: FaExchangeAlt,
    title: 'Record Transactions',
    desc: 'Add sales, purchases & expenses easily and keep a clear snapshot of your cash flow.',
  },
  {
    icon: FaUsers,
    title: 'Manage Parties',
    desc: 'Manage customers & suppliers ledger with well-organised accounts receivable and payable.',
  },
  {
    icon: FaBoxes,
    title: 'Manage Inventory',
    desc: 'Keep track of products in real time so you never run out of stock or overstock items.',
  },
  {
    icon: FaChartLine,
    title: 'Business Insights',
    desc: 'View business performance reports to spot trends and make smarter decisions.',
  },
  {
    icon: FaLaptop,
    title: 'Desktop Web Version',
    desc: 'Manage your business from your computer with a full-featured web version.',
  },
  {
    icon: FaUserCog,
    title: 'Multi-Staff',
    desc: 'Add users & manage their access so every team member has the right permissions.',
  },
  {
    icon: FaImage,
    title: 'Upload Bill Images',
    desc: 'Organize paper bills & receipts digitally, ready whenever you need them.',
  },
  {
    icon: FaBell,
    title: 'Send Payment Reminders',
    desc: 'Send automated reminders via WhatsApp & SMS so you stop chasing payments.',
  },
]

const previews = [
  { title: 'Sales & Expenses', desc: 'Record every transaction in seconds.' },
  { title: 'Inventory in Real Time', desc: 'Know exactly what is on the shelf.' },
  { title: 'Reports & Insights', desc: 'A clear view of business performance.' },
]
export default function Karobar() {
  const [couponCopied, setCouponCopied] = useState(false)

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Our Product / Karobar
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-5 mb-4">
                Manage Your Business Anytime, Anywhere
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
                Your business simple, smart, and stress-free.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
                Karobar is Nepal&apos;s most trusted digital khata &amp; business management app.
                Easily track sales, manage expenses, maintain ledgers, control inventory &amp; more —
                so you can focus on growing your business.
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src={karobarHero}
                alt="Karobar business management app"
                className="w-64 md:w-72 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
            >
              <p className="font-heading text-4xl font-bold text-[#0b7be5]">{item.stat}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">All in One Business App</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Everything your business needs, all in one place
        </h2>
        <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mb-12">
          Manage your finances, inventory, and clients effortlessly with Karobar.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={24} />
                </span>
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App preview / screenshots */}
      <section className="bg-[#a9d6ff]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
          <div className="flex items-center justify-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">App Preview</p>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            A look at the Karobar experience
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {previews.map((preview) => (
              <div key={preview.title} className="flex flex-col items-center">
                <div className="relative w-64 rounded-[2.2rem] border-[10px] border-slate-900 bg-white p-3 shadow-2xl">
                  <div className="absolute top-1 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-900" />
                  <div className="flex h-96 w-full flex-col items-center justify-center rounded-[1.6rem] bg-gradient-to-br from-primary via-[#52a1ec] to-primary-200 text-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mb-4">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.6" />
                      <path d="M3 9h18" stroke="white" strokeWidth="1.6" />
                      <circle cx="7" cy="12.5" r="1.2" fill="white" />
                      <circle cx="7" cy="16" r="1.2" fill="white" />
                      <rect x="10" y="12" width="8" height="1.6" rx="0.8" fill="white" opacity="0.8" />
                      <rect x="10" y="15.5" width="5" height="1.6" rx="0.8" fill="white" opacity="0.8" />
                    </svg>
                    <p className="px-6 font-heading text-sm font-bold text-white">
                      {preview.title}
                    </p>
                    <p className="mt-1 px-6 text-xs text-white/90">{preview.desc}</p>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-slate-700">
                  {preview.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Special Offer</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Claim Your Karobar Coupon
        </h2>

        <div className="relative mx-auto flex max-w-3xl flex-col overflow-hidden rounded-3xl shadow-2xl shadow-primary/20 sm:flex-row">
          <span className="absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-white sm:block" />
          <span className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-white sm:block" />

          <div className="relative flex flex-1 items-center justify-center gap-4 bg-gradient-to-br from-[#0b7be5] to-[#0066ff] p-8 text-white sm:p-10">
            <span
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                backgroundSize: '18px 18px',
              }}
            />
            <div className="relative text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase">
                <FaTag size={12} />
                Limited Time Offer
              </span>
              <p className="mt-4 font-heading text-4xl font-bold tracking-widest sm:text-5xl">
                KAROBAR10
              </p>
              <p className="mt-2 text-sm text-white/90">
                Get 10% OFF on your Karobar subscription
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-4 border-t-2 border-dashed border-primary-100 bg-white p-8 text-center sm:border-l-2 sm:border-t-0">
            <p className="max-w-xs text-sm text-slate-600">
              Enter this code while subscribing to Karobar Pro and unlock exclusive benefits.
            </p>
            <button
              onClick={() => {
                navigator.clipboard?.writeText('KAROBAR10').catch(() => {})
                setCouponCopied(true)
                setTimeout(() => setCouponCopied(false), 2000)
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#0b7be5] px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
            >
              <FaCopy size={14} />
              {couponCopied ? 'Copied!' : 'Copy Code'}
            </button>
            <p className="text-xs text-slate-400">One code per account · Limited time applicable</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b7be5] px-8 py-16 text-center shadow-2xl shadow-primary/30 md:px-16">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to digitize your business?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of Nepali business owners who manage their khata, inventory, and
              customers with Karobar.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=9779817303073"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#0b7be5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0b7be5]"
              >
                <FaCheck size={16} />
                Contact Blue Fox
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
