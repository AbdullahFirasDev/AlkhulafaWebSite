import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import MaterialCard from '../components/MaterialCard'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { companyInfo, materials, products, stats } from '../data/catalog'

export default function HomePage() {
  return (
    <>
      <Seo
        title={`${companyInfo.name} | مواد بناء وتجهيز المشاريع في العراق`}
        description="الخلفاء للتجارة العامة تقدم مواد بناء بجودة موثوقة وتجهيز للمشاريع في العراق. استعرض المواد والمنتجات والمنتجات المخصصة للمقاولين."
        keywords={['الخلفاء للتجارة العامة', 'مواد بناء', 'بلوك ليكا', 'العراق', 'مقاولين']}
        image={companyInfo.heroImage}
        canonicalUrl="https://example.com/"
      />
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow light">شركة رائدة في مواد البناء</span>
            <h1>{companyInfo.name}</h1>
            <p>
              نوفر مواد البناء التي يعتمد عليها مشروعك، مع حلول موثوقة وتجهيز يناسب احتياجات
              المقاولين وأصحاب المشاريع في العراق.
            </p>
            <div className="hero-actions">
              <Link to="/materials" className="btn btn-primary">استعرض مواد البناء</Link>
              <Link to="/contact" className="btn btn-light">تواصل معنا</Link>
            </div>
          </div>
          <div className="hero-badge-box">
            <div className="badge-card">
              <strong>تجهيز المشاريع</strong>
              <span>من مواد البناء إلى التنفيذ العملي</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="من نحن"
          title="شركة متخصصة في توفير مواد البناء بجودة وثقة"
          description="الخلفاء للتجارة العامة شركة متخصصة في تجارة وتجهيز مواد البناء، وتعمل على توفير منتجات تلبي احتياجات المقاولين وأصحاب المشاريع والعملاء التجاريين مع التركيز على الجودة والموثوقية وسرعة التجهيز."
        />

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <SectionHeader
            eyebrow="مواد البناء"
            title="حلول متكاملة لمختلف مراحل البناء"
            description="نقدم مجموعة من المواد الأساسية التي تلائم المشاريع السكنية والتجارية والصناعية مع سهولة التتبع والشراء من خلال البيانات المنظمة في الموقع."
          />
          <div className="cards-grid materials-grid">
            {materials.map((material) => (
              <MaterialCard key={material.slug} material={material} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow="منتجاتنا"
          title="أبرز المنتجات المميزة"
          description="منتجات قابلة للتخصيص بحسب المشروع، مع تفاصيل دقيقة ومواصفات واضحة لتسهيل المقارنة واختيار المنتج المناسب."
        />
        <div className="cards-grid products-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">تواصل مباشر</span>
            <h3>هل تحتاج مادة بناء أو كميات للمشروع؟</h3>
            <p>نستطيع دعم احتياجاتك من المواد والتجهيز بسرعة وفعالية.</p>
          </div>
          <div className="cta-actions">
            <a href={companyInfo.whatsappUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={companyInfo.phoneUrl} className="btn btn-secondary">
              اتصال
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
