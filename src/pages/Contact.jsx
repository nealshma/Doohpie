import { useState } from 'react'
import { assets } from '../assets'

const followerRanges = ['1-10k', '10-25k', '25-100k', '100k+']
const interests = ['COMEDY', 'FASHION', 'MUSIC', 'HAIR', 'TRAVEL', 'FOOD', 'GAMING', 'CARS', 'SPORTS', 'ENTERTAINMENT', 'BEAUTY', 'OTHER']

const nextArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className="new-button_icon">
    <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"></circle>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.7105 6.26317L21.4285 11.9812C21.7794 12.3321 21.7794 12.901 21.4285 13.2519L15.7105 18.97C15.3596 19.3209 14.7907 19.3209 14.4398 18.97C14.0889 18.6191 14.0889 18.0502 14.4398 17.6993L18.624 13.5151H5.89851C5.40227 13.5151 5 13.1128 5 12.6166C5 12.1203 5.40227 11.7181 5.89851 11.7181H18.624L14.4398 7.53385C14.0889 7.18296 14.0889 6.61405 14.4398 6.26317C14.7907 5.91228 15.3596 5.91228 15.7105 6.26317Z" fill="currentColor"></path>
  </svg>
)

const submitArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className="new-button_icon">
    <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"></circle>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.99634 7.4155L18.0829 7.41551C18.5791 7.41551 18.9814 7.81778 18.9814 8.31401L18.9814 16.4006C18.9814 16.8968 18.5791 17.2991 18.0829 17.2991C17.5867 17.2991 17.1844 16.8968 17.1844 16.4006L17.1844 10.4832L8.18611 19.4815C7.83522 19.8324 7.26632 19.8324 6.91543 19.4815C6.56455 19.1306 6.56455 18.5617 6.91543 18.2108L15.9137 9.21252L9.99634 9.21251C9.50011 9.21251 9.09784 8.81024 9.09784 8.31401C9.09784 7.81778 9.50011 7.4155 9.99634 7.4155Z" fill="currentColor"></path>
  </svg>
)

function MilkBanner() {
  return (
    <section className="section_busines-milk">
      <div className="milk-4-masses">MILK 4 the masses</div>
    </section>
  )
}

function Contact() {
  const [activeTab, setActiveTab] = useState('CLIENT')

  const [clientForm, setClientForm] = useState({ name: '', email: '', company: '', message: '' })

  const [creatorStep, setCreatorStep] = useState(1)
  const [creatorForm, setCreatorForm] = useState({
    firstName: '', lastName: '', email: '',
    platforms: [{ platform: '', social: '' }],
    followers: '',
    socialTypes: [],
    message: '',
  })

  const handleClientSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your submission has been received!')
    setClientForm({ name: '', email: '', company: '', message: '' })
  }

  const handleCreatorSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your submission has been received!')
    setCreatorForm({ firstName: '', lastName: '', email: '', platforms: [{ platform: '', social: '' }], followers: '', socialTypes: [], message: '' })
    setCreatorStep(1)
  }

  const addPlatform = () => {
    setCreatorForm((f) => ({ ...f, platforms: [...f.platforms, { platform: '', social: '' }] }))
  }

  const updatePlatform = (index, field, value) => {
    setCreatorForm((f) => {
      const platforms = [...f.platforms]
      platforms[index] = { ...platforms[index], [field]: value }
      return { ...f, platforms }
    })
  }

  const toggleSocialType = (type) => {
    setCreatorForm((f) => ({
      ...f,
      socialTypes: f.socialTypes.includes(type)
        ? f.socialTypes.filter((t) => t !== type)
        : [...f.socialTypes, type],
    }))
  }

  return (
    <>
      {/* Hero */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component is-contact">
                <p className="text-size-huge">
                  With teams across London, New York, Dubai and Rio, we combine global reach with local expertise to help brands build communities that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section_contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="contact_component">
                <div className="contact-tabs-wrap">
                  {['CLIENT', 'CREATOR'].map((tab) => (
                    <div
                      key={tab}
                      className={`contat-tab ${activeTab === tab ? 'w--current' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      <div className="circle-pink-careers selected">
                        <img loading="lazy" src={assets.svgs.vector88} alt="" />
                      </div>
                      <div className="text-weight-medium pill-text-up">{tab}</div>
                    </div>
                  ))}
                </div>

                {/* CLIENT TAB */}
                {activeTab === 'CLIENT' && (
                  <div className="contact-form_wrapper">
                    <div className="contact-form_layout">
                      <div>
                        <p className="contact-intro">We partner with ambitious brands to create relevance, advocacy and long-term growth.</p>
                      </div>
                      <div>
                        <form className="contact-form-2" onSubmit={handleClientSubmit}>
                          <input
                            className="form_input"
                            maxLength={256}
                            placeholder="NAME*"
                            type="text"
                            value={clientForm.name}
                            onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                            required
                          />
                          <input
                            className="form_input"
                            maxLength={256}
                            placeholder="EMAIL*"
                            type="email"
                            value={clientForm.email}
                            onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                            required
                          />
                          <input
                            className="form_input"
                            maxLength={256}
                            placeholder="COMPANY"
                            type="text"
                            value={clientForm.company}
                            onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                          />
                          <textarea
                            className="form_input is-text-area"
                            maxLength={5000}
                            placeholder="MESSAGE*"
                            value={clientForm.message}
                            onChange={(e) => setClientForm({ ...clientForm, message: e.target.value })}
                            required
                          ></textarea>
                          <button type="submit" className="new-button is-shorter">
                            <div className="new-button_text">Submit</div>
                            {submitArrow}
                          </button>
                        </form>
                      </div>
                    </div>
                    <MilkBanner />
                  </div>
                )}

                {/* CREATOR TAB */}
                {activeTab === 'CREATOR' && (
                  <div className="contact-form_wrapper">
                    <form onSubmit={handleCreatorSubmit}>
                      <div className="form-step-wrapper">
                        {[1, 2, 3, 4].map((step) => (
                          <div key={step} className={`step-tab-form ${creatorStep >= step ? 'is-active' : ''}`}>
                            <div className="circle-pink-careers selected">
                              <img loading="lazy" src={assets.svgs.vector88} alt="" />
                            </div>
                            <div>STEP {step}</div>
                          </div>
                        ))}
                      </div>

                      {creatorStep === 1 && (
                        <div className="contact-form_layout">
                          <div>
                            <p className="contact-intro">Like the look of our clients? If you're a creator, we'd love to hear from you.</p>
                          </div>
                          <div className="contact-form form-slider">
                            <input
                              className="form_input"
                              maxLength={256}
                              placeholder="First Name*"
                              type="text"
                              value={creatorForm.firstName}
                              onChange={(e) => setCreatorForm({ ...creatorForm, firstName: e.target.value })}
                              required
                            />
                            <input
                              className="form_input"
                              maxLength={256}
                              placeholder="Last Name*"
                              type="text"
                              value={creatorForm.lastName}
                              onChange={(e) => setCreatorForm({ ...creatorForm, lastName: e.target.value })}
                              required
                            />
                            <input
                              className="form_input"
                              maxLength={256}
                              placeholder="E-mail*"
                              type="email"
                              value={creatorForm.email}
                              onChange={(e) => setCreatorForm({ ...creatorForm, email: e.target.value })}
                              required
                            />
                            {creatorForm.platforms.map((p, i) => (
                              <div key={i} className="form-slider" style={{ gap: '1.25rem' }}>
                                <input
                                  className="form_input"
                                  maxLength={256}
                                  placeholder="PLATFORM*"
                                  type="text"
                                  value={p.platform}
                                  onChange={(e) => updatePlatform(i, 'platform', e.target.value)}
                                  required
                                />
                                <input
                                  className="form_input"
                                  maxLength={256}
                                  placeholder="SOCIAL HANDLE*"
                                  type="text"
                                  value={p.social}
                                  onChange={(e) => updatePlatform(i, 'social', e.target.value)}
                                  required
                                />
                              </div>
                            ))}
                            <div className="enquire-button is-not-full-width" onClick={addPlatform} style={{ cursor: 'pointer' }}>
                              <div>ADD PLATFORM</div>
                              <div className="circle-pink">
                                <img loading="lazy" src={assets.svgs.groupSvg} alt="" />
                              </div>
                            </div>
                            <div className="form_previous-next_layout">
                              <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setCreatorStep(1)}>
                                <div className="new-button_text is-white is-flipped">Previous</div>
                                {nextArrow}
                              </button>
                              <button type="button" className="new-button is-shorter is-white" onClick={() => setCreatorStep(2)}>
                                <div className="new-button_text is-white">Next</div>
                                {nextArrow}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {creatorStep === 2 && (
                        <div className="contact-form_layout">
                          <div>
                            <p className="contact-intro">We are unlocking advocacy, rather than buying it. and we're fishing where your competitors aren't.</p>
                          </div>
                          <div className="contact-form form-slider">
                            {followerRanges.map((range) => (
                              <div
                                key={range}
                                className={`contact-radio ${creatorForm.followers === range ? 'is-selected' : ''}`}
                                onClick={() => setCreatorForm({ ...creatorForm, followers: range })}
                              >
                                {range}
                              </div>
                            ))}
                            <div className="form_previous-next_layout">
                              <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setCreatorStep(1)}>
                                <div className="new-button_text is-white is-flipped">Previous</div>
                                {nextArrow}
                              </button>
                              <button type="button" className="new-button is-shorter is-white" onClick={() => setCreatorStep(3)}>
                                <div className="new-button_text is-white">Next</div>
                                {nextArrow}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {creatorStep === 3 && (
                        <div className="contact-form_layout">
                          <div>
                            <p className="contact-intro">We are unlocking advocacy, rather than buying it. and we're fishing where your competitors aren't.</p>
                          </div>
                          <div className="contact-form-social">
                            {interests.map((type) => (
                              <div
                                key={type}
                                className={`checkbox-wrapper ${creatorForm.socialTypes.includes(type) ? 'is-selected' : ''}`}
                                onClick={() => toggleSocialType(type)}
                              >
                                {type}
                              </div>
                            ))}
                            <div className="form_previous-next_layout">
                              <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setCreatorStep(2)}>
                                <div className="new-button_text is-white is-flipped">Previous</div>
                                {nextArrow}
                              </button>
                              <button type="button" className="new-button is-shorter is-white" onClick={() => setCreatorStep(4)}>
                                <div className="new-button_text is-white">Next</div>
                                {nextArrow}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {creatorStep === 4 && (
                        <div className="contact-form_layout">
                          <div>
                            <p className="contact-intro">We are unlocking advocacy, rather than buying it. and we're fishing where your competitors aren't.</p>
                          </div>
                          <div className="contact-form form-slider">
                            <textarea
                              className="form_input is-text-area"
                              maxLength={5000}
                              placeholder="LEAVE US A NOTE"
                              value={creatorForm.message}
                              onChange={(e) => setCreatorForm({ ...creatorForm, message: e.target.value })}
                            ></textarea>
                            <div className="form_previous-next_layout">
                              <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setCreatorStep(3)}>
                                <div className="new-button_text is-white is-flipped">Previous</div>
                                {nextArrow}
                              </button>
                              <button type="submit" className="new-button is-shorter">
                                <div className="new-button_text">Submit</div>
                                {submitArrow}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </form>
                    <MilkBanner />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
