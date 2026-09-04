import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaUsers, FaCogs, FaRocket, FaSearch, FaInstagram } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const aboutItems = [
  {
    icon: FaInfoCircle,
    title: 'Introduction',
    desc: 'Blue Fox Pvt Ltd. is a revenue-based project company specializing in the IT sector.',
    link: '/about/introduction',
  },
  {
    icon: FaCogs,
    title: 'How We Work',
    desc: 'We work in a team that ensures learning opportunities for everyone.',
    link: '/about/how-we-work',
  },
  {
    icon: FaUsers,
    title: 'Our Team',
    desc: 'We celebrate events to create some joyful moments together.',
    link: '/about/our-team',
  },
  {
    icon: FaRocket,
    title: 'Our Activities',
    desc: 'We have experienced professionals to turn your business ideas into reality.',
    link: '/about/our-activities',
  },
]

const pricingItems = [
  {
    icon: FaSearch,
    title: 'SEO Package',
    desc: 'Typically offer a range of services including keyword research.',
    link: '/pricing/seo',
  },
  {
    icon: FaInstagram,
    title: 'Social Media Package',
    desc: "Typically offer a range of services tailored to clients' needs, including.",
    link: '/pricing/social-media',
  },
]

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)
  const aboutRef = useRef(null)
  const pricingRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false)
      }
      if (pricingRef.current && !pricingRef.current.contains(e.target)) {
        setPricingOpen(false)
      }
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [])

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <Link to="/" className="text-xl font-bold text-gray-900">
        Blue Fox
      </Link>

      <div className="hidden lg:flex items-center gap-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>

        <div ref={aboutRef} className="relative">
          <button
            onClick={() => {
              setPricingOpen(false)
              setAboutOpen((prev) => !prev)
            }}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            About
            <FiChevronDown className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
          </button>

          {aboutOpen && (
            <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
              {aboutItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setAboutOpen(false)}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>

        <div ref={pricingRef} className="relative">
          <button
            onClick={() => {
              setAboutOpen(false)
              setPricingOpen((prev) => !prev)
            }}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
          >
            Pricing
            <FiChevronDown className={`transition-transform ${pricingOpen ? 'rotate-180' : ''}`} />
          </button>

          {pricingOpen && (
            <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
              {pricingItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setPricingOpen(false)}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="text-blue-600 mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/our-work" className="text-gray-600 hover:text-gray-900">Our Work</Link>
        <Link to="/career" className="text-gray-600 hover:text-gray-900">Career</Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <a href="tel:9817303073" className="text-gray-600 hover:text-gray-900 text-sm">
          9817303073
        </a>
        <Link
          to="/contact"
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          Quick Inquiry
        </Link>
      </div>
    </nav>
  )
}
