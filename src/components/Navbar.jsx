import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import logo from '../assets/logo.svg'

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
  { title: 'Website Development', desc: 'High-performance websites built to convert.', link: '/services/website-development' },
  { title: 'App Development', desc: 'Native-quality mobile apps across platforms.', link: '/services/app-development' },
  { title: 'System / Software', desc: 'Custom software & ERP engineered for scale.', link: '/services/system-software-development' },
  { title: 'UI/UX Design', desc: 'Interfaces that are intuitive and beautiful.', link: '/services/ui-ux' },
  { title: 'SEO', desc: 'Search visibility engineered for growth.', link: '/services/seo' },
  { title: 'Social Media Marketing', desc: 'Campaigns that build engaged audiences.', link: '/services/social-media-marketing' },
  { title: 'Graphic Design', desc: 'Logos and branding that speak for you.', link: '/services/graphic-design' },
]

const pricingItems = [
  { title: 'SEO Pricing', desc: 'Standard, Professional & Premium SEO packages.', link: '/pricing/seo' },
  { title: 'Social Media Pricing', desc: 'Social media plans tailored to your budget.', link: '/pricing/social-media' },
]

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className="relative py-1 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#52a1ec] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  )
}

function DropdownButton({ label }) {
  return (
    <button
      className="flex items-center gap-1 py-1 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#52a1ec]"
    >
      {label}
      <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
    </button>
  )
}

function Dropdown({ items, grid, plain }) {
  return (
    <div className="absolute top-full left-0 pt-2 invisible opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 z-50">
      <div className={`bg-white border border-slate-200 rounded-xl shadow-xl p-3 ${grid ? 'grid w-[34rem] grid-cols-2 gap-2' : 'w-80'}`}>
        {items.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className={`group/opt flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${plain ? '' : 'hover:bg-primary-50 hover:translate-x-1'}`}
          >
            <div>
              <p className="font-medium text-gray-900 text-sm transition-colors duration-200 group-hover/opt:text-[#52a1ec]">{item.title}</p>
              <p className={`text-gray-500 text-xs mt-0.5 transition-colors duration-200 ${plain ? '' : 'group-hover/opt:text-[#52a1ec]'}`}>{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAbout, setMobileAbout] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobilePricing, setMobilePricing] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Main navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between gap-6 py-3.5">
            <a href="/" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="Blue Fox" className="h-10 w-auto" />
            </a>

            <div className="hidden lg:flex items-center gap-7">
              <NavLink to="/">Home</NavLink>

              <div className="relative group">
                <DropdownButton label="About" />
                <Dropdown items={aboutItems} />
              </div>

              <div className="relative group">
                <DropdownButton label="Services" />
                <Dropdown items={servicesItems} grid plain />
              </div>

              <div className="relative group">
                <DropdownButton label="Pricing" />
                <Dropdown items={pricingItems} />
              </div>

              <NavLink to="/our-work">Our Work</NavLink>
              <NavLink to="/career">Career</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-transparent border-2 border-[#eef1fb] text-[#0b7be5] text-sm font-semibold transition-all duration-200 hover:bg-[#eef1fb] hover:border-[#0b7be5] active:bg-[#0b7be5] active:text-white"
              >
                Quick Enquiry
              </a>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center px-5 h-11 rounded-full bg-primary text-white text-sm font-semibold transition-colors hover:bg-primary-700"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-[999]">
            <div className="absolute inset-0 bg-black/50" onClick={closeMobile} />

            <div className="absolute inset-y-0 left-0 flex w-full flex-col bg-white shadow-2xl animate-slide-in-left">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <span className="flex h-11 items-center">
                  <img src={logo} alt="Blue Fox" className="h-9 w-auto" />
                </span>
                <button
                  onClick={closeMobile}
                  className="flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <div className="flex flex-col gap-3 overflow-y-auto px-6 py-5">
                <a href="/" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
                  Home
                </a>

                <button
                  onClick={() => setMobileAbout((prev) => !prev)}
                  className="flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  About
                </button>
                {mobileAbout && (
                  <div className="flex flex-col gap-2 pl-4">
                    {aboutItems.map((item) => (
                      <a key={item.title} href={item.link} onClick={closeMobile} className="text-gray-600 text-sm hover:text-primary transition-colors">
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setMobileServices((prev) => !prev)}
                  className="flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  Services
                </button>
                {mobileServices && (
                  <div className="flex flex-col gap-2 pl-4">
                    {servicesItems.map((item) => (
                      <a key={item.title} href={item.link} onClick={closeMobile} className="text-gray-600 text-sm hover:text-primary transition-colors">
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setMobilePricing((prev) => !prev)}
                  className="flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  Pricing
                </button>
                {mobilePricing && (
                  <div className="flex flex-col gap-2 pl-4">
                    {pricingItems.map((item) => (
                      <a key={item.title} href={item.link} onClick={closeMobile} className="text-gray-600 text-sm hover:text-primary transition-colors">
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}

                <a href="/our-work" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
                  Portfolio
                </a>
                <a href="/career" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
                  Career
                </a>
                <a href="/contact" onClick={closeMobile} className="text-gray-700 font-medium hover:text-primary transition-colors">
                  Contact
                </a>

                <a
                  href="/contact"
                  onClick={closeMobile}
                  className="mt-2 px-5 py-2.5 rounded-full bg-transparent border-2 border-[#0b7be5] text-[#0b7be5] text-center font-semibold active:bg-[#0b7be5] active:text-white"
                >
                  Quick Enquiry
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}