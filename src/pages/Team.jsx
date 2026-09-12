import { FaUsers } from 'react-icons/fa'
import mdImage from '../assets/about/md.jpg'
import bdImage from '../assets/about/bd.jpg'
import abhayaImage from '../assets/about/abhaya.jfif'
import anmolImage from '../assets/about/anmol.jpg'
import zeenatImage from '../assets/about/zeenat.jpg'

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.2v7h3.3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
  {
    label: 'Mail',
    href: 'mailto:bluefoxpvtltd@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5.2L4 8.2V6.5l8 5.2 8-5.2v1.7z" />
      </svg>
    ),
  },
]

const teams = [
  {
    name: 'Itahari Team',
    icon: '🏢',
    members: [
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
    ],
  },
  {
    name: 'Dharan Team',
    icon: '🏢',
    members: [
      {
        name: 'Zeenat Rai',
        role: 'Advisor',
        img: zeenatImage,
      },
    ],
  },
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
          {socials.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-all duration-200 hover:scale-110 hover:bg-primary-50"
            >
              {icon}
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

        <div className="space-y-20">
          {teams.map((team, teamIndex) => (
            <div key={team.name}>
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 inline-flex items-center gap-3">
                  <span className="text-primary">{team.icon}</span>
                  {team.name}
                </h2>
                <span className="mt-3 block h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.members.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={teamIndex * 3 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}