import {
  FaListUl,
  FaMapMarkedAlt,
  FaPaintBrush,
  FaBug,
  FaRocket,
  FaLifeRing,
} from 'react-icons/fa'

const steps = [
  {
    icon: FaListUl,
    step: '01',
    title: 'Requirement Gathering',
    desc: 'In this step, we generate a list of requirements from our clients. The requirement could be functional or technical. It acts as a basis on what the project is and generates information on how it could be tackled. Requirement gathering is the most important step in our workflow. Here, clients must coordinate with our team members on time with clear and effective information.',
    stepLabel: 'Step: 1 Requirement Gathering',
  },
  {
    icon: FaMapMarkedAlt,
    step: '02',
    title: 'Plan & Resources',
    desc: 'A plan and resources describe the strategic roadmap and assets allocated to achieve specific objectives. It entails outlining goals, timelines, budgets, and identifying the necessary tools, personnel, and materials to execute tasks effectively.',
    stepLabel: 'Step: 2 Plan & Resources',
  },
  {
    icon: FaPaintBrush,
    step: '03',
    title: 'Design & Develop',
    desc: 'Design and develop refers to the comprehensive process of conceptualizing and creating digital products or solutions, encompassing both the visual aesthetics and underlying functionality, often involving collaboration between designers and developers.',
    stepLabel: 'Step: 3 Design & Develop',
  },
  {
    icon: FaBug,
    step: '04',
    title: 'Quality Assurance',
    desc: 'This is the step in which mistakes and defects are identified and corrected to ensure better quality. For quality assurance, we ask feedback from our clients. If our work doesn\'t meet the specific quality as per the requirement, we construct a plan with our project team to fulfill the desired process. In general, our professional teams are here to develop, detect and inspect the output to deliver satisfactory outcomes to our clients.',
    stepLabel: 'Step: 4 Quality Assurance',
  },
  {
    icon: FaRocket,
    step: '05',
    title: 'Deployment',
    desc: 'Deployment is the process of releasing and installing software applications or updates onto servers, devices, or networks for end-user access, ensuring functionality, security, and performance in a live environment.',
    stepLabel: 'Step: 5 Deployment',
  },
  {
    icon: FaLifeRing,
    step: '06',
    title: 'Support & Maintenance',
    desc: 'Support and maintenance encompass ongoing assistance and upkeep provided to ensure the smooth functioning, security, and reliability of systems, software, or services, including troubleshooting, updates, and user assistance as needed.',
    stepLabel: 'Step: 6 Support & Maintenance',
  },
]

export default function Work() {
  return (
    <main className="flex-1 mb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f7fd]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-left">
          <div className="flex items-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">We Make It Happen</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 max-w-3xl">
            Working Steps We{' '}
            <span className="relative inline-block text-primary">
              Follow
              <span aria-hidden className="absolute left-0 -bottom-2 h-2 w-full -rotate-1 rounded-[50%] bg-primary-200" />
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We follow the sequential and systematic work process that results in a desirable and
            meaningful output. The series of patterns describe how something goes from being undone
            to done.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-x-16 lg:grid-cols-2">
          {steps.map((item) => (
            <div key={item.title} className="group relative border-t border-slate-200 py-9 transition-colors duration-300 hover:border-[#0b7be5]">
              <div className="flex gap-6">
                <div className="relative flex w-14 shrink-0 flex-col items-center">
                  <span className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/15 bg-white text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <item.icon size={20} />
                  </span>
                  <span className="mt-3 font-heading text-xs font-bold tracking-widest text-primary">
                    {item.step}
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#0b7be5]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}