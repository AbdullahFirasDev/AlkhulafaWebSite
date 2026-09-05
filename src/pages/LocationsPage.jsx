import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import { companyInfo } from '../data/catalog'

export default function LocationsPage() {
  return (
    <>
      <Seo
        title="مواقع وفروع الخلفاء للتجارة العامة في العراق"
        description="تعرف على مواقع الخلفاء للتجارة العامة في النجف الأشرف وبغداد وكربلاء وتواصل معنا لتجهيز مواد البناء."
        keywords={['مواد بناء النجف', 'مواد بناء بغداد', 'مواد بناء كربلاء', 'فروع الخلفاء']}
        image={companyInfo.heroImage}
        canonicalUrl={`${companyInfo.siteUrl}/locations`}
      />
      <div className="page-shell">
      <div className="container">
        <SectionHeader
          eyebrow="مواقعنا"
          title="فروعنا في العراق"
          description="نخدم المشاريع عبر فروع متعددة في مدن رئيسية، مع إمكانية التواصل مباشرة ومراجعة العناوين بسهولة." 
          align="left"
        />

        <div className="cards-grid locations-grid">
          {companyInfo.locations.map((location) => (
            <div key={`${location.city}-${location.address}`} className="location-card card">
              <div className="location-icon">📍</div>
              <h3>{location.city}</h3>
              <p>{location.address}</p>
              <a href={location.mapUrl} target="_blank" rel="noreferrer" className="text-link">
                عرض على الخريطة
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
