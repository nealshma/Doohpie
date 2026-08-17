import { useState } from 'react'
import { assets } from '../assets'

const platformChoices = ['Facebook', 'Instagram', 'X/Twitter', 'Tiktok', 'Threads', 'Others']
const followerRanges = ['1-10k', '10-25k', '25-100k', '100k+']
const categories = ['COMEDY', 'FASHION', 'MUSIC', 'Lifestyle', 'TRAVEL', 'FOOD', 'GAMING', 'Tech', 'SPORTS', 'ENTERTAINMENT', 'BEAUTY', 'OTHER']

const EMAIL_RE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const arrow = (extraClass = 'new-button_icon') => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className={extraClass}>
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

const instagramSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 29 29" fill="none" className="new-button_icon">
    <path d="M14.5002 17.7738C16.2478 17.7738 17.6645 16.3572 17.6645 14.6096C17.6645 12.862 16.2478 11.4453 14.5002 11.4453C12.7526 11.4453 11.3359 12.862 11.3359 14.6096C11.3359 16.3572 12.7526 17.7738 14.5002 17.7738Z" fill="currentColor"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.5694 6.93555H10.4306C8.43979 6.93555 6.82617 8.54945 6.82617 10.54V18.6787C6.82617 20.6696 8.43979 22.2832 10.4306 22.2832H18.5694C20.5602 22.2832 22.1738 20.6696 22.1738 18.6787V10.54C22.1738 8.54945 20.5602 6.93555 18.5694 6.93555ZM14.5 19.4908C11.804 19.4908 9.61887 17.3054 9.61887 14.6094C9.61887 11.9134 11.804 9.72825 14.5 9.72825C17.196 9.72825 19.3814 11.9134 19.3814 14.6094C19.3814 17.3054 17.196 19.4908 14.5 19.4908ZM19.5439 10.6796C18.916 10.6796 18.4068 10.1707 18.4068 9.54246C18.4068 8.91421 18.916 8.40536 19.5439 8.40536C20.1719 8.40536 20.6813 8.91449 20.6813 9.54246C20.6813 10.1704 20.1719 10.6796 19.5439 10.6796Z" fill="currentColor"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.4999 0C6.51375 0 0 6.51375 0 14.4999C0 22.486 6.51375 29 14.4999 29C22.486 29 28.9997 22.4863 28.9997 14.4999C28.9997 6.51346 22.4863 0 14.4999 0ZM23.9061 18.5394C23.9061 21.5383 21.4754 23.9697 18.4762 23.9697H10.5235C7.52463 23.9697 5.09357 21.5383 5.09357 18.5394V10.5871C5.09357 7.58788 7.52463 5.15682 10.5235 5.15682H18.4762C21.4754 5.15682 23.9061 7.58788 23.9061 10.5871V18.5394Z" fill="currentColor"></path>
  </svg>
)

const linkedinSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 46 46" width="100%" className="new-button_icon">
    <path d="M23,0C10.3,0,0,10.3,0,23s10.3,23,23,23c12.7,0,23-10.3,23-23S35.7,0,23,0z M16.5,34.5h-4.7V19.2h4.7V34.5z   M16.9,14.3c0,0.4-0.1,0.7-0.2,1c-0.1,0.3-0.3,0.6-0.6,0.9c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.1-0.7,0.2-1,0.2h0  c-0.5,0-1.1-0.2-1.5-0.5c-0.4-0.3-0.8-0.7-1-1.2c-0.2-0.5-0.2-1.1-0.1-1.6c0.1-0.5,0.4-1,0.8-1.4c0.4-0.4,0.9-0.6,1.4-0.7  c0.5-0.1,1.1,0,1.6,0.2c0.5,0.2,0.9,0.6,1.2,1C16.8,13.2,16.9,13.7,16.9,14.3L16.9,14.3z M34.5,34.5h-4.7v-8.1  c0-2.5-1.4-3.5-2.7-3.5c-1.6,0-3.3,1.1-3.3,3.6v8h-4.7V19.2h4.4v2.2h0.1c0.4-0.9,2.4-2.5,5.1-2.5s5.8,1.8,5.8,6.5V34.5z" fill="currentColor"></path>
  </svg>
)

function StepPills({ step }) {
  return (
    <div className="form-step-wrapper">
      {[1, 2, 3, 4].map((s) => (
        <div key={s} className={`step-tab-form ${step >= s ? 'is-active' : ''}`}>
          <div className="circle-pink-careers selected">
            <img loading="lazy" src={assets.svgs.vector88} alt="" />
          </div>
          <div className="pill-text-up">STEP {s}</div>
        </div>
      ))}
    </div>
  )
}

function Signup() {
  const [step, setStep] = useState(1)
  const [emailValid, setEmailValid] = useState(true)
  const [form, setForm] = useState({
    firstName: '', lastName: '', country: '', city: '', email: '',
    platforms: [{ platform: '', social: '' }],
    followers: '',
    categories: [],
    message: '',
  })

  const updatePlatform = (index, field, value) => {
    setForm((f) => {
      const platforms = [...f.platforms]
      platforms[index] = { ...platforms[index], [field]: value }
      return { ...f, platforms }
    })
  }

  const addPlatform = () => {
    setForm((f) => ({ ...f, platforms: [...f.platforms, { platform: '', social: '' }] }))
  }

  const toggleCategory = (cat) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat) ? f.categories.filter((c) => c !== cat) : [...f.categories, cat],
    }))
  }

  const checkEmail = (value) => {
    setForm({ ...form, email: value })
    setEmailValid(value === '' || EMAIL_RE.test(value.toLowerCase()))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your submission has been received!')
    setForm({ firstName: '', lastName: '', country: '', city: '', email: '', platforms: [{ platform: '', social: '' }], followers: '', categories: [], message: '' })
    setStep(1)
  }

  return (
    <>
      {/* Hero */}
      <section className="section_influencer">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <p className="text-size-huge">
                You don't need to have the biggest followership to make the biggest impact. We work with micro creators and top tier VIPs for the world's best known brands. So whether you've got 1,000 followers or 1 million, we want to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section_divider">
        <div className="padding-global">
          <div className="container-large">
            <div className="divider _5-top _1-bottom"></div>
          </div>
        </div>
      </section>

      {/* Multi-step form */}
      <section className="section_contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="contact-form_influence">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="slide-contact">
                    <StepPills step={1} />
                    <div className="contact-form_layout">
                      <div className="element-wraper">
                        <div>
                          <p className="form-section-title">Your information:</p>
                          <p className="contact-intro">The best brand partnerships start with real fans. Tell us about yourself and we'll find the right fit.</p>
                        </div>
                      </div>
                      <div className="contact-form form-slider">
                        <input
                          className="form_input"
                          maxLength={256}
                          placeholder="First Name*"
                          type="text"
                          value={form.firstName}
                          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                          required
                        />
                        <input
                          className="form_input"
                          maxLength={256}
                          placeholder="Last Name*"
                          type="text"
                          value={form.lastName}
                          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                          required
                        />
                        <input
                          className="form_input"
                          maxLength={256}
                          placeholder="Country*"
                          type="text"
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          required
                        />
                        <input
                          className="form_input"
                          maxLength={256}
                          placeholder="State or city*"
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          required
                        />
                        <div className="form_field">
                          <input
                            className="form_input"
                            maxLength={256}
                            placeholder="E-mail*"
                            type="email"
                            value={form.email}
                            onChange={(e) => checkEmail(e.target.value)}
                            required
                          />
                          <div className={`email-error ${emailValid ? '' : 'is-visible'}`}>Please enter a valid email.</div>
                        </div>

                        <div className="platform-list-wrapper">
                          {form.platforms.map((p, i) => (
                            <div className="platform-wrapper" key={i}>
                              <select
                                className="form_input is-select-input"
                                value={p.platform}
                                onChange={(e) => updatePlatform(i, 'platform', e.target.value)}
                                required
                              >
                                <option value="">Platform*</option>
                                {platformChoices.map((opt) => (
                                  <option value={opt} key={opt}>{opt}</option>
                                ))}
                              </select>
                              <input
                                className="form_input"
                                maxLength={256}
                                placeholder="Social Link*"
                                type="text"
                                value={p.social}
                                onChange={(e) => updatePlatform(i, 'social', e.target.value)}
                                required
                              />
                            </div>
                          ))}
                        </div>
                        <div className="enquire-button is-not-full-width" onClick={addPlatform} style={{ cursor: 'pointer' }}>
                          <div>ADD PLATFORM</div>
                          <div className="circle-pink">
                            <img loading="lazy" src={assets.svgs.groupSvg} alt="" />
                          </div>
                        </div>

                        <div className="button-group is-contact">
                          <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setStep(1)}>
                            <div className="new-button_text is-white is-flipped">Previous</div>
                            {arrow('new-button_icon is-flipped')}
                          </button>
                          <button type="button" className="new-button is-shorter is-white" onClick={() => setStep(2)}>
                            <div className="new-button_text is-white">Next</div>
                            {arrow()}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="slide-contact">
                    <StepPills step={2} />
                    <div className="contact-form_layout">
                      <div className="element-wraper">
                        <div>
                          <p className="form-section-title">Your overall follower count:</p>
                          <p className="contact-intro">Tell us about you, and let's build partnerships that amplify your authentic creativity.</p>
                        </div>
                      </div>
                      <div className="contact-form form-slider">
                        {followerRanges.map((range) => (
                          <div
                            key={range}
                            className={`contact-radio ${form.followers === range ? 'is-selected' : ''}`}
                            onClick={() => setForm({ ...form, followers: range })}
                          >
                            {range}
                          </div>
                        ))}
                        <div className="button-group is-contact">
                          <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setStep(1)}>
                            <div className="new-button_text is-white is-flipped">Previous</div>
                            {arrow('new-button_icon is-flipped')}
                          </button>
                          <button type="button" className="new-button is-shorter is-white" onClick={() => setStep(3)}>
                            <div className="new-button_text is-white">Next</div>
                            {arrow()}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="slide-contact">
                    <StepPills step={3} />
                    <div className="contact-form_layout">
                      <div className="element-wraper">
                        <div>
                          <p className="form-section-title">How would you categorise yourself:</p>
                          <p className="contact-intro">Tell us about you, and let's build partnerships that amplify your authentic creativity.</p>
                        </div>
                      </div>
                      <div className="contact-form-social">
                        {categories.map((cat) => (
                          <div
                            key={cat}
                            className={`checkbox-wrapper ${form.categories.includes(cat) ? 'is-selected' : ''}`}
                            onClick={() => toggleCategory(cat)}
                          >
                            {cat}
                          </div>
                        ))}
                        <div className="button-group is-contact">
                          <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setStep(2)}>
                            <div className="new-button_text is-white is-flipped">Previous</div>
                            {arrow('new-button_icon is-flipped')}
                          </button>
                          <button type="button" className="new-button is-shorter is-white" onClick={() => setStep(4)}>
                            <div className="new-button_text is-white">Next</div>
                            {arrow()}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="slide-contact">
                    <StepPills step={4} />
                    <div className="contact-form_layout">
                      <div>
                        <p className="form-section-title">Tell us about yourself:</p>
                        <p className="contact-intro">Tell us about you, and let's build partnerships that amplify your authentic creativity.</p>
                      </div>
                      <div className="contact-form form-slider">
                        <textarea
                          className="form_input is-text-area"
                          maxLength={5000}
                          placeholder="LEAVE US A NOTE"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        ></textarea>
                        <div className="button-group is-contact">
                          <button type="button" className="new-button is-shorter is-white is-flipped" onClick={() => setStep(3)}>
                            <div className="new-button_text is-white is-flipped">Previous</div>
                            {arrow('new-button_icon is-flipped')}
                          </button>
                          <button type="submit" className="new-button is-shorter">
                            <div className="new-button_text">Submit</div>
                            {submitArrow}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Presence / Enter Doohpieverse Section */}
      <section className="section_presence">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small clear-bottom-padding">
              <div className="divider"></div>
              <div className="butterverse_wrapper">
                <div className="enter-the-butter">
                  <div className="margin-top margin-medium">
                    <div className="margin-bottom margin-huge butterverse_mobile">
                      <div className="stack-left-wide">
                        <img
                          src={assets.svgs.enterButterverse}
                          loading="lazy"
                          alt="Enter The Doohpieverse"
                          className="our-global hide-mobile-portrait"
                        />
                        <img
                          src={assets.svgs.enterButterverseCenter}
                          loading="lazy"
                          alt="Enter The Doohpieverse"
                          className="our-global show-mobile-portrait"
                        />
                        <div>
                          <img src={assets.svgs.arrowRight} loading="lazy" alt="" className="enter-button-4rem" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="butterverse-cta">
                  <div className="margin-bottom margin-large">
                    <div className="max-width-xsmall">
                      <p data-animate className="text-size-large is-butterverse-caption">
                        Jump over to our socials to discover our news, our views and our people.
                      </p>
                    </div>
                  </div>
                  <div className="butterverse_social">
                    <a href="https://www.instagram.com/doohpie" target="_blank" rel="noopener noreferrer" className="new-button is-shorter is-full-width">
                      <div className="new-button_text is-full-width">Instagram</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 29 29" fill="none" className="new-button_icon">
                        <path d="M14.5002 17.7738C16.2478 17.7738 17.6645 16.3572 17.6645 14.6096C17.6645 12.862 16.2478 11.4453 14.5002 11.4453C12.7526 11.4453 11.3359 12.862 11.3359 14.6096C11.3359 16.3572 12.7526 17.7738 14.5002 17.7738Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5694 6.93555H10.4306C8.43979 6.93555 6.82617 8.54945 6.82617 10.54V18.6787C6.82617 20.6696 8.43979 22.2832 10.4306 22.2832H18.5694C20.5602 22.2832 22.1738 20.6696 22.1738 18.6787V10.54C22.1738 8.54945 20.5602 6.93555 18.5694 6.93555ZM14.5 19.4908C11.804 19.4908 9.61887 17.3054 9.61887 14.6094C9.61887 11.9134 11.804 9.72825 14.5 9.72825C17.196 9.72825 19.3814 11.9134 19.3814 14.6094C19.3814 17.3054 17.196 19.4908 14.5 19.4908ZM19.5439 10.6796C18.916 10.6796 18.4068 10.1707 18.4068 9.54246C18.4068 8.91421 18.916 8.40536 19.5439 8.40536C20.1719 8.40536 20.6813 8.91449 20.6813 9.54246C20.6813 10.1704 20.1719 10.6796 19.5439 10.6796Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4999 0C6.51375 0 0 6.51375 0 14.4999C0 22.486 6.51375 29 14.4999 29C22.486 29 28.9997 22.4863 28.9997 14.4999C28.9997 6.51346 22.4863 0 14.4999 0ZM23.9061 18.5394C23.9061 21.5383 21.4754 23.9697 18.4762 23.9697H10.5235C7.52463 23.9697 5.09357 21.5383 5.09357 18.5394V10.5871C5.09357 7.58788 7.52463 5.15682 10.5235 5.15682H18.4762C21.4754 5.15682 23.9061 7.58788 23.9061 10.5871V18.5394Z" fill="currentColor"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/doohpie" target="_blank" rel="noopener noreferrer" className="new-button is-shorter is-full-width">
                      <div className="new-button_text is-full-width">Linkedin</div>
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 46 46" width="100%" className="new-button_icon">
                        <path d="M23,0C10.3,0,0,10.3,0,23s10.3,23,23,23c12.7,0,23-10.3,23-23S35.7,0,23,0z M16.5,34.5h-4.7V19.2h4.7V34.5z M16.9,14.3c0,0.4-0.1,0.7-0.2,1c-0.1,0.3-0.3,0.6-0.6,0.9c-0.3,0.2-0.6,0.4-0.9,0.6c-0.3,0.1-0.7,0.2-1,0.2h0 c-0.5,0-1.1-0.2-1.5-0.5c-0.4-0.3-0.8-0.7-1-1.2c-0.2-0.5-0.2-1.1-0.1-1.6c0.1-0.5,0.4-1,0.8-1.4c0.4-0.4,0.9-0.6,1.4-0.7 c0.5-0.1,1.1,0,1.6,0.2c0.5,0.2,0.9,0.6,1.2,1C16.8,13.2,16.9,13.7,16.9,14.3L16.9,14.3z M34.5,34.5h-4.7v-8.1 c0-2.5-1.4-3.5-2.7-3.5c-1.6,0-3.3,1.1-3.3,3.6v8h-4.7V19.2h4.4v2.2h0.1c0.4-0.9,2.4-2.5,5.1-2.5s5.8,1.8,5.8,6.5V34.5z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="butterverse-video_wrapper">
                <div className="divider show-mobile-landscape"></div>
                <div className="butterverse-video w-background-video w-background-video-atom">
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
        </div>
      </section>
    </>
  )
}

export default Signup
