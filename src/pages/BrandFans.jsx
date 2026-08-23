import { useEffect, useState, useRef } from 'react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

const CDN = 'https://cdn.prod.website-files.com'

const starburstImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Advertising_Column_in_Berlin_on_2026-05-21.jpg/960px-Advertising_Column_in_Berlin_on_2026-05-21.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mitte_Litfa%C3%9Fplatz-001.JPG/960px-Mitte_Litfa%C3%9Fplatz-001.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Berlin_-_Litfass-Platz_%28Litfass_Square%29_-_geo.hlipp.de_-_34984.jpg/960px-Berlin_-_Litfass-Platz_%28Litfass_Square%29_-_geo.hlipp.de_-_34984.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bus_shelter%2C_York_-_geograph.org.uk_-_8361360.jpg/960px-Bus_shelter%2C_York_-_geograph.org.uk_-_8361360.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Architect-designed_bus_shelter_on_Princes_Street_-_geograph.org.uk_-_4615259.jpg/960px-Architect-designed_bus_shelter_on_Princes_Street_-_geograph.org.uk_-_4615259.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Toopranpet_bus_shelter_-_Mapillary_%281276860037147020%29.jpg/960px-Toopranpet_bus_shelter_-_Mapillary_%281276860037147020%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Times_Square_shuttle_platform_3_vc.jpg/960px-Times_Square_shuttle_platform_3_vc.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ADVERTISING_ALONG_THE_WALLS_OF_A_SUBWAY_PLATFORM_ON_THE_LEXINGTON_AVENUE_LINE_HAS_BEEN_DEFACED_WITH_GRAFFITI._POLICE..._-_NARA_-_556664.jpg/960px-ADVERTISING_ALONG_THE_WALLS_OF_A_SUBWAY_PLATFORM_ON_THE_LEXINGTON_AVENUE_LINE_HAS_BEEN_DEFACED_WITH_GRAFFITI._POLICE..._-_NARA_-_556664.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Wikipedia_Times_Square_Billboard_14.jpg/960px-Wikipedia_Times_Square_Billboard_14.jpg',
]

const cultureImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Man_posting_an_advertisement_for_La_publicit%C3%A9_en_France_par_Emile_Mermet.jpg/960px-Man_posting_an_advertisement_for_La_publicit%C3%A9_en_France_par_Emile_Mermet.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/N.Y._City_and_vicinity._%28Posters_advertising_theaters%2C_businesses_on_unidentified_wall.%29_%28NYPL_b11708034-1530700%29.tiff/lossy-page1-960px-N.Y._City_and_vicinity._%28Posters_advertising_theaters%2C_businesses_on_unidentified_wall.%29_%28NYPL_b11708034-1530700%29.tiff.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/La_publicit%C3%A9_en_France_par_Emile_Mermet%2C_advertising_poster%2C_ca._1880.jpg/960px-La_publicit%C3%A9_en_France_par_Emile_Mermet%2C_advertising_poster%2C_ca._1880.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Louisa_Coffee_and_Sanmin_Road_bus_stop_%2851017503698%29.jpg/960px-Louisa_Coffee_and_Sanmin_Road_bus_stop_%2851017503698%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Toyokawa_Community_Bus_Meiden_Akasaka_Station_Bus_Stop_%282015-10-03%29.JPG/960px-Toyokawa_Community_Bus_Meiden_Akasaka_Station_Bus_Stop_%282015-10-03%29.JPG',
]

const tierImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Wikipedia_Times_Square_Billboard_15.jpg/960px-Wikipedia_Times_Square_Billboard_15.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/86th_Street_Second_Av._Subway_Station_Unveiled_%2831863534822%29.jpg/960px-86th_Street_Second_Av._Subway_Station_Unveiled_%2831863534822%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Berlin_Mitte_Litfa%C3%9F-Platz.JPG/960px-Berlin_Mitte_Litfa%C3%9F-Platz.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Toopranpet_bus_shelter_-_Mapillary_%281276860037147020%29.jpg/960px-Toopranpet_bus_shelter_-_Mapillary_%281276860037147020%29.jpg',
]

const tiers = [
  { label: 'TARGET CITY', range: 'CITY-WIDE' },
  { label: 'NEIGHBORHOOD', range: 'RADIUS 2-5 KM' },
  { label: 'BUSINESS DISTRICT', range: 'COMMERCIAL ZONES' },
  { label: 'HIGHWAYS', range: 'TRAFFIC CORRIDORS' },
]

const placeholderImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Wikipedia_Times_Square_Billboard_13.jpg/960px-Wikipedia_Times_Square_Billboard_13.jpg'
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

function PopStage({ images, tall = false }) {
  const stageRef = useRef(null)

  useEffect(() => {
    const container = stageRef.current
    if (!container) return

    const imgs = Array.from(container.querySelectorAll('.starburst-image'))
    const timeouts = new Set()
    const activeSlots = new Set()

    const popRandom = () => {
      const cols = window.innerWidth < 768 ? 2 : 4
      const rows = window.innerWidth < 768 ? 1 : (tall ? 2 : 1)
      const freeImgs = imgs.filter(el => !el.dataset.active)
      const freeSlots = [...Array(cols * rows).keys()].filter(s => !activeSlots.has(s))
      if (!freeImgs.length || !freeSlots.length) return

      const img = freeImgs[Math.floor(Math.random() * freeImgs.length)]
      const slot = freeSlots[Math.floor(Math.random() * freeSlots.length)]
      activeSlots.add(slot)
      img.dataset.active = '1'

      const col = slot % cols
      const row = Math.floor(slot / cols)
      const cellW = 100 / cols
      const cellH = 100 / rows
      img.style.left = (col * cellW + cellW / 2 + (Math.random() * 10 - 5)) + '%'
      img.style.top = (row * cellH + cellH / 2 + (Math.random() * 10 - 5)) + '%'

      img.classList.remove('pop-in', 'pop-out')
      void img.offsetWidth
      img.classList.add('pop-in')

      timeouts.add(setTimeout(() => {
        img.classList.remove('pop-in')
        img.classList.add('pop-out')
        timeouts.add(setTimeout(() => {
          delete img.dataset.active
          activeSlots.delete(slot)
        }, 750))
      }, 2400 + Math.random() * 1800))
    }

    for (let i = 0; i < 4; i++) timeouts.add(setTimeout(popRandom, i * 350))
    const intervalId = setInterval(popRandom, 1200)

    return () => {
      clearInterval(intervalId)
      timeouts.forEach(clearTimeout)
    }
  }, [tall])

  return (
    <div className={`starburst-pop-stage ${tall ? 'is-tall' : 'is-short'}`} ref={stageRef}>
      {images.map((src, i) => (
        <img key={i} src={src} loading="lazy" alt="" className={`starburst-image _${i + 1}`} />
      ))}
    </div>
  )
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
      </div>
    </div>
  )
}

function BrandFans() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)
  const svgDrawRef = useRef(null)
  const weareHeadingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!svgDrawRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            if (weareHeadingRef.current) {
              weareHeadingRef.current.classList.add('animate')
            }
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(svgDrawRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-content-wrapper page-content-top">
      {/* Hero Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component gf-hero">
                <div className="gf-hero-intro">
                  <span className="gf-hero-eyebrow">GEO-TARGETING AT THE CORE</span>
                  <p className="gf-hero-lede">
                    Geo-targeting is at the core of Doohpie. Instead of selecting advertising
                    inventory purely by format, advertisers <em>start with a location</em> and
                    identify opportunities around it - building campaigns around cities, states,
                    neighborhoods, business districts, highways and high-footfall zones.
                  </p>
                </div>
                <div className="standardhero_header gf-hero-main">
                  <h1 className="gf-hero-title">WHAT IS<br />GEO-TARGETING<br /><span>ANYWAY?</span></h1>
                  <p className="gf-hero-kicker">This isn't buying billboards as you know it.</p>
                  <ol className="gf-steps">
                    {['Target City', 'Select Area', 'Identify Locations', 'Choose Inventory', 'Upload Creative', 'Launch Campaign'].map((step, i) => (
                      <li key={i} className="gf-step">
                        <span className="gf-step-num">{String(i + 1).padStart(2, '0')}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <p className="gf-hero-note">It's outdoor advertising built around where your audience actually is.</p>
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
              <div className="starbust-images_layout">
                <h2 className="cs2-h1 _2">START WITH A LOCATION. NOT A SPACE.</h2>
                <PopStage images={starburstImages} tall />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Section */}
      <section className="section_weare">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <PopStage images={starburstImages} />
              <div className="weare_component">
                <div className="weare_svg-wrapper" ref={svgDrawRef}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 130 1500 870" width="950" height="850">
                    {/* Stylish Cursive Script "D" */}
                    <text x="-220" y="950"
                          fontFamily="'Pinyon Script', 'Great Vibes', cursive"
                          fontSize="1100"
                          fill="none"
                          stroke="#4cda56"
                          strokeWidth="5"
                          strokeLinejoin="round"
                          className="svg-draw-text">D</text>

                    {/* Circular Monogram Badge */}
                    <g transform="translate(850,400)">
                      <circle r="90" fill="none" stroke="#4cda56" strokeWidth="4" className="svg-draw-circle"/>
                      <circle r="78" fill="none" stroke="#4cda56" strokeWidth="2" className="svg-draw-circle"/>
                      <text x="0" y="28"
                            textAnchor="middle"
                            fontFamily="Liberation Serif, Georgia, serif"
                            fontWeight="bold"
                            fontSize="90"
                            fill="none"
                            stroke="#4cda56"
                            strokeWidth="3"
                            className="svg-draw-text-m">π</text>
                    </g>
                  </svg>
                </div>
                <h2 data-animate className="weare_heading is-visible" ref={weareHeadingRef}>
                  <span className="typing-text typing-line-1">WE ARE THE</span><br />
                  <span className="typing-text typing-line-2">GEO-TARGETING</span><br />
                  <span className="typing-text typing-line-3">OOH PLATFORM</span>
                </h2>
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
                    </div>
                  </div>
                ))}
              </div>

              {/* Brand Fans Grid */}
              <div className="brandfans-grid-wrap">
                <div className="margin-right margin-xlarge">
                  <h2 className="text-color-pink followers">Radius-Based Targeting</h2>
                </div>
                <div className="brandfans-grid_image-side">
                  {cultureImages.map((src, i) => (
                    <img key={i} src={src} loading="lazy" alt="" className={`culture-image${i === 0 ? '' : i <= 2 ? i : i === 3 ? '-3' : '-5'}`} />
                  ))}
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
