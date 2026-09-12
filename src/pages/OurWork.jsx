import amalawholeImg from '../assets/our-work/amalawhole.jfif'
import mohambattiImg from '../assets/our-work/mohambatti.jfif'
import rocksugarImg from '../assets/our-work/rocksugar.jfif'
import masala32Img from '../assets/our-work/32masala.jpeg'
import alasFlexseedImg from '../assets/our-work/alas-flexseed.jpeg'
import bansilamImg from '../assets/our-work/bansilam.jpeg'
import barrodriedImg from '../assets/our-work/barrodried.jpeg'
import blackcardamonImg from '../assets/our-work/blackcardamon.jpeg'
import blackpeperImg from '../assets/our-work/blackpeper.jpeg'
import blacksaltImg from '../assets/our-work/blacksalt.jpeg'
import blacksaltlandscapeImg from '../assets/our-work/blacksaltlandscape.jpeg'
import harrodiredImg from '../assets/our-work/harrodired.jpeg'
import lwangImg from '../assets/our-work/lwang.jpeg'
import lwang100Img from '../assets/our-work/lwang100.jpeg'
import moringaImg from '../assets/our-work/moringa.jpeg'
import nimkodhuloImg from '../assets/our-work/nimkodhulo.jpeg'
import sukumailImg from '../assets/our-work/sukumail.jpeg'
import timurkochopImg from '../assets/our-work/timurkochop.jpeg'
import tulsipowderImg from '../assets/our-work/tulsipowder.jpeg'
import CoverflowCarousel from '../components/CoverflowCarousel'

const projects = [
  {
    img: amalawholeImg,
    title: 'Amala Whole',
    kicker: 'Natural Wellness Product',
    text: 'Packaging and visual identity designed to position premium Himalayan amala as a trusted daily wellness product.',
  },
  {
    img: mohambattiImg,
    title: 'Moham Batti',
    kicker: 'Masala Agarbatti',
    text: 'Branding and label design for a traditional masala agarbatti line, balancing heritage with a modern shelf presence.',
  },
  {
    img: rocksugarImg,
    title: 'Rock Sugar',
    kicker: 'Pure Mishri',
    text: 'Clean label design and product packaging for natural rock sugar, crafted for clarity and premium shelf appeal.',
  },
  {
    img: masala32Img,
    title: '32 Masala',
    kicker: 'Masala Agarbatti',
    text: 'Aromatic everyday agarbatti crafted for a rich, lasting fragrance in every room.',
  },
  {
    img: alasFlexseedImg,
    title: 'Alas Flaxseed',
    kicker: 'Organic Flaxseed',
    text: 'Pure, unprocessed flaxseed celebrated for its natural nutrition and everyday wellness value.',
  },
  {
    img: bansilamImg,
    title: 'Bansi Laam',
    kicker: 'Traditional Sweet',
    text: 'An age-old Nepali sweet reimagined with clean, authentic packaging that honours its heritage.',
  },
  {
    img: barrodriedImg,
    title: 'Barro Dried',
    kicker: 'Himalayan Spice',
    text: 'Sun-dried barro spice carrying a signature mountain flavour for pickles and curries.',
  },
  {
    img: blackcardamonImg,
    title: 'Black Cardamom',
    kicker: 'Aromatic Spice',
    text: 'Smoky, bold black cardamom hand-selected for premium kitchens and spice blends.',
  },
  {
    img: blackpeperImg,
    title: 'Black Pepper',
    kicker: 'Premium Spice',
    text: 'Sharp, aromatic whole peppercorns sourced straight from Nepal farmlands.',
  },
  {
    img: blacksaltImg,
    title: 'Black Salt',
    kicker: 'Kala Namak',
    text: 'Mineral-rich kala namak with the signature savoury bite traditional cooks love.',
  },
  {
    img: blacksaltlandscapeImg,
    title: 'Black Salt Rock',
    kicker: 'Himalayan Salt',
    text: 'Stone-cut Himalayan black salt delivering authentic flavour for traditional cooking.',
  },
  {
    img: harrodiredImg,
    title: 'Harro Dried',
    kicker: 'Dried Myrobalan',
    text: 'Naturally dried harro, a trusted staple in Ayurvedic wellness routines.',
  },
  {
    img: lwangImg,
    title: 'Lwang',
    kicker: 'Clove',
    text: 'Whole cloves prized for their warm, potent aroma and everyday culinary use.',
  },
  {
    img: lwang100Img,
    title: 'Lwang 1st Grade',
    kicker: 'Premium Clove',
    text: 'Hand-graded fine cloves delivering consistent quality, colour and flavour.',
  },
  {
    img: moringaImg,
    title: 'Moringa',
    kicker: 'Moringa Powder',
    text: 'Powdered moringa leaves celebrated as a simple source of daily nutrition.',
  },
  {
    img: nimkodhuloImg,
    title: 'Nimko Dhulo',
    kicker: 'Roasted Mix Powder',
    text: 'Finely ground roasted nimko mix that adds a hearty, savoury kick to any dish.',
  },
  {
    img: sukumailImg,
    title: 'Suka Mail',
    kicker: 'Herbal Blend',
    text: 'A traditional herbal blend crafted for everyday wellbeing and comfort.',
  },
  {
    img: timurkochopImg,
    title: 'Timur Chopped',
    kicker: 'Sichuan Pepper',
    text: 'Chopped timur with the classic citrusy heat of the Himalayan pepper.',
  },
  {
    img: tulsipowderImg,
    title: 'Tulsi Powder',
    kicker: 'Holy Basil',
    text: 'Ground holy basil leaves for teas, remedies and daily wellness rituals.',
  },
]

export default function OurWork() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-[#f8f9ff] to-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-10 w-full">
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

      <section className="w-full pb-24">
        <CoverflowCarousel slides={projects} />
      </section>
    </main>
  )
}