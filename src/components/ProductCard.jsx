import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card card">
      <div className="card-image-wrap">
        <img src={product.image} alt={product.name} className="card-image" />
      </div>
      <div className="card-body">
        <span className="product-tag">{product.usage}</span>
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <div className="meta-row">
          {product.specifications.slice(0, 2).map((spec) => (
            <span key={`${product.slug}-${spec.label}`} className="meta-pill">
              {spec.label}: {spec.value}
            </span>
          ))}
        </div>
        <Link to={`/products/${product.slug}`} className="btn btn-secondary">
          عرض المنتج
        </Link>
      </div>
    </article>
  )
}
