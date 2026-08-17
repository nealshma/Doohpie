import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'

function Signup() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '', email: '', handle: '', platforms: [], followers: '', message: '',
  })

  const platformOptions = ['Instagram', 'TikTok', 'YouTube', 'Other']
  const togglePlatform = (platform) => {
    setForm((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for signing up! We will review your application.')
    setForm({ name: '', email: '', handle: '', platforms: [], followers: '', message: '' })
    setStep(1)
  }

  const galleryImages = [
    assets.signup.steph, assets.signup.crystal2, assets.signup.snapinsta,
    assets.signup.crystal3, assets.signup.alteakelly, assets.signup.copySnapinsta,
    assets.signup.takkies, assets.signup.estee, assets.signup.thumbail,
  ]

  return (
    <>
      <section className="section-influencer">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-large">
                  You don't need to have the biggest followership to make the biggest impact.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  We work with micro creators and top tier VIPs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Gallery */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {galleryImages.map((img, i) => (
                <div key={i} style={{ borderRadius: 8, overflow: 'hidden', aspectRatio: '3/4' }}>
                  <img src={img} alt={`Creator ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ maxWidth: 1200, margin: '0 auto' }}></div>

      {/* Multi-Step Form */}
      <section className="section-contact">
        <div className="padding-global">
          <div className="container-large">
            <div className="contact-form-layout" style={{ maxWidth: 700, margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 48 }}>
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= s ? '#FF00C3' : 'rgba(255,255,255,0.2)', transition: 'background 0.3s ease' }} />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="form-step active">
                    <h3 className="form-step-title">YOUR DETAILS</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <input type="text" className="form-input" placeholder="YOUR NAME" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                      <input type="email" className="form-input" placeholder="YOUR EMAIL" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                      <input type="text" className="form-input" placeholder="SOCIAL MEDIA HANDLE" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} />
                    </div>
                    <div style={{ marginTop: 40 }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16 }}>YOUR PLATFORMS</h4>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        {platformOptions.map((platform) => (
                          <button key={platform} type="button" onClick={() => togglePlatform(platform)}
                            style={{
                              padding: '12px 24px', borderRadius: 100,
                              border: `1px solid ${form.platforms.includes(platform) ? '#FF00C3' : 'rgba(255,255,255,0.3)'}`,
                              background: form.platforms.includes(platform) ? 'rgba(255,0,195,0.15)' : 'transparent',
                              color: '#fff', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase',
                              letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.3s ease',
                            }}>
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="form-nav-buttons">
                      <button type="button" className="new-button is-white" onClick={() => setStep(2)}>
                        <span className="new-button-text">NEXT</span>
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="form-step active">
                    <h3 className="form-step-title">HOW MANY FOLLOWERS DO YOU HAVE?</h3>
                    <div className="radio-group">
                      {['1-10k', '10-50k', '50-100k', '100k-500k', '500k+'].map((range) => (
                        <div key={range} className={`radio-option ${form.followers === range ? 'selected' : ''}`} onClick={() => setForm({ ...form, followers: range })}>
                          <div className="radio-button-ico"></div>
                          <div style={{ fontSize: '1rem', fontWeight: 500 }}>{range}</div>
                        </div>
                      ))}
                    </div>
                    <div className="form-nav-buttons">
                      <button type="button" className="new-button" onClick={() => setStep(1)}><span className="new-button-text">BACK</span></button>
                      <button type="button" className="new-button is-white" onClick={() => setStep(3)}><span className="new-button-text">NEXT</span></button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="form-step active">
                    <h3 className="form-step-title">TELL US ABOUT YOUR CONTENT</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: 12 }}>WHAT TYPE OF CONTENT DO YOU CREATE?</label>
                        <select className="form-select" style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', padding: '16px 0' }}>
                          <option value="">SELECT A CATEGORY</option>
                          <option value="fashion">Fashion & Style</option>
                          <option value="beauty">Beauty & Skincare</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="food">Food & Cooking</option>
                          <option value="fitness">Fitness & Health</option>
                          <option value="tech">Technology</option>
                          <option value="travel">Travel</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <input type="text" className="form-input" placeholder="AVERAGE ENGAGEMENT RATE (if known)" />
                    </div>
                    <div className="form-nav-buttons">
                      <button type="button" className="new-button" onClick={() => setStep(2)}><span className="new-button-text">BACK</span></button>
                      <button type="button" className="new-button is-white" onClick={() => setStep(4)}><span className="new-button-text">NEXT</span></button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="form-step active">
                    <h3 className="form-step-title">ALMOST THERE!</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <textarea className="form-input is-text-area" placeholder="WHY WOULD YOU LIKE TO WORK WITH DOOHPIE?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <input type="checkbox" id="terms" required style={{ width: 18, height: 18, accentColor: '#FF00C3' }} />
                        <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>I agree to the terms and conditions</label>
                      </div>
                    </div>
                    <div className="form-nav-buttons">
                      <button type="button" className="new-button" onClick={() => setStep(3)}><span className="new-button-text">BACK</span></button>
                      <button type="submit" className="new-button is-magenta"><span className="new-button-text">SUBMIT APPLICATION</span></button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-presence">
        <div className="padding-global">
          <div className="container-large">
            <div className="presence-component">
              <img src={assets.svgs.enterButterverseCenter} alt="Enter The Doohpieverse" style={{ width: '100%', maxWidth: 600, margin: '0 auto 48px', display: 'block', filter: 'brightness(0) invert(1)' }} />
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

export default Signup
