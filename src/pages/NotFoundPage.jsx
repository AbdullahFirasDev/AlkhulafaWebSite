import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="الصفحة غير موجودة | الخلفاء للتجارة العامة" description="الصفحة المطلوبة غير موجودة." noIndex />
      <div className="not-found container">
      <span className="eyebrow">404</span>
      <h1>الصفحة غير موجودة</h1>
      <p>الرابط الذي تبحث عنه غير متاح أو قد تم نقله.</p>
      <div className="hero-actions">
        <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
      </div>
    </div>
    </>
  )
}
