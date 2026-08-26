import PresenceSection from '../components/PresenceSection'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using the Doohpie platform, website, and related services (the "Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, you must not access or use the Platform.',
  },
  {
    title: '2. Description of Service',
    body: 'Doohpie provides a geo-targeted out-of-home and digital out-of-home advertising platform that enables advertisers to plan, manage, and execute outdoor advertising campaigns across multiple locations and formats.',
  },
  {
    title: '3. Campaign Planning and Booking',
    body: 'All campaign plans, bookings, and placements are subject to inventory availability. Doohpie does not guarantee specific billboard locations, impressions, or outcomes unless explicitly agreed in a signed insertion order or campaign agreement.',
  },
  {
    title: '4. Pricing and Payment',
    body: 'Campaign pricing is provided through the Platform or via a custom quote. All fees are exclusive of applicable taxes unless stated otherwise. Payment terms are specified in each campaign agreement or insertion order.',
  },
  {
    title: '5. Intellectual Property',
    body: 'All content, software, design, trademarks, and materials on the Platform are the property of Doohpie or its licensors and are protected by applicable intellectual property laws.',
  },
  {
    title: '6. Limitation of Liability',
    body: 'To the maximum extent permitted by law, Doohpie shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.',
  },
  {
    title: '7. Termination',
    body: 'Doohpie may suspend or terminate your access to the Platform at any time, with or without cause, and with or without notice. Upon termination, your right to use the Platform ceases immediately.',
  },
  {
    title: '8. Governing Law',
    body: 'These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
]

function TermsConditions() {
  return (
    <div className="page-content-wrapper page-content-top">
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="legal-hero">
                <span className="gf-hero-eyebrow">LEGAL</span>
                <h1 className="legal-hero-title">
                  Terms &amp;<br />
                  <span className="legal-hero-accent">Conditions</span>
                </h1>
                <p className="legal-hero-sub">
                  The rules governing how you use the Doohpie platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="contact_component">
                <div className="legal-content">
                  <p className="legal-updated">Last updated: August 2026</p>
                  {sections.map((section) => (
                    <div className="legal-section" key={section.title}>
                      <h3 className="legal-heading">{section.title}</h3>
                      <p className="legal-body">{section.body}</p>
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

export default TermsConditions
