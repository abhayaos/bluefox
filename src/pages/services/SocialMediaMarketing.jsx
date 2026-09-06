import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'social-media-marketing')

export default function SocialMediaMarketing() {
  return <ServiceLayout service={service} />
}