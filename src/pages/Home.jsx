import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa'

import webdev from '../assets/home/Website_developlent.svg'
import appdev from '../assets/home/App_Development.svg'
import systemdev from '../assets/home/Programmer-amico.svg'
import uiux from '../assets/home/UI_UX.svg'
import seo from '../assets/home/SEO_analytics_team-amico.svg'
import smm from '../assets/home/Mobile_Marketing-pana.svg'
import graphicdesign from '../assets/home/Website_Creator-pana.svg'
import contentwriting from '../assets/home/Content Writing.svg'

import heroImg from '../assets/hero/Nerd.gif'

import nvaImg from '../assets/home/nva.png'
import imImg from '../assets/home/im.png'
import aceomeImg from '../assets/home/aceome.png'

import htmlImg from '../assets/web-dev/html.png'
import cssImg from '../assets/web-dev/css.png'
import javascriptImg from '../assets/web-dev/javascript.png'
import reactImg from '../assets/web-dev/react.png'
import nextjsImg from '../assets/web-dev/nextjs.png'
import phpImg from '../assets/web-dev/php.png'
import laravelImg from '../assets/web-dev/laravell.png'
import djangoImg from '../assets/web-dev/django.png'
import pythonImg from '../assets/web-dev/python.png'
import nodejsImg from '../assets/web-dev/nodejs.png'
import wordpressImg from '../assets/web-dev/wordpress.png'
import figmaImg from '../assets/web-dev/figma.png'

import flutterImg from '../assets/app-dev/flutter.png'
import dartImg from '../assets/app-dev/dart.png'
import kotlinImg from '../assets/app-dev/kotlin.png'
import swiftImg from '../assets/app-dev/swift.png'
import nativeImg from '../assets/app-dev/native.png'
import appstoreImg from '../assets/app-dev/appstore.png'

import mongoImg from '../assets/database/mongo.png'
import mysqlImg from '../assets/database/mysql.png'
import posqlImg from '../assets/database/posql.png'
import redisImg from '../assets/database/redis.png'
import sqliteImg from '../assets/database/sqllte.png'

import awsImg from '../assets/cloud/aws.png'
import gcpImg from '../assets/cloud/googlecloud.png'
import dockerImg from '../assets/cloud/docker.png'
import kubernetesImg from '../assets/cloud/kubernetes.png'
import cloudflareImg from '../assets/cloud/cloudfare.png'

const expertiseTabs = [
  {
    id: 'web',
    label: 'Web Development',
    items: [
      { name: 'HTML', img: htmlImg },
      { name: 'CSS', img: cssImg },
      { name: 'JavaScript', img: javascriptImg },
      { name: 'React', img: reactImg },
      { name: 'Next.js', img: nextjsImg },
      { name: 'PHP', img: phpImg },
      { name: 'Laravel', img: laravelImg },
      { name: 'Django', img: djangoImg },
      { name: 'Python', img: pythonImg },
      { name: 'Node.js', img: nodejsImg },
      { name: 'WordPress', img: wordpressImg },
      { name: 'Figma', img: figmaImg },
    ],
  },
  {
    id: 'app',
    label: 'App Development',
    items: [
      { name: 'Flutter', img: flutterImg },
      { name: 'Dart', img: dartImg },
      { name: 'Kotlin', img: kotlinImg },
      { name: 'Swift', img: swiftImg },
      { name: 'React Native', img: nativeImg },
      { name: 'App Store', img: appstoreImg },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'MongoDB', img: mongoImg },
      { name: 'MySQL', img: mysqlImg },
      { name: 'PostgreSQL', img: posqlImg },
      { name: 'Redis', img: redisImg },
      { name: 'SQLite', img: sqliteImg },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    items: [
      { name: 'AWS', img: awsImg },
      { name: 'Google Cloud', img: gcpImg },
      { name: 'Docker', img: dockerImg },
      { name: 'Kubernetes', img: kubernetesImg },
      { name: 'Cloudflare', img: cloudflareImg },
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'Requirement Gathering',
    desc: 'We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.',
  },
  {
    number: '02',
    title: 'Plan & Resources',
    desc: 'After gathering requirements, we devise a strategic path and select resources. As the best IT company in Nepal, we offer clients a roadmap, laying the groundwork for a successful project.',
  },
  {
    number: '03',
    title: 'Design & Develop',
    desc: 'In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality.',
  },
  {
    number: '04',
    title: 'Quality Assurance',
    desc: 'In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability.',
  },
  {
    number: '05',
    title: 'Deployment',
    desc: 'Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently.',
  },
  {
    number: '06',
    title: 'Support & Maintenance',
    desc: 'In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence.',
  },
]

const whoStats = [
  { value: '6+', label: 'Years of Experience In This Field' },
  { value: '400+', label: 'Projects Completed In The Past Years' },
  { value: '80+', label: 'Skilled Team Members' },
]

const serviceImages = {
  webdev,
  appdev,
  systemdev,
  uiux,
  seo,
  smm,
  graphicdesign,
  contentwriting,
}

const metrics = [
  { value: '6+', label: 'Years Experience', icon: FaCalendarAlt },
  { value: '400+', label: 'Delivered Projects', icon: FaProjectDiagram },
  { value: '80+', label: 'Skilled Engineers', icon: FaUsers },
  { value: '99.98%', label: 'On-Time Delivery', icon: FaClock },
]

const services = [
  { avtar:'webdev', title: 'Website Development', desc: 'Highly functional & visually appealing website designed to meet your need.', link: '/services/website-development' },
  { avtar: "appdev", title: 'App Development', desc: 'Innovative and user-friendly mobile application designed to engage users.', link: '/services/app-development' },
  { avtar:"systemdev", title: 'System/Software Development', desc: 'System/software developed according to your business needs.', link: '/services/system-software-development' },
  { avtar:"uiux", title: 'UI/UX', desc: 'Design eye-catching UI/UX interfaces for effortless user interaction', link: '/services/ui-ux' },
  { avtar:"seo", title: 'Search Engine Optimization (SEO)', desc: 'Custom SEO solutions for enhanced search engine visibility and growth', link: '/services/seo' },
  { avtar: "smm", title: 'Social Media Marketing (SMM)', desc: 'Build a strong online presence and engage with your targeted audience', link: '/services/social-media-marketing' },
  { avtar: "graphicdesign", title: 'Graphic Design', desc: 'Designs that Speak Your Brand\u2019s Narrative and Connect with Your Audience', link: '/services/graphic-design' },
  { avtar: "contentwriting", title: 'Content Writing', desc: 'Engaging and meaningful content to connect with your audience', link: '/services/content-writing' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('web')
  const currentTab = expertiseTabs.find((tab) => tab.id === activeTab)

  return (
    <main className="flex-1">
      {/* lefted hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-left">
              <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-slate-900 mb-7">
                Transform Your Vision Into A{' '}
                <span className="relative inline-block text-primary">
                  Digital Reality
                  <span aria-hidden className="absolute left-0 -bottom-2 h-2 w-full -rotate-1 rounded-[50%] bg-primary-200" />
                  <span aria-hidden className="absolute left-3 -bottom-4 h-1.5 w-[88%] rotate-2 rounded-full bg-primary-100" />
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
                We deliver enterprise custom software, resilient cloud architecture, cutting-edge
                mobile apps, and hyper-growth performance engineering designed to scale your
                business across borders.
              </p>

              <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-primary text-white px-9 py-3.5 font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Let's Get Started
                </Link>
                <Link
                  to="/our-work"
                  className="relative inline-flex items-center px-4 py-3.5 font-semibold text-slate-700 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  Discover Our Work
                </Link>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 tracking-widest">INSTANT CONSULTATION</span>
                <a href="tel:+9779817303073" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  <FaPhoneAlt size={12} />
                  +977 9817303073
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src={heroImg} alt="Blue Fox hero illustration" className="w-full max-w-lg object-contain" />
            </div>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="max-w-5xl mx-auto px-6 pb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-primary/10 overflow-hidden">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`group flex flex-col items-center gap-3 p-6 md:p-7 text-center border-slate-200 ${
                  i === 1 || i === 3 ? 'border-l' : ''
                } ${i >= 2 ? 'border-t lg:border-t-0 lg:border-l' : ''}`}
              >
                <span className="w-11 h-11 rounded-xl bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <metric.icon size={18} />
                </span>
                <p className="font-heading text-3xl font-bold bg-gradient-to-r from-primary to-primary-200 bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Services</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 text-center mb-4">
          Exceptional Services For Your Business Growth
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Discover our wide range of digital solutions to enhance your online presence.{' '}
          <Link to="/services" className="font-semibold text-[#0b7be5] hover:underline">
            See all
          </Link>
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (

            <Link
              key={service.title}
              to={service.link}
              className="group bg-white rounded-2xl p-7 hover:bg-[#a9d6ff] transition-colors duration-300"
            >
              <div className="w-full flex items-center justify-center mb-5 py-4 rounded-xl bg-primary-50/60">
                <img src={serviceImages[service.avtar]} alt={service.title} className="w-36 h-36 object-contain" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Expertise */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Expertise</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 text-center mb-4">
          Technologies We Rely On to Achieve Success
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          A modern technology stack powering fast, secure, and scalable digital products.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="lg:w-64 shrink-0 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {expertiseTabs.map((tab) => (
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
              {currentTab.items.map((item) => (
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

      {/* How We Work */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">How We Work</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 text-center mb-4">
          Enjoy seamless service with our easy steps!
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Efficient workflow from requirement gathering to support and maintenance.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl bg-[#eef1fb] p-8 transition-colors duration-300 hover:bg-[#a9d6ff]"
            >
              <span className="font-heading text-5xl font-bold text-[#0b7be5]">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="flex items-center gap-4 text-primary mb-4">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs font-bold tracking-[0.25em] uppercase">Who we are</p>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 leading-snug mb-5">
              We are a top IT company in Nepal, committed to providing comprehensive digital solutions to enhance your online presence.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Let&apos;s join hands and work together to take your brand to the next level with the best IT services.
            </p>
            <Link
              to="/about/introduction"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-md shadow-primary/30 hover:bg-primary-700 transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-md">
              <span className="absolute -top-10 -right-8 z-0 h-40 w-40 rounded-full bg-primary/10" />
              <span className="absolute -bottom-12 -left-10 z-0 h-52 w-52 rounded-full bg-primary/20" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-72 w-72 rounded-full bg-[#a9d6ff]/50" />

              <div className="relative z-10 rounded-3xl bg-white p-8 shadow-xl shadow-primary/10">
                {whoStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-6 border-b border-slate-100 py-6 first:pt-0 last:border-0 last:pb-0"
                  >
                    <span className="font-heading text-5xl font-bold bg-gradient-to-r from-primary to-primary-200 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-slate-700 font-medium leading-snug max-w-[60%]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Testimonials</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 text-center">
          What Our Clients Says
        </h2>
      </section>

      {/* Our Valued Partners */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Our Valued Partners</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-900 text-center mb-12">
          Trusted by Top-Rated Companies
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]">
            <img src={nvaImg} alt="NVA" className="h-14 object-contain" />
          </div>
          <div className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]">
            <img src={imImg} alt="IM" className="h-14 object-contain" />
          </div>
          <div className="flex h-24 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:bg-[#a9d6ff]">
            <img src={aceomeImg} alt="Aceome" className="h-14 object-contain" />
          </div>
        </div>
      </section>

      </main>
  )
}