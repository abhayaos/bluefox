import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

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
  { label: 'Pay Per Click', to: '/services/pay-per-click' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
]

function FooterLink({ to, href, children }) {
  const base =
    "relative inline-flex items-center text-sm text-slate-500 transition-colors duration-200 hover:text-primary before:content-[''] before:absolute before:left-0 before:-bottom-0.5 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
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
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="md:max-w-xl">
            <h2 className="font-heading text-2xl md:text-[2rem] font-bold leading-snug mb-3 flex items-center gap-4">
              <hr className="self-stretch w-1.5 border-0 rounded-full bg-gradient-to-b from-white via-tertiary to-white/40" />
              <span className="bg-gradient-to-r from-white via-[#dce9ff] to-tertiary bg-clip-text text-transparent">
                Let's connect and transform your vision into a digital reality.
              </span>
            </h2>
            <p className="text-white/70 text-sm md:text-base">
              We are available from 9:00 AM to 6:00 PM, Monday to Friday.
            </p>
          </div>
          <div className="md:border-l md:border-white/25 md:pl-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-white/10 border border-white/25 flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-white" size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                  Reach out now!
                </p>
                <a
                  href="tel:+9779817303073"
                  className="block font-heading text-2xl md:text-3xl font-bold text-white hover:text-white/90 transition-colors"
                >
                  9817303073
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <div className="max-w-6xl mx-auto px-6 py-16">
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
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary shrink-0" size={16} />
                <span className="text-sm">
                  Itahari-6, Paruhang Chowk,
                  <br /> Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary shrink-0" size={16} />
                <div className="flex flex-col text-sm leading-tight">
                  <FooterLink href="tel:+9779817303073">+977 9817303073</FooterLink>
                  <FooterLink href="tel:+9779802755603">+977 9802755603</FooterLink>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" size={16} />
                <FooterLink href="mailto:bluefoxpvtltd@gmail.com">
                  bluefoxpvtltd@gmail.com
                </FooterLink>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-slate-200" />
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-6 text-sm">
          <a href="#" className="text-slate-500 hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#" className="text-slate-500 hover:text-primary transition-colors">
            Terms & Condition
          </a>
          <a href="#" className="text-slate-500 hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
        <hr className="border-slate-200" />
        <div className="py-6 text-left">
          <p className="text-sm text-slate-500">
            © 2024 Blue Fox Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}