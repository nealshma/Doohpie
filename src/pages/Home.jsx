import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'motion/react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'
import {
  EASE,
  fadeUp,
  staggerContainer,
  MagneticLink,
} from '../components/motion-ui'

const services = [
  { id: 1, title: 'STATIC BILLBOARDS', description: 'Large-format, high-impact displays for continuous brand visibility in high-traffic locations.' },
  { id: 2, title: 'DIGITAL LED BOARDS', description: 'Bright, high-resolution screens for video, animation and rotating multi-ad loops.' },
  { id: 3, title: 'BACKLIT DISPLAYS', description: 'Internally illuminated units that keep your message visible day and night.' },
  { id: 4, title: 'CONSTRUCTION COVERS', description: 'Large temporary surfaces that transform construction sites into brand experiences.' },
]

function TimePill({ timezone, city }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour12: false,
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
  const parts = formatter.format(time).split(':')
  const hours = parseInt(parts[0], 10)
  const minutes = parseInt(parts[1], 10)
  const seconds = parseInt(parts[2], 10)

  const hourAngle = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60)
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60)

  return (
    <a href="#" className="button-text is-icon is-service is-full-width is-not-rollover">
      <div className="text-color-white pill-text-up">{city}</div>
      <div className="icon-wrapper">
        <svg viewBox="0 0 102 102" width="100%" className="timezone-clock">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="6" fill="none" />
          <line x1="50" y1="50" x2="50" y2="25" stroke="#4cda56" strokeWidth="6" strokeLinecap="round" transform={`rotate(${hourAngle}, 50, 50)`} />
          <line x1="50" y1="50" x2="50" y2="13" stroke="#4cda56" strokeWidth="6" strokeLinecap="round" transform={`rotate(${minuteAngle}, 50, 50)`} />
        </svg>
      </div>
    </a>
  )
}

function ProjectCard({ project, variant }) {
  const href = variant === 'project' ? project.projectLink : project.link
  return (
    <div className="project_item-wrapper">
      <Link to={href} className="project_content">
        <div className="project_image-wrapper">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
        <div className="project-slider-content">
          <div className={variant === 'project' ? 'project_heading' : 'project_heading is-smaller'}>{project.title}</div>
          <div className="project_detail">
            <p className="text-size-large is-project">{project.desc}</p>
            {variant === 'project' ? (
              <div className="projetc-slider-button">
                <div className="project-slider">VIEW CASE STUDY</div>
                <div className="circle-pink">
                  <img src={assets.svgs.arrowStroke} loading="lazy" alt="" />
                </div>
              </div>
            ) : (
              <div className="new-button">
                <div className="new-button_text">VIEW CASE STUDY</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className="new-button_icon">
                  <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.99634 7.4155L18.0829 7.41551C18.5791 7.41551 18.9814 7.81778 18.9814 8.31401L18.9814 16.4006C18.9814 16.8968 18.5791 17.2991 18.0829 17.2991C17.5867 17.2991 17.1844 16.8968 17.1844 16.4006L17.1844 10.4832L8.18611 19.4815C7.83522 19.8324 7.26632 19.8324 6.91543 19.4815C6.56455 19.1306 6.56455 18.5617 6.91543 18.2108L15.9137 9.21252L9.99634 9.21251C9.50011 9.21251 9.09784 8.81024 9.09784 8.31401C9.09784 7.81778 9.50011 7.4155 9.99634 7.4155Z" fill="currentColor"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </Link>
      <Link to={href}>
        <div className="margin-top margin-small">
          <div className="project-title">{project.name}</div>
        </div>
        <div className="project-sub"></div>
      </Link>
    </div>
  )
}

function useReliableVideo(ref) {
  useEffect(() => {
    const video = ref.current
    if (!video) return

    let retryTimeout = null
    let started = false

    const bufferedAheadOf = () => {
      let ahead = 0
      for (let i = 0; i < video.buffered.length; i++) {
        if (video.buffered.start(i) <= video.currentTime && video.currentTime < video.buffered.end(i)) {
          ahead = video.buffered.end(i) - video.currentTime
        }
      }
      return ahead
    }

    // Only start playback once enough data is buffered so it never stalls on the first frames
    const startWhenReady = () => {
      if (started) return
      if (video.readyState < 3 || bufferedAheadOf() < 2) {
        retryTimeout = setTimeout(startWhenReady, 150)
        return
      }
      started = true
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          started = false
          retryTimeout = setTimeout(startWhenReady, 200)
        })
      }
    }

    const ensurePlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          retryTimeout = setTimeout(ensurePlay, 200)
        })
      }
    }

    const onEnded = () => {
      video.currentTime = 0
      ensurePlay()
    }

    video.addEventListener('ended', onEnded)
    startWhenReady()

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause()
      } else {
        ensurePlay()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      video.removeEventListener('ended', onEnded)
      document.removeEventListener('visibilitychange', handleVisibility)
      clearTimeout(retryTimeout)
    }
  }, [ref])
}

function Home() {
  const svgDrawRef = useRef(null)
  const weareHeadingRef = useRef(null)
  const desktopVideoRef = useRef(null)
  const mobileVideoRef = useRef(null)

  useReliableVideo(desktopVideoRef)
  useReliableVideo(mobileVideoRef)

  const { scrollYProgress: pageProgress } = useScroll()
  const pageProgressSmooth = useSpring(pageProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  useEffect(() => {
    if (!svgDrawRef.current) return
    const heading = weareHeadingRef.current

    const restartAnimation = (el) => {
      if (!el) return
      el.classList.remove('animate')
      void el.offsetWidth
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            restartAnimation(entry.target)
            restartAnimation(heading)
            requestAnimationFrame(() => {
              entry.target.classList.add('animate')
              if (heading) heading.classList.add('animate')
            })
          } else {
            entry.target.classList.remove('animate')
            if (heading) heading.classList.remove('animate')
          }
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(svgDrawRef.current)
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
      { threshold: 0.05 }
    )
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger], [data-animate-scale]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])



  return (
    <div className="home-page-wrapper">
      <motion.div className="scroll-progress-bar" style={{ scaleX: pageProgressSmooth }} />

      {/* Hero Section */}
      <section className="section_hero is-homepage">
        <div className="homepage_slider_video is-desktop w-background-video w-background-video-atom">
          <video
            ref={desktopVideoRef}
            loop
            muted
            playsInline
            preload="auto"
            poster={assets.hero.desktopPoster}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src={assets.hero.desktopVideo} type="video/mp4" />
          </video>
        </div>
        <div className="homepage_slider_video is-mobile w-background-video w-background-video-atom">
          <video
            ref={mobileVideoRef}
            loop
            muted
            playsInline
            preload="auto"
            poster={assets.hero.mobilePoster}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src={assets.hero.mobileVideo} type="video/mp4" />
          </video>
          <div className="logo-mask-mobile_wrapper homepage">
            <a href="#" className="logo-mask-mobile">
              <img className="buttermilk-large-wide is-hero" src="https://cdn.pixelkart.ai/uploads/2026/august/18/creative_35391abd.png" alt="Doohpie Logo" />
            </a>
          </div>
        </div>
        <motion.img
          className="buttermilk-large-wide is-hero"
          src={assets.logo.white}
          alt="Doohpie Logo"
          initial={{ opacity: 0, scale: 0.92, x: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%' }}
          transition={{ duration: 1.5, delay: 0.4, ease: EASE }}
        />
        <div className="hero-scroll-cue scroll-cue">
          <span className="scroll-cue-dot" />
          <span>SCROLL</span>
        </div>
      </section>

      {/* Buttermilk / Creator Company Section */}
      <section className="section_buttermilk">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.div
                className="buttermilk_component"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div className="communities_eyebrow text-size-large text-style-allcaps hide-mobile-portrait" variants={fadeUp}>
                  THE GEO-TARGETED OUTDOOR PLATFORM
                </motion.div>
                <motion.div className="communities_eyebrow text-size-large text-style-allcaps text-align-right" variants={fadeUp}>
                  REACH THE RIGHT AUDIENCE. IN THE RIGHT PLACE.
                </motion.div>
                <motion.p className="text-size-large custom-homepage" variants={fadeUp}>
                  Doohpie is a location-powered advertising platform for planning and managing outdoor & digital outdoor campaigns.
With geo-targeting at its core, reach audiences across cities, neighborhoods, and high-traffic locations.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Section */}
      <section className="section_weare">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="weare_component weare-glow">
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

                    {/* Circular "M" Monogram Badge */}
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
                  <span className="typing-text typing-line-3">OUTDOOR PLATFORM</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homeservice Section */}
      <section className="section_homeservice">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="homeservice_component">
                {/* Video card */}
                <div className="homeservice_item is-service is-larger">
                  <motion.div
                    className="homeservice_card media-hover-card"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    <div className="homeservice_image-wrapper">
                      <div className="homeservice_image is-video w-background-video w-background-video-atom">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ backgroundImage: `url("${assets.homeservice.bf8Poster}")`, objectFit: 'cover', width: '100%', height: '100%' }}
                        >
                          <source src={assets.homeservice.bf8Video} />
                        </video>
                      </div>
                    </div>
                    <div className="homeservice_header">
                      <img src={assets.svgs.arrowRight} loading="lazy" alt="" className="homeservice_icon" />
                      <div className="homeservice_text">STATIC BILLBOARD — HIGHWAY</div>
                    </div>
                  </motion.div>
                </div>

                {/* Image card */}
                <div className="homeservice_item is-service is-smaller">
                  <motion.div
                    className="homeservice_card media-hover-card"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                  >
                    <div className="homeservice_image-wrapper is-short">
                      <img src={assets.homeservice.bellhueImage} loading="lazy" alt="" className="homeservice_image is-short" />
                    </div>
                    <div className="homeservice_header">
                      <img src={assets.svgs.arrowRight} loading="lazy" alt="" className="homeservice_icon" />
                      <div className="homeservice_text">DIGITAL LED — CITY CENTRE</div>
                    </div>
                  </motion.div>
                </div>

                {/* Content column */}
                <div data-animate className="homeservice_item is-content">
                  <div className="margin-bottom margin-large custom-mobile">
                    <h2 data-animate className="homeservice_heading">WHAT WE OFFER</h2>
                  </div>
                  <div data-animate className="margin-bottom margin-large custom-mobile">
                    <p className="text-size-small">
                      Doohpie brings static billboards, digital LED boards, backlit displays and construction covers together into one unified platform. Instead of managing different formats independently, advertisers start with a location and discover the right inventory around it.<br /><br />
                      Target a city, select an area, identify locations, choose your spaces, upload creative and launch. That's outdoor advertising, reimagined around where your audience actually is.
                    </p>
                  </div>
                  <MagneticLink to="/ad-formats" className="text-style-link" strength={0.25}>
                    EXPLORE AD FORMATS →
                  </MagneticLink>
                </div>

                {/* Services list + image */}
                <div className="homeservice_item">
                  <div className="homeservice_wrapper">
                    <div data-animate-stagger className="homeservice_top">
                      {services.map((service) => (
                        <Link to="/ad-formats" className="button-text is-icon is-service is-not-rollover" key={service.id}>
                          <div>{service.title}</div>
                          <div className="icon-wrapper align-number">
                            <div className="icon-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36 36" fill="none">
                                <circle cx="18.4802" cy="18.1599" r="16.4998" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                            <div>{service.id}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <img
                      data-animate-scale
                      src={assets.svgs.services}
                      alt="Services"
                      className="service_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section_logo">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="margin-bottom margin-large hide">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <h3 className="text-size-medium">WHO WE DO IT FOR</h3>
                  </div>
                </div>
              </div>
              <motion.div
                className="w-layout-grid logo_list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {assets.clientLogos.map((logo, i) => (
                  <motion.div className="logo_wrapper" key={i} variants={fadeUp}>
                    <img
                      src={logo}
                      alt={`Client ${i + 1}`}
                      className="logo_logo"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section_map">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="divider"></div>
              <div className="map_component">
                <div className="map_left">
                  <div className="map_content">
                    <div className="margin-bottom margin-medium show-mobile-portrait">
                      <img
                        src={assets.svgs.globalPresence}
                        alt="Our Global Presence"
                        className="map_heading"
                      />
                    </div>
                    <div className="margin-bottom margin-large map-custom-mobile">
                      <div className="map_content-header">
                        <div className="margin-bottom margin-medium custom-clock-mobile">
                          <motion.div
                            className="map_content-clock-wrapper"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                          >
                            <motion.div variants={fadeUp}><TimePill timezone="Europe/London" city="London, uk" /></motion.div>
                            <motion.div variants={fadeUp}><TimePill timezone="America/New_York" city="New York, usa" /></motion.div>
                            <motion.div variants={fadeUp}><TimePill timezone="Asia/Dubai" city="Dubai, uae" /></motion.div>
                          </motion.div>
                        </div>
                        <div className="max-width-xsmall">
                          <p data-animate className="map_content-heading">
                            From busy city roads and commercial hubs to highways, transit zones and construction sites — we help brands advertise where their audiences live, work, travel and shop.
                          </p>
                        </div>
                        <div className="margin-bottom margin-medium">
                          <div className="map_right show-mobile-portrait">
                            <div className="map_wrapper map-glow">
                              <img
                                src={assets.map}
                                alt="Global Map"
                                className="map-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={assets.svgs.globalPresence}
                      alt="Our Global Presence"
                      className="map_heading hide-mobile-portrait"
                    />
                  </div>
                </div>
                <div className="map_right hide-mobile-portrait">
                  <div className="map_wrapper map-glow">
                    <img src={assets.map} alt="Global Map" className="map-image" />
                  </div>
                </div>
              </div>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Carousel Section */}
      <section className="section_project">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small global-creator">
              <motion.div
                className="margin-bottom margin-large"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="header-wrapper">
                  <h2 className="carousel_heading">One Platform. Multiple Advertising Formats.</h2>
                </div>
              </motion.div>
              <section className="section_projectcarousel">
                <div className="projectcarousel_component">
                  <div className="projectcarousel_wrapper">
                    <div className="projectcarousel_marquee-track marquee-fade-edge">
                      <div className="projectcarousel_marquee row-1">
                        {[...assets.carousel, ...assets.carousel].map((project, i) => (
                          <ProjectCard project={project} variant="case-study" key={`cs-${i}`} />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
              <MagneticLink to="/work" className="text-size-regular text-style-underline" strength={0.25}>
                VIEW ALL CAMPAIGNS →
              </MagneticLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small get-buttered-up_mobile">
              <div className="cta_component">
                <div className="businessmmilk-text">
                  Turn locations into opportunities. Turn visibility into impact.<br />
                  Turn outdoor advertising into a smarter media strategy.
                </div>
                <div className="cta_button">
                  <button className="new-button is-shorter is-full-width">
                    <div className="new-button_text is-full-width">Get In Touch</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 26" fill="none" className="new-button_icon">
                      <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="2"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.99634 7.4155L18.0829 7.41551C18.5791 7.41551 18.9814 7.81778 18.9814 8.31401L18.9814 16.4006C18.9814 16.8968 18.5791 17.2991 18.0829 17.2991C17.5867 17.2991 17.1844 16.8968 17.1844 16.4006L17.1844 10.4832L8.18611 19.4815C7.83522 19.8324 7.26632 19.8324 6.91543 19.4815C6.56455 19.1306 6.56455 18.5617 6.91543 18.2108L15.9137 9.21252L9.99634 9.21251C9.50011 9.21251 9.09784 8.81024 9.09784 8.31401C9.09784 7.81778 9.50011 7.4155 9.99634 7.4155Z" fill="currentColor"></path>
                    </svg>
                    <Link to="/contact" className="new-button_link w-inline-block"></Link>
                  </button>
                </div>
                <div className="businessmilk-heading">GEO-TARGET PLAN ADVERTISE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence / Enter Doohpieverse Section */}
      <PresenceSection />
    </div>
  )
}

export default Home
