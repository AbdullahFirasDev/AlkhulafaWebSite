import { Link, useParams } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import { companyInfo, getProductBySlug, getMaterialBySlug } from '../data/catalog'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) {
    return <div className="container page-shell"><h2>المنتج غير موجود</h2></div>
  }

  const material = getMaterialBySlug(product.materialSlug)

  const shareProduct = async () => {
    const shareUrl = `${window.location.origin}/products/${product.slug}`

    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: `استعرض ${product.name} من شركة ${companyInfo.name}`,
        url: shareUrl,
      })
      return
    }

    await navigator.clipboard.writeText(shareUrl)
    window.alert('تم نسخ رابط المنتج بنجاح')
  }

  return (
    <>
      <Seo
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        image={product.image}
        canonicalUrl={`${companyInfo.siteUrl}/products/${product.slug}`}
      />
      <div className="page-shell">
      <div className="container">
        <div className="product-detail card">
          <div className="detail-image-wrap">
            <img src={product.image} alt={product.name} className="detail-image" />
          </div>

          <div className="detail-body">
            <span className="eyebrow">{material?.name || 'منتج'} </span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="detail-actions">
              <a href={companyInfo.whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={companyInfo.phoneUrl} className="btn btn-secondary">اتصال</a>
              <button type="button" className="btn btn-ghost" onClick={shareProduct}>مشاركة المنتج</button>
            </div>
          </div>
        </div>

        <section className="section-sm">
          <SectionHeader eyebrow="المواصفات" title="تفاصيل المنتج" align="left" />
          <div className="spec-grid">
            {product.specifications.map((spec) => (
              <div key={`${product.slug}-${spec.label}`} className="spec-item">
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="الخصائص" title="المميزات" align="left" />
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="الاستخدام" title="الاستعمالات" align="left" />
          <ul className="feature-list">
            {product.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </section>

        <section className="section-sm">
          <SectionHeader eyebrow="معلومات إضافية" title="تفاصيل المنتج" align="left" />
          <div className="info-panel">
            <div>
              <span>المقاس</span>
              <strong>{product.dimensions}</strong>
            </div>
            <div>
              <span>الوزن</span>
              <strong>{product.weight}</strong>
            </div>
            <div>
              <span>الاستخدام</span>
              <strong>{product.usage}</strong>
            </div>
          </div>
        </section>

        <section className="section-sm offer-box">
          <div>
            <span className="eyebrow">هل تحتاج هذا المنتج لمشروعك؟</span>
            <h3>تواصل معنا للحصول على التفاصيل والكميات والتجهيز.</h3>
          </div>
          <div className="cta-actions">
            <a href={companyInfo.whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={companyInfo.phoneUrl} className="btn btn-secondary">اتصال</a>
            <Link to="/contact" className="btn btn-ghost">إرسال استفسار</Link>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
