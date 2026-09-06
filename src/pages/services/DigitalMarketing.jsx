import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'digital-marketing')

export default function DigitalMarketing() {
  return <ServiceLayout service={service} />
}