export default function OurWork() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-[#f8f9ff] to-white">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-10 w-full">
        <div className="flex items-center justify-center gap-4 text-primary mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-500">Our Work</p>
          <span className="h-px w-10 bg-primary" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Projects We're Proud Of
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto text-center mt-4">
          A glimpse into the digital solutions we've built for our clients.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 w-full">
        <div className="flex items-center justify-center py-24 px-6 text-center">
          <p className="text-xl text-slate-500">No work available yet</p>
        </div>
      </section>
    </main>
  )
}