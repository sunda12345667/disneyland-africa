import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <div className="page-stack">
      <section className="content-section section-dark page-intro">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>A polished contact experience that feels corporate, calm, and ready for serious inquiries.</h2>
        </div>
        <p className="lead">
          This page is intentionally minimal so the user ends with confidence.
          It should feel like the final page of a premium development brochure,
          not a casual portfolio footer.
        </p>
      </section>

      <section className="content-section section-light contact-grid">
        <article className="contact-card">
          <p className="eyebrow">Head Office</p>
          <h3>Lagos State, Nigeria</h3>
          <p>Disneyland Africa Development Company</p>
        </article>

        <article className="contact-card">
          <p className="eyebrow">Phone</p>
          <h3>Coming Soon</h3>
          <p>Dedicated channels for investors, partners, and customer support.</p>
        </article>

        <article className="contact-card">
          <p className="eyebrow">Email</p>
          <h3>Coming Soon</h3>
          <p>Official communication addresses for project and partnership inquiries.</p>
        </article>
      </section>

      <section className="content-section section-light split-layout">
        <div>
          <p className="eyebrow">Next Step</p>
          <h3>Use the routed structure to grow into separate investor, estate, and visitor flows.</h3>
        </div>
        <div className="cta-row">
          <Link className="button button-primary" to="/investment">
            Return to investment
          </Link>
          <Link className="button button-tertiary" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
