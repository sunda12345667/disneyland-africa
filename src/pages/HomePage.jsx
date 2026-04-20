import { Link } from 'react-router-dom'
import {
  destinationCards,
  heroMasterplan,
  homeStats,
  sparklesIcon,
} from '../data/siteContent'

function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-panel hero-dark">
        <div className="hero-copy">
          <p className="eyebrow">Africa&apos;s Future Tourism Capital</p>
          <h2>A premium destination platform for tourism, entertainment, and economic growth.</h2>
          <p className="lead">
            Disneyland Africa is planned as a world-class tourism city in
            Badagry, Lagos State, Nigeria. The experience combines hospitality,
            entertainment, culture, housing, and infrastructure with the polish
            of a high-end global destination brand.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" to="/investment">
              View investment opportunities
            </Link>
            <Link className="button button-secondary" to="/districts">
              Explore project districts
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <img alt="Aerial vision of Disneyland Africa masterplan" src={heroMasterplan} />
          <div className="floating-insight">
            <img alt="" src={sparklesIcon} />
            <div>
              <strong>Luxury destination positioning</strong>
              <p>Bold imagery, restrained palette, and cinematic composition create an aspirational first impression.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-light split-layout">
        <div>
          <p className="eyebrow">Project Snapshot</p>
          <h3>Not a single attraction, but an integrated tourism ecosystem.</h3>
        </div>
        <div className="rich-copy">
          <p>
            The home page is structured to feel editorial and premium rather
            than promotional. It introduces the project with decisive hierarchy,
            strong visual framing, and a product-style narrative that can grow
            into a serious investor and visitor platform.
          </p>
          <p>
            The emotional tone is confident, elevated, and optimistic. The user
            experience impression should be that Disneyland Africa is ambitious,
            credible, and already behaving like a category-defining brand.
          </p>
        </div>
      </section>

      <section className="content-section section-dark">
        <div className="section-header">
          <p className="eyebrow">Key Metrics</p>
          <h3>Investment-scale numbers presented with a clean SaaS-style rhythm.</h3>
        </div>
        <div className="stats-grid">
          {homeStats.map((item) => (
            <article className="stat-card" key={item.label}>
              <span>{item.value}</span>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-light">
        <div className="section-header">
          <p className="eyebrow">Destination Components</p>
          <h3>Three primary value layers that shape the visitor and investor story.</h3>
        </div>
        <div className="feature-grid">
          {destinationCards.map((item) => (
            <article className="feature-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
