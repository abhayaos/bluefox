import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'system-software-development')

export default function SystemSoftwareDevelopment() {
  return <ServiceLayout service={service} />
}