import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

const servicesData = [
  {
    id: 1, number: '01', title: 'STATIC BILLBOARDS',
    description: "Large-format advertising displays printed on paper, vinyl or other durable materials and installed on permanent metal structures. A powerful, highly visible format for brands looking to create strong awareness in high-traffic locations.",
    detail: "Ideal for brand awareness campaigns, product launches, retail promotions, local market campaigns, political and public campaigns, automotive advertising and FMCG brands. Unlike online ads that can be skipped or blocked, a strategically placed billboard remains visible to everyone travelling through the location throughout the campaign period.",
    image: assets.services.allison,
  },
  {
    id: 2, number: '02', title: 'DIGITAL LED BOARDS',
    description: "Bright, high-resolution screens displaying images, animations, videos and multiple advertisements in rotating loops. Change creative content without physically replacing any material.",
    detail: "Ideal for video advertising, product launches, time-sensitive offers, event promotions and real-time campaigns. Run multiple creatives on the same screen and adapt by time of day - breakfast campaigns in the morning, retail promotions in the afternoon, entertainment in the evening - for more relevant advertising throughout the day.",
    image: assets.services.copyImage,
  },
  {
    id: 3, number: '03', title: 'BACKLIT DISPLAYS',
    description: "Displays using internal illumination to keep advertisements clearly visible, particularly during evening and nighttime hours, in high-footfall and high-traffic environments.",
    detail: "Common locations include high streets, shopping areas, transport hubs, commercial complexes, roads and intersections. The combination of strong creative design and illumination helps your advertisement remain clear, attractive and noticeable throughout the day and night.",
    image: assets.services.homepage,
  },
  {
    id: 4, number: '04', title: 'CONSTRUCTION COVERS',
    description: "Large temporary advertising surfaces installed around construction sites, building projects, renovation areas and temporary structures - spaces that stay highly visible for months or even years.",
    detail: "Ideal for large brand campaigns, real estate companies, luxury brands, automotive brands, fashion campaigns and new product launches. With the right location and creative execution, construction covers transform plain barriers into large-scale brand experiences that dominate the visual landscape of busy urban areas.",
    image: assets.services.archivedVanity,
  },
]

const workflowSteps = [
  { step: 'STEP 1', title: 'Define Your Target', text: 'Choose the geographical area where you want your campaign to appear.' },
  { step: 'STEP 2', title: 'Discover Inventory', text: 'Explore available outdoor advertising locations and formats within your target area.' },
  { step: 'STEP 3', title: 'Select Your Spaces', text: 'Choose the billboards, LED screens, backlit displays or construction covers that fit your campaign.' },
  { step: 'STEP 4', title: 'Upload Your Creative', text: 'Upload the advertising creative designed for the selected format and dimensions.' },
  { step: 'STEP 5', title: 'Plan Your Campaign', text: 'Define campaign duration, locations, creatives and other campaign parameters.' },
  { step: 'STEP 6', title: 'Launch', text: 'Activate your campaign and get your brand in front of audiences across selected locations.' },
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
                  One platform. Multiple advertising formats. Doohpie brings static, digital, backlit and large-format outdoor inventory together in a single place.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  There are four ways to put your brand outdoors.
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

      <section className="section-servicecontent">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <h2 className="text-size-xxlarge" style={{ marginBottom: 48 }}>FROM LOCATION TO CAMPAIGN</h2>
              <p className="text-size-medium" style={{ marginBottom: 48, color: 'rgba(255,255,255,0.7)' }}>
                Target a city → select an area → identify locations → choose inventory → upload creative → launch. Doohpie simplifies the outdoor advertising workflow into six steps.
              </p>
              <div className="services-component">
                {workflowSteps.map((step) => (
                  <div className="service-item" key={step.step}>
                    <div className="service-dropdown-toggle">
                      <div className="service-dropdown-heading">{step.step} — {step.title}</div>
                    </div>
                    <div className="service-content-inner" style={{ padding: '0 24px 24px' }}>
                      <div className="service-content-text">
                        <p>{step.text}</p>
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

      <PresenceSection />
    </>
  )
}

export default Services
