import { districtFeatures, estateAerial } from '../data/siteContent'

function DistrictsPage() {
  return (
    <div className="page-stack">
      <section className="content-section section-dark page-intro">
        <div>
          <p className="eyebrow">Project Districts</p>
          <h2>Curated like a luxury development brochure with bold imagery and precise hierarchy.</h2>
        </div>
        <p className="lead">
          This page leans into a premium urban-development mood: spacious grids,
          rich dark framing, and lighter content zones that make the site feel
          architectural and investment-ready.
        </p>
      </section>

      <section className="content-section section-light visual-split reverse">
        <div className="image-frame">
          <img alt="Aerial concept of Disneyland Africa housing estate and amenities" src={estateAerial} />
        </div>
        <div className="visual-copy">
          <p className="eyebrow">Housing Estate</p>
          <h3>Modern road networks, serviced plots, recreation, schools, healthcare, and premium community planning.</h3>
          <p>
            The estate page language is intentionally clean and structured to
            support both emotional desire and practical decision-making for
            buyers, operators, and diaspora investors.
          </p>
        </div>
      </section>

      <section className="content-section section-dark">
        <div className="section-header">
          <p className="eyebrow">Masterplan Zones</p>
          <h3>Alternating cards keep the page dynamic while preserving a polished corporate rhythm.</h3>
        </div>
        <div className="district-grid">
          {districtFeatures.map((item) => (
            <article className="district-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DistrictsPage
