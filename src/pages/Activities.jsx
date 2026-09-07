import { FaCameraRetro } from 'react-icons/fa'
import blueFoxAnn from '../assets/activities/blue-fox-ann.jpeg'
import iicQ from '../assets/activities/iic-q.jpeg'
import iicQuest1 from '../assets/activities/iic-quest1.jpeg'
import acesOpen from '../assets/activities/aces-open.jpeg'
import uiUx from '../assets/activities/ui-ux.jpeg'
import acesIntern from '../assets/activities/aces-intern.jpeg'
import techFestClose from '../assets/activities/tech-fest-close.jpeg'
import acesTech from '../assets/activities/aces-tech.jpeg'

const activities = [
  { title: 'Blue Fox Anniversary', img: blueFoxAnn },
  { title: 'IIC Quest 2024', img: iicQ },
  { title: 'IIC Quest 2024', img: iicQuest1 },
  { title: 'Aces Tech Fest 7.0', img: acesOpen },
  { title: 'Sushma Godawari College UX/UI Workshop', img: uiUx },
  { title: 'Aces Intern Fest 7.0', img: acesIntern },
  { title: 'Aces Tech Fest 7.0 Closing', img: techFestClose },
  { title: 'Aces Tech Fest 7.0', img: acesTech },
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
              className="group relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-primary-50 shadow-sm"
            >
              <img
                src={activity.img}
                alt={activity.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-lg font-semibold text-white">{activity.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}