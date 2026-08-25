import PresenceSection from '../components/PresenceSection'

const sections = [
  {
    title: '1. Introduction',
    body: 'Doohpie ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and related services (the "Platform").',
  },
  {
    title: '2. Information We Collect',
    body: 'We collect information you provide directly, including account registration details, billing information, campaign briefs, and communications. We also collect information automatically such as device data, IP address, pages visited, and cookies.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use your information to operate and improve the Platform, process campaign bookings and payments, provide reporting and analytics, communicate with you about your account, and comply with legal obligations.',
  },
  {
    title: '4. How We Share Your Information',
    body: 'We may share your information with media owners to fulfil campaigns, service providers who assist with operations, and legal authorities when required by law. We do not sell your personal information to third parties.',
  },
  {
    title: '5. Cookies and Tracking',
    body: 'We use cookies and similar technologies to maintain your session, analyse usage patterns, and measure campaign effectiveness. You can control cookies through your browser settings.',
  },
  {
    title: '6. Your Rights',
    body: 'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at team@doohpie.com.',
  },
  {
    title: '7. Data Security',
    body: 'We implement industry-standard security measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '8. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the Platform after changes are posted constitutes acceptance of the updated policy.',
  },
]

function PrivacyPolicy() {
  return (
    <div className="page-content-wrapper page-content-top">
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="legal-hero">
                <span className="gf-hero-eyebrow">LEGAL</span>
                <h1 className="legal-hero-title">
                  Privacy<br />
                  <span className="legal-hero-accent">Policy</span>
                </h1>
                <p className="legal-hero-sub">
                  How we collect, use, and protect your information.
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

export default PrivacyPolicy
