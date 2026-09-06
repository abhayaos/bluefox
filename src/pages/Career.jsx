import { FaBriefcase, FaCalendarCheck, FaUsers } from 'react-icons/fa'

const highlights = [
  { icon: FaBriefcase, title: 'Flexible Work Culture' },
  { icon: FaUsers, title: 'Awesome Work Environment' },
  { icon: FaCalendarCheck, title: '2 Days Weekend' },
]

const jobs = [
  {
    type: 'Internship',
    title: 'UX/UI Design',
    postDate: 'Post Date: 2024/12/19',
    desc: 'Join our team as a UX/UI Designer and craft intuitive and visually stunning designs for web and mobile applications. Collaborate with cross-functional teams to understand user needs and translate them into engaging experiences. If you\'re passionate about user-centered design and have a knack for creativity, we\'d love to see your portfolio!',
  },
  {
    type: 'Internship',
    title: 'React Developer',
    postDate: 'Post Date: 2024/12/19',
    desc: 'Join our team as a React Developer to build dynamic and responsive web applications. Collaborate with designers and backend engineers to create seamless user experiences. If you have expertise in React.js, JavaScript, and a passion for innovative web solutions, we\'d love to have you onboard.',
  },
  {
    type: 'Internship',
    title: 'Node/Next.js Developer',
    postDate: 'Post Date: 2024/12/19',
    desc: 'Be part of our team as a Node/Next.js Developer and work on backend and server-side rendered applications. Help us develop scalable and efficient solutions, ensuring top-notch performance and security. If you have experience in Node.js, Next.js, and API integration, this role is perfect for you!',
  },
  {
    type: 'Internship',
    title: 'Flutter Developer',
    postDate: 'Post Date: 2024/12/19',
    desc: 'Join us as a Flutter Developer and design cross-platform mobile applications with superior performance and intuitive UI/UX. Work with our team to bring innovative app ideas to life. If you love Flutter and Dart, and want to shape the future of mobile app development, apply now!',
  },
  {
    type: 'Internship',
    title: 'React Native Developer',
    postDate: 'Post Date: 2024/12/19',
    desc: 'Become a React Native Developer on our team and help create high-quality mobile applications. Focus on delivering smooth and engaging user experiences for both iOS and Android platforms. If you\'re skilled in React Native and have a passion for mobile technology, join us to make an impact!',
  },
]

export default function Career() {
  return (
    <main className="flex-1 mb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-left">
          <div className="flex items-center justify-start gap-4 text-primary">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">Career</p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4 max-w-3xl">
            Join our dynamic team dedicated to innovation and excellence.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Blue Fox is here to provide you a learning platform not only on technical aspects but
            also on emotional and social arenas. We invite you to be a part of our amazing success
            story through exciting growth opportunities. Our company can proudly say that we as
            employers feel employees as valuable assets, who are provided guidance and support in a
            dynamic environment.
          </p>

          <div className="mt-10 grid gap-4 max-w-3xl sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <item.icon size={18} />
                </span>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="mt-16">
          <p className="text-center text-primary font-medium uppercase tracking-wide mb-2">Open Roles</p>
          <hr className="w-16 border-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 text-center">Career Opportunities</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
                    {job.type}
                  </span>
                  <span className="text-sm text-slate-500">{job.postDate}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">{job.desc}</p>
                <a
                  href="mailto:bluefoxpvtltd@gmail.com?subject=Application for a Career Opportunity"
                  className="self-start inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}