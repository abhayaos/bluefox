import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=9779802755605"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-700 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110">
        <FaWhatsapp size={30} />
      </span>
    </a>
  )
}