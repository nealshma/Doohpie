import { useEffect, useState, useRef } from 'react'
import { assets } from '../assets'

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
  { label: 'CREATOR TIER 1', range: '1-10K' },
  { label: 'CREATOR TIER 2', range: '10-20K' },
  { label: 'CREATOR TIER 3', range: '20-30K' },
  { label: 'CREATOR TIER 4', range: '3-40K' },
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
    <>
      {/* Hero Section */}
      <section className="section_standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="standardhero_component">
                <p className="text-size-huge">
                  Brand Fans is Doohpie's approach to gifting - turning product sends into a scalable engine for content, conversation and advocacy. By activating creators with real affinity for a brand, we help products travel further and faster across culture.
                </p>
                <div className="standardhero_header">
                  <h1 className="heading-style-h2 text-weight-normal is-service">WHAT ARE BRAND FANS ANYWAY?</h1>
                  <p className="text-size-large">
                    This isn't gifting as you know it.<br />
                    Brand Fans are your connection to culture, generating high-quality content that drives relevance and influences action long before someone clicks "buy".
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
                <h2 className="cs2-h1 _2">GIVING YOUR BRAND TO THE TASTEMAKERS</h2>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 617 281" fill="none">
                      <path d="M132.55 101.055C128.203 118.443 115.162 131.898 97.567 131.898C89.908 131.898 81.421 129 77.281 124.86C69.622 128.172 55.96 129 47.266 129V111.819C54.511 111.819 60.721 112.026 66.31 110.37C63.826 104.781 62.584 97.95 62.791 91.326C63.412 74.145 74.797 59.448 91.771 62.76C103.777 65.244 110.401 76.215 108.952 89.256C107.71 100.227 102.328 108.093 94.876 114.717C111.022 119.271 119.302 98.778 117.025 82.218C115.369 67.314 102.742 55.929 86.803 55.929C72.313 55.929 62.584 62.139 55.546 73.317C48.301 84.702 43.126 100.227 37.123 129H0.0700001L25.738 15.15H44.989C45.196 19.704 45.817 24.879 49.75 24.879C52.441 24.879 54.097 23.016 58.03 17.22C64.861 7.491 71.278 1.695 82.456 1.695C91.978 1.695 100.879 8.73299 102.328 18.048C103.57 24.879 100.672 32.124 97.567 38.127C90.322 36.885 81.835 37.092 77.281 37.713C84.319 28.605 87.631 20.532 83.284 18.669C79.972 17.22 76.246 20.946 71.899 27.156C66.103 36.057 59.686 41.853 49.957 41.853C45.403 41.853 41.263 40.611 37.951 38.334L21.391 112.026H23.461C27.394 93.81 32.362 77.664 41.263 63.795C50.992 48.27 66.931 39.369 86.182 39.369C104.398 39.369 120.13 47.235 128.824 63.588C134.62 76.215 135.655 88.014 132.55 101.055ZM91.15 81.597C90.322 79.734 88.666 79.113 87.217 79.113C79.558 79.113 77.281 94.017 81.835 103.746C87.01 100.227 93.841 87.393 91.15 81.597ZM149.538 0.839998H193.638C225.138 0.839998 239.358 13.98 239.358 36.3C239.358 52.32 230.178 64.38 215.598 67.98V68.34C224.778 71.4 228.918 76.8 234.678 92.82L247.818 129H224.238L213.438 96.78C208.398 82.38 202.818 77.52 189.678 77.52H171.138V129H149.538V0.839998ZM171.138 18.66V59.88H192.558C210.378 59.88 217.758 51.24 217.578 38.46C217.578 24.78 208.218 18.66 191.298 18.66H171.138ZM334.276 94.26H281.176L269.296 129H246.616L293.236 0.839998H322.216L368.836 129H346.156L334.276 94.26ZM327.796 75.54L324.376 65.46C318.616 48.36 313.036 31.62 307.816 14.52H307.456C302.236 31.62 297.016 48.36 291.076 65.46L287.656 75.54H327.796ZM482.414 129H451.454L423.734 75.36C414.374 57.18 405.194 38.64 396.554 20.28H396.194C396.914 39.72 397.274 59.16 397.274 78.6V129H376.394V0.839998H407.534L435.074 54.48C444.434 72.66 453.614 91.2 462.254 109.56H462.614C462.074 90.12 461.714 70.68 461.714 51.24V0.839998H482.414V129ZM508.807 0.839998H549.847C592.687 0.839998 616.987 23.88 616.987 64.92C616.987 105.96 592.687 129 549.847 129H508.807V0.839998ZM530.227 19.56V110.28H549.487C579.367 110.28 594.667 94.8 594.667 64.92C594.667 35.04 579.367 19.56 549.487 19.56H530.227ZM96.82 168.56H35.44V207.98H92.5V226.52H35.44V278H13.84V149.84H96.82V168.56ZM175.199 243.26H122.099L110.219 278H87.5387L134.159 149.84H163.139L209.759 278H187.079L175.199 243.26ZM168.719 224.54L165.299 214.46C159.539 197.36 153.959 180.62 148.739 163.52H148.379C143.159 180.62 137.939 197.36 131.999 214.46L128.579 224.54H168.719ZM323.337 278H292.377L264.657 224.36C255.297 206.18 246.117 187.64 237.477 169.28H237.117C237.837 188.72 238.197 208.16 238.197 227.6V278H217.317V149.84H248.457L275.997 203.48C285.357 221.66 294.537 240.2 303.177 258.56H303.537C302.997 239.12 302.637 219.68 302.637 200.24V149.84H323.337V278ZM386.99 147.14C418.13 147.14 434.15 161.72 434.15 189.26H412.37C412.37 173.06 403.19 164.78 386.63 164.78C372.77 164.78 364.13 171.44 364.13 181.88C364.13 193.58 372.95 197.18 393.47 202.22C417.59 208.16 437.75 214.46 437.75 241.46C437.75 265.22 418.67 280.7 389.87 280.7C358.91 280.7 340.01 265.04 340.01 235.7H362.15C362.15 254.06 372.23 262.88 390.05 262.88C406.07 262.88 415.43 255.5 415.43 243.44C415.43 230.48 406.07 227.6 386.45 222.74C362.15 216.62 341.99 210.68 341.99 183.86C341.99 162.08 359.81 147.14 386.99 147.14Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h2 className="text-color-pink followers">1-15k Followers</h2>
                </div>
                <div className="brandfans-grid_image-side">
                  {cultureImages.map((src, i) => (
                    <img key={i} src={src} loading="lazy" alt="" className={`culture-image${i === 0 ? '' : i <= 2 ? i : i === 3 ? '-3' : '-5'}`} />
                  ))}
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 534 281" fill="none" className="b-wide remove-margin">
                    <path d="M533.09 94.863C533.09 125.653 513.12 146.183 483.16 146.183C453.2 146.183 433.23 125.653 433.23 94.863C433.23 64.073 453.2 43.543 483.16 43.543C513.12 43.543 533.09 64.073 533.09 94.863ZM440.72 94.863C440.72 121.073 457.64 138.553 483.16 138.553C508.68 138.553 525.74 121.073 525.74 94.863C525.74 68.653 508.68 51.173 483.16 51.173C457.64 51.173 440.72 68.643 440.72 94.863Z" stroke="#FF00C3" strokeMiterlimit="10"></path>
                    <path d="M501.04 118.531V94.9914C501.04 89.0714 501.17 83.1514 501.44 77.2414H501.31C499.78 83.0214 498.05 88.9414 496.26 94.6614L488.75 118.531H477.58L470.07 94.6614C468.27 88.9414 466.55 83.0214 465.02 77.2414H464.89C465.16 83.1614 465.29 89.0814 465.29 94.9914V118.531H455.92V71.1914H471.61L478.46 92.9314C480.26 98.6514 481.85 104.571 483.11 110.351H483.24C484.5 104.571 486.1 98.6514 487.89 92.9314L494.74 71.1914H510.43V118.531H501.04Z" stroke="#FF00C3" strokeMiterlimit="10"></path>
                    <path d="M210.53 236.701C215.58 217.631 233.53 205.851 252.04 205.851C262.7 205.851 271.67 212.581 271.11 222.681C270.55 233.901 262.14 240.631 253.16 245.121C246.43 248.491 239.14 250.731 238.02 258.021C236.9 265.871 247.55 269.801 257.65 269.801C294.11 269.801 341.22 229.981 343.46 183.991C345.14 156.511 315.42 147.531 305.88 148.651C303.08 149.771 296.35 150.891 292.98 150.891C283.45 150.891 280.64 149.211 281.2 144.721C281.76 140.791 289.05 140.231 293.54 140.231C300.27 140.231 306.44 141.351 309.81 143.031C332.81 139.661 361.97 117.231 370.38 91.9911C374.87 77.4111 369.26 60.5811 352.99 52.1711C349.06 54.9711 346.26 57.7812 343.46 60.5812C323.27 81.3312 303.08 112.741 273.91 151.441C222.31 221.551 136.5 280.441 69.19 280.441C43.95 280.441 9.73997 278.201 1.88997 244.541C-5.96003 212.011 18.72 162.091 95.56 111.051C164.55 65.0612 257.09 37.5711 325.52 39.8211C327.2 39.8211 333.37 40.3811 333.37 40.3811C358.05 25.8011 379.36 16.8211 397.87 10.6511C417.5 3.92115 441.06 0.00114834 460.13 0.551148C479.2 1.10115 493.78 7.84115 499.39 15.6911C500.51 17.3711 501.63 20.1811 499.39 20.7411C498.83 20.7411 498.27 19.6211 496.59 17.9411C490.42 10.6511 477.52 5.60115 460.69 5.60115C443.86 5.60115 422.55 8.97115 405.16 16.2611C388.89 22.9911 373.19 34.2111 361.97 44.3011C394.5 51.0311 416.94 67.8612 411.89 93.6612C405.72 126.751 359.17 143.581 320.47 145.261V145.821C361.41 146.941 391.7 167.131 390.02 194.061C387.22 241.171 326.64 274.271 257.65 274.271C229.61 274.271 204.37 263.051 210.54 236.691L210.53 236.701ZM70.87 275.401C121.91 275.401 157.81 223.801 200.99 167.151C237.45 119.481 279.51 81.9011 306.43 59.4611C311.48 54.9711 318.77 49.9311 324.38 46.5611C324.38 46.5611 319.89 46.0011 317.65 46.0011C260.44 44.3211 174.63 67.8712 115.73 114.991C55.72 162.661 37.21 209.221 37.21 240.631C37.21 263.071 51.23 275.401 70.86 275.401H70.87Z" stroke="#FF00C3" strokeMiterlimit="10"></path>
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
                      <div className="number-header-text">Fans Activated</div>
                      <div className="number-text">
                        <AnimatedCounter target={150} isVisible={statsVisible} />
                        k
                      </div>
                    </div>
                    <div className="number-block">
                      <div className="number-header-text">Content Shared</div>
                      <div className="number-text">
                        <AnimatedCounter target={240} isVisible={statsVisible} />
                        k
                      </div>
                    </div>
                    <div className="number-block">
                      <div className="number-header-text">Avg. Engagement Rate</div>
                      <div className="number-text">
                        <AnimatedCounter target={11} isVisible={statsVisible} />
                        %
                      </div>
                    </div>
                    <p className="text-size-large brand-fans" style={{ marginTop: 32 }}>
                      Brand Fans are integral to how we drive growth for brands. They integrate seamlessly with higher-tier creator activity and scale easily. Because we're a global agency, working on large scale programmes for global brands, Brand Fans has little to no ramp up time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="margin-bottom margin-large">
                <div className="project_wrapper">
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">OFF THE CHARTS<br />ENGAGEMENT</div>
                      <p className="project_subheading">The average industry benchmark is 2%. Our Brand Fans campaigns deliver, on average, over 11%. That isn't just likes, but comments with positive brand sentiment, too.</p>
                    </div>
                  </div>
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">REPRESENTATION MATTERS</div>
                      <div className="project_detail">
                        <p className="project_subheading">Brand Fans represent every culture, every lifestyle, every niche - reflecting audiences as they actually exist.</p>
                      </div>
                    </div>
                  </div>
                  <div className="project_item-wrapper">
                    <div className="full-pink-block">
                      <div className="project_heading">Discovering advocates</div>
                      <div className="project_detail">
                        <p className="project_subheading">Brand Fans give brands a strategic head start, connecting them with emerging creators before they're on everyone else's radar.</p>
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
                  We help brands earn advocacy, not buy attention.<br />
                  It's how they find growth beyond the obvious places.
                </div>
                <div className="cta_button">
                  <button className="new-button is-shorter is-full-width">
                    <div className="new-button_text is-full-width">Get In Touch</div>
                    {arrowSvg}
                    <a href="/contact" className="new-button_link"></a>
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
    </>
  )
}

export default BrandFans
