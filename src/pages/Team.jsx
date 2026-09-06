import { useState } from 'react'
import { FaUsers, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const members = [
  {
    name: 'John Doe',
    role: 'CEO',
    category: 'Leadership',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    category: 'Leadership',
    initials: 'JS',
  },
  {
    name: 'David Lee',
    role: 'Lead Developer',
    category: 'Development',
    initials: 'DL',
  },
]

const categories = ['All', 'Leadership', 'Development']

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:bluefoxpvtltd@gmail.com' },
]

function MemberCard({ member, index }) {
  return (
    <div
      className="group relative h-80 overflow-hidden rounded-3xl border-2 border-transparent bg-[#f3d0b5] transition-all duration-300 hover:border-[#0b7be5] hover:shadow-xl hover:shadow-primary/10 animate-slide-in-left"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-[#0b7be5] shadow-md">
          {member.initials}
        </div>
        <h2 className="text-xl font-semibold text-slate-900">{member.name}</h2>
        <p className="mt-1 text-sm font-medium text-slate-600">{member.role}</p>
      </div>

      {/* Social box slides up from bottom on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#0b7be5] p-5 text-white transition-transform duration-300 ease-out group-hover:translate-y-0">
        <p className="mb-3 text-sm font-semibold">Connect with {member.name.split(' ')[0]}</p>
        <div className="flex items-center justify-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-all duration-200 hover:scale-110"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? members : members.filter((m) => m.category === active)

  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase">
            <FaUsers size={16} />
            Let's Meet
          </span>
          <h1 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">
            Our awesome team of talented people
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We have highly experienced professionals who are looking forward to turn your business
            problem into future possibilities through digital transformation.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                active === category
                  ? 'bg-[#0b7be5] text-white shadow-md shadow-primary/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0b7be5] hover:text-[#0b7be5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}