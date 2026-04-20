import { investmentOptions, investmentReasons } from '../data/siteContent'

function InvestmentPage() {
  return (
    <div className="page-stack">
      <section className="content-section section-light page-intro">
        <div>
          <p className="eyebrow">Investment Opportunities</p>
          <h2>A premium investor-facing page with the clarity of a modern SaaS landing system.</h2>
        </div>
        <p className="lead dark-lead">
          The experience is structured to feel composed and executive: minimal
          palette, strong spacing, and concise blocks that let the numbers and
          opportunity categories carry authority.
        </p>
      </section>

      <section className="content-section section-dark split-layout">
        <div>
          <p className="eyebrow">Why Invest</p>
          <h3>Multiple entry points into one of Africa&apos;s most ambitious tourism and infrastructure developments.</h3>
        </div>
        <div className="rich-copy">
          <p>
            Disneyland Africa offers opportunities for equity participation,
            land acquisition, hotel development, commercial real estate,
            entertainment partnerships, and infrastructure collaboration.
          </p>
          <p>
            The design language here should feel premium and strategic, giving
            investors the impression of discipline, readiness, and long-horizon
            value creation.
          </p>
        </div>
      </section>

      <section className="content-section section-light">
        <div className="section-header">
          <p className="eyebrow">Investment Options</p>
          <h3>Organized as a flexible opportunity matrix.</h3>
        </div>
        <div className="feature-grid">
          {investmentOptions.map((item) => (
            <article className="feature-card" key={item}>
              <h4>{item}</h4>
              <p>Structured to support both institutional and entrepreneurial participation.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-dark">
        <div className="section-header">
          <p className="eyebrow">Investment Reasons</p>
          <h3>Confident, concise talking points for pitch decks and stakeholder presentations.</h3>
        </div>
        <div className="tag-row">
          {investmentReasons.map((item) => (
            <span className="tag-pill dark-tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

export default InvestmentPage
