import { Link } from 'react-router-dom'

export default function MaterialCard({ material }) {
  return (
    <article className="material-card card">
      <div className="card-image-wrap">
        <img src={material.image} alt={material.name} className="card-image" />
      </div>
      <div className="card-body">
        <h3>{material.name}</h3>
        <p>{material.shortDescription}</p>
        <ul className="detail-list compact">
          {material.specificationGroups.slice(0, 3).map((spec) => (
            <li key={`${material.slug}-${spec.label}`}>
              <strong>{spec.label}:</strong> {spec.value}
            </li>
          ))}
        </ul>
        <Link to={`/materials/${material.slug}`} className="btn btn-primary">
          استعرض منتجات {material.name}
        </Link>
      </div>
    </article>
  )
}
