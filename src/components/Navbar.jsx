import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

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
    desc: 'We celebrate events to create some joyful moments together.',
    link: '/about/our-team',
  },
  {
    title: 'Our Activities',
    desc: 'We have experienced professionals to turn your business ideas into reality.',
    link: '/about/our-activities',
  },
]

const pricingItems = [
  {
    title: 'SEO Package',
    desc: 'Typically offer a range of services including keyword research.',
    link: '/pricing/seo',
  },
  {
    title: 'Social Media Package',
    desc: "Typically offer a range of services tailored to clients' needs, including.",
    link: '/pricing/social-media',
  },
]

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative py-1 text-gray-600 transition-colors duration-200 hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const [mobilePricing, setMobilePricing] = useState(false)
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

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Blue Fox
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>

          <div ref={aboutRef} className="relative">
            <button
              onClick={() => {
                setPricingOpen(false)
                setAboutOpen((prev) => !prev)
              }}
              className="flex items-center gap-1 py-1 text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              About
              <FiChevronDown className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                {aboutItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    onClick={() => setAboutOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 hover:translate-x-1 transition-all duration-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/services">Services</NavLink>

          <div ref={pricingRef} className="relative">
            <button
              onClick={() => {
                setAboutOpen(false)
                setPricingOpen((prev) => !prev)
              }}
              className="flex items-center gap-1 py-1 text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              Pricing
              <FiChevronDown className={`transition-transform duration-200 ${pricingOpen ? 'rotate-180' : ''}`} />
            </button>

            {pricingOpen && (
              <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                {pricingItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    onClick={() => setPricingOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 hover:translate-x-1 transition-all duration-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/our-work">Our Work</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:9817303073" className="text-gray-600 hover:text-gray-900 text-sm">
            9817303073
          </a>
          <Link
            to="/contact"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg text-sm font-medium"
          >
            Quick Inquiry
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-3">
          <Link
            to="/"
            onClick={closeMobile}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Home
          </Link>

          <button
            onClick={() => setMobileAbout((prev) => !prev)}
            className="flex items-center justify-between text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            About
            <FiChevronDown className={`transition-transform duration-200 ${mobileAbout ? 'rotate-180' : ''}`} />
          </button>
          {mobileAbout && (
            <div className="flex flex-col gap-2 pl-4">
              {aboutItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={closeMobile}
                  className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/services"
            onClick={closeMobile}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Services
          </Link>

          <button
            onClick={() => setMobilePricing((prev) => !prev)}
            className="flex items-center justify-between text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Pricing
            <FiChevronDown className={`transition-transform duration-200 ${mobilePricing ? 'rotate-180' : ''}`} />
          </button>
          {mobilePricing && (
            <div className="flex flex-col gap-2 pl-4">
              {pricingItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={closeMobile}
                  className="text-gray-600 text-sm hover:text-green-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/our-work"
            onClick={closeMobile}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Our Work
          </Link>
          <Link
            to="/career"
            onClick={closeMobile}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Career
          </Link>
          <Link
            to="/contact"
            onClick={closeMobile}
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            Contact
          </Link>

          <a
            href="tel:9817303073"
            className="text-gray-700 font-medium hover:text-green-600 transition-colors"
          >
            9817303073
          </a>
          <Link
            to="/contact"
            onClick={closeMobile}
            className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
          >
            Quick Inquiry
          </Link>
        </div>
      )}
    </nav>
  )
}