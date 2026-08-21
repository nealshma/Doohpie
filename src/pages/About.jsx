import { useEffect, useRef, useState } from 'react'
import { assets } from '../assets'

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000, isVisible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])
  return <span>{prefix}{count}{suffix}</span>
}

const teamMembers = [
  { name: 'Jamie Ray', role: 'Co-founder', image: assets.about.jamieRay, bio: 'Jamie is the Co-Founder and CEO at Doohpie. He focuses on driving global brand partnerships and community-first creator marketing strategies for brands like Armani and Prada Beauty, GAP, Primark and Marc Jacobs, propelling Doohpie\'s independent growth in the UK and the US.' },
  { name: 'Motez Touqmatchi', role: 'Co-founder', image: assets.about.mo, bio: 'Motez is the Co-Founder of Doohpie, serving as visionary and guardian of the agency\'s identity. He spearheads expansion into the Middle East, forging partnerships and connections with a particular focus on enhancing Doohpie\'s proprietary tech capabilities.' },
  { name: 'Mike Mathieson', role: 'Chairman and Non-Executive Director', image: assets.about.mike, bio: 'As Chairman and Non-Executive Director at Doohpie, Mike has a hands-on approach working alongside Doohpie\'s founders and board. As an agency founder and CEO veteran, Mike is key to providing unparalleled governance, wisdom and counsel.' },
  { name: 'John Cornwell', role: 'CFO', image: assets.about.teamPhoto, bio: 'As CFO of Doohpie, John heads up our finance team and commercial strategy, partnering with our leaders to optimise performance, governance, and long-term value.' },
  { name: 'Michael Pekhazis', role: 'Managing Director', image: assets.about.michael, bio: 'With over 15 years\' experience across influencer marketing, platforms, and creator product, Michael brings strong commercial leadership and hands-on product expertise.' },
  { name: 'Nina Jasinski', role: 'Non-Executive Director', image: assets.about.nina, bio: 'Nina is Non-Executive Director and board member at Doohpie. She leverages her worldwide industry expertise across growth, comms, marketing and creativity to ensure the business operates cohesively.' },
  { name: 'Suni Khan', role: 'Director of Client Services', image: assets.about.suni, bio: 'As Director of Client Services, Suni leads Doohpie\'s Client Services team, focusing on client satisfaction, growth, and retention while delivering best-in-class service.' },
  { name: 'Lucy Robertson', role: 'Global Head of Brand', image: assets.about.lucyR, bio: 'As Global Head of Brand at Doohpie, Lucy leads the agency\'s brand strategy, thought leadership and cultural positioning, shaping how Doohpie shows up in the world.' },
  { name: 'Emily Bristowe', role: 'Head of Creator Services', image: assets.about.emily, bio: 'As Head of Creator Services at Doohpie, Emily leads the Creator and Campaign Management team, overseeing the strategy and execution of our creator programs.' },
  { name: 'Beni Brown', role: 'Global Director of Strategy', image: assets.about.beni, bio: 'As Global Director of Strategy at Doohpie, Benika heads up the agency\'s cultural and creator-driven strategy across global and local clients.' },
  { name: 'Amanda Tegnas', role: 'Head of Client Operations', image: assets.about.amanda, bio: 'As Head of Client Operations and Studio at Doohpie, Amanda bridges strategy and execution, translating vision into action and driving operational excellence.' },
  { name: 'Amber Ledrin', role: 'Head of Creative', image: assets.about.amber, bio: 'As Head of Creative, Amber leads ideation across Doohpie\'s portfolio, crafting scroll-stopping, culturally rooted content.' },
  { name: 'Lucy Wilson', role: 'Head of Growth', image: assets.about.lucyW, bio: 'As Head of Growth at Doohpie, Lucy oversees new client relationships and the agency\'s growth strategy, building partnerships with brands who match Doohpie\'s ambition.' },
  { name: 'Joanne Temenu', role: 'Head of People and Culture', image: assets.about.joanne, bio: 'As Head of People and Culture at Doohpie, Joanne brings 12 years of HR experience and a Master\'s in HRM. Accredited and a mental health first aider.' },
]

function About() {
  const doohpieTextRef = useRef(null)
  const heroRef = useRef(null)
  const snapshotRef = useRef(null)
  const [snapshotVisible, setSnapshotVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSnapshotVisible(true) },
      { threshold: 0.3 }
    )
    if (snapshotRef.current) observer.observe(snapshotRef.current)
    return () => observer.disconnect()
  }, [])

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

  useEffect(() => {
    const section = heroRef.current
    const textEl = doohpieTextRef.current
    if (!section || !textEl) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))

      const scale = 0.3 + progress * 1.5
      const opacity = Math.min(1, progress * 3)
      const blur = Math.max(0, (1 - progress * 2) * 10)

      textEl.style.transform = `scale(${scale})`
      textEl.style.opacity = opacity
      textEl.style.filter = `blur(${blur}px) brightness(0) invert(48%) sepia(85%) saturate(650%) hue-rotate(85deg)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-content-wrapper about-page-wrapper">
      {/* Standard Hero Section with Balloon */}
      <section className="section_standardhero" ref={heroRef}>
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component" data-animate>
                <p className="text-size-medium about-hero-text">
                  Doohpie is the independent Creator Company built for how brands grow now.
                </p>
                <h1 className="heading-style-h2 text-weight-normal hide">WHAT WE BELIEVE</h1>
                <div className="standardhero_header">
                  <div className="margin-bottom margin-large">
                    <p className="text-size-large hide">
                      Okay so if you've landed here, you know who we are, what we do, the services we provide and may have taken a look at some of our work. But now you want to know what makes us different? How did you end up so big, so bold, so…Doohpie?
                      <br /><br />
                      We're the Community-First Creator Agency. Our proposition is our personality. Our north star, guiding light, and is the compass for our culture. And whether you're speaking to day one or a newbie, the energy around community and creators will be felt in the first five minutes.
                      <br /><br />
                      It's the belief and attitude of our founders that has evolved and grown over time to mean something to all of us and drive the way we talk to our own community: colleagues, clients and creators.
                    </p>
                  </div>
                </div>
              </div>
              <div className="baloon_component">
                <div className="inflating-logo">
                  <img 
                    src="https://cdn.pixelkart.ai/uploads/2026/august/18/creative_35391abd.png" 
                    alt="Doohpie" 
                    className="doohpie-inflate-img" 
                    ref={doohpieTextRef}
                  />
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
              <div className="padding-small"></div>
              <div className="margin-bottom margin-xlarge">
                <p className="snapshot-heading">
                  Brands need advocacy in the short term, cultural capital for the long term, and business impact always - because relevance only matters if it drives revenue.
                </p>
              </div>
              <div className="snapshot_component" data-animate ref={snapshotRef}>
                <h2 className="snapshot-heading hide-tablet">
                  AGENCY<br />SNAPSHOT
                </h2>
                <div className="snapshot-wrapper">
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">People</div>
                    <div className="snapshot-text"><AnimatedCounter target={145} suffix="+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Our team is growing but we'll always be our own community.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Global Reach</div>
                    <div className="snapshot-text"><AnimatedCounter target={8} isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Outside of our London HQ, we have locations in New York, Dubai, Rio and beyond.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Creators</div>
                    <div className="snapshot-text"><AnimatedCounter target={500} suffix="k+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      Our creator network spans every niche, platform and geography.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Campaigns</div>
                    <div className="snapshot-text"><AnimatedCounter target={3000} suffix="+" isVisible={snapshotVisible} /></div>
                    <div className="snapshot-para text-size-mobile-tiny">
                      From always-on to hero moments, we've executed thousands.
                    </div>
                  </div>
                  <div className="snapshop-block">
                    <div className="snapshot-header-text">Revenue</div>
                    <div className="snapshot-text"><AnimatedCounter target={1} prefix="$" suffix="B+" isVisible={snapshotVisible} /></div>
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

      {/* Sizzle Video Section */}
      <section className="section_sizzle">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large sizzle-wrapper">
              <div className="result-casestudy-video radius w-background-video w-background-video-atom">
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
      </section>

      {/* Team Section */}
      <section className="section_team">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="team-section">
                <div className="team_grid">
                  <div className="margin-bottom margin-large">
                    <h2 className="lookat_heading">LOOK AT THAT TEAM</h2>
                  </div>
                  {teamMembers.map((member, index) => (
                    <div key={index} className="team-block">
                      <div className="team-wrap">
                        <img src={member.image} loading="lazy" alt={member.name} className="team-photo" />
                        <div className="team-pink-block">
                          <div className="team-header">
                            <div className="margin-bottom margin-xxsmall">
                              <div className="team-heading">{member.name}</div>
                            </div>
                            <p className="team-subtext">{member.role}</p>
                            <img src={assets.svgs.rightArrowLarge} loading="lazy" alt="" className="team-arrow" />
                          </div>
                          <div className="project_detail">
                            <p className="text-para">{member.bio}</p>
                          </div>
                        </div>
                      </div>
                      <div className="team-detail">
                        <div className="team-title">{member.name}</div>
                        <div className="text-color-grey job-title-text">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
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
    </div>
  )
}

export default About
