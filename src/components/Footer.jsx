import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'

const devLinks = [
  'Website Development',
  'Mobile App Development',
  'Software & Custom ERP',
  'UI/UX Architecture',
]

const growthLinks = [
  'SEO',
  'Social Media Marketing',
  'Brand & Graphic Design',
  'Technical Content Writing',
]

const socialLinks = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedinIn, href: '#' },
  { icon: FaYoutube, href: '#' },
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
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-heading font-bold">BF</span>
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-gray-900 font-heading">Blue Fox</span>
                <span className="block text-[10px] tracking-[0.28em] text-slate-500 font-semibold">SOFTBENZ INFOSYS</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Enterprise custom software, resilient cloud architecture and hyper-growth digital
              engineering — built to scale your business across borders.
            </p>
            <div className="flex items-center gap-2 text-sm mb-6">
              <FiClock size={15} className="text-primary" />
              <span>9:00 AM - 6:00 PM Sun-Fri</span>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200"
                  aria-label="Social link"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Development</h3>
            <ul className="flex flex-col gap-3">
              {devLinks.map((link) => (
                <li key={link}>
                  <FooterLink href="#">{link}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth & Creative */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 font-heading">Growth & Creative</h3>
            <ul className="flex flex-col gap-3">
              {growthLinks.map((link) => (
                <li key={link}>
                  <FooterLink href="#">{link}</FooterLink>
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
            <Link
              to="/career"
              className="inline-flex items-center gap-2 mt-6 rounded-lg bg-primary text-white px-5 py-2.5 text-sm font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              We are hiring! Explore Careers →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Blue Fox Pvt Ltd (Softbenz Infosys). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}