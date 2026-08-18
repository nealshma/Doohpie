import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const dividers = document.querySelectorAll('.divider')
    dividers.forEach((divider) => observer.observe(divider))

    return () => observer.disconnect()
  }, [children])

  return (
    <div className="page-wrapper is-home">
      <div className="main-wrapper">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
