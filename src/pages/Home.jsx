import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web'
import { assets } from '../assets'

const services = [
  { id: 1, title: 'BRAND FANS', description: 'Turn product sends into a scalable engine for content, conversation and advocacy.' },
  { id: 2, title: 'CREATOR CAMPAIGNS', description: 'Full-service campaign execution from brief to final reporting.' },
  { id: 3, title: 'CREATOR PROGRAMMES', description: 'Always-on ambassador programmes that build lasting brand affinity.' },
  { id: 4, title: 'PAID AMPLIFICATION', description: 'Strategic paid media to amplify creator content at scale.' },
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

    const tryPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          retryTimeout = setTimeout(tryPlay, 200)
        })
      }
    }

    const onEnded = () => {
      video.currentTime = 0
      tryPlay()
    }

    video.addEventListener('ended', onEnded)
    tryPlay()

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause()
      } else {
        tryPlay()
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
  const heroLogoRef = useRef(null)
  const svgDrawRef = useRef(null)
  const desktopVideoRef = useRef(null)
  const mobileVideoRef = useRef(null)

  useReliableVideo(desktopVideoRef)
  useReliableVideo(mobileVideoRef)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroLogoRef.current) {
        heroLogoRef.current.style.opacity = '1'
        heroLogoRef.current.style.transition = 'opacity 1.5s ease'
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!svgDrawRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
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
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger], [data-animate-scale]')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])



  return (
    <div className="home-page-wrapper">
      {/* Hero Section */}
      <section className="section_hero is-homepage">
        <div className="homepage_slider_video is-desktop w-background-video w-background-video-atom">
          <video
            ref={desktopVideoRef}
            autoPlay
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
            autoPlay
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
              <img src={assets.svgs.group1326} loading="eager" alt="" className="homepage_mobile-logo-masked" />
            </a>
          </div>
        </div>
        <img
          ref={heroLogoRef}
          className="buttermilk-large-wide is-hero"
          src={assets.logo.white}
          alt="Doohpie Logo"
          style={{ opacity: 0 }}
        />
      </section>

      {/* Buttermilk / Creator Company Section */}
      <section className="section_buttermilk">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="buttermilk_component">
                <div data-animate className="communities_eyebrow text-size-large text-style-allcaps hide-mobile-portrait">
                  THE CREATOR COMPANY
                </div>
                <div data-animate className="communities_eyebrow text-size-large text-style-allcaps text-align-right">
                  WHERE CULTURAL CREATIVITY MEETS COMMERCIAL AMBITION
                </div>
                <p data-animate className="text-size-large custom-homepage">
                  Culture is built by creators. They generate advocacy, set the pace of relevance, and create the kind of creative capital brands can't buy elsewhere.
                </p>
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
              <div className="weare_component">
                <div className="weare_svg-wrapper" ref={svgDrawRef}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 0 1500 1000" width="950" height="850">
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
                <h2 data-animate className="weare_heading is-visible">
                  <span className="typing-text typing-line-1">WE ARE THE</span><br />
                  <span className="typing-text typing-line-2">CREATOR COMPANY</span>
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
                <div className="homeservice_item hide-mobile-portrait is-service is-larger">
                  <div data-animate-scale className="homeservice_card">
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
                      <div className="homeservice_text">@aishimatsu</div>
                    </div>
                  </div>
                </div>

                {/* Image card */}
                <div className="homeservice_item hide-mobile-portrait is-service is-smaller">
                  <div data-animate-scale className="homeservice_card">
                    <div className="homeservice_image-wrapper is-short">
                      <img src={assets.homeservice.bellhueImage} loading="lazy" alt="" className="homeservice_image is-short" />
                    </div>
                    <div className="homeservice_header">
                      <img src={assets.svgs.arrowRight} loading="lazy" alt="" className="homeservice_icon" />
                      <div className="homeservice_text">@BELLHUE</div>
                    </div>
                  </div>
                </div>

                {/* Content column */}
                <div data-animate className="homeservice_item is-content">
                  <div className="margin-bottom margin-large custom-mobile">
                    <h2 data-animate className="homeservice_heading">WHAT WE BUILD</h2>
                  </div>
                  <div data-animate className="margin-bottom margin-large custom-mobile">
                    <p className="text-size-small">
                      Doohpie leverages contemporary culture and creator communities to fortify brands and boost business potential. It's a two way street that serves our creators as much as they serve you, building robust reputations and relationships that benefit everyone.<br /><br />
                      Creator marketing is all we do. And we have to practice what we preach. Creators, community and culture - that's what our capabilities are centered around.
                    </p>
                  </div>
                  <Link data-animate to="/services" className="text-style-link">
                    SEE OUR SERVICES →
                  </Link>
                </div>

                {/* Mobile-only image */}
                <div className="margin-bottom margin-large show-mobile-portrait">
                  <div className="homeservice_item">
                    <img data-animate-scale src={assets.svgs.group1320} alt="" className="homeservice_image" />
                  </div>
                </div>

                {/* Services list + image */}
                <div className="homeservice_item">
                  <div className="homeservice_wrapper">
                    <div data-animate-stagger className="homeservice_top">
                      {services.map((service) => (
                        <Link to="/services" className="button-text is-icon is-service is-not-rollover" key={service.id}>
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
              <div className="w-layout-grid logo_list">
                {assets.clientLogos.map((logo, i) => (
                  <div className="logo_wrapper" key={i}>
                    <img
                      src={logo}
                      alt={`Client ${i + 1}`}
                      className="logo_logo"
                    />
                  </div>
                ))}
              </div>
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
                          <div className="map_content-clock-wrapper">
                            <TimePill timezone="Europe/London" city="London, uk" />
                            <TimePill timezone="America/New_York" city="New York, usa" />
                            <TimePill timezone="Asia/Dubai" city="Dubai, uae" />
                          </div>
                        </div>
                        <div className="max-width-xsmall">
                          <p data-animate className="map_content-heading">
                            We're a global agency, headquartered out of London, with offices in Miami and Dubai.
                          </p>
                        </div>
                        <div className="margin-bottom margin-medium">
                          <div className="map_right show-mobile-portrait">
                            <div className="map_wrapper">
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
                  <div className="map_wrapper">
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
              <div className="margin-bottom margin-large">
                <div className="header-wrapper">
                  <h2 className="carousel_heading">The Global Creator Company</h2>
                </div>
              </div>
              <section className="section_projectcarousel">
                <div className="projectcarousel_component">
                  <div className="projectcarousel_wrapper">
                    <div className="projectcarousel_marquee-track">
                      <div className="projectcarousel_marquee row-1">
                        {[...assets.carousel, ...assets.carousel].map((project, i) => (
                          <ProjectCard project={project} variant="case-study" key={`cs-${i}`} />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
              <Link to="/work" className="text-size-regular text-style-underline">
                VIEW ALL CASE STUDIES →
              </Link>
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
                  We help brands earn advocacy, not buy attention.<br />
                  It's how they find growth beyond the obvious places.
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
                <div className="businessmilk-heading">LET'S MAKE SOMETHING</div>
              </div>
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
    </div>
  )
}

export default Home
