import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import BrandFans from './pages/BrandFans'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ad-formats" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/geo-targeting" element={<BrandFans />} />
          <Route path="/get-started" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
