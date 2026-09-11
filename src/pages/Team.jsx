import { FaUsers, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import mdImage from '../assets/about/md.jpg'
import bdImage from '../assets/about/bd.jpg'
import abhayaImage from '../assets/about/abhaya.jfif'
import anmolImage from '../assets/about/anmol.jpg'

const members = [
  {
    name: 'Mitra Thapa Magar',
    role: 'CEO',
    img: mdImage,
  },
  {
    name: 'Anmol Budhathoki',
    role: 'Managing Director',
    img: anmolImage,
  },
  {
    name: 'Bipin Chapagain',
    role: 'BDO',
    img: bdImage,
  },
  {
    name: 'Abhaya Bikram Shahi',
    role: 'Full Stack Developer',
    img: abhayaImage,
  },
]

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:bluefoxpvtltd@gmail.com' },
]

function MemberCard({ member, index }) {
  return (
    <div
      className="group relative h-80 overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0b7be5] hover:shadow-xl hover:shadow-primary/10 animate-slide-in-left"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-[#52a1ec] to-primary-200" />

      <div className="flex h-full flex-col items-center justify-center px-6 pt-4 text-center">
        <div className="relative mb-5">
          <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-[#eef1fb] text-4xl font-bold text-primary ring-4 ring-[#eef1fb] transition-colors duration-300 group-hover:ring-[#a9d6ff]">
            {member.img ? (
              <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
            ) : (
              member.initials
            )}
          </div>
          <span className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-sm" />
        </div>
        <h2 className="font-heading text-xl font-semibold text-slate-900">{member.name}</h2>
        <span className="mt-2 inline-flex items-center rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
          {member.role}
        </span>
      </div>

      {/* Social box slides up from bottom on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#0b7be5] p-5 text-white transition-transform duration-300 ease-out group-hover:translate-y-0">
        <p className="mb-3 text-sm font-semibold text-center">Connect with {member.name.split(' ')[0]}</p>
        <div className="flex items-center justify-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-all duration-200 hover:scale-110 hover:bg-primary-50"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </main>
  )
}