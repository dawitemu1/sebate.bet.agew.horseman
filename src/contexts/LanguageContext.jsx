import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check localStorage first, then default to English
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'en'
  })

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ag', name: 'Agewgna', nativeName: 'አገውኛ' },
    { code: 'am', name: 'Amharic', nativeName: 'አማርኛ' }
  ]

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage)
    // Apply language to document
    document.documentElement.setAttribute('lang', currentLanguage)
  }, [currentLanguage])

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
  }

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0]
  }

  const t = (key, translations) => {
    // Simple translation function
    if (translations && translations[currentLanguage]) {
      return translations[currentLanguage]
    }
    // Fallback to English or the key itself
    return translations?.en || key
  }

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      languages,
      changeLanguage,
      getCurrentLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  )
}