import { FaUsers } from 'react-icons/fa'

const members = [
  { name: 'Bipin Chapagain', role: 'CEO', initials: 'BC' },
  { name: 'Sandesh Paudel', role: 'CTO', initials: 'SP' },
  { name: 'Binaya Marahatha', role: 'Full Stack & Flutter Developer', initials: 'BM' },
  { name: 'Abdullah Al Mridul', role: 'Full Stack Developer (Bangladesh)', initials: 'AM' },
  { name: 'Rohan Karki', role: 'Frontend Developer', initials: 'RK' },
  { name: 'Bharat Chaudhary', role: 'Frontend Developer', initials: 'BC' },
  { name: 'Bijay Giri', role: 'Flutter Developer', initials: 'BG' },
  { name: 'Bipesh Karki', role: 'React Native', initials: 'BK' },
  { name: 'Manish Karki', role: 'Admin Officer', initials: 'MK' },
  { name: 'Anjana Chaudhary', role: 'Accountant', initials: 'AC' },
]

export default function Team() {
  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm tracking-wide uppercase">
            <FaUsers size={16} />
            Let's Meet
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our awesome team of talented people
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have highly experienced professionals who are looking forward to turn your business
            problem into future possibilities through digital transformation. Our team comprises of
            qualified, skilled and tactful individuals who are passionate to provide quality output
            for clients.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
                {member.initials}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mt-4">{member.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}