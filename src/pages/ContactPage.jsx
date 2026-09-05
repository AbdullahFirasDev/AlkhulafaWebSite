import SectionHeader from '../components/SectionHeader'
import { companyInfo } from '../data/catalog'

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="container narrow-layout">
        <SectionHeader
          eyebrow="تواصل معنا"
          title="للطلبات والاستفسارات والتجهيز"
          description="يمكنك التواصل معنا مباشرة للحصول على التفاصيل والكميات والأسعار المناسبة لمشروعك."
          align="left"
        />

        <div className="contact-grid">
          <div className="card contact-card">
            <h3>معلومات التواصل</h3>
            <ul className="footer-list contact-list">
              {companyInfo.phoneNumbers.map((phone) => (
                <li key={phone}>
                  <strong>الهاتف:</strong> <a href={`tel:${phone}`}>{phone}</a>
                </li>
              ))}
              <li>
                <strong>WhatsApp:</strong> <a href={companyInfo.whatsappUrl}>{companyInfo.whatsappNumber}</a>
              </li>
              <li>
                <strong>البريد:</strong> <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>

          <div className="card contact-card">
            <h3>مواقعنا</h3>
            <ul className="footer-list contact-list">
              {companyInfo.locations.map((location) => (
                <li key={`${location.city}-${location.address}`}>
                  <strong>{location.city}:</strong> {location.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
