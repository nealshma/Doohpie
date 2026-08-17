import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'

const values = [
  { title: 'Creator First', description: 'Everything we do starts with the creator. Their success is our success.' },
  { title: 'Authenticity Always', description: 'We never compromise on authenticity. Real voices, real impact.' },
  { title: 'Bold Thinking', description: 'We push boundaries and challenge the status quo in creator marketing.' },
  { title: 'Data-Driven', description: 'We combine creative intuition with hard data to make smart decisions.' },
  { title: 'Collaboration', description: 'Great work happens when great people work together.' },
]

const benefits = [
  { title: 'Flexible Working', description: 'Hybrid working model with flexible hours.' },
  { title: 'Unlimited PTO', description: 'We trust you to manage your time.' },
  { title: 'Learning Budget', description: 'Annual budget for courses, conferences, and professional development.' },
  { title: 'Wellness Programme', description: 'Mental health support, gym membership, and wellness initiatives.' },
  { title: 'Team Events', description: 'Regular team offsites, socials, and creative workshops.' },
  { title: 'Creator Access', description: 'Direct access to our network of creators and industry events.' },
]

const culture = [
  { title: 'We Move Fast', description: 'The creator economy waits for no one.' },
  { title: 'We Stay Curious', description: 'Trends change, platforms evolve. We never stop learning.' },
  { title: 'We Celebrate Wins', description: 'Every milestone, every success — we celebrate it all.' },
  { title: 'We Keep It Real', description: 'No politics, no egos. Just passionate people doing great work.' },
]

const teamImages = [
  assets.careers.dior,
  assets.careers.sian,
  assets.careers.but,
  assets.careers.slide4,
  assets.careers.louie,
  assets.careers.slide3,
]

function Careers() {
  const [activeTab, setActiveTab] = useState('values')
  const tabs = [
    { id: 'values', label: 'VALUES' },
    { id: 'benefits', label: 'BENEFITS' },
    { id: 'culture', label: 'CULTURE' },
  ]
  const tabData = { values, benefits, culture }

  return (
    <>
      <section className="section-careerhero">
        <div className="padding-global">
          <div className="container-large">
            <h1 className="text-size-large">
              At Doohpie, we're not just about creating exceptional brand content — we're about building a buzzing community of passionate, creative, and innovative individuals.
            </h1>
          </div>
        </div>
      </section>

      <section className="career-tabs">
        <div className="padding-global">
          <div className="container-large">
            <div className="career-tabs-menu">
              {tabs.map((tab) => (
                <button key={tab.id} className={`career-tab-link ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </button>
              ))}
            </div>
            {Object.entries(tabData).map(([key, items]) => (
              <div key={key} className={`career-tab-content ${activeTab === key ? 'active' : ''}`}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
                  {items.map((item, i) => (
                    <div key={i} className="tab-content-item" style={{ padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section style={{ padding: '80px 0' }}>
        <div className="padding-global">
          <div className="container-large">
            <img src={assets.svgs.opportunities} alt="Opportunities" style={{ height: 40, marginBottom: 32, filter: 'brightness(0) invert(1)' }} />
            <div style={{ padding: 64, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 16, textAlign: 'center' }}>
              <p className="text-size-large" style={{ marginBottom: 16 }}>
                We're currently not looking for any new hires — check back soon!
              </p>
              <p className="text-color-grey">In the meantime, follow us on social media to stay updated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images */}
      <section style={{ padding: '80px 0' }}>
        <div className="padding-global">
          <div className="container-large">
            <h2 className="text-size-xxlarge" style={{ marginBottom: 48 }}>MEET THE TEAM</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {teamImages.map((img, i) => (
                <div key={i} style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '4/5' }}>
                  <img src={img} alt={`Team ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enter the Doohpieverse */}
      <section className="section-presence">
        <div className="padding-global">
          <div className="container-large">
            <div className="presence-component">
              <img src={assets.svgs.enterButterverse} alt="Enter The Doohpieverse" style={{ width: '100%', maxWidth: 800, margin: '0 auto 48px', display: 'block', filter: 'brightness(0) invert(1)' }} />
              <div className="social-buttons">
                <a href="https://www.instagram.com/doohpie" target="_blank" rel="noopener noreferrer" className="social-button">INSTAGRAM</a>
                <a href="https://www.tiktok.com/@doohpie" target="_blank" rel="noopener noreferrer" className="social-button">TIKTOK</a>
                <a href="https://www.linkedin.com/company/doohpie" target="_blank" rel="noopener noreferrer" className="social-button">LINKEDIN</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
