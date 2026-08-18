import { Link } from 'react-router-dom'
import { assets } from '../assets'

const featuredCaseStudy = {
  brand: 'GAP',
  title: 'Summer Collection Campaign',
  description: "A creator-led campaign that drove massive engagement and cultural conversation around GAP's summer collection.",
  images: assets.work.gap,
}

const awards = [
  { title: 'Best User-Generated Content', brand: 'MAC COSMETICS' },
  { title: 'Best Use of TikTok', brand: 'ELIZABETH ARDEN' },
  { title: 'Best Always-On Campaign', brand: 'PRIMARK' },
  { title: 'Best Creator Programme', brand: 'SAMSUNG' },
  { title: 'Best Influencer Campaign', brand: 'NIKE' },
  { title: 'Best Cultural Moment', brand: 'LEGO' },
]

const caseStudies = [
  {
    brand: 'MAC COSMETICS',
    title: 'Beauty Redefined',
    description: 'A multi-creator campaign that redefined beauty standards and drove record engagement.',
    image: assets.work.mugler[0],
    awards: ['Best User-Generated Content', 'Beauty Campaign of the Year'],
  },
  {
    brand: 'ELIZABETH ARDEN',
    title: 'Influencer Campaign of the Year',
    description: 'An innovative campaign that merged heritage with modern creator culture.',
    image: assets.work.estee,
    awards: ['Influencer Campaign of the Year', 'Beauty Campaign of the Year'],
  },
  {
    brand: 'PRIMARK',
    title: 'Fashion Forward',
    description: 'An always-on influencer campaign that kept Primark at the forefront of affordable fashion.',
    image: assets.work.primark,
    awards: ['Best Always-On Influencer Campaign', 'Best Fashion & Lifestyle Campaign'],
  },
  {
    brand: 'SAMSUNG',
    title: 'Tech Meets Culture',
    description: 'A creator programme that positioned Samsung at the intersection of technology and culture.',
    image: assets.work.nike,
    awards: ['Best Tech Campaign', 'Best Creator Programme'],
  },
]

function Work() {
  return (
    <>
      {/* Hero */}
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-large">
                  We've been at the heart of creator-led campaigns for over a decade.
                </h1>
                <p className="text-size-large" style={{ marginTop: 32, color: 'rgba(255,255,255,0.7)' }}>
                  We partner with brands playing the long game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study - GAP */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#111' }}>
              {/* Floating GAP images */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: 48, minHeight: 500, alignItems: 'center' }}>
                {featuredCaseStudy.images.slice(0, 4).map((img, i) => (
                  <div key={i} style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', aspectRatio: '3/4', transform: `rotate(${(i - 1.5) * 3}deg)` }}>
                    <img src={img} alt={`GAP ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <div style={{ padding: 48, background: '#4cda56' }}>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{featuredCaseStudy.brand}</h2>
                <p style={{ fontSize: '1.1rem', marginTop: 16, color: 'rgba(255,255,255,0.9)' }}>{featuredCaseStudy.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Carousel */}
      <section className="awards-carousel">
        <div className="padding-global">
          <div className="container-large">
            <div className="slider-arrow-wrapper">
              <div className="slider-arrow" onClick={() => {
                const el = document.querySelector('.awards-wrapper')
                if (el) el.scrollBy({ left: -324, behavior: 'smooth' })
              }}>
                <img src={assets.svgs.circleArrowRight} alt="Previous" style={{ width: 20, transform: 'rotate(180deg)' }} />
              </div>
              <div className="slider-arrow" onClick={() => {
                const el = document.querySelector('.awards-wrapper')
                if (el) el.scrollBy({ left: 324, behavior: 'smooth' })
              }}>
                <img src={assets.svgs.circleArrowRight} alt="Next" style={{ width: 20 }} />
              </div>
            </div>
            <div className="awards-wrapper">
              {awards.map((award, i) => (
                <div className="award-card" key={i}>
                  <div className="award-title">{award.title}</div>
                  <div className="award-brand">{award.brand}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-casestudy">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <h2 className="text-size-xxlarge" style={{ marginBottom: 48 }}>CASE STUDIES</h2>
              <div className="casestudy-component">
                {caseStudies.map((cs, i) => (
                  <div className="casestudy-card" key={i}>
                    <img src={cs.image} alt={cs.brand} className="casestudy-image" />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32, background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4cda56', marginBottom: 8 }}>{cs.brand}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>{cs.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>{cs.description}</p>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {cs.awards.map((a, j) => (
                          <span key={j} className="pink-pill-tag">{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="cta-component">
                <h2 className="cta-heading text-size-xxlarge">READY TO CREATE SOMETHING AMAZING?</h2>
                <Link to="/contact" className="new-button is-white">
                  <span className="new-button-text">GET IN TOUCH</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Work
