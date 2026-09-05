import SectionHeader from '../components/SectionHeader'
import { companyInfo, stats } from '../data/catalog'

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="container narrow-layout">
        <SectionHeader
          eyebrow="عن الشركة"
          title="نقدم حلولاً موثوقة في تجارة مواد البناء"
          description="تأسست الشركة لتعزيز جودة التجهيز في المشاريع الإنشائية وتلبية احتياجات السوق العراقي من مواد البناء ذات الأداء الموثوق." 
          align="left"
        />

        <div className="about-layout">
          <div className="about-copy">
            <p>
              {companyInfo.description}
            </p>
            <p>
              نحن نركز على الجودة والموثوقية وسرعة التجهيز، مع خدمتك في مختلف المشاريع السكنية
              والتجارية والصناعية. يهدف عملنا إلى أن نكون شريكًا موثوقًا للمقاولين وأصحاب المشاريع
              والعملاء التجاريين في العراق.
            </p>
          </div>

          <div className="stats-grid stacked">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
