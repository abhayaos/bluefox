import { Link } from 'react-router-dom'
import { FaUsers, FaSearch, FaShareAlt, FaComments, FaInfoCircle, FaGlobe, FaArrowRight } from 'react-icons/fa'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import contentHero from '../../assets/home/Content Writing.svg'

const service = services.find((s) => s.slug === 'content-writing')

const strategies = [
  {
    icon: FaUsers,
    title: 'Customer Centric Approach',
    desc: 'Putting your audience first with a personalized touch to meet their needs and expectations',
  },
  {
    icon: FaSearch,
    title: 'Keyword Research and SEO Integration',
    desc: 'Strategically optimizing content to rank higher and reach your audience through targeted keywords',
  },
  {
    icon: FaShareAlt,
    title: 'Interactive and Shareable Content',
    desc: 'Engaging content that resonates, sparks interaction, and encourages easy sharing across platforms',
  },
]

const goals = [
  {
    icon: FaComments,
    title: 'Audience Engagement',
    desc: 'The primary goal of website content writing services is to generate compelling and relevant content to capture the attention of the reader and encourage their interaction. The reason for this is that engaged audiences are more likely to stay on the website and convert into customers or followers.',
  },
  {
    icon: FaInfoCircle,
    title: 'Provide Valuable Information',
    desc: 'Another primary goal of website content writing services is to provide valuable information clearly and concisely. Regardless of whether the content is about education, other information, or promotion, the goal here is to provide value to the audience.',
  },
  {
    icon: FaGlobe,
    title: 'Search Engine Optimization (SEO) and Visibility',
    desc: 'Content writing is an integral aspect to enhance the visibility of search engines. By using relevant keywords and creating high-quality content, the writer can boost the SEO viability of the website and increase its ranking on the search engine result pages.',
  },
]

const sections = (
  <>
    {/* Content Writing for your Needs */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Content Writing strategy &amp; research</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-12">
        Content Writing for your Needs
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {strategies.map((strategy) => (
          <div
            key={strategy.title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <strategy.icon size={22} />
              </span>
              <h3 className="font-heading text-xl font-semibold text-slate-700">{strategy.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{strategy.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#0b7be5] px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
        >
          Get Started
          <FaArrowRight size={15} />
        </Link>
      </div>
    </section>

    {/* Goals Of Content Writing */}
    <section className="bg-[#a9d6ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Goals</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-12">
          Goals Of Content Writing
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="group rounded-2xl bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <goal.icon size={22} />
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-700">{goal.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default function ContentWriting() {
  return <ServiceLayout service={service} showDetails={false} heroImage={contentHero} after={sections} />
}