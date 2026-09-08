import { useState } from 'react'
import { FaTimes, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7be5] focus:ring-2 focus:ring-[#0b7be5]/20'

const serviceOptions = [
  'Website Development',
  'App Development',
  'System/Software Development',
  'UI/UX Design',
  'SEO',
  'Social Media Marketing',
  'Graphic Design',
  'Digital Marketing',
  'Content Writing',
  'Pay Per Click',
]

export default function QuickEnquiryModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  if (!open) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.service ? `Enquiry: ${form.service}` : 'Quick Enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: +977 ${form.phone}\nService: ${form.service}\n\n${form.message}`
    )
    window.location.href = `mailto:bluefoxpvtltd@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl md:grid-cols-[1.3fr_1fr]">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
          >
            <FaTimes size={15} />
          </button>

          <h3 className="font-heading text-2xl font-bold text-gray-900">Have a Project in Mind</h3>
          <p className="mb-6 text-slate-500">Tell us a bit more</p>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex overflow-hidden rounded-lg border border-slate-300 focus-within:border-[#0b7be5] focus-within:ring-2 focus-within:ring-[#0b7be5]/20">
                <span className="flex items-center bg-slate-100 px-4 text-sm font-medium text-slate-600">
                  +977
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="98XXXXXXXX"
                  className="w-full flex-1 border-0 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Service
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Write a Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Write your message..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#0b7be5] px-8 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact info */}
        <div className="bg-[#0b7be5] p-6 text-white md:p-8">
          <p className="font-heading text-xl font-bold leading-snug">
            We would love to
            <br /> hear from you
          </p>
          <p className="mt-1 text-sm text-white/80">Get in touch</p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <FaPhoneAlt size={16} />
              </span>
              <div>
                <p className="text-sm text-white/70">Our Phone Number</p>
                <a
                  href="tel:+9779817303073"
                  className="font-heading text-xl font-bold text-white hover:underline"
                >
                  9817303073
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <FaEnvelope size={16} />
              </span>
              <div>
                <p className="text-sm text-white/70">Our Email</p>
                <a
                  href="mailto:bluefoxpvtltd@gmail.com"
                  className="break-all text-base font-semibold text-white hover:underline"
                >
                  bluefoxpvtltd@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <FaMapMarkerAlt size={16} />
              </span>
              <div>
                <p className="text-sm text-white/70">Office Address</p>
                <p className="text-base font-semibold text-white">
                  Itahari-6, Paruhang Chowk,
                  <br /> Nepal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}