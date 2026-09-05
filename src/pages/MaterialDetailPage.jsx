import { Link, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { companyInfo, getMaterialBySlug, getProductsByMaterialSlug } from '../data/catalog'

export default function MaterialDetailPage() {
  const { slug } = useParams()
  const material = getMaterialBySlug(slug)

  if (!material) {
    return <div className="container page-shell"><h2>المادة غير موجودة</h2></div>
  }

  const products = getProductsByMaterialSlug(slug)

  return (
    <>
      <Seo
        title={material.seo.title}
        description={material.seo.description}
        keywords={material.seo.keywords}
        image={material.image}
        canonicalUrl={`${companyInfo.siteUrl}/materials/${material.slug}`}
      />
      <div className="page-shell">
      <div className="container">
        <div className="detail-hero card">
          <div className="detail-image-wrap">
            <img src={material.image} alt={material.name} className="detail-image" />
          </div>
          <div className="detail-body">
            <span className="eyebrow">مادة رئيسية</span>
            <h1>{material.name}</h1>
            <p>{material.description}</p>
            <div className="detail-actions">
              <a href={companyInfo.whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                تواصل عبر WhatsApp
              </a>
              <Link to="/materials" className="btn btn-secondary">العودة إلى المواد</Link>
            </div>
          </div>
        </div>

        <section className="section-sm">
          <SectionHeader eyebrow="المواصفات" title="معلومات المادة" align="left" />
          <div className="spec-grid">
            {material.specificationGroups.map((spec) => (
              <div key={`${material.slug}-${spec.label}`} className="spec-item">
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="المميزات" title="ماذا يميز هذه المادة؟" align="left" />
          <ul className="feature-list">
            {material.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="الاستخدامات" title="تطبيقات المادة" align="left" />
          <ul className="feature-list">
            {material.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="المنتجات" title="المنتجات التابعة لهذه المادة" align="left" />
          <div className="cards-grid products-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
