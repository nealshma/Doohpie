import { useEffect, useRef, useState } from 'react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000, isVisible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])
  return <span>{prefix}{count}{suffix}</span>
}

const audiences = [
  { name: 'FOR BRANDS', role: 'Build awareness where it counts', bio: 'Build awareness in the locations where your customers live, work, travel and shop. Combine static, digital and illuminated formats to own the places that matter most to your business.' },
  { name: 'FOR AGENCIES', role: 'One platform, every client', bio: 'Manage multiple campaigns, locations, creatives and advertisers through one platform. Plan across formats and cities without juggling separate vendors and spreadsheets.' },
  { name: 'FOR LOCAL BUSINESSES', role: 'Hyperlocal by design', bio: 'Focus advertising spend on specific geographic areas instead of targeting an entire city. Define a radius around your store and reach the people most likely to walk in.' },
  { name: 'FOR LARGE ENTERPRISES', role: 'Scale across markets', bio: 'Plan large-scale campaigns across multiple cities and advertising formats. Standardise planning, launch faster and keep every market on one platform.' },
]

function About() {
  const doohpieTextRef = useRef(null)
  const heroRef = useRef(null)
  const snapshotRef = useRef(null)
  const [snapshotVisible, setSnapshotVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSnapshotVisible(true) },
      { threshold: 0.3 }
    )
    if (snapshotRef.current) observer.observe(snapshotRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = heroRef.current
    const textEl = doohpieTextRef.current
    if (!section || !textEl) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))

      const scale = 0.3 + progress * 1.5
      const opacity = Math.min(1, progress * 3)
      const blur = Math.max(0, (1 - progress * 2) * 10)

      textEl.style.transform = `scale(${scale})`
      textEl.style.opacity = opacity
      textEl.style.filter = `blur(${blur}px) brightness(0) invert(48%) sepia(85%) saturate(650%) hue-rotate(85deg)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-content-wrapper about-page-wrapper">
      {/* Standard Hero Section with Balloon */}
      <section className="section_standardhero" ref={heroRef}>
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component" data-animate>
                <p className="text-size-medium about-hero-text">
                  Doohpie is the location-powered advertising platform built for how brands grow now.
                </p>
                <h1 className="heading-style-h2 text-weight-normal hide">WHAT WE BELIEVE</h1>
                <div className="standardhero_header">
                  <div className="margin-bottom margin-large">
                    <p className="text-size-large hide">
                      So you've seen the platform, the formats we offer and the campaigns we deliver. Now you want to know what makes us different? Why geo-targeted outdoor advertising, and why now?
                      <br /><br />
                      We believe outdoor advertising should start with a location, not a space. Instead of asking "which billboard should we buy?", advertisers should ask "where do we want to reach our audience?". That shift makes outdoor advertising strategic — planned around locations, markets, customer zones and business objectives.
                      <br /><br />
                      With geo-targeting at the core, Doohpie helps brands move beyond simply buying advertising space and instead build campaigns around cities, neighborhoods and high-traffic zones where their message matters most.
                    </p>
                  </div>
                </div>
              </div>
              <div className="baloon_component">
                <div className="inflating-logo">
                  <img 
                    src="https://cdn.pixelkart.ai/uploads/2026/august/18/creative_35391abd.png" 
                    alt="Doohpie" 
                    className="doohpie-inflate-img" 
                    ref={doohpieTextRef}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot / Stats Section */}
      <section className="section_snapshot">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="padding-small"></div>
              <div className="margin-bottom margin-xlarge">
                <p className="snapshot-heading">
                  Advertisers need visibility in the short term, brand dominance in the long term, and measurable impact always - because a location only matters if it reaches your audience.
                </p>
              </div>
              <div className="snapshot_component" data-animate ref={snapshotRef}>
                <h2 className="snapshot-heading hide-tablet">
                  PLATFORM<br />SNAPSHOT
                </h2>
                <div className="snapshot-wrapper">
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Ad Formats</div>
                    <div className="snapshot-text"><AnimatedCounter target={4} isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Static billboards, digital LED boards, backlit displays and construction covers.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Cities Covered</div>
                    <div className="snapshot-text"><AnimatedCounter target={50} suffix="+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      From metro cores to highways, transit hubs and neighborhood high streets.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Inventory Locations</div>
                    <div className="snapshot-text"><AnimatedCounter target={5000} suffix="+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      High-impact physical and digital spaces mapped across every market.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Campaigns</div>
                    <div className="snapshot-text"><AnimatedCounter target={1200} suffix="+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      From single-store radius campaigns to multi-city brand takeovers.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Impressions</div>
                    <div className="snapshot-text"><AnimatedCounter target={1} suffix="B+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Delivered for our advertisers through geo-targeted outdoor media.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizzle Video Section */}
      <section className="section_sizzle">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large sizzle-wrapper">
              <div className="result-casestudy-video radius w-background-video w-background-video-atom">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ backgroundImage: `url("${assets.ctaVideo.poster}")`, objectFit: 'cover', width: '100%', height: '100%' }}
                >
                  <source src={assets.ctaVideo.mp4} />
                  <source src={assets.ctaVideo.webm} />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Modern Advertisers Section */}
      <section className="section_team">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="team-section">
                <div className="team_grid">
                  <div className="margin-bottom margin-large">
                    <h2 className="lookat_heading">BUILT FOR MODERN ADVERTISERS</h2>
                  </div>
                  {audiences.map((audience, index) => (
                    <div key={index} className="team-block">
                      <div className="team-pink-block">
                        <div className="team-header">
                          <div className="margin-bottom margin-xxsmall">
                            <div className="team-heading">{audience.name}</div>
                          </div>
                          <p className="team-subtext">{audience.role}</p>
                        </div>
                        <div className="project_detail">
                          <p className="text-para">{audience.bio}</p>
                        </div>
                      </div>
                      <div className="team-detail">
                        <div className="team-title">{audience.name}</div>
                        <div className="text-color-grey job-title-text">{audience.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </div>
  )
}

export default About
