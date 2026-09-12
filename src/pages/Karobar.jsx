import { useState } from 'react'
import {
  FaWhatsapp,
  FaCheck,
  FaTag,
  FaCopy,
  FaGift,
  FaTimes,
  FaUtensils,
  FaHeartbeat,
  FaWrench,
  FaCarSide,
  FaMobileAlt,
  FaCouch,
  FaShoppingBasket,
  FaLaptop,
} from 'react-icons/fa'
import karobarHero from '../assets/hero-karobar.png'
import karobarAppQr from '../assets/appqr.jpg'
import karobarPreview from '../assets/karobar/karobar.webp'
import karobarRecord from '../assets/karobar/karobar-record.webp'
import karobarParties from '../assets/karobar/karobar-parties.webp'
import karobarInventory from '../assets/karobar/karobar-inventory.webp'
import karobarInsights from '../assets/karobar/karobar-insights.webp'
import karobarDesktop from '../assets/karobar/karobar-desktop.webp'
import karobarMultistaff from '../assets/karobar/karobar-multistaff.webp'
import karobarUploadbill from '../assets/karobar/karobar-uploadbill.webp'
import karobarPayment from '../assets/karobar/karobar-payment.webp'

const keyFeatures = [
  {
    image: karobarRecord,
    title: 'Record Transactions',
    desc: 'Add sales, purchases & expenses',
  },
  {
    image: karobarParties,
    title: 'Manage Parties',
    desc: 'Manage customers & suppliers ledger',
  },
  {
    image: karobarInventory,
    title: 'Manage Inventory',
    desc: 'Keep track of products in real time',
  },
  {
    image: karobarInsights,
    title: 'Business Insights',
    desc: 'View business performance reports',
  },
  {
    image: karobarDesktop,
    title: 'Desktop Web Version',
    desc: 'Manage business from computer',
  },
  {
    image: karobarMultistaff,
    title: 'Multi-Staff',
    desc: 'Add users & manage their access',
  },
  {
    image: karobarUploadbill,
    title: 'Upload Bill Images',
    desc: 'Organize paper bills & receipts',
  },
  {
    image: karobarPayment,
    title: 'Send Payment Reminders',
    desc: 'Send reminders via WhatsApp & SMS',
  },
]

const businessCategories = [
  { icon: FaUtensils, label: 'Food & Beverages', bg: 'bg-orange-100', color: 'text-orange-500', hover: 'hover:bg-orange-200' },
  { icon: FaHeartbeat, label: 'Medical & Healthcare', bg: 'bg-emerald-100', color: 'text-emerald-500', hover: 'hover:bg-emerald-200' },
  { icon: FaWrench, label: 'Hardware', bg: 'bg-slate-200', color: 'text-slate-600', hover: 'hover:bg-slate-300' },
  { icon: FaCarSide, label: 'Auto / Parts', bg: 'bg-indigo-100', color: 'text-indigo-500', hover: 'hover:bg-indigo-200' },
  { icon: FaMobileAlt, label: 'Mobile Pasal', bg: 'bg-pink-100', color: 'text-pink-500', hover: 'hover:bg-pink-200' },
  { icon: FaCouch, label: 'Furniture', bg: 'bg-amber-100', color: 'text-amber-600', hover: 'hover:bg-amber-200' },
  { icon: FaShoppingBasket, label: 'Fresh House', bg: 'bg-green-100', color: 'text-green-500', hover: 'hover:bg-green-200' },
  { icon: FaLaptop, label: 'Computer Services', bg: 'bg-sky-100', color: 'text-sky-500', hover: 'hover:bg-sky-200' },
]

export default function Karobar() {
  const [couponCopied, setCouponCopied] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mt-8 w-full max-w-sm">
                <div className="relative flex flex-col rounded-2xl border-2 border-dashed border-[#0b7be5] bg-white p-7 pb-12 shadow-lg shadow-primary/10">
                  <span className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 text-sm font-bold tracking-[0.2em] text-primary uppercase mb-5">
                    Use Cupon Code
                  </span>
                  <div className="flex flex-col items-start gap-4">
                    <div>
                      <p className="font-heading text-4xl font-bold tracking-widest text-[#0b7be5]">
                        BLUEFOX
                      </p>
                      <p className="mt-1.5 text-base text-slate-500">
                        Get 5% Flat disscount on Premium Subscription
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText('BLUEFOX').catch(() => {})
                      setCouponCopied(true)
                      setTimeout(() => setCouponCopied(false), 2000)
                    }}
                    className="absolute bottom-0 left-1/2 z-10 inline-flex -translate-x-1/2 translate-y-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0b7be5] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-colors duration-200 hover:bg-primary-700"
                  >
                    <FaCopy size={16} />
                    {couponCopied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-slate-100" />
                <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-slate-100" />
              </div>
              <div className="mt-8 flex w-full max-w-sm gap-3">
                <a
                  href="https://karobarapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0b7be5] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
                >
                  Visit Website
                </a>
                <button
                  onClick={() => setQrOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0b7be5] px-5 py-3 text-sm font-semibold text-[#0b7be5] transition-colors duration-200 hover:bg-primary-50"
                >
                  Download App
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-64 md:w-72 aspect-square overflow-hidden rounded-full bg-[#0b7be5] shadow-2xl shadow-primary/30 ring-8 ring-primary-100">
                <img
                  src={karobarHero}
                  alt="Karobar business management app"
                  className="h-full w-full rounded-full object-contain p-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Business categories strip */}
        <div className="border-t border-primary-100 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <p className="text-center text-sm font-bold text-slate-900 mb-5">
              Built for all growing businesses
            </p>
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="animate-marquee flex w-max items-center gap-3">
                {[...businessCategories, ...businessCategories].map((cat, i) => {
                  const Icon = cat.icon
                  return (
                    <span
                      key={`${cat.label}-${i}`}
                      className={`inline-flex items-center gap-2 rounded-full ${cat.bg} ${cat.hover} px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 cursor-default`}
                    >
                      <Icon size={16} className={cat.color} />
                      {cat.label}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
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
                BLUEFOX
              </p>
              <p className="mt-2 text-sm text-white/90">
                Get 5% Flat disscount on Premium Subscription
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-4 border-t-2 border-dashed border-primary-100 bg-white p-8 text-center sm:border-l-2 sm:border-t-0">
            <p className="max-w-xs text-sm text-slate-600">
              Enter this code while subscribing to Karobar Pro and unlock exclusive benefits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText('BLUEFOX').catch(() => {})
                  setCouponCopied(true)
                  setTimeout(() => setCouponCopied(false), 2000)
                }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0b7be5] px-6 py-3 text-sm font-semibold text-[#0b7be5] transition-colors duration-200 hover:bg-primary-50"
              >
                <FaCopy size={14} />
                {couponCopied ? 'Copied!' : 'Copy Code'}
              </button>
              <a
                href="https://open.karobarapp.com/?c=RdZXWp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0b7be5] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
              >
                <FaGift size={14} />
                Claim Karobar Pro
              </a>
            </div>
            <p className="text-xs text-slate-400">One code per account · Limited time applicable</p>
          </div>
        </div>
      </section>

      {/* What is Karobar */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
          <div className="flex items-center justify-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">What is Karobar?</p>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-6">
            The simplest way to
            <span className="block text-[#0b7be5] mt-2">manage your business</span>
          </h2>
          <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto leading-relaxed">
            Karobar is your digital business partner, helping you manage your business accounting
            and inventory available on both mobile &amp; desktop.
          </p>

          <div className="mt-14 flex justify-center">
            <img
              src={karobarPreview}
              alt="Karobar app on mobile and desktop"
              className="w-full max-w-4xl rounded-3xl object-contain"
            />
          </div>

          {/* Key features */}
          <div className="mt-20 text-center">
            <div className="flex items-center justify-center gap-4 text-primary mb-4">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs font-bold tracking-[0.25em] uppercase">Key Features</p>
              <span className="h-px w-10 bg-primary" />
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              All in One Business App
            </h3>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Manage your finances, inventory, and clients effortlessly with Karobar, everything
              your business needs, all in one place.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {keyFeatures.map((feature) => {
              return (
                <div
                  key={feature.title}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="w-44 h-44 rounded-3xl overflow-hidden bg-primary-50 flex items-center justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="mt-5 font-heading text-xl font-bold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-base text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing plans */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Karobar Pricing Plans</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
          Choose the plan that suits your business
        </h2>
        <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-12">
          Easy to use, powerful, and the best value for businesses in Nepal.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Basic */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8" style={{ height: '850px' }}>
            <h3 className="font-heading text-2xl font-bold text-slate-900">BASIC</h3>
            <p className="mt-1 inline-flex w-fit items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary uppercase">
              Free Forever
            </p>
            <p className="mt-6 font-heading text-3xl font-bold text-slate-900">
              Free <span className="text-base font-semibold text-slate-400">/forever</span>
            </p>
            <a
              href="https://open.karobarapp.com/?c=RdZXWp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-[#0b7be5] px-6 py-3 text-sm font-semibold text-[#0b7be5] transition-colors duration-200 hover:bg-primary-50"
            >
              Start Free
            </a>
            <div className="mt-8 border-t border-dashed border-slate-200 pt-6">
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                What's included
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li>1 Business + 1 Personal Profile</li>
                <li>Manage Accounting Easily</li>
                <li>Manage Inventory Easily</li>
                <li>Unlimited Transactions</li>
                <li>Unlimited Parties</li>
                <li>Unlimited Inventory</li>
                <li>Works Offline &amp; Online</li>
                <li>Mobile App Only</li>
                <li className="rounded-lg bg-amber-50 px-3 py-2 text-amber-700">
                  ⚠️ Share, Download &amp; Print Transactions up to 100 times only
                </li>
              </ul>
            </div>
          </div>

          {/* Gold */}
          <div className="flex flex-col rounded-3xl border-2 border-[#0b7be5] bg-white p-8 shadow-xl shadow-primary/10" style={{ height: '850px' }}>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-2xl font-bold text-slate-900">GOLD</h3>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                Popular
              </span>
            </div>
            <p className="mt-6">
              <span className="align-top text-sm text-slate-400 line-through">Rs. 4,000</span>
              <span className="ml-2 font-heading text-2xl font-bold text-[#0b7be5]">Rs. 2,999</span>
              <span className="text-sm text-slate-500">/year</span>
            </p>
            <a
              href="https://open.karobarapp.com/?c=RdZXWp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0b7be5] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
            >
              Upgrade to Gold
            </a>
            <div className="mt-8 border-t border-dashed border-slate-200 pt-6">
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                Everything in Basic, plus
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li>📱 Mobile App Only — NO DESKTOP</li>
                <li>3 Business Profiles</li>
                <li>Add 3 Staff Members</li>
                <li>Upload Bill Images</li>
                <li>View &amp; Download Unlimited Reports</li>
                <li>Multiple Bank Accounts</li>
                <li>Support Thermal Printer</li>
                <li>Enable App Lock</li>
                <li>Works Both Offline &amp; Online</li>
                <li>Customize Invoices</li>
                <li>A5 Paper Printing Support</li>
                <li>Organize Party into Categories</li>
                <li>Hide App Branding</li>
                <li>Create &amp; Send Quotations</li>
                <li>Premium Business Cards</li>
                <li>Partywise Sales Price</li>
                <li>Barcode Scan</li>
              </ul>
            </div>
          </div>

          {/* Diamond */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8" style={{ height: '850px' }}>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-2xl font-bold text-slate-900">DIAMOND</h3>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                  🔥 Most Popular
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  🏷️ Best Value
                </span>
              </div>
            </div>
            <p className="mt-6">
              <span className="align-top text-sm text-slate-400 line-through">Rs. 8,000</span>
              <span className="ml-2 font-heading text-2xl font-bold text-[#0b7be5]">Rs. 5,999</span>
              <span className="text-sm text-slate-500">/year</span>
            </p>
            <a
              href="https://open.karobarapp.com/?c=RdZXWp"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0b7be5] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
            >
              Upgrade to Diamond
            </a>
            <div className="mt-8 border-t border-dashed border-slate-200 pt-6">
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                Everything in Gold, plus
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li className="font-semibold text-[#0b7be5]">
                  ⭐ Mobile + Desktop/Laptop — DIAMOND ONLY
                </li>
                <li>5 Business Profiles — 2 More than Gold Plan</li>
                <li>Add 5 Staff Members — 2 More than Gold Plan</li>
                <li>Upload Bill Images</li>
                <li>View &amp; Download Unlimited Reports</li>
                <li>Multiple Bank Accounts</li>
                <li>Support Thermal Printer</li>
                <li>Enable App Lock</li>
                <li>Works Both Offline &amp; Online</li>
                <li>Customize Invoices</li>
                <li>A5 Paper Printing Support</li>
                <li>Organize Party into Categories</li>
                <li>Hide App Branding</li>
                <li>Create &amp; Send Quotations</li>
                <li>Premium Business Cards</li>
                <li>Partywise Sales Price</li>
                <li className="font-semibold text-[#0b7be5]">
                  ⭐ Excel Report Download — DIAMOND ONLY
                </li>
                <li className="font-semibold text-[#0b7be5]">
                  ⭐ Barcode Scan &amp; Generate — Diamond Only
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">
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
                href="https://api.whatsapp.com/send?phone=9779802755605"
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

      {qrOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setQrOpen(false)} />
          <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
            <button
              onClick={() => setQrOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
            >
              <FaTimes size={15} />
            </button>
            <h3 className="font-heading text-2xl font-bold text-slate-900">Download Karobar App</h3>
            <p className="mt-1 mb-6 text-sm text-slate-500">Scan the QR code to download</p>
            <img
              src={karobarAppQr}
              alt="Karobar App QR code"
              className="mx-auto w-56 rounded-xl border border-slate-200 p-2"
            />
          </div>
        </div>
      )}
    </main>
  )
}
