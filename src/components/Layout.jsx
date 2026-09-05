import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { companyInfo, navItems } from '../data/catalog'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={handleNavClick} aria-label="العودة إلى الصفحة الرئيسية">
            <img src="/icons.svg" alt="شعار الشركة" className="brand-mark-logo" />
            <span>{companyInfo.name}</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            ☰
          </button>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  isActive || (item.to === '/' && location.pathname === '/') ? 'nav-link active' : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>{companyInfo.name}</h3>
            <p>{companyInfo.description}</p>
          </div>

          <div>
            <h4>روابط الموقع</h4>
            <ul className="footer-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>مواقعنا</h4>
            <ul className="footer-list">
              {companyInfo.locations.map((location) => (
                <li key={`${location.city}-${location.address}`}>
                  {location.city} — {location.address}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>تواصل معنا</h4>
            <ul className="footer-list socials">
              <li>
                <a href={companyInfo.whatsappUrl}>WhatsApp</a>
              </li>
              <li>
                <a href={companyInfo.phoneUrl}>اتصال</a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`}>البريد</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {companyInfo.name}. جميع الحقوق محفوظة.</div>
      </footer>
    </div>
  )
}
