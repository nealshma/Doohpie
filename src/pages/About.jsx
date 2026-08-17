import { useEffect } from 'react'
import { assets } from '../assets'

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Standard Hero Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component" data-animate>
                <p className="text-size-huge">
                  Doohpie is the independent Creator Company built for how brands grow now.
                </p>
                <h1 className="heading-style-h2 text-weight-normal hide">WHAT WE BELIEVE</h1>
                <div className="standardhero_header">
                  <div className="margin-bottom margin-large">
                    <p className="text-size-large hide">
                      Okay so if you've landed here, you know who we are, what we do, the services we provide and may have taken a look at some of our work. But now you want to know what makes us different? How did you end up so big, so bold, so…Doohpie?
                      <br/><br/>
                      We're the Community-First Creator Agency. Our proposition is our personality. Our north star, guiding light, and is the compass for our culture. And whether you're speaking to day one or a newbie, the energy around community and creators will be felt in the first five minutes.
                      <br/><br/>
                      It's the belief and attitude of our founders that has evolved and grown over time to mean something to all of us and drive the way we talk to our own community: colleagues, clients and creators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot / Stats Section */}
      <section className="section_snapshot">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="margin-bottom margin-xlarge">
                <p className="snapshot-heading">
                  Brands need advocacy in the short term, cultural capital for the long term, and business impact always - because relevance only matters if it drives revenue.
                </p>
              </div>
              <div className="snapshot_component" data-animate>
                <h2 className="snapshot-heading hide-tablet">
                  AGENCY<br/>SNAPSHOT
                </h2>
                <div className="snapshot-wrapper">
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">People</div>
                    <div className="snapshot-text">145+</div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Our team is growing but we'll always be our own community.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Global Reach</div>
                    <div className="snapshot-text">8</div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Outside of our London HQ, we have locations in New York, Dubai, Rio and beyond.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Creators</div>
                    <div className="snapshot-text">500k+</div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Our creator network spans every niche, platform and geography.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Campaigns</div>
                    <div className="snapshot-text">3000+</div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      From always-on to hero moments, we've executed thousands.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Revenue</div>
                    <div className="snapshot-text">$1B+</div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Driven for our clients through creator-led commerce.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="section_beliefs">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="beliefs-component">
                <div className="margin-bottom margin-xlarge" data-animate>
                  <h2 className="text-size-xxlarge">What We Believe</h2>
                </div>
                <div className="beliefs-list" data-animate-stagger>
                  <div className="belief-item">
                    <div className="belief-number">01</div>
                    <div className="belief-content">
                      <h3 className="text-size-large">Community First</h3>
                      <p className="text-size-small">
                        We believe in the power of community to drive brand growth. Every decision we make is rooted in building authentic connections between brands and their audiences.
                      </p>
                    </div>
                  </div>
                  <div className="belief-item">
                    <div className="belief-number">02</div>
                    <div className="belief-content">
                      <h3 className="text-size-large">Creator Economy</h3>
                      <p className="text-size-small">
                        Creators are the new media. We empower them to tell stories that resonate, creating value for both brands and their communities.
                      </p>
                    </div>
                  </div>
                  <div className="belief-item">
                    <div className="belief-number">03</div>
                    <div className="belief-content">
                      <h3 className="text-size-large">Cultural Impact</h3>
                      <p className="text-size-small">
                        We don't just run campaigns - we create cultural moments that move the needle and build lasting brand affinity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enter Doohpieverse Section */}
      <section className="section_presence">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="presence-component" data-animate>
                <div className="margin-bottom margin-xlarge">
                  <img
                    src={assets.svgs.enterButterverseCenter}
                    alt="Enter The Doohpieverse"
                    style={{ maxWidth: 600, margin: '0 auto', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="social-buttons">
                  <a href="https://www.instagram.com/doohpie" target="_blank" rel="noopener noreferrer" className="social-button">
                    INSTAGRAM
                  </a>
                  <a href="https://www.tiktok.com/@doohpie" target="_blank" rel="noopener noreferrer" className="social-button">
                    TIKTOK
                  </a>
                  <a href="https://www.linkedin.com/company/doohpie" target="_blank" rel="noopener noreferrer" className="social-button">
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
