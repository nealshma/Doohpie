import { useState, useEffect } from 'react'
import { assets } from '../assets'

function Footer() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const updateClocks = () => {
      const londonEl = document.getElementById('London')
      const miamiEl = document.getElementById('Miami')
      const dubaiEl = document.getElementById('Dubai')

      if (londonEl) {
        londonEl.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London' })
      }
      if (miamiEl) {
        miamiEl.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })
      }
      if (dubaiEl) {
        dubaiEl.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })
      }
    }
    updateClocks()
    const interval = setInterval(updateClocks, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="section_footer">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-small is-footer">

            <div className="margin-bottom margin-medium is-footer">
              <div className="footer_header">
                <div className="stack-top">
                  <div>
                    <div className="margin-bottom margin-medium">
                      <div
                        className="our-global"
                        style={{
                          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                          fontWeight: 700,
                          lineHeight: 0.95,
                          letterSpacing: '-0.02em',
                          textTransform: 'uppercase',
                          color: '#fff',
                        }}
                      >
                        OOH For<br />Every Brand
                      </div>
                    </div>
                    <div className="we-work_text max-width-small">
                      <div className="margin-bottom margin-medium">
                        <p className="text-size-small text-style-allcaps">
                          Sign up for platform updates, new inventory locations, city launches and geo-targeting insights.
                        </p>
                      </div>
                    </div>
                    <div className="margin-bottom margin-medium">
                      <div className="footer_form">
                        <form className="email-enquiry w-form" onSubmit={handleSubmit}>
                          <input
                            className="email-feild w-input"
                            maxLength={256}
                            name="email-2"
                            data-name="Email 2"
                            placeholder="EMAIL ADDRESS"
                            type="email"
                            id="email-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <div id="newsletter-signup" className="email-signup-wrapper">
                            <input type="submit" data-wait="Please wait..." className="signup w-button" value="SIGN UP" />
                            <div className="button-width">
                              <button type="submit" className="new-button is-shorter is-white is-sign-up">
                                <div className="new-button_text is-white is-sign-up">Sign Up</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className="new-button_icon">
                                  <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"></circle>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M9.99634 7.4155L18.0829 7.41551C18.5791 7.41551 18.9814 7.81778 18.9814 8.31401L18.9814 16.4006C18.9814 16.8968 18.5791 17.2991 18.0829 17.2991C17.5867 17.2991 17.1844 16.8968 17.1844 16.4006L17.1844 10.4832L8.18611 19.4815C7.83522 19.8324 7.26632 19.8324 6.91543 19.4815C6.56455 19.1306 6.56455 18.5617 6.91543 18.2108L15.9137 9.21252L9.99634 9.21251C9.50011 9.21251 9.09784 8.81024 9.09784 8.31401C9.09784 7.81778 9.50011 7.4155 9.99634 7.4155Z" fill="currentColor"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="address-section">
                  <div className="footer_item">
                    <div className="text-color-grey margin-bottom margin-xsmall hide">Business Milk</div>
                    <div className="footer_col">
                      <div id="London" className="footer_left-detail">--:--:-- --</div>
                      <div className="footer_detail">
                        <div>LONDON, UK</div>
                        <div className="text-color-grey">Unit 3.01 Tea Building,<br/>56 Shoreditch High Street,<br/>E1 6JJ</div>
                      </div>
                    </div>
                    <div className="footer_col">
                      <div id="Miami" className="footer_left-detail">--:--:-- --</div>
                      <div className="footer_detail">
                        <div>MIAMI, USA</div>
                        <div className="text-color-grey">360 NW 27th St.<br/>FL 33127</div>
                      </div>
                    </div>
                    <div className="footer_col">
                      <div id="Dubai" className="footer_left-detail">--:--:-- --</div>
                      <div className="footer_detail">
                        <div>DUBAI, UAE</div>
                        <div className="text-color-grey">D Quarters, Bldg 5.<br/>Dubai Media City</div>
                      </div>
                    </div>
                  </div>

                  <div className="footer_item">
                    <div className="text-color-grey margin-bottom margin-xsmall hide">Butter Us Up</div>
                    <div className="footer_col">
                      <div className="footer_left-detail">LET'S TALK</div>
                      <div className="footer_detail">
                        <a href="mailto:TEAM@DOOHPIE.COM">TEAM@DOOHPIE.COM</a>
                      </div>
                    </div>
                    <div className="footer_col">
                      <div className="footer_left-detail">INSTAGRAM</div>
                      <div className="footer_detail">
                        <a href="https://www.instagram.com/doohpie" target="_blank" rel="noopener noreferrer">@DOOHPIE</a>
                      </div>
                    </div>
                    <div className="footer_col">
                      <div className="footer_left-detail">TIKTOK</div>
                      <div className="footer_detail">
                        <a href="https://www.tiktok.com/@doohpie" target="_blank" rel="noopener noreferrer">@DOOHPIE</a>
                      </div>
                    </div>
                    <div className="footer_col">
                      <div className="footer_left-detail">LINKEDIN</div>
                      <div className="footer_detail">
                        <a href="https://www.linkedin.com/company/doohpie" target="_blank" rel="noopener noreferrer">@DOOHPIE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-bottom margin-medium is-footer">
              <div className="margin-top margin-medium">
                <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
                  <filter id="logo-sharpen" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.55" result="blurred" />
                    <feComposite in="SourceGraphic" in2="blurred" operator="arithmetic" k1="0" k2="1.75" k3="-0.75" k4="0" />
                  </filter>
                </svg>
                <img
                  src="https://cdn.pixelkart.ai/uploads/2026/august/24/creative_486f5dbf.png"
                  alt="Doohpie Logo"
                  className="buttermilk-large-wide"
                  style={{ filter: 'url(#logo-sharpen) brightness(0) invert(1)', opacity: 1 }}
                />
                <div className="footer_padding">
                  <div className="margin-top margin-small">
                    <div className="service_header end-end grid-mobile _2-column">
                      <div className="flex-column gap-1">
                        <a href="/terms-conditions" className="priv-footer-link">T & Cs</a>
                        <a href="/privacy-policy" className="priv-footer-link">Privacy Policy</a>
                      </div>
                      <div className="priv-footer-link is-copyright">
                        © COPYRIGHT 2026 DOOHPIE. ALL RIGHTS RESERVED.
                      </div>
                      <a href="https://toogallus.com" target="_blank" rel="noopener noreferrer" className="priv-footer-link text-align-right">
                        DESIGNED AND DEVELOPED BY TOO GALLUS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
