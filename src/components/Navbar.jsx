import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaPaw,
} from 'react-icons/fa'
import {
  FiChevronDown,
  FiClock,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiUser,
  FiX,
} from 'react-icons/fi'

const aboutItems = [
  {
    title: 'Introduction',
    desc: 'Blue Fox Pvt Ltd. is a revenue-based project company specializing in the IT sector.',
    link: '/about/introduction',
  },
  {
    title: 'How We Work',
    desc: 'We work in a team that ensures learning opportunities for everyone.',
    link: '/about/how-we-work',
  },
  {
    title: 'Our Team',
    desc: 'We have experienced professionals to turn your business ideas into reality.',
    link: '/about/our-team',
  },
  {
    title: 'Our Activities',
    desc: 'We celebrate events to create some joyful moments together.',
    link: '/about/our-activities',
  },
]

const servicesItems = [
  { title: 'Website Development', desc: 'High-performance websites built to convert.', link: '/services' },
  { title: 'App Development', desc: 'Native-quality mobile apps across platforms.', link: '/services' },
  { title: 'System / Software', desc: 'Custom software & ERP engineered for scale.', link: '/services' },
  { title: 'UI/UX Design', desc: 'Interfaces that are intuitive and beautiful.', link: '/services' },
  { title: 'SEO', desc: 'Search visibility engineered for growth.', link: '/services' },
  { title: 'Social Media Marketing', desc: 'Campaigns that build engaged audiences.', link: '/services' },
]

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative py-1 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function DropdownButton({ label, open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 py-1 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-gray-900"
    >
      {label}
      <FiChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
    </button>
  )
}

function Dropdown({ items }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-50">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-50 hover:translate-x-1 transition-all duration-200"
        >
          <div>
            <p className="font-medium text-gray-900 text-sm">{item.title}</p>
            <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false)
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-secondary text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="tel:+9779817303073" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FiPhone size={13} />
              <span>+977 9817303073</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <FiClock size={13} />
              <span>9:00 AM - 6:00 PM Sun-Fri</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <FiMapPin size={13} />
              <span>Itahari-6, Sunsari, Nepal</span>
            </span>
            <a href="mailto:bluefoxpvtltd@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <FiMail size={13} />
              <span className="hidden sm:inline">bluefoxpvtltd@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-6 py-3.5">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <FaPaw className="text-white" size={18} />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-gray-900 font-heading">Blue Fox</span>
                <span className="block text-[10px] tracking-[0.28em] text-slate-500 font-semibold">SOFTBENZ INFOSYS</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-7">
              <NavLink to="/">Home</NavLink>

              <div ref={aboutRef} className="relative">
                <DropdownButton
                  label="About"
                  open={aboutOpen}
                  onClick={() => {
                    setServicesOpen(false)
                    setAboutOpen((prev) => !prev)
                  }}
                />
                {aboutOpen && <Dropdown items={aboutItems} />}
              </div>

              <div ref={servicesRef} className="relative">
                <DropdownButton
                  label="Services"
                  open={servicesOpen}
                  onClick={() => {
                    setAboutOpen(false)
                    setServicesOpen((prev) => !prev)
                  }}
                />
                {servicesOpen && <Dropdown items={servicesItems} />}
              </div>

              <NavLink to="/pricing/seo">Pricing</NavLink>
              <NavLink to="/our-work">Portfolio</NavLink>
              <NavLink to="/career">Career</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-200"
              >
                Quick Enquiry
              </Link>
              <button
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors"
                aria-label="Profile"
              >
                <FiUser size={16} />
              </button>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
            <Link to="/" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <button
              onClick={() => setMobileAbout((prev) => !prev)}
              className="flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
            >
              About
              <FiChevronDown className={`transition-transform duration-200 ${mobileAbout ? 'rotate-180' : ''}`} />
            </button>
            {mobileAbout && (
              <div className="flex flex-col gap-2 pl-4">
                {aboutItems.map((item) => (
                  <Link key={item.title} to={item.link} onClick={closeMobile} className="text-gray-600 text-sm hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileServices((prev) => !prev)}
              className="flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
            >
              Services
              <FiChevronDown className={`transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="flex flex-col gap-2 pl-4">
                {servicesItems.map((item) => (
                  <Link key={item.title} to={item.link} onClick={closeMobile} className="text-gray-600 text-sm hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/pricing/seo" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/our-work" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/career" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
              Career
            </Link>
            <Link to="/contact" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={closeMobile}
              className="mt-2 px-5 py-2.5 rounded-full bg-primary text-white text-center font-semibold shadow-md shadow-primary/30"
            >
              Quick Enquiry
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}