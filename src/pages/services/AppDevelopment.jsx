import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'app-development')

export default function AppDevelopment() {
  return <ServiceLayout service={service} />
}