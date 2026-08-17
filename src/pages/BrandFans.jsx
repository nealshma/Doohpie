import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'

const stats = [
  { label: 'CONTENT PIECES', value: 240, suffix: '' },
  { label: 'ENGAGEMENT RATE', value: 11, suffix: '%' },
  { label: 'BRAND FANS', value: 150, suffix: '+' },
]

const brandFanImages = [
  assets.brandFans.post1,
  assets.brandFans.post2,
  assets.brandFans.post3,
  assets.brandFans.post4,
  assets.brandFans.post5,
  assets.brandFans.post6,
  assets.brandFans.post7,
  assets.brandFans.post8,
  assets.brandFans.nvme,
]

function AnimatedCounter({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])
  return <span>{count}{suffix}</span>
}

function BrandFans() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-huge">
                  Brand Fans is Doohpie's approach to gifting — turning product sends into a scalable engine for content, conversation and advocacy.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-brandfans">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
                <div>
                  <h2 className="text-size-xxlarge" style={{ marginBottom: 32 }}>WHAT ARE BRAND FANS ANYWAY?</h2>
                  <img src={assets.brandFans.circleHeart} alt="" style={{ width: 80, marginTop: 32, filter: 'brightness(0) invert(1)' }} />
                </div>
                <div>
                  <p className="beliefs-text">
                    This isn't gifting as you know it. Brand Fans is a strategic approach to product gifting that turns one-time sends into ongoing creator relationships.
                  </p>
                  <p className="beliefs-text" style={{ marginTop: 24 }}>
                    We curate a network of creators who genuinely align with your brand values. No more blind sends.
                  </p>
                  <p className="beliefs-text" style={{ marginTop: 24 }}>
                    The result? Authentic content, genuine conversations, and a community of advocates.
                  </p>
                  <Link to="/contact" className="new-button is-magenta" style={{ marginTop: 32, display: 'inline-flex' }}>
                    <span className="new-button-text">LEARN MORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Fan Image Grid */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="brandfan-image-grid">
              {brandFanImages.map((img, i) => (
                <img key={i} src={img} alt={`Brand Fan ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-snapshot" ref={statsRef} id="number">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, textAlign: 'center' }}>
                {stats.map((stat, i) => (
                  <div key={i} style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.6s ease ${i * 0.15}s` }}>
                    <div className="snapshot-heading" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={statsVisible} />
                    </div>
                    <div className="snapshot-text" style={{ marginTop: 8 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="cta-component">
                <h2 className="cta-heading text-size-xxlarge">READY TO BUILD YOUR BRAND FANS?</h2>
                <Link to="/contact" className="new-button is-white">
                  <span className="new-button-text">GET STARTED</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandFans
