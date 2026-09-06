import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'pay-per-click')

export default function PayPerClick() {
  return <ServiceLayout service={service} />
}