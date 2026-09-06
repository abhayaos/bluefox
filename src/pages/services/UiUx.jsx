import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'ui-ux')

export default function UiUx() {
  return <ServiceLayout service={service} />
}