import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets'
import PresenceSection from '../components/PresenceSection'

const featuredPost = {
  title: 'From Buying Billboards To Building Location Strategy',
  image: assets.blog.featured,
  tags: ['geo-targeting', '12/16/2024'],
}

const allPosts = [
  { title: 'Why Geo-Targeted OOH Outperforms City-Wide Buys', image: assets.blog.post1, tags: ['geo-targeting', 'strategy'], date: '11/28/2024' },
  { title: 'Static vs Digital: Choosing The Right Billboard Format', image: assets.blog.post2, tags: ['formats', 'strategy'], date: '11/15/2024' },
  { title: 'Dayparting On Digital LED: From Morning Coffee To Evening Entertainment', image: assets.blog.post3, tags: ['digital led', 'formats'], date: '11/02/2024' },
  { title: 'Construction Covers: Turning Barriers Into Brand Experiences', image: assets.blog.post4, tags: ['formats', 'planning'], date: '10/20/2024' },
  { title: 'Planning A Store Launch With A 5km Radius Campaign', image: assets.blog.post5, tags: ['planning', 'geo-targeting'], date: '10/08/2024' },
  { title: 'Backlit Displays: Why Visibility After Dark Matters', image: assets.blog.post6, tags: ['formats', 'insights'], date: '09/25/2024' },
]

const tagFilters = ['ALL', 'STRATEGY', 'FORMATS', 'GEO-TARGETING', 'DIGITAL LED', 'PLANNING']

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
                  Insights, ideas and perspectives from the team behind the geo-targeting OOH platform.
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

      <PresenceSection />
    </>
  )
}

export default Blog
