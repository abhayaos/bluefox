import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'
import contactHero from '../assets/contact/Contact us-cuate.svg'

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
    <section className="flex-1 bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#f1f7fd] p-8 md:p-10 shadow-sm"
          >
          <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-1">
            Get In Touch
          </h3>
          <p className="mb-8 text-base text-gray-600">
            We are Here For You. Can we Help ?
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

        <div className="hidden lg:flex justify-center">
          <img src={contactHero} alt="Contact us" className="w-full max-w-lg object-contain" />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact