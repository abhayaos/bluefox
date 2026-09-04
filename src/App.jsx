import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
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
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
           <Route path="/contact" element={<Contact />} />
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
