import { FaBriefcase, FaCalendarCheck, FaUsers } from 'react-icons/fa'

const highlights = [
  { icon: FaBriefcase, title: 'Flexible Work Culture' },
  { icon: FaUsers, title: 'Awesome Work Environment' },
  { icon: FaCalendarCheck, title: '2 Days Weekend' },
]

export default function Career() {
  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Career</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join our dynamic team dedicated to innovation and excellence.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Blue Fox is here to provide you a learning platform not only on technical aspects but
            also on emotional and social arenas. We invite you to be a part of our amazing success
            story through exciting growth opportunities. Our company can proudly say that we as
            employers feel employees as valuable assets, who are provided guidance and support in a
            dynamic environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <item.icon className="text-primary" size={40} />
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-primary font-medium uppercase tracking-wide mb-2">Open Roles</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 text-center">Career Opportunities</h2>

          <div className="mt-8">
            <p className="text-center text-gray-500 text-lg py-10">
              No post available at the moment. Please check back soon!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}