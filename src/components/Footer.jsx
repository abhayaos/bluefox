import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import worldMap from '../assets/footer/world-map-dots.svg'

const devServicesLinks = [
  { label: 'Website Development', to: '/services/website-development' },
  { label: 'App Development', to: '/services/app-development' },
  { label: 'System/Software Development', to: '/services/system-software-development' },
  { label: 'UI/UX', to: '/services/ui-ux' },
]

const quickLinks = [
  { label: 'About Us', to: '/about/introduction' },
  { label: 'Our Services', to: '/#services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Our Work', to: '/our-work' },
]

const marketingLinks = [
  { label: 'Search Engine Optimization (SEO)', to: '/services/seo' },
  { label: 'Social Media Marketing (SMM)', to: '/services/social-media-marketing' },
  { label: 'Graphic Design', to: '/services/graphic-design' },
  { label: 'Content Writing', to: '/services/content-writing' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
]

function FooterLink({ to, href, children }) {
  const base =
    "relative inline-flex items-center text-sm text-[#0b7be5] transition-colors duration-200 hover:text-primary before:content-[''] before:absolute before:left-0 before:-bottom-0.5 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={base}>
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#f8f9ff] text-slate-500 border-t border-slate-200">
      {/* Top banner */}
      <div className="bg-[#e0f1f2]">
        <div className="max-w-6xl mx-auto py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="md:max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug mb-4 flex items-center gap-5">
              <span className="w-2 self-stretch rounded-full bg-gradient-to-b from-primary via-primary-200 to-white/40" />
              <span className="text-gray-900">
                Let's connect and{' '}
                <span className="text-[#0b7be5]">transform your vision into a digital reality.</span>
              </span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We are available from 9:00 AM to 6:00 PM, Sunday to Friday.
            </p>
          </div>
          <div className="md:border-l md:border-slate-300 md:pl-8">
            <div className="relative">
              <img
                src={worldMap}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
              />
              <div className="relative z-10 flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-300 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-primary" size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                    Reach out now!
                  </p>
                  <a
                    href="tel:+9779817303073"
                    className="block font-heading text-3xl md:text-4xl font-bold text-primary hover:text-primary-700 transition-colors"
                  >
                    9817303073
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <div className="max-w-6xl mx-auto py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Development services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Development services</h3>
            <ul className="flex flex-col gap-3">
              {devServicesLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketing services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Marketing services</h3>
            <ul className="flex flex-col gap-3">
              {marketingLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Corporate Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary shrink-0 mt-0.5" size={16} />
                <span className="text-sm">
                  <span className="block font-medium text-gray-900">Head Office:</span>
                  Itahari-6, Sky Plaza, 2nd Floor,
                  <br /> Nepal
                  <span className="mt-2 flex flex-col gap-1.5">
                    <FooterLink href="tel:+9779802755605">
                      <FaPhoneAlt className="text-primary mr-1.5" size={12} />
                      +977 9802755605
                    </FooterLink>
                    <FooterLink href="tel:+9779817303073">
                      <FaPhoneAlt className="text-primary mr-1.5" size={12} />
                      +977 9817303073
                    </FooterLink>
                    <FooterLink href="mailto:itahari@bluefox.com.np">
                      <FaEnvelope className="text-primary mr-1.5" size={12} />
                      itahari@bluefox.com.np
                    </FooterLink>
                    <FooterLink href="mailto:bluefoxpvtltd@gmail.com">
                      <FaEnvelope className="text-primary mr-1.5" size={12} />
                      bluefoxpvtltd@gmail.com
                    </FooterLink>
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary shrink-0 mt-0.5" size={16} />
                <span className="text-sm">
                  <span className="block font-medium text-gray-900">Branch Office:</span>
                  Dharan 15 Sadan Road / Everest Line,
                  <br /> Meru Complex
                  <span className="mt-2 flex flex-col gap-1.5">
                    <FooterLink href="tel:+9779802755606">
                      <FaPhoneAlt className="text-primary mr-1.5" size={12} />
                      +977 9802755606
                    </FooterLink>
                    <FooterLink href="mailto:dharan@bluefox.com.np">
                      <FaEnvelope className="text-primary mr-1.5" size={12} />
                      dharan@bluefox.com.np
                    </FooterLink>
                  </span>
                </span>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-6 bg-[#0b7be5] py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6">
          <p className="text-sm font-medium text-white">
            © 2024 Blue Fox Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-transform duration-200 hover:scale-110"
            >
              <FaFacebookF size={11} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-transform duration-200 hover:scale-110"
            >
              <FaInstagram size={11} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0b7be5] transition-transform duration-200 hover:scale-110"
            >
              <FaLinkedinIn size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}