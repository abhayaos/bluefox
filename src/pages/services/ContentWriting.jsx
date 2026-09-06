import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'content-writing')

export default function ContentWriting() {
  return <ServiceLayout service={service} />
}