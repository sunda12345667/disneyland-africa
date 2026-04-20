import './App.css'

const attractions = [
  {
    title: 'Kingdoms of Wonder',
    text: 'A story-rich park zone inspired by African landscapes, folklore, and family adventure.',
  },
  {
    title: 'Safari Lights Parade',
    text: 'An evening procession of lantern creatures, music, dance, and castle-scale projection moments.',
  },
  {
    title: 'Future Creators Lab',
    text: 'Hands-on play spaces where kids design, build, and imagine alongside live performers.',
  },
]

const experiences = [
  'Theme park adventures for families, schools, and international visitors',
  'Resort stays, dining villages, performance spaces, and seasonal festivals',
  'Creative jobs, hospitality training, and regional tourism partnerships',
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <nav className="topbar" aria-label="Primary">
          <div className="brand-lockup">
            <span className="brand-mark">DA</span>
            <div>
              <p className="eyebrow">Destination Concept</p>
              <h1>Disneyland Africa</h1>
            </div>
          </div>
          <a className="nav-cta" href="#vision">
            Explore the vision
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">A world-class public concept website</p>
            <h2>Where imagination, hospitality, and African storytelling meet.</h2>
            <p className="hero-text">
              Disneyland Africa is presented here as a bold destination concept:
              a family entertainment resort shaped by wonder, culture, music,
              nature, and next-generation tourism experiences.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#attractions">
                See attractions
              </a>
              <a className="secondary-btn" href="#impact">
                View impact
              </a>
            </div>
          </section>

          <aside className="hero-panel" aria-label="Highlights">
            <p className="panel-title">Opening vision</p>
            <ul className="highlight-list">
              {experiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </header>

      <main>
        <section className="section-block" id="vision">
          <div className="section-heading">
            <p className="eyebrow">Vision</p>
            <h3>A flagship entertainment destination built for joy and scale.</h3>
          </div>
          <div className="content-grid">
            <p>
              This website is structured as a public-facing concept page for a
              future resort brand. It combines theme park storytelling, resort
              hospitality, event programming, and destination marketing in a
              format that can grow into a full investor, tourism, or visitor
              site.
            </p>
            <p>
              The experience is designed to feel optimistic and premium, with a
              strong visual identity that can later expand into ride pages,
              ticketing, news, job listings, and partner opportunities.
            </p>
          </div>
        </section>

        <section className="section-block" id="attractions">
          <div className="section-heading">
            <p className="eyebrow">Signature Experiences</p>
            <h3>Designed to feel cinematic, family-friendly, and memorable.</h3>
          </div>
          <div className="card-grid">
            {attractions.map((item) => (
              <article className="info-card" key={item.title}>
                <p className="card-kicker">Featured zone</p>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block split-section" id="impact">
          <div className="section-heading">
            <p className="eyebrow">Regional Impact</p>
            <h3>Entertainment can also be infrastructure for jobs and growth.</h3>
          </div>
          <div className="impact-panel">
            <div>
              <span className="impact-number">365</span>
              <p>Days of destination programming potential across parks, hotels, and festivals.</p>
            </div>
            <div>
              <span className="impact-number">4</span>
              <p>Core pillars: tourism, hospitality, creative industry, and family recreation.</p>
            </div>
            <div>
              <span className="impact-number">1</span>
              <p>Public website foundation ready to evolve into a full brand platform.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
