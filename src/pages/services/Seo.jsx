import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'seo')

export default function Seo() {
  return <ServiceLayout service={service} />
}