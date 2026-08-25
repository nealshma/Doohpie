import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'
import { EASE, fadeUp, staggerContainer } from '../components/motion-ui'

const featuredPost = {
  title: 'From Buying Billboards To Building Location Strategy',
  excerpt: "Why the smartest OOH campaigns start with a radius on a map, not a billboard on a shortlist - and what changes when you plan by location first.",
  image: assets.blog.featured,
  tags: ['geo-targeting'],
  date: '12/16/2024',
  readTime: '6 min read',
  author: 'Doohpie Team',
}

const allPosts = [
  { title: 'Why Geo-Targeted OOH Outperforms City-Wide Buys', excerpt: 'A tighter radius beats a bigger budget - the math behind hyperlocal outdoor performance.', image: assets.blog.post1, tags: ['geo-targeting', 'strategy'], date: '11/28/2024', readTime: '5 min read' },
  { title: 'Static vs Digital: Choosing The Right Billboard Format', excerpt: 'Print permanence or screen flexibility - how to pick the format that actually fits your campaign.', image: assets.blog.post2, tags: ['formats', 'strategy'], date: '11/15/2024', readTime: '4 min read' },
  { title: 'Dayparting On Digital LED: From Morning Coffee To Evening Entertainment', excerpt: 'One screen, six creatives, three moods - how to run a digital LED loop that shifts with the day.', image: assets.blog.post3, tags: ['digital led', 'formats'], date: '11/02/2024', readTime: '5 min read' },
  { title: 'Construction Covers: Turning Barriers Into Brand Experiences', excerpt: 'Plain hoarding becomes a months-long brand takeover - a look at what makes a cover campaign work.', image: assets.blog.post4, tags: ['formats', 'planning'], date: '10/20/2024', readTime: '4 min read' },
  { title: 'Planning A Store Launch With A 5km Radius Campaign', excerpt: 'A step-by-step look at building a launch plan around the streets your future customers actually walk.', image: assets.blog.post5, tags: ['planning', 'geo-targeting'], date: '10/08/2024', readTime: '6 min read' },
  { title: 'Backlit Displays: Why Visibility After Dark Matters', excerpt: 'Daylight impressions are only half the story - what illumination adds once the sun goes down.', image: assets.blog.post6, tags: ['formats', 'insights'], date: '09/25/2024', readTime: '3 min read' },
]

const tagFilters = ['ALL', 'STRATEGY', 'FORMATS', 'GEO-TARGETING', 'DIGITAL LED', 'PLANNING']

function Blog() {
  const [activeTag, setActiveTag] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const featuredRef = useRef(null)

  const { scrollYProgress: pageProgress } = useScroll()
  const pageProgressSmooth = useSpring(pageProgress, { stiffness: 120, damping: 26, mass: 0.4 })

  const { scrollYProgress: featuredScroll } = useScroll({ target: featuredRef, offset: ['start end', 'end start'] })
  const featuredScale = useTransform(featuredScroll, [0, 0.5], [0.94, 1])

  const filteredPosts = allPosts.filter((post) => {
    const matchesTag = activeTag === 'ALL' || post.tags.includes(activeTag.toLowerCase())
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX: pageProgressSmooth }} />

      {/* Featured Post */}
      <section ref={featuredRef} style={{ padding: '80px 0 60px' }}>
        <div className="padding-global">
          <div className="container-large">
            <motion.div style={{ scale: featuredScale }}>
              <Link to="#" className="blogfeature-wrapper" style={{ display: 'block' }}>
                <motion.img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="blogfeature-image"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
                <motion.div
                  className="blogfeature-overlay"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <div className="blog-tags" style={{ marginBottom: 16 }}>
                    <span className="pink-pill-tag">FEATURED</span>
                    {featuredPost.tags.map((tag, i) => (
                      <span key={i} className="pink-pill-tag">{tag}</span>
                    ))}
                  </div>
                  <h2 className="blog-name">{featuredPost.title}</h2>
                  <p className="blog-feature-excerpt">{featuredPost.excerpt}</p>
                  <div className="blog-feature-meta">
                    <span className="blog-feature-avatar">DT</span>
                    <span className="blog-feature-meta-text">
                      <strong>{featuredPost.author}</strong> &nbsp;&middot;&nbsp; {featuredPost.date} &nbsp;&middot;&nbsp; {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="new-button is-white" style={{ marginTop: 8 }}>
                    <span className="new-button-text">READ ARTICLE</span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <motion.div
              style={{ marginBottom: 48 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <motion.img
                src={assets.svgs.group817}
                alt="Welcome to the News Stand"
                style={{ height: 60, marginBottom: 32, filter: 'brightness(0) invert(1)' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
                <motion.div
                  style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {tagFilters.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      variants={fadeUp}
                      whileTap={{ scale: 0.95 }}
                      className={`journal-tab ${activeTag === tag ? 'active' : ''}`}
                    >
                      {activeTag === tag && (
                        <motion.span className="journal-tab-bg" layoutId="journal-tab-bg" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                      )}
                      <span>{tag}</span>
                    </motion.button>
                  ))}
                </motion.div>
                <motion.div
                  className="journal-search"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="SEARCH ARTICLES..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </motion.div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTag + searchQuery}
                className="blog-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {filteredPosts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                  >
                    <Link to="#" className="blog-card" style={{ display: 'block' }}>
                      <div style={{ overflow: 'hidden' }}>
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="blog-card-image"
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.5, ease: EASE }}
                        />
                      </div>
                      <div className="blog-card-content">
                        <div className="blog-card-meta">
                          <span>{post.date}</span>
                          <span className="blog-card-meta-dot" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="blog-card-title">{post.title}</h3>
                        <p className="blog-card-excerpt">{post.excerpt}</p>
                        <div className="blog-card-tags">
                          {post.tags.map((tag, j) => (
                            <span key={j} className="pink-pill-tag">{tag}</span>
                          ))}
                        </div>
                        <span className="blog-card-readmore">
                          READ MORE
                          <img src={assets.svgs.arrowRight} alt="" style={{ filter: 'brightness(0) invert(56%) sepia(84%) saturate(430%) hue-rotate(70deg)' }} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}
              >
                No posts found matching your search.
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section_about_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <motion.div
                className="about-cta-banner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <div className="about-cta-glow" />
                <h2 className="about-cta-title">Never miss a format drop.</h2>
                <p className="about-cta-copy">
                  Campaign ideas, format insights and new inventory - straight to your inbox, roughly once a month.
                </p>
                <form
                  className="journal-newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input type="email" required placeholder="YOUR EMAIL ADDRESS" className="journal-newsletter-input" />
                  <button type="submit" className="new-button is-white">
                    <span className="new-button-text">SUBSCRIBE</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <PresenceSection />
    </>
  )
}

export default Blog
