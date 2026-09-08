import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import { FaThumbsUp, FaMedal, FaMousePointer, FaCheck, FaAward, FaUsers, FaLightbulb, FaClock } from 'react-icons/fa'
import flutterImg from '../../assets/app-dev/flutter.png'
import dartImg from '../../assets/app-dev/dart.png'
import kotlinImg from '../../assets/app-dev/kotlin.png'
import swiftImg from '../../assets/app-dev/swift.png'
import nativeImg from '../../assets/app-dev/native.png'
import appstoreImg from '../../assets/app-dev/appstore.png'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import webdevImg from '../../assets/home/Website_developlent.svg'
import systemdevImg from '../../assets/home/Programmer-amico.svg'
import uiuxImg from '../../assets/home/UI_UX.svg'
import seoImg from '../../assets/home/SEO_analytics_team-amico.svg'
import smmImg from '../../assets/home/Mobile_Marketing-pana.svg'
import graphicImg from '../../assets/home/Website_Creator-pana.svg'
import mobileHero from '../../assets/services/Mobile development-pana.svg'
import contentImg from '../../assets/home/Content Writing.svg'

const service = services.find((s) => s.slug === 'app-development')

const features = [
  {
    icon: FaThumbsUp,
    title: 'Satisfaction Guarantee',
    desc: 'Elevate online presence with unmatched development expertise.',
  },
  {
    icon: FaMedal,
    title: 'Best Quality Work',
    desc: 'Excellence and innovation define our development solutions.',
  },
  {
    icon: FaMousePointer,
    title: 'Interactive Interface',
    desc: 'Create an engaging interface for a optimal user experience.',
  },
]

const stackTabs = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'Flutter', img: flutterImg },
      { name: 'Dart', img: dartImg },
      { name: 'Kotlin', img: kotlinImg },
      { name: 'Swift', img: swiftImg },
    ],
  },
  {
    id: 'cross-platform',
    label: 'Cross Platform',
    items: [{ name: 'React Native', img: nativeImg }],
  },
  {
    id: 'publishing',
    label: 'Publishing',
    items: [{ name: 'App Store', img: appstoreImg }],
  },
]

function TechnologyStack() {
  const [activeTab, setActiveTab] = useState('frontend')
  const currentStackTab = stackTabs.find((tab) => tab.id === activeTab)

  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Technology Stack</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-4">
        Technology Stack
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
        Technology we Work with in App Development
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <aside className="lg:w-64 shrink-0 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
          {stackTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap text-left px-5 py-3.5 rounded-xl font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#0b7be5] text-white'
                  : 'bg-white text-slate-700 hover:bg-[#eef1fb]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        <div className="flex-1 rounded-2xl bg-[#eef1fb] p-4 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {currentStackTab.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-3 rounded-xl bg-white p-4 md:p-5 text-center"
              >
                <img src={item.img} alt={item.name} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
                <span className="text-xs md:text-sm font-semibold text-slate-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const industries = [
  {
    title: 'E-Commerce',
    desc: 'We take pride in our extensive experience and expertise in developing mobile apps for various sectors. One such sector that we successfully serve is eCommerce.',
  },
  {
    title: 'E-Learning',
    desc: 'We specialize in empowering education through digital solutions. Here, we are dedicated to developing premium e-learning apps to seamlessly merge technology and education.',
  },
  {
    title: 'Ride-Sharing',
    desc: 'We develop robust, GPS-enabled mobile applications that ensure smooth rides, efficient route optimization, and enhanced passenger safety.',
  },
  {
    title: 'Logistics and Others',
    desc: 'As a leading mobile app development company in Nepal, our services are not limited. We provide mobile app development services for a wide range of industries.',
  },
]

const faqs = [
  {
    q: 'What types of mobile app development services do you offer?',
    body: [
      { t: 'p', text: 'At Blue Fox, we provide the following mobile app development services:' },
      { t: 'ul', items: ['E-commerce', 'E-learning', 'Ride-Sharing', 'Logistics and Others'] },
      {
        t: 'p',
        text: 'Along with these types of mobile app development services, we also provide you with services that meet your requirements, ranging from simple mobile apps to complex ones from scratch to finish.',
      },
    ],
  },
  {
    q: 'How much does it cost to develop a mobile app?',
    body: [
      {
        t: 'p',
        text: 'The specific cost required to develop a mobile app depends on features, type, complexity and other requirements. The higher the features, type, and complexity the more the cost. However, we can assure you that regardless of the cost, you will get the complete value of the amount you spend. If you want to know the cost of app development services in Nepal, feel free to contact us.',
      },
    ],
  },
  {
    q: 'How long does it take to develop a mobile app?',
    body: [
      {
        t: 'p',
        text: 'The time taken to develop a mobile app depends on the scale, features, requirements, and functionality of the mobile app. Apps with higher scales, features, and requirements take longer to develop when compared to apps with fewer features and lower requirements. However, do note that it takes a minimum of 7 to 8 weeks for a basic mobile app to complete since we develop mobile apps from scratch to finish.',
      },
    ],
  },
  {
    q: 'What is the process of app development?',
    body: [
      { t: 'p', text: 'The process of app development consists of the following steps:' },
      {
        t: 'ol',
        items: [
          'Requirement analysis: We understand your app vision and gather your specific needs.',
          'Planning: In this phase, we plan the project as per your requirements.',
          'Design: We design the UI/UX using the best technology to align with your vision.',
          'Development: Our team applies the best practices to develop your app, ensuring high performance and functionality.',
          'Testing: After development, we conduct tests to ensure your app is bug-free and reliable.',
          'Deployment: Once we test, we will launch your app on various platforms.',
          'Maintenance and Monitoring: Post-deployment, we provide ongoing support to ensure that your app runs smoothly and efficiently.',
        ],
      },
      { t: 'p', text: 'For further details regarding our working procedure, please check out our page, "How We Work".' },
    ],
  },
  {
    q: 'Do you develop apps for both iOS and Android platforms?',
    body: [
      {
        t: 'p',
        text: 'Yes, we do develop apps for both iOS and Android platforms. Our development process involves creating user-friendly and high-performance applications tailored to your specific needs and goals. We ensure seamless integration with platform features and provide ongoing support to keep your app updated and optimized for the best user experience regardless of if your platform is Android or iOS.',
      },
    ],
  },
  {
    q: 'Can you provide deployment services to launch my app?',
    body: [
      {
        t: 'p',
        text: 'Yes, we provide deployment services to launch your app. This includes preparing your app for release, submitting it to the appropriate app stores, and ensuring compliance with their guidelines. We also offer post-launch support to address any issues that may arise and to optimize the app\u2019s performance based on user feedback.',
      },
    ],
  },
  {
    q: 'Do you also offer support services and maintenance?',
    body: [
      {
        t: 'p',
        text: 'After the app has been developed, we offer ongoing support and maintenance for as long as you need. Providing continuous support and maintenance is essential, as it enables us to swiftly address any issues and keep your app functioning smoothly. This commitment ensures your app stays current and effective, adapting to new requirements and changes in the digital landscape.',
      },
    ],
  },
  {
    q: 'How do you ensure the security of my mobile app?',
    body: [
      {
        t: 'p',
        text: 'We develop your app from scratch, allowing us to ensure its high level of security through a comprehensive approach. By adhering to these practices, we provide your app with robust protection against potential threats and emerging risks.',
      },
    ],
  },
  {
    q: 'Is a website necessary for mobile app development?',
    body: [
      {
        t: 'p',
        text: 'A website is a crucial component of mobile app development because the admin portal is typically web-based. Managing the mobile app through a web-based admin panel is often more convenient than using a mobile app for this purpose. Additionally, having an informational website to keep your customers updated and provide essential information is beneficial. While a website is not strictly required, it is highly recommended as it enhances the overall effectiveness of mobile app development.',
      },
    ],
  },
  {
    q: 'Do you provide hosting services?',
    body: [
      {
        t: 'p',
        text: 'Yes, we do provide hosting services for mobile apps developed at Blue Fox. Our hosting services ensure that your app runs smoothly and reliably, with optimal performance and security. We also offer dedicated server options to handle varying traffic levels and ensure consistent app availability.',
      },
    ],
  },
  {
    q: 'Do you provide content writing and graphical banners for apps?',
    body: [
      {
        t: 'p',
        text: 'If you require content writing and graphical banners for apps, we provide these services tailored to your needs. Our team is dedicated to ensuring that the content is engaging and the visuals are appealing. Additionally, we work closely with you to ensure that our writings and banners align with your brand identity and marketing goals.',
      },
    ],
  },
]

function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 transition-colors duration-200 hover:text-[#0b7be5] ${
                isOpen ? 'text-[#0b7be5]' : ''
              }`}
            >
              <span>{faq.q}</span>
              <FiChevronDown
                className={`shrink-0 text-[#0b7be5] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                size={18}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 p-5 text-slate-600 leading-relaxed">
                  {faq.body.map((block, j) => {
                    if (block.t === 'ul') {
                      return (
                        <ul key={j} className="mb-3 list-disc space-y-1 pl-5">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }
                    if (block.t === 'ol') {
                      return (
                        <ol key={j} className="mb-3 list-decimal space-y-1 pl-5">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      )
                    }
                    return (
                      <p key={j} className="mb-3 last:mb-0">
                        {block.text}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const roadmap = [
  {
    number: '01',
    title: 'Requirement Analysis',
    desc: 'We start by listening to your app vision. Our team grasp your needs to craft your dream into reality.',
  },
  {
    number: '02',
    title: 'Planning',
    desc: 'In this crucial phase of mobile app development, we meticulously plan according to your specific needs.',
  },
  {
    number: '03',
    title: 'Design (UI/UX)',
    desc: 'In this phase, we craft UI/UX aligned with your vision using best technology, ensuring best user experience.',
  },
  {
    number: '04',
    title: 'Development',
    desc: 'During this phase, we apply industry best practices to ensure your app achieves high performance.',
  },
  {
    number: '05',
    title: 'System Testing & QA',
    desc: 'We prioritize quality. Rigorous testing ensures your app is bug-free and reliable across platform.',
  },
  {
    number: '06',
    title: 'Deployment',
    desc: 'After thorough testing, we launch your app on platforms like Google Play Store and iOS App Store.',
  },
  {
    number: '07',
    title: 'Maintenance & Monitoring',
    desc: 'After App deployment, we provide ongoing monitoring and support to ensure your app runs smoothly.',
  },
  {
    number: '08',
    title: 'Knowledge Transfer',
    desc: 'We provide training on app operations, troubleshooting, implementation, and user data access post-launch.',
  },
]

const whyChooseUs = [
  {
    icon: FaAward,
    title: 'Robust Functionality',
    desc: 'We create high-quality mobile apps with advanced features and seamless performance for an exceptional user experience.',
  },
  {
    icon: FaUsers,
    title: 'Client-Centric Approach',
    desc: 'We provide tailored solutions with a client-centric focus to meet your unique needs and preferences.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovative Design',
    desc: 'We bring creativity to every project, turning your ideas into visually appealing and user-friendly experiences.',
  },
  {
    icon: FaClock,
    title: 'Timely Delivery',
    desc: 'We\u2019re more than exceptional app developers; we consistently deliver our products on time, every time.',
  },
]

const otherServices = [
  { title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your need.', link: '/services/website-development', img: webdevImg },
  { title: 'System/Software Development', desc: 'System/software developed according to your business needs.', link: '/services/system-software-development', img: systemdevImg },
  { title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction', link: '/services/ui-ux', img: uiuxImg },
  { title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', link: '/services/seo', img: seoImg },
  { title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', link: '/services/social-media-marketing', img: smmImg },
  { title: 'Graphic Design', desc: 'Designs that Speak Your Brand\u2019s Narrative and Connect with Your Audience', link: '/services/graphic-design', img: graphicImg },
  { title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', link: '/services/content-writing', img: contentImg },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

const sections = (
  <>
    <section className="max-w-6xl mx-auto px-6 pb-20">
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

    <TechnologyStack />

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

    <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
        We help you expand your business through tech
      </h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-12">
        We have a team of highly skilled mobile app developers and designers to provide you with the
        mobile app for your business needs. Therefore, we are the right choice for all your app
        design and development needs. Along with our exceptional and responsive app design services,
        some of our additional perks are as follows:
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
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Other Services</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        One Solution For All Your Digital Needs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {otherServices.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group rounded-2xl bg-white p-7 transition-colors duration-300 hover:bg-[#a9d6ff]"
          >
            <div className="mb-5 flex w-full items-center justify-center rounded-xl bg-primary-50/60 py-4">
              <img src={item.img} alt={item.title} className="w-36 h-36 object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-black transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pt-10 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Valued Partners</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Trusted by Top-Rated Companies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {partnerships.map((partner) => (
          <div
            key={partner.alt}
            className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]"
          >
            <img src={partner.img} alt={partner.alt} className="h-14 object-contain" />
          </div>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 pb-24">
      <div className="flex items-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">FAQs</p>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-left mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 text-lg max-w-2xl text-left mb-12">
        Welcome to our FAQ section! Here you&apos;ll find quick answers to the most common questions
        about our products and services.
      </p>

      <Faq />
    </section>
  </>
)

export default function AppDevelopment() {
  return (
    <ServiceLayout service={service} showCta={false} showDetails={false} features={features} heroImage={mobileHero} after={sections} />
  )
}