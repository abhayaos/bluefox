import ServiceLayout from '../../components/ServiceLayout'
import services from '../../data/services'

const service = services.find((s) => s.slug === 'graphic-design')

export default function GraphicDesign() {
  return <ServiceLayout service={service} />
}