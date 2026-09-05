import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/catalog'

export default function ProductsPage() {
  return (
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
  )
}
