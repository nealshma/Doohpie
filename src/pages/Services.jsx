import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'
import {
  EASE,
  fadeUp,
  staggerContainer,
  MagneticLink,
  SpotlightCard,
} from '../components/motion-ui'

function FormatIcon({ type }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (type) {
    case 'billboard':
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="11" rx="1.5" />
          <path d="M8 15v5M16 15v5M6 22h4M14 22h4" />
        </svg>
      )
    case 'digital':
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="13" rx="1.5" />
          <path d="M8 21h8M12 16v5" />
          <path d="M6 9l3 3 2-2 3 3 4-4.5" />
        </svg>
      )
    case 'backlit':
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="6" />
          <path d="M9 21h6M10.5 18h3M12 4V2M4.5 4.5l1.4 1.4M19.5 4.5l-1.4 1.4" />
        </svg>
      )
    case 'construction':
      return (
        <svg {...common}>
          <path d="M3 21V9l9-5 9 5v12" />
          <path d="M3 21h18M9 21v-6h6v6" />
        </svg>
      )
    default:
      return null
  }
}

const servicesData = [
  {
    id: 1, number: '01', title: 'STATIC BILLBOARDS', icon: 'billboard',
    description: "Large-format advertising displays printed on paper, vinyl or other durable materials and installed on permanent metal structures. A powerful, highly visible format for brands looking to create strong awareness in high-traffic locations.",
    detail: "Ideal for brand awareness campaigns, product launches, retail promotions, local market campaigns, political and public campaigns, automotive advertising and FMCG brands. Unlike online ads that can be skipped or blocked, a strategically placed billboard remains visible to everyone travelling through the location throughout the campaign period.",
    image: assets.services.allison,
    color: '#4cda56',
    bestFor: ['Brand Awareness', 'Product Launches', 'Retail Promotions', 'FMCG'],
    stats: [
      { label: 'Visibility', value: '24/7' },
      { label: 'Format', value: 'Static Print' },
      { label: 'Typical Run', value: '4-12 Wks' },
    ],
  },
  {
    id: 2, number: '02', title: 'DIGITAL LED BOARDS', icon: 'digital',
    description: "Bright, high-resolution screens displaying images, animations, videos and multiple advertisements in rotating loops. Change creative content without physically replacing any material.",
    detail: "Ideal for video advertising, product launches, time-sensitive offers, event promotions and real-time campaigns. Run multiple creatives on the same screen and adapt by time of day - breakfast campaigns in the morning, retail promotions in the afternoon, entertainment in the evening - for more relevant advertising throughout the day.",
    image: assets.services.copyImage,
    color: '#7ee98a',
    bestFor: ['Video Advertising', 'Time-Sensitive Offers', 'Event Promotions', 'Dayparting'],
    stats: [
      { label: 'Visibility', value: '24/7 Loop' },
      { label: 'Format', value: 'Full-Motion' },
      { label: 'Creatives', value: '6-10 / Slot' },
    ],
  },
  {
    id: 3, number: '03', title: 'BACKLIT DISPLAYS', icon: 'backlit',
    description: "Displays using internal illumination to keep advertisements clearly visible, particularly during evening and nighttime hours, in high-footfall and high-traffic environments.",
    detail: "Common locations include high streets, shopping areas, transport hubs, commercial complexes, roads and intersections. The combination of strong creative design and illumination helps your advertisement remain clear, attractive and noticeable throughout the day and night.",
    image: assets.services.homepage,
    color: '#a8f0b0',
    bestFor: ['High Streets', 'Transport Hubs', 'Night Visibility', 'Commercial Zones'],
    stats: [
      { label: 'Visibility', value: 'Day & Night' },
      { label: 'Format', value: 'Backlit Print' },
      { label: 'Typical Run', value: '4-8 Wks' },
    ],
  },
  {
    id: 4, number: '04', title: 'CONSTRUCTION COVERS', icon: 'construction',
    description: "Large temporary advertising surfaces installed around construction sites, building projects, renovation areas and temporary structures - spaces that stay highly visible for months or even years.",
    detail: "Ideal for large brand campaigns, real estate companies, luxury brands, automotive brands, fashion campaigns and new product launches. With the right location and creative execution, construction covers transform plain barriers into large-scale brand experiences that dominate the visual landscape of busy urban areas.",
    image: assets.services.archivedVanity,
    color: '#d4f7d8',
    bestFor: ['Real Estate', 'Luxury Brands', 'Automotive', 'Large-Scale Launches'],
    stats: [
      { label: 'Visibility', value: 'Site-Wide' },
      { label: 'Format', value: 'Mesh / Vinyl' },
      { label: 'Typical Run', value: 'Months-Yrs' },
    ],
  },
]

const formatComparisonRows = [
  { old: 'Book one static billboard and hope it fits the brief', doohpie: 'Mix static, digital, backlit and construction formats in a single plan' },
  { old: 'Fixed creative for the full campaign, no updates', doohpie: 'Swap digital creative in real time while static formats hold the core message' },
  { old: 'No visibility once the panel goes up', doohpie: 'Track every live location and format from a single dashboard' },
  { old: 'A different vendor for every format and city', doohpie: 'One platform for every format, market and campaign' },
]

const formatValues = [
  { letter: 'R', title: 'Reach', desc: 'Combine large-format static with digital rotation to put your brand in front of more people, more often.' },
  { letter: 'F', title: 'Flexibility', desc: 'Update digital creative in real time while static and backlit formats hold your core brand message.' },
  { letter: 'V', title: 'Visibility', desc: 'Backlit and digital formats keep your brand working after dark, not just during daylight hours.' },
  { letter: 'S', title: 'Scale', desc: 'Construction covers and large-format static let you dominate a location for months, not days.' },
]

const workflowSteps = [
  { title: 'Define Your Target', text: 'Choose the geographical area where you want your campaign to appear.' },
  { title: 'Discover Inventory', text: 'Explore available outdoor advertising locations and formats within your target area.' },
  { title: 'Select Your Spaces', text: 'Choose the billboards, LED screens, backlit displays or construction covers that fit your campaign.' },
  { title: 'Upload Your Creative', text: 'Upload the advertising creative designed for the selected format and dimensions.' },
  { title: 'Plan Your Campaign', text: 'Define campaign duration, locations, creatives and other campaign parameters.' },
  { title: 'Launch', text: 'Activate your campaign and get your brand in front of audiences across selected locations.' },
]

function Services() {
  const [openServices, setOpenServices] = useState(new Set([1]))
  const [hasScrolled, setHasScrolled] = useState(false)
  const processRef = useRef(null)
  const itemRefs = useRef({})

  const toggleService = (id) => {
    setOpenServices((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => setHasScrolled(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!hasScrolled) return
    const observers = []
    servicesData.forEach((service) => {
      const el = itemRefs.current[service.id]
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setOpenServices((prev) => {
              const next = new Set(prev)
              next.add(service.id)
              return next
            })
          }
        },
        { threshold: 0.15 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [hasScrolled])

  const { scrollYProgress: pageProgress } = useScroll()
  const pageProgressSmooth = useSpring(pageProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  const { scrollYProgress: processProgress } = useScroll({ target: processRef, offset: ['start 75%', 'end 55%'] })
  const processLine = useSpring(processProgress, { stiffness: 90, damping: 24, mass: 0.5 })

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX: pageProgressSmooth }} />

      {/* Services Accordion */}
      <section className="section-servicecontent">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="about-team-head">
                <motion.h2
                  className="lookat_heading"
                  style={{ marginTop: 40 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  FOUR FORMATS, ONE PLATFORM
                </motion.h2>
              </div>
              <div className="services-component">
                {servicesData.map((service, index) => (
                  <motion.div
                    className="service-item"
                    key={service.id}
                    ref={(el) => { itemRefs.current[service.id] = el }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
                  >
                    <div
                      className="service-dropdown-toggle"
                      onClick={() => toggleService(service.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="service-dropdown-heading" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                        <span className="format-icon-badge" style={{ '--format-color': service.color }}>
                          <FormatIcon type={service.icon} />
                        </span>
                        <span style={{ color: service.color, fontWeight: 800, fontSize: '1.1rem' }}>{service.number}</span>
                        <span>{service.title}</span>
                      </div>
                      <motion.div
                        className={`service-dropdown-icon ${openServices.has(service.id) ? 'open' : ''}`}
                        animate={{ rotate: openServices.has(service.id) ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                      >
                        <img src={assets.svgs.chevronUp} alt="Toggle" style={{ width: 16, filter: 'brightness(0) invert(1)' }} />
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openServices.has(service.id) && (
                        <motion.div
                          className="service-dropdown-content open"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="service-content-inner">
                            <div className="service-content-text">
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                              >
                                {service.description}
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                {service.detail}
                              </motion.p>
                              <motion.div
                                className="format-stat-row"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                              >
                                {service.stats.map((stat) => (
                                  <div className="format-stat" key={stat.label}>
                                    <span className="format-stat-value" style={{ color: service.color }}>{stat.value}</span>
                                    <span className="format-stat-label">{stat.label}</span>
                                  </div>
                                ))}
                              </motion.div>
                              <motion.div
                                className="format-chip-row"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                              >
                                {service.bestFor.map((tag) => (
                                  <span className="format-chip" key={tag} style={{ '--chip-color': service.color }}>{tag}</span>
                                ))}
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.35 }}
                              >
                                <Link to="/contact" className="new-button" style={{ marginTop: 8, display: 'inline-flex' }}>
                                  <span className="new-button-text">ENQUIRE NOW</span>
                                </Link>
                              </motion.div>
                            </div>
                            <motion.div
                              className="service-content-image"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <img src={service.image} alt={service.title} />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Doohpie Comparison */}
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
                  ONE FORMAT VS FORMAT MIX
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
                  <div className="compare-col-label">SINGLE-FORMAT BOOKING</div>
                  {formatComparisonRows.map((row) => (
                    <div className="compare-row" key={row.old}>
                      <span className="compare-icon cross">&#10005;</span>
                      <p>{row.old}</p>
                    </div>
                  ))}
                </motion.div>
                <motion.div className="compare-col compare-col-new" variants={fadeUp}>
                  <SpotlightCard className="compare-col-inner">
                    <div className="compare-col-label accent">DOOHPIE FORMAT MIX</div>
                    {formatComparisonRows.map((row) => (
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

      {/* Why the format mix matters */}
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
                  WHY IT WORKS
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  WHY THE FORMAT MIX MATTERS
                </motion.h2>
              </div>
              <motion.div
                className="values-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {formatValues.map((value) => (
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

      {/* Workflow / Process */}
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
                  HOW IT WORKS
                </motion.span>
                <motion.h2
                  className="lookat_heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                >
                  FROM LOCATION TO CAMPAIGN
                </motion.h2>
                <motion.p
                  className="text-size-medium"
                  style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '60ch' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                >
                  Target a city, select an area, identify locations, choose inventory, upload creative, launch. Doohpie simplifies the outdoor advertising workflow into six steps.
                </motion.p>
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
                  {workflowSteps.map((step, index) => (
                    <motion.div className="process-step" key={step.title} variants={fadeUp}>
                      <SpotlightCard className="process-step-inner">
                        <span className="process-step-num">{String(index + 1).padStart(2, '0')}</span>
                        <div className="process-step-title">{step.title}</div>
                        <p className="process-step-desc">{step.text}</p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
                <h2 className="about-cta-title">Sound like what you need?</h2>
                <p className="about-cta-copy">
                  Tell us your target area and budget - we'll map the format mix that gets your brand out there fastest.
                </p>
                <div className="about-cta-actions">
                  <MagneticLink to="/contact" className="new-button is-white" strength={0.25}>
                    <span className="new-button-text">ENQUIRE NOW</span>
                  </MagneticLink>
                  <MagneticLink to="/work" className="new-button" strength={0.25}>
                    <span className="new-button-text">SEE OUR WORK</span>
                  </MagneticLink>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </>
  )
}

export default Services
