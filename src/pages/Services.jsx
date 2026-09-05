const services = [
  {
    title: 'Website Development',
    tagline: 'Specialized custom website development services.',
    intro: 'Crafting Digital Excellence: Elevate Your Online Presence with Innovative Website Development Solutions. Tailored Designs, Seamless Functionality, and Future-Ready Technology – Your Journey to Success Starts Here!',
    category: 'Development',
    paragraphs: [
      'We serve a wide variety of industries including E-Commerce, Travel and Trekking, E-Learning, and Informative websites. No matter how simple or complex your project, we build it from scratch to fit your requirements.',
      'Our technology stack covers the full spectrum: Frontend (HTML, CSS, React, Next.js, TypeScript), Backend (Node.js, Python, PHP, WordPress), and Infrastructure (AWS, Google Cloud, Docker, DigitalOcean).',
      'Our development roadmap is clear and proven: Requirement Analysis, Planning, Design (UI/UX), Development, System Testing and QA, Deployment, Maintenance & Monitoring, and finally Knowledge Transfer where we train your team.',
      'Why choose us? We deliver Robust Functionality, a Client-Centric Approach, Innovative Website Design, and Timely Website Delivery on every single project.',
    ],
  },
  {
    title: 'App Development',
    tagline: 'Building custom apps for seamless user experience.',
    intro: 'Revolutionize your Digital Presence with Cutting-Edge Mobile App Development Services. From Security to Scalability, we ensure excellence at every tap with the best mobile app development services at Blue Fox!',
    category: 'Development',
    paragraphs: [
      'We build apps for E-Commerce, E-Learning, Ride-Sharing, and Logistics industries, along with fully customized applications that meet your exact business needs.',
      'Our team works across Frontend (Dart, Flutter, Swift, React Native) and Backend (JavaScript, Python, Node.js, PHP), and we publish to both the Apple App Store and Google Play Store.',
      'Our process flows through Requirement Analysis, Planning, Design (UI/UX), Development, System Testing & QA, Deployment, Maintenance & Monitoring, and Knowledge Transfer.',
      'We stand out through Robust Functionality, a Client-Centric Approach, Innovative Design, and a commitment to Timely Delivery.',
    ],
  },
  {
    title: 'System/Software Development',
    tagline: 'Cutting-edge system/software development solutions.',
    intro: 'Our experts are dedicated to providing you with customized solutions designed for your unique needs. Whether it be designing new systems from scratch, or optimizing existing ones, we are here for you! Transform your vision into reality.',
    category: 'Development',
    paragraphs: [
      'We develop custom systems and software for E-Learning, Logistics Management, Poultry Management, and GPS Tracking, in addition to bespoke solutions tailored to your business.',
      'As a leading software development company in Nepal, we combine experience with innovation to build reliable, scalable, and secure software from the ground up.',
      'Why choose us? We bring Robust Functionality, a Client-Centric Approach, Innovative System Design, and Timely Project Delivery to every engagement.',
    ],
  },
  {
    title: 'UI/UX',
    tagline: 'Design UI/UX interfaces for effortless user interaction.',
    intro: 'Elevate your online presence with the best UI/UX design agency in Nepal. At Blue Fox, we assure you of intuitive interfaces, seamless layouts, and visual brilliance. Are you prepared to redefine the essence of your digital allure?',
    category: 'Development',
    paragraphs: [
      'We design for E-Commerce, E-Learning, Travel and Trekking, and Logistics, crafting experiences that guide users smoothly toward their goals.',
      'Our design process involves research, wire-framing, prototyping, visual design, usability testing, and iteration to ensure a responsive and consistent experience across all devices.',
      'We deliver intuitive interfaces, seamless layouts, and visual brilliance, all built around the needs and preferences of your users.',
    ],
  },
  {
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Custom SEO solutions for enhanced search engine visibility and growth.',
    intro: 'Tired of pouring time and money into a website that no one visits? Blue Fox, the leading SEO agency in Nepal, will fix your online visibility issues and send customers your way. Contact us for free counseling.',
    category: 'Marketing',
    paragraphs: [
      'We provide SEO for Travel and Trekking, E-Commerce, Hospitals and Healthcare, and Educational institutes, along with tailored solutions for any industry.',
      'Our SEO roadmap covers Requirement Gathering, Industry Analysis, Website Audit, Planning of SEO Strategies, Executing SEO Strategies, Analysis and Monitoring, Progress Review, and Redefining the SEO Strategy.',
      'Our packages are flexible: Standard, Professional, and Premium, with initial results typically appearing within two months and continued growth through ongoing optimization.',
      'Why choose us? Free Consultation, Conversion Tracking, Relevant Traffic, and a strong Focus on Lead generation.',
    ],
  },
  {
    title: 'Social Media Marketing (SMM)',
    tagline: 'Build a strong online presence and engage with your targeted audience.',
    intro: 'Transform your social media presence with the epitome of SMM expertise. At Blue Fox, we guarantee captivating content, strategic engagement, and brand resonance. Are you ready to redefine your digital impact?',
    category: 'Marketing',
    paragraphs: [
      'We work across Healthcare And Hospitals, Educational Industries, Share Brokers, and Travels, adapting our strategies to any sector.',
      'Our SMM roadmap moves through Initial Consultation, Audience Analysis, Platform Selection, Content Calendar, Creative Design, Consistent Posting, Paid Advertising, and Analysis and Reporting.',
      'We manage all major platforms including Facebook, LinkedIn, and Instagram, with paid advertising and advanced analytics to maximize your return on investment.',
      'Why choose us? A Strategic Approach, Creative Content, Data-Driven Insights, and Exceptional Customer Service.',
    ],
  },
  {
    title: 'Graphic Design',
    tagline: 'Designs that speak your brand’s narrative and connect with your audience.',
    intro: 'Elevate your brand with captivating logos and comprehensive branding solutions with the best graphic design services from Blue Fox. Our creative brilliance is ideal for transforming your ideas into visual masterpieces.',
    category: 'Marketing',
    paragraphs: [
      'Our services include Branding, Flyer and Brochure design, Motion Graphics and Animation, Social Media Banners, Illustrations, and Print Designs.',
      'We get started by gathering information and planning, then move into concept and design, execution and delivery, and finally feedback and refinement to perfect every piece.',
      'We deliver Custom Illustration and Infographics, Digital Design, Brand Identity Development, and Creative Design Solutions that set your brand apart.',
    ],
  },
  {
    title: 'Content Writing',
    tagline: 'Creating content that resonates.',
    intro: 'Enhance Engagement through Compelling Narratives, Impeccable Quality, and Tailored Content Solutions. At Blue Fox, we offer top-notch content writing services to bring your ideas to life! Elevate your brand story with our expertise.',
    category: 'Marketing',
    paragraphs: [
      'We provide SEO Content Writing, Technical Content Writing, Blog Writing, Content Rewriting, Social Media Content Writing, and Company Profile Writing.',
      'Our strategy is built on a Customer Centric Approach, Keyword Research and SEO Integration, and Interactive, Shareable Content that truly connects.',
      'We aim to drive Audience Engagement, Provide Valuable Information, and boost SEO visibility — combining Client Centricity, Versatility, Consistent Quality, and Strategic SEO Integration.',
    ],
  },
  {
    title: 'Pay Per Click (PPC)',
    tagline: 'Optimized pay-per-click campaigns.',
    intro: 'Ignite your brand’s potential with the best PPC marketing services from Blue Fox! Pay only for the clicks that matter and guarantee a budget-friendly campaign. Utilize real-time analytics and strategic management for superior Return on Investment.',
    category: 'Marketing',
    paragraphs: [
      'We offer Keyword Research and Analysis, Ad Copy Creation and Optimization, Campaign Strategy and Planning, Landing Page Optimization, and Ad Extension and Format expertise.',
      'Our campaigns are built to Maximize ROI, Increase Traffic, Boost Brand Awareness, Generate Leads, and Promote Sales.',
      'We follow a clear workflow of Strategy, Planning, Execution, and Optimization, driven by data for continuous improvement.',
      'Why choose us? Strategic PPC Management with White Hat methods, Strategic Keyword Bidding, Conversion Focused Campaigns, and Data-Driven Results.',
    ],
  },
  {
    title: 'Digital Marketing',
    tagline: 'Designing digital paths that echo with audiences.',
    intro: 'At Blue Fox, we elevate your online presence, drive traffic, and boost conversion. Get tailored strategies for success in this digital age. Let\'s Transform Your Brand Together!',
    category: 'Marketing',
    paragraphs: [
      'Our digital marketing combines Social Media Marketing (SMM), Content Writing, Search Engine Optimization (SEO), Pay Per Click (PPC), and Graphic Design into one cohesive strategy.',
      'We run our business on three core principles: Result Driven delivery, Collaboration through a synergistic partnership, and Innovation by embracing fresh ideas and technology.',
      'Whether you are a small business or a large enterprise, we tailor holistic, data-driven strategies to your goals and measure the success of every campaign.',
    ],
  },
]

export default function Services() {
  return (
    <main className="flex-1 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Our Services</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">One Solution For All Your Digital Needs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From building to promoting — every service your business needs, all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <section key={service.title}>
              <div className="mb-1">
                <span className="text-xs uppercase tracking-wide text-gray-400 block">
                  {service.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mt-1">{service.title}</h2>
              </div>
              <p className="text-sm text-primary font-medium mb-3">{service.tagline}</p>

              <p className="text-gray-700 leading-relaxed mb-4">{service.intro}</p>
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}