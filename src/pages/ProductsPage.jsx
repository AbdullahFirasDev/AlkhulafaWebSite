import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { companyInfo, products } from '../data/catalog'

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="منتجات بلوك ليكا | الخلفاء للتجارة العامة"
        description="تعرّف على منتجات بلوك ليكا بمقاسات ومواصفات مختلفة من الخلفاء للتجارة العامة لتجهيز مشاريع البناء في العراق."
        keywords={['منتجات بلوك ليكا', 'بلوك 20×40', 'مواد بناء العراق', 'تجهيز مشاريع']}
        image={companyInfo.heroImage}
        canonicalUrl={`${companyInfo.siteUrl}/products`}
      />
      <div className="page-shell">
      <div className="container">
        <SectionHeader
          eyebrow="المنتجات"
          title="كل المنتجات المتاحة"
          description="استعرض مجموعة المنتجات الموثوقة والفئات المتنوعة في موقعنا، مع تفاصيل واضحة ومقاسات موثقة لتسهيل الاختيار." 
          align="left"
        />
        <div className="cards-grid products-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
