import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <div className="flex w-full max-w-md items-center">
        <div className="flex items-center justify-center px-8 py-12">
          <span className="font-heading text-6xl font-bold text-slate-900">404</span>
        </div>
        <div className="h-16 w-px self-center bg-slate-300" />
        <div className="flex flex-1 items-center justify-center px-8 py-12">
          <p className="text-center font-medium text-slate-600">Page not found</p>
        </div>
      </div>
      <Link
        to="/"
        className="mt-8 rounded-full bg-[#0b7be5] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary-700"
      >
        Back to Home
      </Link>
    </main>
  )
}