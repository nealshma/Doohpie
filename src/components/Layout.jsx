import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
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
