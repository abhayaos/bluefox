import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBusinessTime,
  FaBriefcase,
  FaLifeRing,
} from 'react-icons/fa'

const infoCards = [
  {
    icon: FaPhoneAlt,
    title: 'Our Phone Number',
    value: '9817303073',
    href: 'tel:+9779817303073',
  },
  {
    icon: FaEnvelope,
    title: 'Our Email',
    value: 'bluefoxpvtltd@gmail.com',
    href: 'mailto:bluefoxpvtltd@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Our Office',
    value: 'Itahari-6, Paruhang Chowk, Nepal',
    href: null,
  },
]

const quickContacts = [
  {
    icon: FaBusinessTime,
    label: 'For Sales',
    value: '9802755604',
    href: 'tel:+9779802755604',
  },
  {
    icon: FaBriefcase,
    label: 'For Career',
    value: '9802755603',
    href: 'tel:+9779802755603',
  },
  {
    icon: FaLifeRing,
    label: 'For Support',
    value: '9817303073',
    href: 'tel:+9779817303073',
  },
]

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Contact Enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: +977 ${form.phone}\n\n${form.message}`
    )
    window.location.href = `mailto:bluefoxpvtltd@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0b7be5] focus:ring-2 focus:ring-[#0b7be5]/20'

  return (
    <section className="flex-1 bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Contact Us</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          We are Here For You. Can we Help?
        </h1>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#f1f7fd] p-8 md:p-10 shadow-sm"
          >
          <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-1">
            Get In Touch
          </h3>
          <p className="mb-8 text-base text-gray-600">
            Send us a message and we&apos;ll get back to you shortly.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Full Name <span className="text-red-500">*</span>
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
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Phone Number <span className="text-red-500">**</span>
              </label>
              <PhoneInput
                international
                defaultCountry="NP"
                flags={flags}
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value || '' })}
                className="phone-input"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#0b7be5] px-8 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <card.icon size={20} />
                </span>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block font-heading text-lg font-semibold text-slate-900 transition-colors duration-200 hover:text-[#0b7be5]"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 font-heading text-lg font-semibold text-slate-900">
                    {card.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-4 font-heading text-lg font-semibold text-slate-900">
              Quick Contacts
            </h3>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {quickContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 rounded-xl bg-[#f1f7fd] px-4 py-3 transition-colors duration-200 hover:bg-[#a9d6ff]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <contact.icon size={16} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">
                      {contact.label}
                    </span>
                    <span className="block text-sm font-bold text-slate-900">{contact.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Blue Fox Pvt Ltd Location"
              src="https://maps.google.com/maps?q=28.397455,84.130151&z=16&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact