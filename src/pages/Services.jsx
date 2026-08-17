import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'

const servicesData = [
  {
    id: 1, number: '01', title: 'BRAND FANS',
    description: "Brand Fans is Doohpie's approach to gifting — turning product sends into a scalable engine for content, conversation and advocacy.",
    detail: "Our Brand Fans programme connects you with curated creators who align with your values, aesthetic, and audience.",
    image: assets.services.allison,
  },
  {
    id: 2, number: '02', title: 'CREATOR CAMPAIGNS',
    description: "Full-service creator campaigns from brief to final reporting. Every campaign is tailored to your brand's unique goals.",
    detail: "Our team works hand-in-hand with creators to produce campaigns that cut through the noise.",
    image: assets.services.copyImage,
  },
  {
    id: 3, number: '03', title: 'ADVISORY',
    description: "Strategic consulting for brands looking to build their creator marketing capabilities.",
    detail: "From creator programme audits to full strategy development, we provide actionable insights.",
    image: assets.services.homepage,
  },
  {
    id: 4, number: '04', title: 'RADAR',
    description: "RADAR is Doohpie's proprietary creator intelligence platform. Real-time data on creator performance.",
    detail: "Track engagement rates, audience demographics, content performance, and ROI with precision.",
    image: assets.services.archivedVanity,
  },
]

function Services() {
  const [openService, setOpenService] = useState(null)
  const toggleService = (id) => setOpenService(openService === id ? null : id)

  return (
    <>
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-large">
                  We're not a social or PR agency. Nor are we a talent agency. Doohpie is the independent Creator Company.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  There are four ways to work with Doohpie.
                </p>
                <a href="/work" className="new-button" style={{ marginTop: 32, display: 'inline-flex' }}>
                  <span className="new-button-text">SEE OUR WORK</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-servicecontent">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="services-component">
                {servicesData.map((service) => (
                  <div className="service-item" key={service.id}>
                    <div className="service-dropdown-toggle" onClick={() => toggleService(service.id)}>
                      <div className="service-dropdown-heading">{service.number} — {service.title}</div>
                      <div className={`service-dropdown-icon ${openService === service.id ? 'open' : ''}`}>
                        <img src={assets.svgs.chevronUp} alt="Toggle" style={{ width: 16, filter: 'brightness(0) invert(1)' }} />
                      </div>
                    </div>
                    <div className={`service-dropdown-content ${openService === service.id ? 'open' : ''}`}>
                      <div className="service-content-inner">
                        <div className="service-content-text">
                          <p>{service.description}</p>
                          <p>{service.detail}</p>
                          <Link to="/contact" className="new-button" style={{ marginTop: 24, display: 'inline-flex' }}>
                            <span className="new-button-text">ENQUIRE NOW</span>
                          </Link>
                        </div>
                        <div className="service-content-image">
                          <img src={service.image} alt={service.title} />
                        </div>
                      </div>
                    </div>
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
                <h2 className="cta-heading text-size-xxlarge">SOUND LIKE WHAT YOU NEED?</h2>
                <Link to="/contact" className="new-button is-white">
                  <span className="new-button-text">ENQUIRE NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
