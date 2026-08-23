import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const navLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'AD FORMATS' },
    { path: '/work', label: 'WORK' },
    { path: '/blog', label: 'BLOG' },
    { path: '/brand-fans', label: 'GEO TARGETING' },
    { path: '/influencer-sign-up', label: 'GET STARTED' },
    { path: '/careers', label: 'CAREERS' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <>
      <div className={`navbar w-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-xlarge w-container">
          <div className="padding-global is-nav">
            <nav role="navigation" className="navbar_menu w-nav-menu">
              <div className="navbar_menu_layout is-desktop">
                <Link to="/" className="navbar_logo w-nav-brand">
                  <img
                    src={assets.logo.nav}
                    alt="Doohpie"
                    className="navbar_logo-img"
                    loading="eager"
                  />
                </Link>
                <div className="navbar_links">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`navbar_menu_link w-nav-link ${location.pathname === link.path ? 'w--current' : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div
                  className={`mobile-menu-trigger w-nav-button ${mobileOpen ? 'w--open' : ''}`}
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <div className="w-icon-nav-menu"></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`}>
        <nav className="mobile-menu-nav">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="mobile-menu-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Navbar
