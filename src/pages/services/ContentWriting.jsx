import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaUsers,
  FaSearch,
  FaShareAlt,
  FaComments,
  FaInfoCircle,
  FaGlobe,
  FaArrowRight,
  FaFeatherAlt,
  FaGem,
  FaSlidersH,
  FaCogs,
  FaPenNib,
  FaSync,
  FaBriefcase,
  FaChevronDown,
} from 'react-icons/fa'
import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'
import contentHero from '../../assets/home/Content Writing.svg'

const service = services.find((s) => s.slug === 'content-writing')

const features = [
  {
    icon: FaFeatherAlt,
    title: 'Compelling Narratives',
    desc: 'Stories that capture attention and drive meaningful engagement with your audience.',
  },
  {
    icon: FaGem,
    title: 'Impeccable Quality',
    desc: 'Every word researched, written, and refined for accuracy, tone, and lasting impact.',
  },
  {
    icon: FaSlidersH,
    title: 'Tailored Content Solutions',
    desc: 'Custom content aligned with your brand voice, target audience, and business goals.',
  },
]

const strategies = [
  {
    icon: FaUsers,
    title: 'Customer Centric Approach',
    desc: 'Putting your audience first with a personalized touch to meet their needs and expectations.',
  },
  {
    icon: FaSearch,
    title: 'Keyword Research and SEO Integration',
    desc: 'Strategically optimizing content to rank higher and reach your audience through targeted keywords.',
  },
  {
    icon: FaShareAlt,
    title: 'Interactive and Shareable Content',
    desc: 'Engaging content that resonates, sparks interaction, and encourages easy sharing across platforms.',
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

const contentServices = [
  {
    icon: FaSearch,
    title: 'SEO Content Writing',
    desc: 'In SEO content writing, we provide specialized content designed to engage and provide value to your customers while implementing targeted keywords. This type of content is designed to improve the visibility of your website in the Search Engine Result Pages and attract organic traffic to your website. In SEO content writing, we strategically place keywords while providing quality content and optimizing the metadata. Furthermore, we also factor in mobile friendliness and internal linking to boost the overall SEO performance.',
  },
  {
    icon: FaCogs,
    title: 'Technical Content Writing',
    desc: 'Our technical content writing service is all about providing you with precise, clear, and technical documents as per the needs of your company. This includes content such as product documentation, technical blog posts, troubleshooting guides, and FAQs, along with the terms and conditions of your company. The goal here is to convey related information precisely to your customers and audiences. Some of the key features in our technical writing include industry terminology, the creation of documents, and adherence to industry standards.',
  },
  {
    icon: FaPenNib,
    title: 'Blog Writing',
    desc: 'In this content writing service, we provide content for the blog section of your website. The content in this section is generally written in an informal tone. Furthermore, the goal of blog writing is to provide information regarding the topics associated with your services. Along with this, another goal of blog writing is to provide promotional materials for your products and services. Some of the key aspects of blog writing include information, tone, Search Engine Optimization, and modifiability.',
  },
  {
    icon: FaSync,
    title: 'Content Rewriting',
    desc: 'While writing new content is important, revising existing content and re-writing it as per the updated content standard is equally important. Therefore, with our content rewriting services, we revise your existing content while maintaining its original meaning and intent. Furthermore, we also ensure that your revised content is free from plagiarism and has improved readability. Along with this, we also ensure that the re-written content is optimized for SEO performance and has updated information.',
  },
  {
    icon: FaShareAlt,
    title: 'Social Media Content Writing',
    desc: 'Content writing isn\u2019t just for websites; it also involves creating engaging content for social media platforms. Our service excels at providing tailored social media content designed to inform, entertain, and convert your audience into leads. We create captivating captions, engaging Facebook posts, targeted copywriting, compelling descriptions, and professional messaging. If you need text that impresses and connects with your audience, trust us to fulfill all your social media content needs effectively.',
  },
  {
    icon: FaBriefcase,
    title: 'Company Profile Writing',
    desc: 'This form of content writing offers a comprehensive overview of your organization, providing key details like mission, vision, goals, values, services, and history. At Blue Fox, we craft clear, concise content to showcase your company\u2019s essential information to customers. Designed to introduce your business effectively, our content serves as an invaluable tool for engaging clients, partners, and investors. Our company profile writing includes introductions, overviews, mission/vision statements, services, achievements, and company structure.',
  },
]

const whyChooseUs = [
  {
    icon: FaUsers,
    title: 'Client Centric Approach',
    desc: 'We create tailored content that resonates with your audience, driving engagement and ensuring effective communication.',
  },
  {
    icon: FaPenNib,
    title: 'Versatility',
    desc: 'Our experts excel in various content forms, from blogs and website content to social media and technical writing.',
  },
  {
    icon: FaGem,
    title: 'Consistent Quality',
    desc: 'Our experts perform keyword research and optimize content with top SEO practices to boost your platform\u2019s visibility.',
  },
  {
    icon: FaSearch,
    title: 'Strategic SEO Integration',
    desc: 'We ensure that we maintain high standards consistently without compromising the deadlines.',
  },
]

const roadmap = [
  { number: '01', title: 'Identification', desc: 'We define content objectives and identify your target audience to align our content with your goals.' },
  { number: '02', title: 'Determining', desc: 'We select relevant, engaging topics that resonate with your customers and meet your goals.' },
  { number: '03', title: 'Research', desc: 'We conduct thorough research to identify key keywords and gather information on chosen topics.' },
  { number: '04', title: 'Define', desc: 'We determine content structure and formatting to effectively inform and engage your audience.' },
  { number: '05', title: 'Write', desc: 'After defining the content format, we write and refine it through multiple editing phases.' },
  { number: '06', title: 'SEO Compatibility', desc: 'We optimize the content for search engines, ensuring adherence to best SEO practices.' },
  { number: '07', title: 'Image and Links', desc: 'We enhance content engagement by strategically placing relevant images and complementary links.' },
  { number: '08', title: 'Upload', desc: 'We upload and regularly update finalized content on relevant platforms as needed.' },
]

const faqs = [
  {
    q: 'Why is content writing important for business?',
    a: 'Quality content builds trust, informs your audience, supports SEO, and turns visitors into customers. It is how your brand communicates value and stays visible online.',
  },
  {
    q: 'What is the significance of a consistent tone in content writing?',
    a: 'A consistent tone strengthens your brand identity, makes your content instantly recognizable, and builds familiarity and trust with your audience across every channel.',
  },
  {
    q: 'How does SEO impact content writing?',
    a: 'SEO-friendly writing uses researched keywords, clear structure, and internal links so search engines can rank your pages higher and bring more organic traffic to your site.',
  },
  {
    q: 'What is the importance of proofreading in content writing?',
    a: 'Proofreading removes errors that damage credibility, improves readability, and ensures your message is professional and clear before it reaches your audience.',
  },
  {
    q: 'How frequently should I update my content?',
    a: 'Review and refresh your key pages regularly, at least every few months, and update immediately whenever your services, pricing, or industry information change.',
  },
  {
    q: 'What makes high-quality content?',
    a: 'High-quality content is accurate, well-structured, original, and genuinely useful to the reader, while staying aligned with your brand voice and SEO goals.',
  },
  {
    q: 'How important is SEO in content writing?',
    a: 'SEO is essential. It determines whether your well-written content is ever seen. Strategically placed keywords and optimized structure connect your content with the people searching for it.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
              open ? 'border-primary-200 shadow-lg shadow-primary/10' : 'border-slate-200'
            }`}
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-heading text-base md:text-lg font-semibold text-slate-900">
                {faq.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary transition-transform duration-200 ${
                  open ? 'rotate-180' : ''
                }`}
              >
                <FaChevronDown size={14} />
              </span>
            </button>
            {open && <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

const sections = (
  <>
    {/* Intro */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-4">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Content Writing</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center">
        Delivering your message with compelling content
      </h2>
      <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mt-6 leading-relaxed">
        Enhance Engagement through Compelling Narratives, Impeccable Quality, and Tailored Content
        Solutions. At Blue Fox, we offer top-notch content writing services to bring your ideas to
        life! Elevate your brand&apos;s story with our expertise in crafting captivating and impactful
        content.
      </p>
      <div className="mt-10 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#0b7be5] px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
        >
          Let&apos;s Start Conversation
          <FaArrowRight size={15} />
        </Link>
      </div>
    </section>

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

    {/* Content Writing Services */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Services</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-12">
        Content Writing Services
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {contentServices.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <item.icon size={22} />
              </span>
              <h3 className="font-heading text-xl font-semibold text-slate-700">{item.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-20">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">Why choose us</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-4">
        We help you expand your business through tech
      </h2>
      <p className="text-slate-600 text-lg max-w-3xl mx-auto text-center mb-12 leading-relaxed">
        Blue Fox has a team of highly skilled content and copywriters to provide you with the content
        of your choice. Therefore, we are the right choice for all your content needs. Along with our
        exceptional and responsive content writing services, some of our additional perks are as
        follows:
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((perk) => (
          <div
            key={perk.title}
            className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
              <perk.icon size={22} />
            </span>
            <h3 className="font-heading text-lg font-semibold text-slate-900 mb-3">{perk.title}</h3>
            <p className="text-slate-600 leading-relaxed">{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Roadmap */}
    <section className="bg-[#a9d6ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Roadmap</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-3">
          How We Get Started
        </h2>
        <p className="text-slate-600 text-lg text-center mb-12">
          A clear and proven path from idea to impactful content
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step) => (
            <div
              key={step.number}
              className="flex flex-col rounded-2xl bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-heading text-4xl font-bold leading-none text-primary/20 mb-4">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24">
      <div className="flex items-center justify-center gap-4 text-primary mb-4">
        <span className="h-px w-10 bg-primary" />
        <p className="text-xs font-bold tracking-[0.25em] uppercase">FAQs</p>
        <span className="h-px w-10 bg-primary" />
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto leading-relaxed">
        Welcome to our FAQ section! Here you&apos;ll find quick answers to the most common questions
        about our products and services.
      </p>
      <Faq />
    </section>
  </>
)

export default function ContentWriting() {
  return <ServiceLayout service={service} showDetails={false} features={features} heroImage={contentHero} after={sections} />
}