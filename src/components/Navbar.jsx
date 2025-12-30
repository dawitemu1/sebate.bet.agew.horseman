import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisitOpen, setIsVisitOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const handleNavLinkClick = () => {
    setIsMenuOpen(false)
    setIsVisitOpen(false)
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
          <div className="nav-visit">
            <button
              className="nav-visit-button"
              onClick={() => setIsVisitOpen(!isVisitOpen)}
              aria-expanded={isVisitOpen}
              aria-haspopup="true"
            >
              <span className="nav-visit-icon">📍</span>
              <span className="nav-visit-text">Visit</span>
              <span className={`nav-visit-caret ${isVisitOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
            </button>
            {isVisitOpen && (
              <>
                <ul className="nav-visit-list">
                  {[
                    {
                      name: 'ቅድስት ወለተ ጴጥሮስ አንድነት ገዳም',
                      mapUrl: 'https://maps.app.goo.gl/eqLSZnjc8xnvGxa86'
                    },
                    {
                      name: 'Dondor Fall',
                      mapUrl: 'https://maps.app.goo.gl/Gdpb312wKX6hAFJJ6'
                    },
                    {
                      name: 'Tisky',
                      mapUrl: 'https://maps.app.goo.gl/9Sm1kwctk5dDM3pv7'
                    },
                    {
                      name: 'Lake Zengena',
                      mapUrl: 'https://maps.app.goo.gl/w9YYQ7pToyFvRSzn6'
                    },
                    {
                      name: 'ጥርባ ሀይቅ Lake Tirba',
                      mapUrl: 'https://maps.app.goo.gl/C4mNuVv8a2XwaVTq6'
                    }
                  ].map((location) => (
                    <li key={location.name}>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsVisitOpen(false)}
                      >
                        {location.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="nav-visit-overlay" onClick={() => setIsVisitOpen(false)} />
              </>
            )}
          </div>
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