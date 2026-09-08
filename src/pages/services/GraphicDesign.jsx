import { FaDesktop, FaGem, FaPaintBrush, FaAward, FaFileAlt, FaFilm, FaImage, FaPrint, FaCheck, FaPenNib, FaFingerprint, FaLightbulb } from 'react-icons/fa'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import nvaImg from '../../assets/home/nva.png'
import imImg from '../../assets/home/im.png'
import aceomeImg from '../../assets/home/aceome.png'
import webdevImg from '../../assets/home/Website_developlent.svg'
import appdevImg from '../../assets/home/App_Development.svg'
import systemdevImg from '../../assets/home/Programmer-amico.svg'
import uiuxImg from '../../assets/home/UI_UX.svg'
import seoImg from '../../assets/home/SEO_analytics_team-amico.svg'
import smmImg from '../../assets/home/Mobile_Marketing-pana.svg'
import contentImg from '../../assets/home/Content Writing.svg'
import designerGirl from '../../assets/graphic/Designer_Girl.svg'

const service = services.find((s) => s.slug === 'graphic-design')

const features = [
  {
    icon: FaDesktop,
    title: 'Engaging Visual Interfaces',
    desc: 'Engage your audience with interactive and visual interfaces.',
  },
  {
    icon: FaGem,
    title: 'Premium Quality Creations',
    desc: 'Elevate your brand with premium-quality design expertise.',
  },
  {
    icon: FaPaintBrush,
    title: 'Design Delight',
    desc: 'Experience captivating designs that delight the eye.',
  },
]

const subServices = [
  { icon: FaAward, title: 'Branding' },
  { icon: FaFileAlt, title: 'Flyer and Brochure' },
  { icon: FaFilm, title: 'Motion Graphics and Animation' },
  { icon: FaImage, title: 'Social Media Banners' },
  { icon: FaPaintBrush, title: 'Illustrations' },
  { icon: FaPrint, title: 'Print Designs' },
]

const workflow = [
  {
    number: '01',
    title: 'Gather Information and Plan',
    desc: 'This involves understanding the project goals, target audience, and brand guidelines. Research and create a mood board to visually explore design directions.',
  },
  {
    number: '02',
    title: 'Concept and Design',
    desc: 'Freely brainstorm creative concepts, then explore with rough sketches and mockups. Iterate on the strongest idea using valuable client feedback.',
  },
  {
    number: '03',
    title: 'Execution and Delivery',
    desc: 'In graphic design, execution & delivery is where the vision becomes reality and the polished final product is handed to the client.',
  },
  {
    number: '04',
    title: 'Feedback and Refinement',
    desc: 'The company encourages open and honest feedback from the client. This might involve asking specific questions about what resonates or what needs improvement.',
  },
]

const portfolioCategories = ['Logo Design', 'Brochure/Flyer', 'Social Media Design', 'Branding']

const portfolio = [
  { name: 'Infinity', initials: 'IN' },
  { name: 'Kwabahal', initials: 'KB' },
  { name: 'Provision', initials: 'PR' },
]

const whyChooseUs = [
  {
    icon: FaPenNib,
    title: 'Custom Illustration and Infographics',
    desc: 'Discover a world of creativity with our custom illustration and infographic services. Elevate your brand identity with uniquely crafted visuals and turn complex information into engaging stories that leave a lasting impact.',
  },
  {
    icon: FaDesktop,
    title: 'Digital Design',
    desc: 'Embrace the digital era with our premium digital design services. From web graphics to social media visuals, we tailor designs that seamlessly integrate your brand into the online landscape.',
  },
  {
    icon: FaFingerprint,
    title: 'Brand Identity Development',
    desc: 'Develop a distinctive brand identity with our expert guidance. We specialize in crafting logos and brand elements that leave a lasting impression from scratch to completion to set your brand apart from the competition.',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Design Solutions',
    desc: 'Elevate your brand with our creative prowess, offering premium design solutions that go beyond the conventional, ensuring your visuals stand out in a crowded market.',
  },
]

const otherServices = [
  { title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your need.', link: '/services/website-development', img: webdevImg },
  { title: 'App Development', desc: 'Innovative and user-friendly mobile application designed to engage users.', link: '/services/app-development', img: appdevImg },
  { title: 'System/Software Development', desc: 'System/software developed according to your business needs.', link: '/services/system-software-development', img: systemdevImg },
  { title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction', link: '/services/ui-ux', img: uiuxImg },
  { title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', link: '/services/seo', img: seoImg },
  { title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', link: '/services/social-media-marketing', img: smmImg },
  { title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', link: '/services/content-writing', img: contentImg },
]

const partnerships = [
  { img: nvaImg, alt: 'NVA' },
  { img: imImg, alt: 'IM' },
  { img: aceomeImg, alt: 'Aceome' },
]

const sections = (
  <>
    {/* Services */}
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Services</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Our Graphic Design Services
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subServices.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <item.icon size={22} />
            </span>
            <h3 className="font-heading text-xl font-semibold text-slate-900">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>

    {/* Work Flow */}
    <section className="bg-[#a9d6ff]">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Work Flow</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">
          How We Get Started
        </h2>
        <p className="text-slate-600 text-lg text-center mb-12">
          A clear and proven path from idea to impactful design
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {workflow.slice(0, 2).map((step) => (
              <div key={step.number} className="flex items-start gap-5 rounded-2xl bg-white p-7">
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
            {workflow.slice(2).map((step) => (
              <div key={step.number} className="flex items-start gap-5 rounded-2xl bg-white p-7">
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

    {/* Portfolio */}
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Portfolio</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
        Graphic Design Portfolio
      </h2>

      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {portfolioCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary-50 to-[#a9d6ff]/40">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-700 font-heading text-2xl font-bold text-white shadow-lg">
                {project.initials}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[#0b7be5]">Graphic Design Project</p>
            </div>
          </div>
        ))}
        {Array.from({ length: 6 - portfolio.length }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="flex h-full min-h-[272px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white p-6 text-center"
          >
            <FaPaintBrush className="mb-3 text-slate-300" size={32} />
            <p className="font-heading text-lg font-semibold text-slate-400">Coming Soon</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Choose Us</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
        We help you expand your business through tech
      </h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-12">
        We have a team of Nepal&apos;s best graphics designers to provide you with the best graphic
        design service. Therefore, we are the right choice for all your graphic design needs. Along
        with our graphics design services, some of our additional perks are as follows:
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

    {/* Other Services */}
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Other Services</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        One Solution For All Your Digital needs
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

    {/* Partners */}
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
  </>
)

export default function GraphicDesign() {
  return <ServiceLayout service={service} showDetails={false} features={features} heroImage={designerGirl} after={sections} />
}