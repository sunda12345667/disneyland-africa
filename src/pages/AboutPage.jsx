import { cultureGateway, timeline, values } from '../data/siteContent'

function AboutPage() {
  return (
    <div className="page-stack">
      <section className="content-section section-light page-intro">
        <div>
          <p className="eyebrow">About The Vision</p>
          <h2>A world-class development concept designed to elevate tourism, culture, and family recreation across Africa.</h2>
        </div>
        <p className="lead dark-lead">
          The about experience uses lighter surfaces and more breathing room to
          create clarity after the dramatic homepage. The impression is
          corporate, deliberate, and trustworthy.
        </p>
      </section>

      <section className="content-section section-dark visual-split">
        <div className="visual-copy">
          <p className="eyebrow">Cultural Identity</p>
          <h3>A modern destination with African heritage and storytelling at its core.</h3>
          <p>
            Disneyland Africa is intended to promote African culture and
            heritage while delivering safe, memorable, and family-friendly
            experiences. This blend of destination ambition and cultural
            grounding is central to the project narrative.
          </p>
        </div>
        <div className="image-frame">
          <img alt="Conceptual gateway for a cultural adventure district" src={cultureGateway} />
        </div>
      </section>

      <section className="content-section section-light">
        <div className="section-header">
          <p className="eyebrow">Core Values</p>
          <h3>Presented as a calm, premium system rather than a generic list.</h3>
        </div>
        <div className="tag-row">
          {values.map((item) => (
            <span className="tag-pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section section-dark">
        <div className="section-header">
          <p className="eyebrow">Timeline</p>
          <h3>A measured rollout from planning to full-scale destination delivery.</h3>
        </div>
        <div className="timeline-grid">
          {timeline.map((item) => (
            <article className="timeline-card" key={item.step}>
              <span>{item.step}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
