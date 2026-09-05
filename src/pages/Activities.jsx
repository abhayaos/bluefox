import { FaCameraRetro } from 'react-icons/fa'

const activities = [
  { title: 'Blue Fox Anniversary' },
  { title: 'IIC Quest 2024' },
  { title: 'IIC Quest 2024' },
  { title: 'Aces Tech Fest 7.0' },
  { title: 'Sushma Godawari College UX/UI Workshop' },
  { title: 'Aces Intern Fest 7.0' },
  { title: 'Aces Tech Fest 7.0 Closing' },
  { title: 'Aces Tech Fest 7.0' },
]

export default function Activities() {
  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase">
            <FaCameraRetro size={16} />
            Our Culture
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Building a Culture Worth Joining
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            "Let's Create Happiness Together" embodies the spirit of collaboration and positivity,
            serving as a rallying cry for a diverse range of initiatives. Whether in a business
            context, community program, or personal relationship, this phrase invites everyone to
            contribute to a collective sense of joy and fulfillment.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, idx) => (
            <div
              key={`${activity.title}-${idx}`}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="aspect-video bg-primary-50 flex items-center justify-center text-primary-200">
                <FaCameraRetro size={56} />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{activity.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}