import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  const [activeTab, setActiveTab] = useState('client')
  const [clientForm, setClientForm] = useState({ name: '', email: '', company: '', message: '' })
  const [creatorStep, setCreatorStep] = useState(1)
  const [creatorForm, setCreatorForm] = useState({
    name: '', email: '', handle: '', platform: '',
    followers: '', message: '',
  })

  const handleClientSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will be in touch soon.')
    setClientForm({ name: '', email: '', company: '', message: '' })
  }

  const handleCreatorSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for signing up! We will review your application.')
    setCreatorForm({ name: '', email: '', handle: '', platform: '', followers: '', message: '' })
    setCreatorStep(1)
  }

  return (
    <>
      {/* Hero */}
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-huge">
                  With teams across London, New York and Dubai, we combine global reach with local expertise.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="contact-component">
              <div className="contact-tabs-wrap">
                <button
                  className={`contact-tab ${activeTab === 'client' ? 'active' : ''}`}
                  onClick={() => setActiveTab('client')}
                >
                  CLIENT
                </button>
                <button
                  className={`contact-tab ${activeTab === 'creator' ? 'active' : ''}`}
                  onClick={() => setActiveTab('creator')}
                >
                  CREATOR
                </button>
                <button
                  className={`contact-tab ${activeTab === 'careers' ? 'active' : ''}`}
                  onClick={() => setActiveTab('careers')}
                >
                  CAREERS
                </button>
              </div>

              {/* Client Tab */}
              <div className={`contact-tab-content ${activeTab === 'client' ? 'active' : ''}`}>
                <div className="contact-form-layout">
                  <div className="contact-intro" style={{ marginBottom: 48 }}>
                    <h2 className="text-size-large" style={{ marginBottom: 16 }}>LET'S WORK TOGETHER</h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                      Whether you're looking for a full-service creator campaign or strategic advisory, we'd love to hear from you.
                    </p>
                  </div>
                  <form className="contact-form" onSubmit={handleClientSubmit}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="YOUR NAME"
                      value={clientForm.name}
                      onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      className="form-input"
                      placeholder="YOUR EMAIL"
                      value={clientForm.email}
                      onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="COMPANY"
                      value={clientForm.company}
                      onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                    />
                    <textarea
                      className="form-input is-text-area"
                      placeholder="YOUR MESSAGE"
                      value={clientForm.message}
                      onChange={(e) => setClientForm({ ...clientForm, message: e.target.value })}
                      required
                    ></textarea>
                    <div>
                      <button type="submit" className="new-button is-white" style={{ marginTop: 16 }}>
                        <span className="new-button-text">SEND MESSAGE</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Creator Tab */}
              <div className={`contact-tab-content ${activeTab === 'creator' ? 'active' : ''}`}>
                <div className="contact-form-layout">
                  <div className="contact-intro" style={{ marginBottom: 48 }}>
                    <h2 className="text-size-large" style={{ marginBottom: 16 }}>JOIN DOOHPIE AS A CREATOR</h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
                      You don't need to have the biggest followership to make the biggest impact. We work with micro creators and top tier VIPs.
                    </p>
                  </div>

                  {/* Multi-step form */}
                  <div className="multistep-form">
                    <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          style={{
                            flex: 1,
                            height: 3,
                            borderRadius: 2,
                            background: creatorStep >= step ? '#FF00C3' : 'rgba(255,255,255,0.2)',
                            transition: 'background 0.3s ease',
                          }}
                        />
                      ))}
                    </div>

                    <form onSubmit={handleCreatorSubmit}>
                      {creatorStep === 1 && (
                        <div className="form-step active">
                          <h3 className="form-step-title">TELL US ABOUT YOURSELF</h3>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="YOUR NAME"
                              value={creatorForm.name}
                              onChange={(e) => setCreatorForm({ ...creatorForm, name: e.target.value })}
                              required
                            />
                            <input
                              type="email"
                              className="form-input"
                              placeholder="YOUR EMAIL"
                              value={creatorForm.email}
                              onChange={(e) => setCreatorForm({ ...creatorForm, email: e.target.value })}
                              required
                            />
                            <input
                              type="text"
                              className="form-input"
                              placeholder="SOCIAL HANDLE"
                              value={creatorForm.handle}
                              onChange={(e) => setCreatorForm({ ...creatorForm, handle: e.target.value })}
                            />
                          </div>
                          <div className="form-nav-buttons">
                            <button type="button" className="new-button" onClick={() => setCreatorStep(2)}>
                              <span className="new-button-text">NEXT</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {creatorStep === 2 && (
                        <div className="form-step active">
                          <h3 className="form-step-title">HOW MANY FOLLOWERS DO YOU HAVE?</h3>
                          <div className="radio-group">
                            {['1-10k', '10-50k', '50-100k', '100k-500k', '500k+'].map((range) => (
                              <div
                                key={range}
                                className={`radio-option ${creatorForm.followers === range ? 'selected' : ''}`}
                                onClick={() => setCreatorForm({ ...creatorForm, followers: range })}
                              >
                                <div className="radio-button-ico"></div>
                                <div>{range}</div>
                              </div>
                            ))}
                          </div>
                          <div className="form-nav-buttons">
                            <button type="button" className="new-button" onClick={() => setCreatorStep(1)}>
                              <span className="new-button-text">BACK</span>
                            </button>
                            <button type="button" className="new-button is-white" onClick={() => setCreatorStep(3)}>
                              <span className="new-button-text">NEXT</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {creatorStep === 3 && (
                        <div className="form-step active">
                          <h3 className="form-step-title">ANYTHING ELSE?</h3>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <input
                              type="text"
                              className="form-input"
                              placeholder="PRIMARY PLATFORM (e.g., Instagram, TikTok)"
                              value={creatorForm.platform}
                              onChange={(e) => setCreatorForm({ ...creatorForm, platform: e.target.value })}
                            />
                            <textarea
                              className="form-input is-text-area"
                              placeholder="TELL US ABOUT YOURSELF AND YOUR CONTENT"
                              value={creatorForm.message}
                              onChange={(e) => setCreatorForm({ ...creatorForm, message: e.target.value })}
                            ></textarea>
                          </div>
                          <div className="form-nav-buttons">
                            <button type="button" className="new-button" onClick={() => setCreatorStep(2)}>
                              <span className="new-button-text">BACK</span>
                            </button>
                            <button type="submit" className="new-button is-magenta">
                              <span className="new-button-text">SUBMIT</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>

              {/* Careers Tab */}
              <div className={`contact-tab-content ${activeTab === 'careers' ? 'active' : ''}`}>
                <div className="contact-form-layout">
                  <div className="contact-intro">
                    <h2 className="text-size-large" style={{ marginBottom: 16 }}>CRAZY FOR CREATOR MARKETING?</h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
                      We're always looking for passionate people to join the Doohpie team.
                    </p>
                    <Link to="/careers" className="new-button is-white">
                      <span className="new-button-text">VIEW OPEN ROLES</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
