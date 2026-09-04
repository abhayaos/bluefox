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

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Development Services</h3>
            <ul className="flex flex-col gap-2">
              {devServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Marketing Services</h3>
            <ul className="flex flex-col gap-2">
              {marketingServices.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600 shrink-0" size={14} />
                <div className="flex flex-col text-sm leading-tight">
                  <a href="tel:9817303073" className="text-gray-600 hover:text-blue-600">9817303073</a>
                  <a href="tel:9802755603" className="text-gray-600 hover:text-blue-600">9802755603</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-600 shrink-0" size={14} />
                <a
                  href="mailto:bluefoxpvtltd@gmail.com"
                  className="text-gray-600 text-sm break-all hover:text-blue-600"
                >
                  bluefoxpvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600 shrink-0" size={14} />
                <span className="text-gray-600 text-sm">
                  Itahari-6, Paruhang Chowk, Nepal
                </span>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 mt-8">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
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