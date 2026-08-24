import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'
import {
  EASE,
  fadeUp,
  staggerContainer,
  SplitWords,
  SpotlightCard,
  MagneticLink,
  AnimatedCounter,
} from '../components/motion-ui'

function FillWord({ word, progress, range, accent = false }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span className={`manifesto-word${accent ? ' manifesto-word-accent' : ''}`} style={{ opacity }}>
      {word}&nbsp;
    </motion.span>
  )
}

function ScrollFillText({ text, accentPhrase = '', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.2'] })
  const words = text.split(' ')
  const accentWords = accentPhrase ? accentPhrase.split(' ').map((w) => w.toLowerCase()) : []
  let accentStart = -1
  if (accentWords.length) {
    for (let i = 0; i <= words.length - accentWords.length; i++) {
      const slice = words.slice(i, i + accentWords.length).map((w) => w.replace(/[^a-z0-9]/gi, '').toLowerCase())
      if (slice.join(' ') === accentWords.join(' ')) { accentStart = i; break }
    }
  }
  return (
    <p ref={ref} className={`manifesto-text ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = Math.min(1, start + 1.5 / words.length)
        const isAccent = accentStart !== -1 && i >= accentStart && i < accentStart + accentWords.length
        return <FillWord key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[start, end]} accent={isAccent} />
      })}
    </p>
  )
}

function LogoMarqueeRow() {
  const logos = [...assets.clientLogos, ...assets.clientLogos]
  return (
    <div className="about-logo-track">
      {logos.map((logo, i) => (
        <div className="about-logo-item" key={i}>
          <img src={logo} alt="Doohpie client" loading="lazy" />
        </div>
      ))}
    </div>
  )
}

const audiences = [
  { name: 'FOR BRANDS', role: 'Build awareness where it counts', bio: 'Build awareness in the locations where your customers live, work, travel and shop. Combine static, digital and illuminated formats to own the places that matter most to your business.' },
  { name: 'FOR AGENCIES', role: 'One platform, every client', bio: 'Manage multiple campaigns, locations, creatives and advertisers through one platform. Plan across formats and cities without juggling separate vendors and spreadsheets.' },
  { name: 'FOR LOCAL BUSINESSES', role: 'Hyperlocal by design', bio: 'Focus advertising spend on specific geographic areas instead of targeting an entire city. Define a radius around your store and reach the people most likely to walk in.' },
  { name: 'FOR LARGE ENTERPRISES', role: 'Scale across markets', bio: 'Plan large-scale campaigns across multiple cities and advertising formats. Standardise planning, launch faster and keep every market on one platform.' },
]

const processSteps = [
  { title: 'Discover', desc: "We map your audience's real-world movement - commutes, neighbourhoods and transit hubs - to find where your message will actually land." },
  { title: 'Plan', desc: 'Build a geo-targeted media plan across static, digital and illuminated formats, sized to your budget and radius.' },
  { title: 'Launch', desc: 'Creative goes live across your chosen locations, monitored in real time from a single dashboard.' },
  { title: 'Optimise', desc: 'We track performance and reallocate spend toward the zones and formats driving the most impact.' },
]

const marqueeItems = ['GEO-TARGETED', 'STATIC BILLBOARDS', 'DIGITAL LED', 'BACKLIT DISPLAYS', 'CONSTRUCTION COVERS', 'HYPERLOCAL RADIUS', 'MULTI-CITY CAMPAIGNS']

const heroStats = [
  { target: 4, suffix: '', format: false, label: 'Ad Formats' },
  { target: 50, suffix: '+', format: false, label: 'Cities' },
  { target: 5000, suffix: '+', format: true, label: 'Locations' },
  { target: 1, suffix: 'B+', format: false, label: 'Impressions' },
]

const balloonSparkles = [
  { left: '8%', top: '18%', duration: 3.2, delay: 0 },
  { left: '88%', top: '22%', duration: 2.7, delay: 0.5 },
  { left: '78%', top: '78%', duration: 3.6, delay: 0.9 },
  { left: '14%', top: '82%', duration: 2.9, delay: 1.3 },
  { left: '50%', top: '4%', duration: 3.3, delay: 0.7 },
  { left: '92%', top: '55%', duration: 3.0, delay: 1.6 },
]

const comparisonRows = [
  { old: 'Book by billboard availability, not audience location', doohpie: 'Plan by geography - define the radius that matters to your business' },
  { old: 'One format, one vendor, weeks of lead time', doohpie: 'Static, digital, illuminated and construction formats in a single plan' },
  { old: 'No visibility until the campaign is over', doohpie: 'Real-time visibility into where and how your campaign is running' },
  { old: 'Manual coordination across cities and vendors', doohpie: 'One platform for every location, format and market' },
]

const values = [
  { letter: 'P', title: 'Precision', desc: 'Every plan starts with a location, a radius and a reason - not a guess.' },
  { letter: 'C', title: 'Clarity', desc: "You see exactly where your campaign is live and how it's performing, in real time." },
  { letter: 'M', title: 'Momentum', desc: 'From brief to live locations in days, not months of back-and-forth.' },
  { letter: 'T', title: 'Trust', desc: 'One team across brands, agencies and local businesses - not a self-serve black box.' },
]

const galleryLocations = [
  { img: assets.work.campaignLocations[0], city: 'Times Square, New York' },
  { img: assets.work.campaignLocations[1], city: 'Dotonbori, Osaka' },
  { img: assets.work.campaignLocations[2], city: 'Broadway, New York' },
  { img: assets.work.campaignLocations[3], city: 'Adelaide Street, Brisbane' },
]

function About() {
  const doohpieImgRef = useRef(null)
  const heroRef = useRef(null)
  const processRef = useRef(null)

  const { scrollYProgress: pageProgress } = useScroll()
  const pageProgressSmooth = useSpring(pageProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const heroSmooth = useSpring(heroProgress, { stiffness: 220, damping: 26, mass: 0.3 })
  const balloonScale = useTransform(heroSmooth, [0, 0.55], [0.3, 1.8])
  const balloonOpacity = useTransform(heroSmooth, [0, 0.2], [0, 1])
  const balloonBlur = useTransform(heroSmooth, [0, 0.3], [10, 0])
  const balloonFilter = useMotionTemplate`blur(${balloonBlur}px) brightness(0) invert(48%) sepia(85%) saturate(650%) hue-rotate(85deg)`

  const balloonTiltX = useMotionValue(0)
  const balloonTiltY = useMotionValue(0)
  const springTiltX = useSpring(balloonTiltX, { stiffness: 150, damping: 18 })
  const springTiltY = useSpring(balloonTiltY, { stiffness: 150, damping: 18 })

  const handleBalloonMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    balloonTiltX.set(relY * -10)
    balloonTiltY.set(relX * 10)
  }
  const handleBalloonMouseLeave = () => {
    balloonTiltX.set(0)
    balloonTiltY.set(0)
  }

  const handleHeroMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    heroRef.current.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
    heroRef.current.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
  }

  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start 75%', 'end 55%'],
  })
  const processLine = useSpring(processProgress, { stiffness: 90, damping: 24, mass: 0.5 })

  return (
    <div className="page-content-wrapper about-page-wrapper">
      <motion.div className="scroll-progress-bar" style={{ scaleX: pageProgressSmooth }} />

      {/* Standard Hero Section with Balloon */}
      <section
        className="section_standardhero hero-ambient"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
      >
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.span
                className="gf-hero-eyebrow about-eyebrow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                ABOUT DOOHPIE
              </motion.span>
              <div className="about-hero-grid">
                <div className="about-hero-copy">
                  <div className="about-hero-intro">
                    <h1 className="about-hero-title">
                      <SplitWords text="WE BELIEVE IN" />
                      <br />
                      <motion.span
                        className="about-hero-title-accent"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                      >
                        LOCATION FIRST
                      </motion.span>
                    </h1>
                    <motion.p
                      className="about-hero-lede"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                    >
                      Doohpie is the location-powered advertising platform built for how brands grow now.
                    </motion.p>
                    <motion.div
                      className="about-hero-actions"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
                    >
                      <MagneticLink to="/get-started" className="new-button is-magenta">
                        <span className="new-button_text">Get Started</span>
                      </MagneticLink>
                      <MagneticLink to="/work" className="new-button">
                        <span className="new-button_text">See Our Work</span>
                      </MagneticLink>
                    </motion.div>
                    <motion.div
                      className="about-hero-stats"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      {heroStats.map((stat) => (
                        <motion.div className="about-hero-stat-chip" key={stat.label} variants={fadeUp}>
                          <span className="about-hero-stat-chip-value">
                            <AnimatedCounter target={stat.target} suffix={stat.suffix} format={stat.format} duration={1600} />
                          </span>
                          <span className="about-hero-stat-chip-label">{stat.label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div
                    className="about-beliefs"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div className="about-belief" variants={fadeUp}>
                      <span className="about-belief-num">01</span>
                      <p>
                        So you've seen the platform, the formats we offer and the campaigns we
                        deliver. Now you want to know what makes us different? Why geo-targeted
                        outdoor advertising, and why now?
                      </p>
                    </motion.div>
                    <motion.div className="about-belief" variants={fadeUp}>
                      <span className="about-belief-num">02</span>
                      <p>
                        We believe outdoor advertising should start with a location, not a space.
                        Instead of asking "which billboard should we buy?", advertisers should ask
                        "where do we want to reach our audience?". That shift makes outdoor
                        advertising strategic - planned around locations, markets, customer zones
                        and business objectives.
                      </p>
                    </motion.div>
                    <motion.div className="about-belief" variants={fadeUp}>
                      <span className="about-belief-num">03</span>
                      <p>
                        With geo-targeting at the core, Doohpie helps brands move beyond simply
                        buying advertising space and instead build campaigns around cities,
                        neighborhoods and high-traffic zones where their message matters most.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className="baloon_component about-hero-balloon"
                  onMouseMove={handleBalloonMouseMove}
                  onMouseLeave={handleBalloonMouseLeave}
                  style={{ perspective: 900 }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ type: 'spring', stiffness: 170, damping: 12, mass: 0.8 }}
                >
                  <div className="balloon-glow" />
                  {balloonSparkles.map((s, i) => (
                    <motion.span
                      key={i}
                      className="balloon-sparkle"
                      style={{ left: s.left, top: s.top }}
                      animate={{ y: [0, -20, 0], opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
                      transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                    />
                  ))}
                  <motion.div
                    className="inflating-logo"
                    style={{ rotateX: springTiltX, rotateY: springTiltY }}
                    animate={{ y: [0, -16, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <motion.img
                      src="https://cdn.pixelkart.ai/uploads/2026/august/18/creative_35391abd.png"
                      alt="Doohpie"
                      className="doohpie-inflate-img"
                      ref={doohpieImgRef}
                      style={{
                        scale: balloonScale,
                        opacity: balloonOpacity,
                        filter: balloonFilter,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span className="scroll-cue-dot" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="about-marquee">
        <div className="about-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="about-marquee-item" key={i}>
              <span className="about-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <section className="section_client_logos">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.span
                className="gf-hero-eyebrow"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                TRUSTED BY
              </motion.span>
              <motion.h2
                className="lookat_heading about-logos-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              >
                BRANDS ALREADY GOING LOCATION-FIRST
              </motion.h2>
              <div className="about-logo-marquee">
                <LogoMarqueeRow />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="section_manifesto">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <ScrollFillText
                text="We didn't build another ad-buying platform. We built the infrastructure for location-first advertising - precise enough for a single storefront, powerful enough for a national rollout. Advertisers need visibility in the short term, brand dominance in the long term, and measurable impact always - because a location only matters if it reaches your audience."
                accentPhrase="measurable impact always"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot / Stats Section */}
      <section className="section_snapshot">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.div
                className="snapshot_component"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="snapshot-wrapper">
                  <motion.div className="snapshop-block" variants={fadeUp}>
                    <SpotlightCard className="snapshop-block-inner">
                      <div className="snapshot-header-text">Ad Formats</div>
                      <div className="snapshot-text"><AnimatedCounter target={4} /></div>
                      <div className="snapshot-para text-size-mobile-tiny">
                        Static billboards, digital LED boards, backlit displays and construction covers.
                      </div>
                    </SpotlightCard>
                  </motion.div>
                  <motion.div className="snapshop-block" variants={fadeUp}>
                    <SpotlightCard className="snapshop-block-inner">
                      <div className="snapshot-header-text">Cities Covered</div>
                      <div className="snapshot-text"><AnimatedCounter target={50} suffix="+" /></div>
                      <div className="snapshot-para text-size-mobile-tiny">
                        From metro cores to highways, transit hubs and neighborhood high streets.
                      </div>
                    </SpotlightCard>
                  </motion.div>
                  <motion.div className="snapshop-block" variants={fadeUp}>
                    <SpotlightCard className="snapshop-block-inner">
                      <div className="snapshot-header-text">Inventory Locations</div>
                      <div className="snapshot-text"><AnimatedCounter target={5000} suffix="+" /></div>
                      <div className="snapshot-para text-size-mobile-tiny">
                        High-impact physical and digital spaces mapped across every market.
                      </div>
                    </SpotlightCard>
                  </motion.div>
                  <motion.div className="snapshop-block" variants={fadeUp}>
                    <SpotlightCard className="snapshop-block-inner">
                      <div className="snapshot-header-text">Campaigns</div>
                      <div className="snapshot-text"><AnimatedCounter target={1200} suffix="+" /></div>
                      <div className="snapshot-para text-size-mobile-tiny">
                        From single-store radius campaigns to multi-city brand takeovers.
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </div>
                <motion.div className="snapshot-hero-stat" variants={fadeUp}>
                  <SpotlightCard className="snapshot-hero-stat-inner">
                    <div className="snapshot-hero-stat-number">
                      <AnimatedCounter target={1} suffix="B+" />
                    </div>
                    <div className="snapshot-hero-stat-copy">
                      <div className="snapshot-header-text">Impressions Delivered</div>
                      <p className="snapshot-para">
                        Delivered for our advertisers through geo-targeted outdoor media - and counting.
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizzle Video Section */}
      <section className="section_sizzle">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large sizzle-wrapper">
              <motion.div
                className="result-casestudy-video radius w-background-video w-background-video-atom"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Doohpie Comparison Section */}
      <section className="section_compare">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="about-team-head">
                <motion.span
                  className="gf-hero-eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  THE DIFFERENCE
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  OLD WAY VS LOCATION-FIRST
                </motion.h2>
              </div>
              <motion.div
                className="compare-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="compare-col compare-col-old" variants={fadeUp}>
                  <div className="compare-col-label">TRADITIONAL OOH</div>
                  {comparisonRows.map((row) => (
                    <div className="compare-row" key={row.old}>
                      <span className="compare-icon cross">&#10005;</span>
                      <p>{row.old}</p>
                    </div>
                  ))}
                </motion.div>
                <motion.div className="compare-col compare-col-new" variants={fadeUp}>
                  <SpotlightCard className="compare-col-inner">
                    <div className="compare-col-label accent">DOOHPIE</div>
                    {comparisonRows.map((row) => (
                      <div className="compare-row" key={row.doohpie}>
                        <span className="compare-icon check">&#10003;</span>
                        <p>{row.doohpie}</p>
                      </div>
                    ))}
                  </SpotlightCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section className="section_process">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="about-team-head">
                <motion.span
                  className="gf-hero-eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  HOW WE WORK
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  FROM LOCATION TO LAUNCH
                </motion.h2>
              </div>
              <div className="process-track" ref={processRef}>
                <div className="process-line-track">
                  <motion.div className="process-line-fill" style={{ scaleX: processLine }} />
                </div>
                <motion.div
                  className="process-grid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {processSteps.map((step, index) => (
                    <motion.div className="process-step" key={step.title} variants={fadeUp}>
                      <SpotlightCard className="process-step-inner">
                        <span className="process-step-num">{String(index + 1).padStart(2, '0')}</span>
                        <div className="process-step-title">{step.title}</div>
                        <p className="process-step-desc">{step.desc}</p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section_values">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="about-team-head">
                <motion.span
                  className="gf-hero-eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  WHAT WE STAND FOR
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  HOW WE OPERATE
                </motion.h2>
              </div>
              <motion.div
                className="values-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {values.map((value) => (
                  <motion.div key={value.title} variants={fadeUp}>
                    <SpotlightCard className="value-card">
                      <span className="value-card-letter">{value.letter}</span>
                      <div className="value-card-title">{value.title}</div>
                      <p className="value-card-desc">{value.desc}</p>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Show Up Gallery */}
      <section className="section_gallery">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="about-team-head">
                <motion.span
                  className="gf-hero-eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  ON THE GROUND
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  WHERE WE SHOW UP
                </motion.h2>
              </div>
              <motion.div
                className="gallery-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                {galleryLocations.map((loc, i) => (
                  <motion.div
                    key={loc.city}
                    className={`gallery-item ${i === 0 ? 'gallery-item-large' : ''}`}
                    variants={fadeUp}
                  >
                    <img src={loc.img} alt={loc.city} loading="lazy" />
                    <div className="gallery-caption">{loc.city}</div>
                  </motion.div>
                ))}
              </motion.div>
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
                <div className="about-team-head">
                  <motion.span
                    className="gf-hero-eyebrow"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    WHO IT'S FOR
                  </motion.span>
                  <motion.h2
                    className="lookat_heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                  >
                    BUILT FOR MODERN ADVERTISERS
                  </motion.h2>
                </div>
                <motion.div
                  className="team_grid"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {audiences.map((audience, index) => (
                    <motion.div key={index} className="team-block" variants={fadeUp}>
                      <SpotlightCard className="team-block-inner">
                        <span className="about-card-num">{String(index + 1).padStart(2, '0')}</span>
                        <div className="team-heading">{audience.name}</div>
                        <div className="about-card-role">{audience.role}</div>
                        <p className="about-card-bio">{audience.bio}</p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="section_about_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.div
                className="about-cta-banner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <div className="about-cta-glow" />
                <h2 className="about-cta-title">Ready to make your next campaign location-first?</h2>
                <p className="about-cta-copy">
                  Talk to our team about formats, cities and budgets - or explore campaigns we've already delivered.
                </p>
                <div className="about-cta-actions">
                  <MagneticLink to="/get-started" className="new-button is-magenta">
                    <span className="new-button_text">Get Started</span>
                  </MagneticLink>
                  <MagneticLink to="/contact" className="new-button">
                    <span className="new-button_text">Talk To Us</span>
                  </MagneticLink>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </div>
  )
}

export default About
