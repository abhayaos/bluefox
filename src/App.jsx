import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WebsiteDevelopment from './pages/services/WebsiteDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import SystemSoftwareDevelopment from './pages/services/SystemSoftwareDevelopment'
import UiUx from './pages/services/UiUx'
import Seo from './pages/services/Seo'
import SocialMediaMarketing from './pages/services/SocialMediaMarketing'
import GraphicDesign from './pages/services/GraphicDesign'
import ContentWriting from './pages/services/ContentWriting'
import PayPerClick from './pages/services/PayPerClick'
import DigitalMarketing from './pages/services/DigitalMarketing'
import SeoPricing from './pages/SeoPricing'
import SocialMediaPricing from './pages/SocialMediaPricing'
import Career from './pages/Career'
import Introduction from './pages/Introduction'
import Work from './pages/Work'
import Team from './pages/Team'
import Activities from './pages/Activities'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import OurWork from './pages/OurWork'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/system-software-development" element={<SystemSoftwareDevelopment />} />
          <Route path="/services/ui-ux" element={<UiUx />} />
          <Route path="/services/seo" element={<Seo />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          <Route path="/services/pay-per-click" element={<PayPerClick />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/career" element={<Career />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/how-we-work" element={<Work />} />
          <Route path="/about/our-team" element={<Team />} />
          <Route path="/about/our-activities" element={<Activities />} />
          <Route path="/pricing/seo" element={<SeoPricing />} />
          <Route path="/pricing/social-media" element={<SocialMediaPricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
