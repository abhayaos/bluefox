import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBolt,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaCrown,
  FaGraduationCap,
  FaHospitalAlt,
  FaPhoneAlt,
  FaPlay,
  FaServer,
  FaShieldAlt,
  FaWrench,
} from 'react-icons/fa'

const metrics = [
  { value: '6+', label: 'Years Experience' },
  { value: '400+', label: 'Delivered Projects' },
  { value: '80+', label: 'Skilled Engineers' },
  { value: '99.98%', label: 'On-Time Delivery' },
]

const codeLines = [
  { prompt: true, text: 'bluefox deploy --target enterprise-erp --region ap-south-1' },
  { check: true, text: 'microservice: auth-gateway', tag: '[online]', tagColor: 'text-emerald-400' },
  { check: true, text: 'microservice: billing-core', tag: '[online]', tagColor: 'text-emerald-400' },
  { check: true, text: 'database: postgres-partitioned', tag: '[synced 4 shards]', tagColor: 'text-emerald-400' },
  { check: true, text: 'tests: automated (1,284 passed)', tag: '[green]', tagColor: 'text-emerald-400' },
  { check: true, text: 'build: production bundle', tag: '[optimized]', tagColor: 'text-tertiary' },
]

const stack = ['React 19', 'Next.js', 'Node.js', 'Python FastAPI', 'Flutter', 'PostgreSQL', 'AWS Cloud']

const trusts = [
  { name: 'NVR Association', icon: FaBuilding },
  { name: 'TriPary', icon: FaCrown },
  { name: 'AceOne Group', icon: FaWrench },
  { name: 'Itahari Medical', icon: FaHospitalAlt },
  { name: 'Lotus Training', icon: FaGraduationCap },
]

export default function Home() {
  return (
    <main className="flex-1">
      {/* Centered hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-xs font-semibold text-primary tracking-wide uppercase mb-8">
            <FaBolt className="text-primary" size={13} />
            Enterprise Custom Software & Digital Engineering
          </span>

          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-7">
            Transform Your Vision Into A{' '}
            <span className="relative inline-block text-primary after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-tertiary after:shadow-[0_0_16px_rgba(0,102,255,0.6)]">
              Digital Reality
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We deliver enterprise custom software, resilient cloud architecture, cutting-edge
            mobile apps, and hyper-growth performance engineering designed to scale your
            business across borders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-7 py-3.5 font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Let's Get Started
              <FaArrowRight size={15} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 hover:border-primary hover:text-primary hover:bg-primary-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FaPlay size={13} />
              Discover Our Work
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest">INSTANT CONSULTATION</span>
            <a href="tel:+9779817303073" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <FaPhoneAlt size={12} />
              +977 9817303073
            </a>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="max-w-5xl mx-auto px-6 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-primary/5 overflow-hidden">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`p-6 text-center border-slate-200 ${
                  i === 1 || i === 3 ? 'border-l' : ''
                } ${i >= 2 ? 'border-t lg:border-t-0 lg:border-l' : ''}`}
              >
                <p className="font-heading text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm text-slate-500 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal console */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-[#0b1329] border border-slate-800 shadow-[0_0_80px_-20px_rgba(0,102,255,0.55)] overflow-hidden">
          {/* Window header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs text-slate-400 font-mono hidden md:block">
                bluefox-core-cluster // node-ktm-01.sys
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                99.99% HEALTHY
              </span>
              <span className="hidden sm:inline-flex text-[11px] font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded-full px-3 py-1">
                PROD-ENV (Nepal/Sunsari)
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
            {/* Live execution stream */}
            <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="font-mono text-[13px] leading-7">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {line.prompt ? (
                      <span className="text-primary">$</span>
                    ) : (
                      <FaCheckCircle className="text-emerald-400 shrink-0" size={13} />
                    )}
                    <span className="text-slate-300">{line.text}</span>
                    {line.tag && <span className={`ml-auto shrink-0 ${line.tagColor}`}>{line.tag}</span>}
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-slate-800">
                <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance benchmarks */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-slate-300">Throughput Benchmark</p>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2.5 py-0.5">
                  +42.8% scale
                </span>
              </div>
              <p className="font-heading text-4xl font-bold text-white mb-4">
                128.4k <span className="text-base font-medium text-slate-400">req/sec</span>
              </p>

              <svg viewBox="0 0 200 60" className="w-full h-24 mb-6" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0066ff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 C20,44 30,30 45,34 C60,38 70,48 85,42 C100,36 110,20 125,24 C140,28 150,40 165,32 C180,24 190,14 200,12 L200,60 L0,60 Z"
                  fill="url(#spark)"
                />
                <path
                  d="M0,50 C20,44 30,30 45,34 C60,38 70,48 85,42 C100,36 110,20 125,24 C140,28 150,40 165,32 C180,24 190,14 200,12"
                  fill="none"
                  stroke="#0066ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <FaServer className="text-tertiary mb-2" size={16} />
                  <p className="text-[11px] text-slate-400 font-semibold tracking-wide">UPTIME SLA</p>
                  <p className="font-heading text-lg font-bold text-white">99.98%</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700 p-4">
                  <FaShieldAlt className="text-tertiary mb-2" size={16} />
                  <p className="text-[11px] text-slate-400 font-semibold tracking-wide">SECURITY SCORE</p>
                  <p className="font-heading text-lg font-bold text-white">A+ Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-center text-[11px] font-semibold text-slate-400 tracking-[0.2em] uppercase mb-6">
          Trusted by high-impact organizations & enterprises across Nepal
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trusts.map((org) => (
            <span
              key={org.name}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 hover:border-primary-200 hover:text-primary hover:shadow-md transition-all duration-200"
            >
              <org.icon className="text-primary" size={15} />
              {org.name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="rounded-2xl border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-primary-50 px-8 md:px-12 py-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Ready to engineer your next digital platform?
            </h2>
            <p className="text-slate-600 max-w-xl leading-relaxed">
              Speak directly with our senior software architects in Itahari and Kathmandu.
              No delays, guaranteed delivery timelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="tel:+9779802755603"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary text-white px-6 py-3.5 font-semibold shadow-md hover:bg-primary-900 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FaPhoneAlt size={14} />
              +977 9802755603
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3.5 font-semibold shadow-md shadow-primary/30 hover:bg-primary-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FaCalendarAlt size={14} />
              Schedule Briefing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}