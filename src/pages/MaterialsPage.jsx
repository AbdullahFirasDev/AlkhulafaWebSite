import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import MaterialCard from '../components/MaterialCard'
import { materials } from '../data/catalog'
import Seo from '../components/Seo'
import { companyInfo } from '../data/catalog'

export default function MaterialsPage() {
  return (
    <>
      <Seo
        title="مواد البناء | الخلفاء للتجارة العامة"
        description="استعرض مواد البناء المتوفرة من الخلفاء للتجارة العامة، ومنها بلوك ليكا للمشاريع السكنية والتجارية في العراق."
        keywords={['مواد بناء العراق', 'بلوك ليكا', 'مواد بناء النجف', 'مواد بناء بغداد']}
        image={companyInfo.heroImage}
        canonicalUrl={`${companyInfo.siteUrl}/materials`}
      />
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
    </>
  )
}
