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
    <main className="flex-1 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">
            We Make It Happen
          </p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Working Steps We Follow</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow the sequential and systematic work process that results in a desirable and
            meaningful output. The series of patterns describe how something goes from being undone
            to done.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {steps.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={26} />
                </div>
                <div>
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                  <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}