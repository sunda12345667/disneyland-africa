import { NavLink, Outlet } from 'react-router-dom'
import {
  globeIcon,
  logoMark,
  sparklesIcon,
  treeIcon,
} from '../data/siteContent'

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Districts', '/districts'],
  ['Investment', '/investment'],
  ['Contact', '/contact'],
]

function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <NavLink className="brand" to="/">
          <img alt="Disneyland Africa Development Company" src={logoMark} />
          <div>
            <p className="eyebrow">Disneyland Africa</p>
            <h1>Development Company</h1>
          </div>
        </NavLink>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map(([label, href]) => (
            <NavLink
              key={label}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              to={href}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-frame">
        <Outlet />
      </main>

      <footer className="site-footer">
        <section className="footer-hero">
          <p className="eyebrow">Brand Direction</p>
          <h2>Building Africa&apos;s greatest destination with the confidence of a premium hospitality brand.</h2>
          <p>
            The platform is designed as a high-end destination website with
            strong editorial hierarchy, alternating dark and light sections, and
            a polished investor-facing presence.
          </p>
        </section>

        <section className="footer-grid">
          <article className="footer-card">
            <img alt="" className="footer-icon" src={sparklesIcon} />
            <h3>Experience</h3>
            <p>Modern, minimal, premium, and cinematic with a warm luxury tone.</p>
          </article>

          <article className="footer-card">
            <img alt="" className="footer-icon" src={globeIcon} />
            <h3>Location</h3>
            <p>Badagry, Lagos State, Nigeria in a strategic coastal development corridor.</p>
          </article>

          <article className="footer-card">
            <img alt="" className="footer-icon" src={treeIcon} />
            <h3>Mission</h3>
            <p>Tourism, culture, infrastructure, sustainability, and family recreation at destination scale.</p>
          </article>
        </section>
      </footer>
    </div>
  )
}

export default SiteLayout
