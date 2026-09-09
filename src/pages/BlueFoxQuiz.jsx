import {
  FaHome,
  FaQuestion,
  FaClock,
  FaTrophy,
  FaLayerGroup,
  FaCode,
  FaAppStore,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaForward,
} from 'react-icons/fa'
import logo from '../assets/brand/logo.svg'
import quizHero from '../assets/hero/Nerd-amico.svg'

const features = [
  {
    icon: FaQuestion,
    title: 'Career Boosting Quizzes',
    desc: 'Test yourself across a wide range of tech topics with questions that challenge your knowledge and help you grow.',
  },
  {
    icon: FaClock,
    title: 'Timed Challenges',
    desc: 'Put your speed to the test. Answer questions against the clock and see how fast you really are.',
  },
  {
    icon: FaTrophy,
    title: 'Leaderboard',
    desc: 'Compete with fellow tech enthusiasts, climb the rankings, and showcase your expertise.',
  },
  {
    icon: FaLayerGroup,
    title: 'Difficulty Levels',
    desc: 'Start easy and push yourself up to expert level — there is always a harder challenge waiting.',
  },
]

const categories = [
  { icon: FaCode, title: 'Programming & Coding', desc: 'Languages, logic, and problem-solving.' },
  { icon: FaAppStore, title: 'App Development', desc: 'Mobile frameworks and ecosystem knowledge.' },
  { icon: FaCloud, title: 'Cloud & DevOps', desc: 'Deployment, infrastructure, and CI/CD.' },
  { icon: FaDatabase, title: 'Databases', desc: 'SQL, NoSQL, and data modelling.' },
  { icon: FaBrain, title: 'AI & Machine Learning', desc: 'Intelligence, algorithms, and automation.' },
  { icon: FaForward, title: 'Web Development', desc: 'Frontend, backend, and everything in between.' },
]

export default function BlueFoxQuiz() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mini header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Blue Fox" className="h-9 w-auto" />
          </a>
          <nav className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:border-primary hover:text-[#0b7be5]"
            >
              <FaHome size={14} />
              Back to Home
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Our Product / Blue Fox Quiz
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mt-5 mb-4">
              Test Your Tech Knowledge. Level Up.
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4">
              An interactive quiz platform by Blue Fox.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
              Blue Fox Quiz is packed with fun, challenging tech quizzes — from programming and web
              development to AI and cloud. Play solo, beat the clock, climb the leaderboard, and
              sharpen the skills that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-md shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
              >
                <FaQuestion size={16} />
                Start a Quiz
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-[#0b7be5]"
              >
                Explore Topics
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <img src={quizHero} alt="Blue Fox Quiz" className="w-full max-w-lg object-contain" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase">Why Play</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          Quizzes built for tech enthusiasts
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                <feature.icon size={24} />
              </span>
              <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-[#eef1fb]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-20">
          <div className="flex items-center justify-center gap-4 text-primary mb-4">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-bold tracking-[0.25em] uppercase">Quiz Categories</p>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Choose your challenge
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <category.icon size={22} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">{category.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b7be5] px-8 py-16 text-center shadow-2xl shadow-primary/30 md:px-16">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to put your skills to the test?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Jump into a quiz now, or reach out to Blue Fox to learn more about the platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#0b7be5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaForward size={16} />
                Get Started
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0b7be5]"
              >
                <FaHome size={16} />
                Back to Blue Fox
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}