import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={`star-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <span className="star-icon">
          {isDarkMode ? '★' : '☆'}
        </span>
      </div>
    </button>
  )
}

export default ThemeToggle