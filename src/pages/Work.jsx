import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'
import {
  EASE,
  fadeUp,
  staggerContainer,
  SplitWords,
  MagneticLink,
  AnimatedCounter,
} from '../components/motion-ui'

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

const marqueeWords = [
  'BILLBOARDS', 'DIGITAL LED', 'BACKLIT DISPLAYS', 'CONSTRUCTION COVERS',
  'STREET POLES', 'GANTRY BANNERS', 'TRANSIT ZONES', 'HIGHWAY CORRIDORS',
]

const processSteps = [
  { num: '01', title: 'CHOOSE YOUR LOCATION', desc: 'Start with where your audience is. Pick a city, a neighbourhood, or a specific radius.' },
  { num: '02', title: 'DISCOVER INVENTORY', desc: 'We surface available formats - billboards, LED screens, backlit displays - around your target area.' },
  { num: '03', title: 'UPLOAD & LAUNCH', desc: 'Upload your creative, set your dates, and go live. One platform, zero hassle.' },
]

function Work() {
  const heroRef = useRef(null)
  const featuredRef = useRef(null)
  const galleryRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], [0, -120])
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])

  const { scrollYProgress: featuredScroll } = useScroll({ target: featuredRef, offset: ['start end', 'end start'] })
  const featuredScale = useTransform(featuredScroll, [0, 0.5], [0.92, 1])
  const featuredY = useTransform(featuredScroll, [0, 0.5], [60, 0])

  const { scrollYProgress: galleryScroll } = useScroll({ target: galleryRef, offset: ['start end', 'end start'] })
  const galleryX = useTransform(galleryScroll, [0, 1], ['20%', '-40%'])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="section-standardhero" style={{ overflow: 'hidden' }}>
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              className="standardhero-component"
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <div className="standardhero-header">
                <motion.h1
                  className="text-size-large"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <SplitWords text="Geo-targeted campaigns delivered across cities, highways, transit zones and high-footfall locations." />
                </motion.h1>
                <motion.p
                  className="text-size-large"
                  style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                >
                  We partner with advertisers who start with a location, not a space.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Delhi Radius Campaign */}
      <section ref={featuredRef} style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                background: '#111',
                scale: featuredScale,
                y: featuredY,
              }}
            >
              <div className="work-featured-images">
                {featuredCaseStudy.images.slice(0, 4).map((img, i) => (
                  <motion.div
                    key={i}
                    className="work-featured-img"
                    initial={{ opacity: 0, y: 60, rotate: (i - 1.5) * 5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: (i - 1.5) * 3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                  >
                    <motion.img
                      src={img}
                      alt={`Campaign location ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="work-featured-green"
                style={{ padding: 48, background: '#4cda56' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              >
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                  {featuredCaseStudy.brand}
                </h2>
                <p style={{ fontSize: '1.1rem', marginTop: 16, color: 'rgba(255,255,255,0.9)' }}>
                  {featuredCaseStudy.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="padding-global">
          <div className="container-large">
            <motion.h2
              className="text-size-xxlarge"
              style={{ marginBottom: 48 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              HOW IT WORKS
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
              className="work-process-grid"
            >
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ position: 'relative', padding: '2.5rem 2rem', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}
                  whileHover={{ borderColor: 'rgba(76,218,86,0.3)', y: -4 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <div style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, color: 'rgba(76,218,86,0.15)', position: 'absolute', top: -8, right: 12 }}>{step.num}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: '#4cda56', marginBottom: 12 }}>{step.num}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Carousel */}
      <section className="awards-carousel">
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
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
            </motion.div>
            <motion.div
              className="awards-wrapper"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {awards.map((award, i) => (
                <motion.div className="award-card" key={i} variants={fadeUp}>
                  <div className="award-title">{award.title}</div>
                  <div className="award-brand">{award.brand}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Image Gallery */}
      <section ref={galleryRef} style={{ padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ marginBottom: 32 }}>
          <motion.h2
            className="text-size-xxlarge"
            style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', marginBottom: 32 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            FROM THE FIELD
          </motion.h2>
        </div>
            <motion.div style={{ display: 'flex', gap: 16, paddingLeft: 'clamp(24px, 5vw, 80px)', x: galleryX }}>
              {[
                assets.work.hoardingHighway,
                assets.work.gantryBanners,
                assets.work.poleBanners,
                assets.work.siteHoarding,
                ...assets.work.campaignLocations,
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="work-gallery-item"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  whileHover={{ y: -8 }}
                >
              <motion.img
                src={img}
                alt={`Gallery ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 60%, rgba(0,0,0,0.7))' }} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-casestudy">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.h2
                className="text-size-xxlarge"
                style={{ marginBottom: 48 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                CAMPAIGNS
              </motion.h2>
              <motion.div
                className="casestudy-component"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {caseStudies.map((cs, i) => (
                  <motion.div
                    className="casestudy-card"
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <motion.img
                      src={cs.image}
                      alt={cs.brand}
                      className="casestudy-image"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="work-quote-section" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="padding-global">
          <div className="container-large" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div style={{ fontSize: '4rem', lineHeight: 1, color: '#4cda56', marginBottom: -16 }}>"</div>
              <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 500, lineHeight: 1.5, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>
                Outdoor advertising isn't about buying space anymore. It's about reaching people where they actually are.
              </p>
              <div style={{ marginTop: 24, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', color: '#4cda56' }}>THE DOOHPIE TEAM</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.div
                className="cta-component"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <h2 className="cta-heading text-size-xxlarge">READY TO OWN YOUR LOCATION?</h2>
                <MagneticLink to="/contact" className="new-button is-white" strength={0.25}>
                  <span className="new-button-text">GET IN TOUCH</span>
                </MagneticLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </>
  )
}

export default Work
