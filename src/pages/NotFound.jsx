import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHome } from 'react-icons/fa'

export default function NotFound() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 28
    const y = (e.clientY / window.innerHeight - 0.5) * 28
    setTilt({ x, y })
  }

  return (
    <main
      onMouseMove={handleMove}
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef2ff] px-6 py-20"
    >
      {/* floating orbs */}
      <div
        aria-hidden
        style={{ '--float-x': '-10px' }}
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float"
      />
      <div
        aria-hidden
        style={{ '--float-x': '16px', '--float-rotate': '8deg' }}
        className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        style={{ '--float-x': '28px' }}
        className="pointer-events-none absolute top-1/4 right-1/4 h-40 w-40 rounded-full bg-primary-100/50 blur-2xl animate-float"
      />

      {/* status pill */}
      <div className="mb-8 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Status: 404 — signal lost
        </span>
      </div>

      {/* number with parallax + messy rings */}
      <div
        aria-hidden
        className="pointer-events-none relative mb-10 select-none"
        style={{ transform: `translate(${tilt.x}px, ${tilt.y}px)` }}
      >
        <div className="animate-spin-slow absolute -inset-8 rounded-full border-2 border-dashed border-primary/30" />
        <div className="animate-sway absolute -inset-14 rounded-full border-2 border-dotted border-primary/30" />
        <div className="absolute -inset-24 rounded-full bg-gradient-to-br from-primary/10 to-primary-100/40 blur-xl" />
      </div>

      <h1
        className="relative z-10 mb-8 font-heading text-[8rem] font-bold leading-none select-none md:text-[11rem]"
        style={{ transform: `translate(${tilt.x * 1.4}px, ${tilt.y * 1.4}px)` }}
      >
        <span className="animate-gradient-x bg-gradient-to-r from-primary via-primary-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
          404
        </span>
      </h1>

      <h2 className="font-heading relative z-10 mb-3 text-center text-2xl font-bold text-slate-900 md:text-3xl">
        Oops! This page took a wrong turn.
      </h2>
      <p className="relative z-10 mb-10 max-w-md text-center text-slate-600">
        The page you're looking for doesn't exist or was moved. Let's get you back on track.
      </p>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700"
        >
          <FaHome className="transition-transform group-hover:-translate-y-0.5" />
          Back to Home
        </Link>
        <button
          onClick={() => window.history.length > 1 && window.history.back()}
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
          Go Back
        </button>
      </div>
    </main>
  )
}