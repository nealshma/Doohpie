import { Link } from 'react-router-dom'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

const featuredCaseStudy = {
  brand: 'STORE LAUNCH',
  title: 'Delhi Radius Campaign',
  description: "Instead of advertising across an entire city, a retail brand launching a new store in Delhi focused its campaign on a target radius around the store location - combining static billboards and digital LED screens within walking and driving distance of the new doors.",
  images: assets.work.campaignLocations,
}

const awards = [
  { title: 'High-Impact Brand Awareness', brand: 'STATIC BILLBOARDS' },
  { title: 'Dynamic Video & Dayparting', brand: 'DIGITAL LED BOARDS' },
  { title: 'Day & Night Visibility', brand: 'BACKLIT DISPLAYS' },
  { title: 'Large-Scale Urban Branding', brand: 'CONSTRUCTION COVERS' },
  { title: 'Hyperlocal Reach', brand: 'RADIUS TARGETING' },
  { title: 'Multi-City Scale', brand: 'ENTERPRISE CAMPAIGNS' },
]

const caseStudies = [
  {
    brand: 'FMCG BRAND',
    title: 'Highway Hoarding Takeover',
    description: 'Large-format roadside hoardings along major traffic corridors kept the brand impossible to miss for daily commuters.',
    image: assets.work.hoardingHighway,
    awards: ['Roadside Hoardings', 'Brand Awareness'],
  },
  {
    brand: 'QSR CHAIN',
    title: 'Dayparted Gantry Banner Campaign',
    description: 'Morning coffee creatives, afternoon retail offers and evening entertainment spots - all rotated across overhead gantry banners on one network.',
    image: assets.work.gantryBanners,
    awards: ['Gantry Banners', 'Dayparting'],
  },
  {
    brand: 'FASHION RETAILER',
    title: 'Street Pole Banner Network',
    description: 'Pole banners lining transport hubs and shopping streets delivered around-the-clock visibility through a new store launch window.',
    image: assets.work.poleBanners,
    awards: ['Street Pole Banners', 'Retail Promotion'],
  },
  {
    brand: 'REAL ESTATE DEVELOPER',
    title: 'Construction Site Domination',
    description: 'Site hoardings transformed the perimeter of a flagship development into a large-scale brand canvas in a busy urban district.',
    image: assets.work.siteHoarding,
    awards: ['Site Hoardings', 'Urban Branding'],
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
                  Geo-targeted campaigns delivered across cities, highways, transit zones and high-footfall locations.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  We partner with advertisers who start with a location, not a space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Delhi Radius Campaign */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#111' }}>
              {/* Floating campaign images */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: 48, minHeight: 500, alignItems: 'center' }}>
                {featuredCaseStudy.images.slice(0, 4).map((img, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', aspectRatio: '3/4', transform: `rotate(${(i - 1.5) * 3}deg)` }}>
                    <img src={img} alt={`Campaign location ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                  <circle cx="13.6829" cy="13.7727" r="13.6829" fill="#4cda56"/>
                  <path d="M15.5509 7.90058L21.1144 13.4641C21.4558 13.8055 21.4558 14.359 21.1144 14.7004L15.5509 20.2639C15.2095 20.6053 14.6559 20.6053 14.3145 20.2639C13.9731 19.9225 13.9731 19.369 14.3145 19.0276L18.3857 14.9565H6.0041C5.52129 14.9565 5.12988 14.5651 5.12988 14.0823C5.12988 13.5994 5.52129 13.208 6.0041 13.208H18.3857L14.3145 9.13692C13.9731 8.79552 13.9731 8.24199 14.3145 7.90058C14.6559 7.55918 15.2095 7.55918 15.5509 7.90058Z" fill="black"/>
                  <path d="M15.5509 7.90058L21.1144 13.4641C21.4558 13.8055 21.4558 14.359 21.1144 14.7004L15.5509 20.2639C15.2095 20.6053 14.6559 20.6053 14.3145 20.2639C13.9731 19.9225 13.9731 19.369 14.3145 19.0276L18.3857 14.9565H6.0041C5.52129 14.9565 5.12988 14.5651 5.12988 14.0823C5.12988 13.5994 5.52129 13.208 6.0041 13.208H18.3857L14.3145 9.13692C13.9731 8.79552 13.9731 8.24199 14.3145 7.90058C14.6559 7.55918 15.2095 7.55918 15.5509 7.90058Z" stroke="black"/>
                </svg>
              </div>
              <div className="slider-arrow" onClick={() => {
                const el = document.querySelector('.awards-wrapper')
                if (el) el.scrollBy({ left: 324, behavior: 'smooth' })
              }}>
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13.6829" cy="13.7727" r="13.6829" fill="#4cda56"/>
                  <path d="M15.5509 7.90058L21.1144 13.4641C21.4558 13.8055 21.4558 14.359 21.1144 14.7004L15.5509 20.2639C15.2095 20.6053 14.6559 20.6053 14.3145 20.2639C13.9731 19.9225 13.9731 19.369 14.3145 19.0276L18.3857 14.9565H6.0041C5.52129 14.9565 5.12988 14.5651 5.12988 14.0823C5.12988 13.5994 5.52129 13.208 6.0041 13.208H18.3857L14.3145 9.13692C13.9731 8.79552 13.9731 8.24199 14.3145 7.90058C14.6559 7.55918 15.2095 7.55918 15.5509 7.90058Z" fill="black"/>
                  <path d="M15.5509 7.90058L21.1144 13.4641C21.4558 13.8055 21.4558 14.359 21.1144 14.7004L15.5509 20.2639C15.2095 20.6053 14.6559 20.6053 14.3145 20.2639C13.9731 19.9225 13.9731 19.369 14.3145 19.0276L18.3857 14.9565H6.0041C5.52129 14.9565 5.12988 14.5651 5.12988 14.0823C5.12988 13.5994 5.52129 13.208 6.0041 13.208H18.3857L14.3145 9.13692C13.9731 8.79552 13.9731 8.24199 14.3145 7.90058C14.6559 7.55918 15.2095 7.55918 15.5509 7.90058Z" stroke="black"/>
                </svg>
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
              <h2 className="text-size-xxlarge" style={{ marginBottom: 48 }}>CAMPAIGNS</h2>
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
                <h2 className="cta-heading text-size-xxlarge">READY TO OWN YOUR LOCATION?</h2>
                <Link to="/contact" className="new-button is-white">
                  <span className="new-button-text">GET IN TOUCH</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </>
  )
}

export default Work
