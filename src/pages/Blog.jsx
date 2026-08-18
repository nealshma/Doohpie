import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'

const featuredPost = {
  title: 'Doohpie Delves Into Fragrance With Fresh Content',
  image: assets.blog.featured,
  tags: ['fragrance', '12/16/2024'],
}

const allPosts = [
  { title: 'The Rise of Micro-Influencers in 2024', image: assets.blog.post1, tags: ['creators', 'trends'], date: '11/28/2024' },
  { title: 'Why Authenticity Wins in Creator Marketing', image: assets.blog.post2, tags: ['influencers', 'strategy'], date: '11/15/2024' },
  { title: 'TikTok vs Instagram: Where Should Your Brand Be?', image: assets.blog.post3, tags: ['tiktok', 'instagram'], date: '11/02/2024' },
  { title: 'Building Long-Term Creator Relationships', image: assets.blog.post4, tags: ['creators', 'relationships'], date: '10/20/2024' },
  { title: 'The Future of Creator Economy: 2025 Predictions', image: assets.blog.post5, tags: ['trends', 'creators'], date: '10/08/2024' },
  { title: 'How to Measure ROI on Creator Campaigns', image: assets.blog.post6, tags: ['strategy', 'analytics'], date: '09/25/2024' },
]

const tagFilters = ['ALL', 'CREATORS', 'INFLUENCERS', 'STRATEGY', 'TRENDS', 'TIKTOK', 'INSTAGRAM']

function Blog() {
  const [activeTag, setActiveTag] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = allPosts.filter((post) => {
    const matchesTag = activeTag === 'ALL' || post.tags.includes(activeTag.toLowerCase())
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <>
      <section className="section-standardhero">
        <div className="padding-global">
          <div className="container-large">
            <div className="standardhero-component">
              <div className="standardhero-header">
                <h1 className="text-size-large">
                  Stories, insights and perspectives from the team behind The Creator Company.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-feature">
        <div className="padding-global">
          <div className="container-large">
            <Link to="#" className="blogfeature-wrapper" style={{ display: 'block' }}>
              <img src={featuredPost.image} alt={featuredPost.title} className="blogfeature-image" />
              <div className="blogfeature-overlay">
                <div className="blog-tags" style={{ marginBottom: 16 }}>
                  {featuredPost.tags.map((tag, i) => (
                    <span key={i} className="pink-pill-tag">{tag}</span>
                  ))}
                </div>
                <h2 className="blog-name">{featuredPost.title}</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 80px' }}>
        <div className="padding-global">
          <div className="container-large">
            <div style={{ marginBottom: 48 }}>
              <img src={assets.svgs.group817} alt="Welcome to the News Stand" style={{ height: 60, marginBottom: 32, filter: 'brightness(0) invert(1)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {tagFilters.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      style={{
                        padding: '8px 20px', borderRadius: 100,
                        border: '1px solid rgba(255,255,255,0.3)',
                        background: activeTag === tag ? '#4cda56' : 'transparent',
                        color: '#fff', fontSize: '0.7rem', fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                        cursor: 'pointer', transition: 'all 0.3s ease',
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="SEARCH..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '12px 24px', border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 100, background: 'transparent', color: '#fff',
                    fontSize: '0.8rem', minWidth: 250,
                  }}
                />
              </div>
            </div>
            <div className="blog-grid">
              {filteredPosts.map((post, i) => (
                <Link to="#" className="blog-card" key={i}>
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <div className="blog-card-tags">
                      {post.tags.map((tag, j) => (
                        <span key={j} className="pink-pill-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
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

export default Blog
