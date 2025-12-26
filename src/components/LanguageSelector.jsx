import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { currentLanguage, languages, changeLanguage, getCurrentLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const currentLang = getCurrentLanguage()

  return (
    <div className="language-selector">
      <button 
        className="language-toggle"
        onClick={toggleDropdown}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="language-icon">🌐</span>
        <span className="language-text">{currentLang.nativeName}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="language-native">{language.nativeName}</span>
              <span className="language-english">({language.name})</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="language-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default LanguageSelector