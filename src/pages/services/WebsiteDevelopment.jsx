import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import { FaThumbsUp, FaMedal, FaMousePointer, FaCheck, FaCogs, FaHandshake, FaLightbulb, FaClock } from 'react-icons/fa'
import htmlImg from '../../assets/web-dev/html.png'
import cssImg from '../../assets/web-dev/css.png'
import reactImg from '../../assets/web-dev/react.png'
import nextImg from '../../assets/web-dev/nextjs.png'
import phpImg from '../../assets/web-dev/php.png'
import laravelImg from '../../assets/web-dev/laravell.png'
import pythonImg from '../../assets/web-dev/python.png'
import nodeImg from '../../assets/web-dev/nodejs.png'
import awsImg from '../../assets/cloud/aws.png'
import gcpImg from '../../assets/cloud/googlecloud.png'
import dockerImg from '../../assets/cloud/docker.png'
import mongoImg from '../../assets/database/mongo.png'
import webHero from '../../assets/services/Web devices-pana.svg'

const service = services.find((s) => s.slug === 'website-development')

const features = [
  {
    icon: FaThumbsUp,
    title: 'Satisfaction Guarantee',
    desc: 'Elevate online presence with website development expertise.',
  },
  {
    icon: FaMedal,
    title: 'Best Quality work',
    desc: 'Excellence and innovation define our development solutions.',
  },
  {
    icon: FaMousePointer,
    title: 'Interactive Interface',
    desc: 'Create an engaging interface for a optimal user experience.',
  },
]

const whyChooseUs = [
  {
    icon: FaCogs,
    title: 'Robust Functionality',
    desc: 'We create high-quality websites with advanced features and seamless performance for an exceptional user experience.',
  },
  {
    icon: FaHandshake,
    title: 'Client-Centric Approach',
    desc: 'Our client-centric website solutions address unique needs, reflecting your vision with meticulous design precision.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Website Design',
    desc: 'Infusing creativity, we transform concepts into reality with user-friendly interfaces, and robust functionality.',
  },
  {
    icon: FaClock,
    title: 'Timely Website Delivery',
    desc: 'We value time, ensuring your website projects meet deadlines seamlessly and establish a swift online presence.',
  },
]

const industries = [
  {
    title: 'E-Commerce',
    desc: 'We redefine the online shopping experience through innovative e-commerce website development solutions with over six years of experience in website development.',
  },
  {
    title: 'Travel and Trekking',
    desc: 'We highly value experience over anything else. Therefore, we provide you with the best Travel and Trekking website development services.',
  },
  {
    title: 'E-Learning',
    desc: 'We specialize in empowering education through digital solutions. Here, we are dedicated to developing Innovative e-learning website to seamlessly merge technology and education.',
  },
  {
    title: 'Informative and Others',
    desc: 'Our website design and development services are not limited to the above-mentioned categories. We are your trusted partner for custom website design and development in Nepal',
  },
]

const techGroups = [
  { title: 'Frontend', items: [htmlImg, cssImg, reactImg, nextImg] },
  { title: 'Backend', items: [phpImg, laravelImg, pythonImg, nodeImg] },
  { title: 'Infrastructure', items: [awsImg, gcpImg, dockerImg, mongoImg] },
]

const roadmap = [
  { number: '01', title: 'Requirement Analysis', desc: 'We conduct a thorough analysis of your requirements to establish the foundation for your website.' },
  { number: '02', title: 'Planning', desc: 'We make detailed plans and customized strategies to ensure a secure roadmap to success.' },
  { number: '03', title: 'Design (UI/UX)', desc: 'In this phase, we craft UI/UX aligned with your vision using best technology, ensuring best user experience.' },
  { number: '04', title: 'Development', desc: 'After designing UI/UX, we implement concepts with cutting-edge programming languages and standards.' },
  { number: '05', title: 'System Testing and QA', desc: 'We ensure reliability through rigorous System Testing and QA for a seamless user experience and robust website.' },
  { number: '06', title: 'Deployment', desc: 'After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience.' },
  { number: '07', title: 'Maintenance & Monitoring', desc: 'After deployment, we provide ongoing monitoring and support to ensure your website runs smoothly.' },
  { number: '08', title: 'Knowledge Transfer', desc: 'We provide training on website operations, troubleshooting, implementation, and user data access post-launch.' },
]

const sections = (
  <>
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
        We help you expand your business through tech
      </h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-12">
        We have a team of highly skilled website designers and developers who can provide you with
        the website of your choice. As a leading website development company in Nepal, we offer
        exceptional and responsive website design and development services. Some of our additional
        perks are as follows:
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((perk) => (
          <div
            key={perk.title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <perk.icon size={22} />
              </span>
              <FaCheck className="text-[#0b7be5]" size={14} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">{perk.title}</h3>
            <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Industries We Serve</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Proud to deliver excellence every time
      </h2>

      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:grid-cols-2">
        {industries.map((industry, i) => {
          const blue = i === 1 || i === 2
          return (
            <div
              key={industry.title}
              className={`p-12 ${blue ? 'bg-[#0b7be5]' : 'bg-white'} ${
                i > 0 ? 'border-t border-slate-200' : ''
              } ${i % 2 === 1 ? 'sm:border-l sm:border-slate-200' : ''} ${
                i === 1 ? 'sm:border-t-0' : ''
              }`}
            >
              <h3 className={`font-heading text-2xl font-semibold ${blue ? 'text-white' : 'text-slate-700'}`}>
                {industry.title}
              </h3>
              <p className={`mt-4 text-lg leading-relaxed ${blue ? 'text-white/90' : 'text-slate-600'}`}>
                {industry.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pb-28">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Technology Stack</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
        Technology Stack
      </h2>
      <p className="text-slate-600 text-lg text-center mb-12">
        Technology we Work with in Website Development
      </p>

      <div className="flex flex-col gap-6">
        {techGroups.map((group) => (
          <div key={group.title} className="rounded-2xl bg-white p-8 text-left">
            <h3 className="font-heading text-xl font-semibold text-slate-700 mb-6">{group.title}</h3>
            <div className="flex flex-wrap gap-4">
              {group.items.map((img, j) => (
                <div
                  key={j}
                  className="flex h-16 w-20 items-center justify-center rounded-xl border border-slate-100 bg-[#f8f9ff] p-3"
                >
                  <img
                    src={img}
                    alt={`${group.title} technology ${j + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#a9d6ff]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Roadmap</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
          Our Development Roadmap
        </h2>
        <p className="text-slate-600 text-lg text-center mb-12">
          A clear and proven path from idea to launch
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {roadmap.slice(0, 4).map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 rounded-2xl bg-white p-7"
              >
                <span className="font-heading text-4xl font-bold leading-none text-primary shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {roadmap.slice(4).map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-5 rounded-2xl bg-white p-7"
              >
                <span className="font-heading text-4xl font-bold leading-none text-primary shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
)

export default function WebsiteDevelopment() {
  return <ServiceLayout service={service} showDetails={false} features={features} heroImage={webHero} after={sections} />
}