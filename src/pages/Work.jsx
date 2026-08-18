import { Link } from 'react-router-dom'
import { assets } from '../assets'

const featuredCaseStudy = {
  brand: 'GAP',
  title: 'Summer Collection Campaign',
  description: "A creator-led campaign that drove massive engagement and cultural conversation around GAP's summer collection.",
  images: assets.work.gap,
}

const awards = [
  { title: 'Best User-Generated Content', brand: 'MAC COSMETICS' },
  { title: 'Best Use of TikTok', brand: 'ELIZABETH ARDEN' },
  { title: 'Best Always-On Campaign', brand: 'PRIMARK' },
  { title: 'Best Creator Programme', brand: 'SAMSUNG' },
  { title: 'Best Influencer Campaign', brand: 'NIKE' },
  { title: 'Best Cultural Moment', brand: 'LEGO' },
]

const caseStudies = [
  {
    brand: 'MAC COSMETICS',
    title: 'Beauty Redefined',
    description: 'A multi-creator campaign that redefined beauty standards and drove record engagement.',
    image: assets.work.mugler[0],
    awards: ['Best User-Generated Content', 'Beauty Campaign of the Year'],
  },
  {
    brand: 'ELIZABETH ARDEN',
    title: 'Influencer Campaign of the Year',
    description: 'An innovative campaign that merged heritage with modern creator culture.',
    image: assets.work.estee,
    awards: ['Influencer Campaign of the Year', 'Beauty Campaign of the Year'],
  },
  {
    brand: 'PRIMARK',
    title: 'Fashion Forward',
    description: 'An always-on influencer campaign that kept Primark at the forefront of affordable fashion.',
    image: assets.work.primark,
    awards: ['Best Always-On Influencer Campaign', 'Best Fashion & Lifestyle Campaign'],
  },
  {
    brand: 'SAMSUNG',
    title: 'Tech Meets Culture',
    description: 'A creator programme that positioned Samsung at the intersection of technology and culture.',
    image: assets.work.nike,
    awards: ['Best Tech Campaign', 'Best Creator Programme'],
  },
]

function Work() {
  return (
    <>
      {/* Hero */}
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-large">
                  We've been at the heart of creator-led campaigns for over a decade.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  We partner with brands playing the long game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - GAP */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#111' }}>
              {/* Floating GAP images */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: 48, minHeight: 500, alignItems: 'center' }}>
                {featuredCaseStudy.images.slice(0, 4).map((img, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', aspectRatio: '3/4', transform: `rotate(${(i - 1.5) * 3}deg)` }}>
                    <img src={img} alt={`GAP ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <div style={{ padding: 48, background: '#4cda56' }}>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{featuredCaseStudy.brand}</h2>
                <p style={{ fontSize: '1.1rem', marginTop: 16, color: 'rgba(255,255,255,0.9)' }}>{featuredCaseStudy.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Carousel */}
      <section className="awards-carousel">
        <div className="padding-global">
          <div className="container-large">
            <div className="slider-arrow-wrapper">
              <div className="slider-arrow" onClick={() => {
                const el = document.querySelector('.awards-wrapper')
                if (el) el.scrollBy({ left: -324, behavior: 'smooth' })
              }}>
                <img src={assets.svgs.circleArrowRight} alt="Previous" style={{ width: 20, transform: 'rotate(180deg)' }} />
              </div>
              <div className="slider-arrow" onClick={() => {
                const el = document.querySelector('.awards-wrapper')
                if (el) el.scrollBy({ left: 324, behavior: 'smooth' })
              }}>
                <img src={assets.svgs.circleArrowRight} alt="Next" style={{ width: 20 }} />
              </div>
            </div>
            <div className="awards-wrapper">
              {awards.map((award, i) => (
                <div className="award-card" key={i}>
                  <div className="award-title">{award.title}</div>
                  <div className="award-brand">{award.brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-casestudy">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <h2 className="text-size-xxlarge" style={{ marginBottom: 48 }}>CASE STUDIES</h2>
              <div className="casestudy-component">
                {caseStudies.map((cs, i) => (
                  <div className="casestudy-card" key={i}>
                    <img src={cs.image} alt={cs.brand} className="casestudy-image" />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32, background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4cda56', marginBottom: 8 }}>{cs.brand}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>{cs.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>{cs.description}</p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {cs.awards.map((a, j) => (
                          <span key={j} className="pink-pill-tag">{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="cta-component">
                <h2 className="cta-heading text-size-xxlarge">READY TO CREATE SOMETHING AMAZING?</h2>
                <Link to="/contact" className="new-button is-white">
                  <span className="new-button-text">GET IN TOUCH</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
