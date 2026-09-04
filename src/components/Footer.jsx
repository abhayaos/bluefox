import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa'

const devServices = [
  'Website Development',
  'App Development',
  'System/Software Development',
  'UI/UX',
]

const marketingServices = [
  'Search Engine Optimization (SEO)',
  'Social Media Marketing (SMM)',
  'Graphic Design',
  'Content Writing',
  'Pay Per Click',
  'Digital Marketing',
]

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/career' },
  { label: 'Our Work', to: '/our-work' },
]

const legalLinks = ['FAQ', 'Terms & Condition', 'Privacy Policy']

function FooterLink({ to, href, children }) {
  const base =
    "relative inline-flex items-center text-sm text-gray-600 transition-colors duration-200 hover:text-green-600 before:content-[''] before:absolute before:left-0 before:-bottom-0.5 before:h-0.5 before:w-0 before:bg-green-600 before:transition-all before:duration-300 hover:before:w-full"
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
    <footer className="bg-white text-gray-600 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Development Services</h3>
            <ul className="flex flex-col gap-3">
              {devServices.map((service) => (
                <li key={service}>
                  <FooterLink href="#">{service}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Marketing Services</h3>
            <ul className="flex flex-col gap-3">
              {marketingServices.map((service) => (
                <li key={service}>
                  <FooterLink href="#">{service}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-lg">Connect With Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-green-600">
                  <FaPhoneAlt className="text-green-600 group-hover:text-white transition-colors duration-200" size={14} />
                </span>
                <div className="flex flex-col text-sm leading-tight">
                  <FooterLink href="tel:9817303073">9817303073</FooterLink>
                  <FooterLink href="tel:9802755603">9802755603</FooterLink>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-green-600">
                  <FaEnvelope className="text-green-600 group-hover:text-white transition-colors duration-200" size={14} />
                </span>
                <FooterLink href="mailto:bluefoxpvtltd@gmail.com">
                  bluefoxpvtltd@gmail.com
                </FooterLink>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-green-600">
                  <FaMapMarkerAlt className="text-green-600 group-hover:text-white transition-colors duration-200" size={14} />
                </span>
                <span className="text-gray-600 text-sm">
                  Itahari-6, Paruhang Chowk, Nepal
                </span>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 mt-8">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-green-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Blue Fox Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}