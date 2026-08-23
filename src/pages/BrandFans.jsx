import { useEffect, useState, useRef } from 'react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

const CDN = 'https://cdn.prod.website-files.com'

const starburstImages = [
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d8910a0f9a2c6b4957ad1_brand%20fan%205.jpg`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d8969e99eb5e50b6df826_brand%20fan%206.jpg`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/672e2799473b9e1f1dc0ebed_Copy%20of%20Post%202%20-%20Slide%201%20copy.webp`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d8a3c2a7f86829500eb70_brand%20fan%208.jpg`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d88b5a418842ecc3c5493_brand%20fan%203.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d884adb46613c08dc5911_brand%20fan%202.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d8814171b101b7e123fec_brand%20fan%201.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d86766cf30640db2c4d35_daniellejinadu%20-%20post1.jpeg`,
]

const cultureImages = [
  `${CDN}/672e2799473b9e1f1dc0eb5c/675c159f87bb7cf88a6e4ae4_%40bri.constantine%20GAP%20November%20Cashsoft%20Image%204.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d870fc02f9846ab75a7dd_brand%20fan%20page.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d876225ff5aab4c8af867_oliviaandalice_273503988_661247975121632_7829573494172534138_n.png`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d86751f3bd8d92a960038_Snapinsta.app_434139856_1583761455718797_5916736748529123286_n_1080.jpg`,
  `${CDN}/672e2799473b9e1f1dc0eb5c/675d86763ac8d2de4ca46ccf_%40stylebymarthaa%20-%20IG%20-%20Future%20Fits%20-%20UK%20-%20Earned%20Content%202..jpg`,
]

const scrollingVideosCol1 = [
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-ef8c355e-fae9-496f-9e6f-72028a9e0f05_GAP-BF.mov',
  'https://files.tryflowdrive.com/549/file-0b71b6c7-d148-427f-b5b5-428c5acdcf99_Copy-of-Anastazja-X-GAP.mp4',
]

const scrollingVideosCol2 = [
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-d1095144-8379-4184-a8ee-06c6330f9e76_BF-7.mp4',
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-27d3f512-c4c4-4a51-8bdd-78e4e0976874_BF-Page3.mp4',
]

const scrollingVideosCol3 = [
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-f12b83e5-b62c-4b10-8f61-da7fb4a7564e_BF-10.mp4',
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-76981083-b7eb-4eb1-92f8-418b5aab442f_BF-9.mp4',
]

const scrollingVideosCol4 = [
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-6bef1263-7fa1-4828-b0ac-d9c8f9f450b9_BF-page-5.mp4',
  'https://files.tryflowdrive.com/org-e2ca5fe0-6b56-4f6f-825c-f639e3b7651c/file-295e5fe9-0a45-480e-a07e-f5a68807481b_BF-page-6.mp4',
]

const tierImages = [
  assets.brandFans.crystal,
  assets.brandFans.lyayb,
  assets.brandFans._13,
  assets.brandFans.nvme,
]

const tiers = [
  { label: 'TARGET CITY', range: 'CITY-WIDE' },
  { label: 'NEIGHBORHOOD', range: 'RADIUS 2-5 KM' },
  { label: 'BUSINESS DISTRICT', range: 'COMMERCIAL ZONES' },
  { label: 'HIGHWAYS', range: 'TRAFFIC CORRIDORS' },
]

const placeholderImg = `${CDN}/672e2799473b9e1f1dc0eb5c/675ab604e263f78becfa1e2c_placeholder.jpg`
const cardTopImg = `${CDN}/672e2799473b9e1f1dc0eb5c/672e2799473b9e1f1dc0ef12_Group%201115.webp`

function AnimatedCounter({ target, suffix = '', isVisible }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else { setCount(Math.floor(start)) }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])
  return <span>{count}{suffix}</span>
}

const arrowSvg = (
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

function ScrollingCard({ videoSrc }) {
  return (
    <div className="homeservice_card full-height scrolling-padding">
      <div className="homeservice_image-wrapper full-height scrolling-cards">
        <img src={placeholderImg} loading="lazy" alt="" className="homeservice_image is-short scrolling" />
        <video autoPlay muted loop playsInline className="scrolling-cards-background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <img src={cardTopImg} loading="lazy" alt="" className="homeservice_card-top" />
    </div>
  )
}

function ScrollingColumn({ videos, direction = 'up', className = '' }) {
  return (
    <div className={`scrolling-column-animation ${direction} ${className}`}>
      <div className={`scrolling-cards-wrapper ${direction}`}>
        <div className={`card-scrolling ${direction === 'down' ? 'down' : ''}`}>
          {videos.map((src, i) => (
            <ScrollingCard key={i} videoSrc={src} />
          ))}
        </div>
        <div className={`card-scrolling absolute ${direction === 'down' ? 'down' : ''}`}>
          {videos.map((src, i) => (
            <ScrollingCard key={i} videoSrc={src} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BrandFans() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)
  const starburstRef = useRef(null)
  const starburstImgRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = starburstRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      const startTrigger = windowHeight * 0.8
      const endTrigger = -sectionHeight * 0.2
      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger)
      const progress = Math.max(0, Math.min(1, rawProgress))

      starburstImgRefs.current.forEach((img, i) => {
        if (!img) return
        const stagger = i * 0.1
        const imgProgress = Math.max(0, Math.min(1, (progress - stagger) / (1 - stagger * 0.6)))
        const opacity = imgProgress
        const scale = 0.7 + 0.3 * imgProgress
        img.style.opacity = opacity
        img.style.transform = `scale(${scale})`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-content-wrapper page-content-top">
      {/* Hero Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component">
                <p className="text-size-huge">
                  Geo-targeting is at the core of Doohpie. Instead of selecting advertising inventory purely by format, advertisers start with a location and identify opportunities around it - building campaigns around cities, states, neighborhoods, business districts, highways and high-footfall zones.
                </p>
                <div className="standardhero_header">
                  <h1 className="heading-style-h2 text-weight-normal is-service">WHAT IS GEO-TARGETING ANYWAY?</h1>
                  <p className="text-size-large">
                    This isn't buying billboards as you know it.<br />
                    Target City → Select Area → Identify Locations → Choose Inventory → Upload Creative → Launch Campaign. It's outdoor advertising built around where your audience actually is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starburst Images Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="starbust-images_layout" ref={starburstRef}>
                <div className="padding-xhuge"></div>
                <h2 className="cs2-h1 _2">START WITH A LOCATION. NOT A SPACE.</h2>
                <div className="max-width-medium"></div>
                {starburstImages.map((src, i) => (
                  <img
                    key={i}
                    ref={el => starburstImgRefs.current[i] = el}
                    src={src}
                    loading="lazy"
                    alt=""
                    className={`starburst-image _${i + 1}`}
                    style={{ opacity: 0, transform: 'scale(0.7)' }}
                  />
                ))}
                <div className="padding-xxhuge is-mobile-landscape"></div>
                <div className="padding-xhuge is-mobile-only"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Cards Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="brand-fan-scrolling-cards">
                <div className="scrolling-cards-gradient-overlay"></div>
                {/* Desktop columns */}
                <ScrollingColumn videos={scrollingVideosCol1} direction="up" className="hide-mobile-landscape" />
                <ScrollingColumn videos={scrollingVideosCol2} direction="down" className="hide-mobile-landscape" />
                {/* Mobile columns */}
                <ScrollingColumn videos={scrollingVideosCol3} direction="up" className="show-mobile-only" />
                <ScrollingColumn videos={scrollingVideosCol4} direction="down" className="show-mobile-only" />
              </div>

              {/* Creator Tier Cards */}
              <div className="creator-tier">
                {tiers.map((tier, i) => (
                  <div className={`service_item grow-block ${i > 0 ? `block${i + 1}` : ''}`} key={i}>
                    <div className="margin-bottom margin-large is-brand-sticky">
                      <div className="margin-bottom margin-large">
                        <div className="brandfanscard_header">
                          <div className="creator-social-link">{tier.label}</div>
                          <div className="creator-social-link">{tier.range}</div>
                        </div>
                      </div>
                      <img src={tierImages[i]} loading="lazy" alt="" className="image-rounded is-square" />
                      <div className="margin-top margin-small">
                        <img src={assets.circleHeart} loading="lazy" alt="" className="hearts-images" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brand Fans Grid */}
              <div className="brandfans-grid-wrap">
                <div className="margin-right margin-xlarge">
                  <div className="margin-bottom margin-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 0 1200 728" width="100%" height="auto">
                      {/* Stylish Cursive Script "D" */}
                      <text x="-220" y="640"
                            fontFamily="'Pinyon Script', 'Great Vibes', cursive"
                            fontSize="620"
                            fill="none"
                            stroke="#4cda56"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            className="svg-draw-text">D</text>

                      {/* Circular "M" Monogram Badge */}
                      <g transform="translate(600,240)">
                        <circle r="115" fill="none" stroke="#4cda56" strokeWidth="4"/>
                        <circle r="100" fill="none" stroke="#4cda56" strokeWidth="2"/>
                        <text x="0" y="38"
                              textAnchor="middle"
                              fontFamily="Liberation Serif, Georgia, serif"
                              fontWeight="bold"
                              fontSize="120"
                              fill="none"
                              stroke="#4cda56"
                              strokeWidth="3">M</text>
                      </g>
                    </svg>
                  </div>
                  <h2 className="text-color-pink followers">Radius-Based Targeting</h2>
                </div>
                <div className="brandfans-grid_image-side">
                  {cultureImages.map((src, i) => (
                    <img key={i} src={src} loading="lazy" alt="" className={`culture-image${i === 0 ? '' : i <= 2 ? i : i === 3 ? '-3' : '-5'}`} />
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 0 1200 728" width="100%" height="auto" className="b-wide remove-margin">
                    {/* Stylish Cursive Script "D" */}
                    <text x="-220" y="640"
                          fontFamily="'Pinyon Script', 'Great Vibes', cursive"
                          fontSize="620"
                          fill="none"
                          stroke="#4cda56"
                          strokeWidth="3"
                          strokeLinejoin="round"
                          className="svg-draw-text">D</text>

                    {/* Circular "M" Monogram Badge */}
                    <g transform="translate(600,240)">
                      <circle r="115" fill="none" stroke="#4cda56" strokeWidth="4"/>
                      <circle r="100" fill="none" stroke="#4cda56" strokeWidth="2"/>
                      <text x="0" y="38"
                            textAnchor="middle"
                            fontFamily="Liberation Serif, Georgia, serif"
                            fontWeight="bold"
                            fontSize="120"
                            fill="none"
                            stroke="#4cda56"
                            strokeWidth="3">M</text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Numbers Section */}
      <section className="section_our_numbers" ref={statsRef} id="number">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small padding-bottom-0">
              <div className="margin-bottom margin-huge">
                <div className="number_component">
                  <h1 className="our-numbers_text heading-style-h2 text-style-allcaps">
                    Our numbers do<br />the talking
                  </h1>
                  <div className="number-wrapper">
                    <div className="number-block">
                      <div className="number-header-text">Inventory Locations</div>
                      <div className="number-text">
                        <AnimatedCounter target={150} isVisible={statsVisible} />
                        k+
                      </div>
                    </div>
                    <div className="number-block">
                      <div className="number-header-text">Cities Covered</div>
                      <div className="number-text">
                        <AnimatedCounter target={50} isVisible={statsVisible} />
                        +
                      </div>
                    </div>
                    <div className="number-block">
                      <div className="number-header-text">Campaigns Delivered</div>
                      <div className="number-text">
                        <AnimatedCounter target={1200} isVisible={statsVisible} />
                        +
                      </div>
                    </div>
                    <p className="text-size-large brand-fans" style={{ marginTop: 32 }}>
                      Geo-targeting helps brands focus their advertising investment on areas where their potential customers are most likely to be. Imagine a retail brand launching a new store in Delhi - instead of advertising across an entire city, it can define a radius around the store, find available outdoor inventory inside that radius, and put its message in front of the people most likely to visit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="margin-bottom margin-large">
                <div className="project_wrapper">
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">A STRATEGIC SHIFT<br />FOR OUTDOOR</div>
                      <p className="project_subheading">Traditional outdoor advertising asks: "Which billboard should we buy?" Doohpie changes the question to: "Where do we want to reach our audience?" That shift makes outdoor advertising more strategic.</p>
                    </div>
                  </div>
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">ONE WORKFLOW. EVERY FORMAT.</div>
                      <div className="project_detail">
                        <p className="project_subheading">Plan across static billboards, digital LED boards, backlit displays and construction covers from one centralized environment - no more managing formats independently.</p>
                      </div>
                    </div>
                  </div>
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">Focus spend where it matters</div>
                      <div className="project_detail">
                        <p className="project_subheading">Build campaigns around the geographic areas that matter most to your business - cities, neighborhoods, shopping zones, business districts and transit corridors.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small get-buttered-up_mobile">
              <div className="margin-bottom margin-huge hide-mobile-portrait">
                <div className="divider"></div>
              </div>
              <div className="cta_component">
                <div className="businessmmilk-text">
                  Turn locations into opportunities. Turn visibility into impact.<br />
                  Make every location an advertising opportunity.
                </div>
                <div className="cta_button">
                  <button className="new-button is-shorter is-full-width">
                    <div className="new-button_text is-full-width">Get In Touch</div>
                    {arrowSvg}
                    <a href="/contact" className="new-button_link"></a>
                  </button>
                </div>
                <div className="businessmilk-heading">GEO-TARGET PLAN ADVERTISE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </div>
  )
}

export default BrandFans
