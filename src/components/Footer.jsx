import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
          <div className="footer_component-top">
            <div className="footer_item is-newsletter">
              <div className="footer_heading">
                <img
                  src={assets.svgs.milkFor}
                  alt="Doohpie For The Creators"
                  className="footer_heading-svg"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <form className="footer_newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="footer_newsletter-input w-input"
                  placeholder="ENTER YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="new-button is-shorter w-button">
                  <span className="new-button-text">SUBSCRIBE</span>
                </button>
              </form>
            </div>
          </div>

          <div className="divider"></div>

          <div className="address-section">
            <div className="footer_item">
              <div className="text-color-grey margin-bottom margin-xsmall">Business Milk</div>
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
              <div className="text-color-grey margin-bottom margin-xsmall">Butter Us Up</div>
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

          <div className="margin-bottom margin-large is-footer">
            <div className="margin-top margin-large">
              <img
                src={assets.logo.white}
                alt="Doohpie Logo"
                className="footer_logo"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
