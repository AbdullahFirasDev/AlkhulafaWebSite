import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import MaterialCard from '../components/MaterialCard'
import { materials } from '../data/catalog'

export default function MaterialsPage() {
  return (
    <div className="page-shell">
      <div className="container">
        <SectionHeader
          eyebrow="مواد البناء"
          title="قائمة المواد المتوفرة"
          description="تجميع شامل للمواد الأساسية التي تقدمها الشركة، مع تفاصيل واضحة تجعل البحث عن المنتج المناسب أسهل." 
          align="left"
        />
        <div className="cards-grid materials-grid">
          {materials.map((material) => (
            <MaterialCard key={material.slug} material={material} />
          ))}
        </div>
        <div className="inline-cta">
          <Link to="/products" className="btn btn-primary">استعراض جميع المنتجات</Link>
        </div>
      </div>
    </div>
  )
}
