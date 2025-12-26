import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <div className="logo-container">
              <img src="/logo.jfif" alt="አዊ ፌሬስቴንካው ማቢሪ Logo" className="logo-image" />
              <div className="logo-text">
                <h2>አዊ ፌሬስቴንካው ማቢሪ</h2>
                <h3>አገው ፈረሰኞች ማህበር</h3>
                <p>Agew Horsemen Association</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/events" className={`nav-link ${isActive('/events')}`} onClick={() => setIsMenuOpen(false)}>
            Events
          </Link>
          <Link to="/hotels" className={`nav-link ${isActive('/hotels')}`} onClick={() => setIsMenuOpen(false)}>
            Hotels
          </Link>
          <Link to="/atms" className={`nav-link ${isActive('/atms')}`} onClick={() => setIsMenuOpen(false)}>
            ATMs
          </Link>
          <div className="nav-controls">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
        
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar