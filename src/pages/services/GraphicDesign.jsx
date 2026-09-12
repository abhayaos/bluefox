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
import dishImg from '../../assets/graphic-design/dish.avif'
import sekuwaImg from '../../assets/graphic-design/grilled sekuwa.avif'
import labourDayImg from '../../assets/graphic-design/labour day.avif'
import maferImg from '../../assets/graphic-design/mafer.avif'
import studyImg from '../../assets/graphic-design/study.avif'
import storeImg from '../../assets/graphic-design/zgvpvmZsK0aRQapQLmoxtDJFL8.avif'

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
  { icon: FaDesktop, title: 'UX/UI Design' },
  { icon: FaImage, title: 'Apparels Design' },
  { icon: FaPenNib, title: 'Labeling Design' },
  { icon: FaGem, title: 'Packaging Design' },
  { icon: FaCheck, title: 'Product Design' },
]

const marqueeWords = [
  ['Copywriting', 'Motion Graphics', 'Re-Branding', 'Package Design', 'Branding', 'Video Editing'],
  ['Digital Marketing', 'Brand Landing Pages', 'Social Media', 'Print Design', 'Brand Visibility', 'Trainings'],
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

const portfolio = [
  { name: 'Branding Design', img: dishImg },
  { name: 'Grilled Sekuwa', img: sekuwaImg },
  { name: 'Labour Day', img: labourDayImg },
  { name: 'Mafer', img: maferImg },
  { name: 'Study Campaign', img: studyImg },
  { name: 'Store Design', img: storeImg },
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

      <div className="flex flex-col gap-8">
          {[subServices.slice(0, 3), subServices.slice(3)].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div
                className={`flex w-max items-stretch gap-6 ${
                  rowIndex === 1 ? 'animate-marquee-reverse' : 'animate-marquee'
                }`}
              >
                {[...row, ...row].map((item, i) => (
                  <div
                    key={`${item.title}-${rowIndex}-${i}`}
                    className="group w-72 rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
                  >
                    <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                      <item.icon size={22} />
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>

    {/* Marquee Words */}
    <section className="max-w-6xl mx-auto px-6 pt-4 pb-8">
      <div className="flex flex-col gap-5">
        {marqueeWords.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="relative overflow-hidden py-2"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div
              className={`flex w-max items-center gap-10 ${
                rowIndex === 1 ? 'animate-marquee-reverse' : 'animate-marquee'
              }`}
            >
              {[...row, ...row, ...row].map((word, i) => (
                <span
                  key={`${word}-${rowIndex}-${i}`}
                  className="whitespace-nowrap font-heading text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-slate-200 transition-colors duration-200 hover:text-primary"
                >
                  {word}
                </span>
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

      <div className="grid gap-8 md:grid-cols-2">
        {portfolio.map((project) => (
          <div
            key={project.name}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/60 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="h-56 overflow-hidden bg-gradient-to-br from-primary-50 to-[#a9d6ff]/40 md:h-64">
              <img
                src={project.img}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="m-4 w-full rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-xl">
                <h3 className="font-heading text-lg font-semibold text-white">{project.name}</h3>
              </div>
            </div>
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

      <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-marquee flex w-max items-stretch gap-6">
            {[...partnerships, ...partnerships].map((partner, i) => (
              <div
                key={`${partner.alt}-${i}`}
                className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]"
              >
            <img src={partner.img} alt={partner.alt} className="h-14 object-contain" />
          </div>
        ))}
        </div>
        </div>
    </section>
  </>
)

export default function GraphicDesign() {
  return <ServiceLayout service={service} showDetails={false} features={features} heroImage={designerGirl} after={sections} />
}