import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  
  const images = [
    {
      src: '/home-images/Ginr_9aXAAAxIq8.jpg',
      alt: 'Traditional Horsemen'
    },
    {
      src: '/home-images/oaah_a_2231705_f0005_oc.jpg',
      alt: 'Cultural Heritage'
    },
    {
      src: '/home-images/labalia.jfif',
      alt: 'Labalia Traditional Ceremony'
    },
    {
      src: '/home-images/lalabiala.jfif',
      alt: 'Lalabiala Cultural Heritage'
    },
    {
      src: '/home-images/lalibarala.jfif',
      alt: 'Lalibarala Festival Celebration'
    },
    {
      src: '/home-images/download.jfif',
      alt: 'Community Event'
    },
    {
      src: '/home-images/download (1).jfif',
      alt: 'Traditional Ceremony'
    },
    {
      src: '/home-images/download (2).jfif',
      alt: 'Horse Training'
    },
    {
      src: '/home-images/download (3).jfif',
      alt: 'Cultural Festival'
    },
    {
      src: '/home-images/images.jfif',
      alt: 'Traditional Attire'
    },
    {
      src: '/home-images/images (1).jfif',
      alt: 'Community Gathering'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      {/* Image Slider Section */}
      <section className="image-slider">
        <div className="container">
          <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous image">
              &#8249;
            </button>
            <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next image">
              &#8250;
            </button>
            
            {/* Progress Bar with Image Thumbnails */}
            <div className="progress-bar">
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                ></div>
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`progress-dot ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    style={{ left: `${(index / (images.length - 1)) * 100}%` }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="dot-thumbnail"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="recent-news">
        <div className="container">
          <h2>{t('recent_news', {
            en: 'Recent News',
            ag: 'አዲስ ዜና',
            am: 'አዲስ ዜና'
          })}</h2>
          <div className="news-content">
            <div className="news-item">
              <h3>{t('festival_2025', {
                en: '2025 Festival',
                ag: '2025 ፌስቲቫል',
                am: '2025 ፌስቲቫል'
              })}</h3>
              <p>{t('festival_description', {
                en: 'Join us for our upcoming cultural celebration featuring traditional horsemanship and community events.',
                ag: 'በባህላዊ ፈረሰኝነት እና የማህበረሰብ ዝግጅቶች ላይ ያተኮረ የባህል በዓላችን ላይ ይቀላቀሉን።',
                am: 'በባህላዊ ፈረሰኝነት እና የማህበረሰብ ዝግጅቶች ላይ ያተኮረ የባህል በዓላችን ላይ ይቀላቀሉን።'
              })}</p>
            </div>
            <div className="news-item">
              <h3>{t('heritage_recognition', {
                en: 'National Heritage Recognition',
                ag: 'የብሔራዊ ቅርስ እውቅና',
                am: 'የብሔራዊ ቅርስ እውቅና'
              })}</h3>
              <p>{t('heritage_description', {
                en: 'Recent information indicates the "Agew Horse Culture" in Ethiopia\'s Awi Zone was recognized as national heritage in 2022, highlighting its significance for its unique horse plow tradition and riders\' socio-cultural events, which include displays of horsemanship like gugis.',
                ag: 'በኢትዮጵያ አዊ ዞን ውስጥ ያለው "የአገው ፈረስ ባህል" በ2022 እንደ ብሔራዊ ቅርስ እውቅና እንደተሰጠው የቅርብ ጊዜ መረጃዎች ያመለክታሉ፣ ይህም ለልዩ የፈረስ ማረስ ባህል እና የፈረሰኞች ማህበራዊ-ባህላዊ ዝግጅቶች አስፈላጊነቱን ያጎላል።',
                am: 'በኢትዮጵያ አዊ ዞን ውስጥ ያለው "የአገው ፈረስ ባህል" በ2022 እንደ ብሔራዊ ቅርስ እውቅና እንደተሰጠው የቅርብ ጊዜ መረጃዎች ያመለክታሉ፣ ይህም ለልዩ የፈረስ ማረስ ባህል እና የፈረሰኞች ማህበራዊ-ባህላዊ ዝግጅቶች አስፈላጊነቱን ያጎላል።'
              })}</p>
            </div>
            <div className="news-item video-item">
              <h3>{t('cultural_documentation', {
                en: 'Latest Cultural Documentation',
                ag: 'የቅርብ ጊዜ ባህላዊ ሰነዶች',
                am: 'የቅርብ ጊዜ ባህላዊ ሰነዶች'
              })}</h3>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/vyz0RCalnr4?start=9798"
                  title="Cultural Documentation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{t('documentation_description', {
                en: 'Comprehensive documentation of our cultural practices and traditions.',
                ag: 'የባህላዊ ልምዶቻችን እና ወጎቻችን ሰፊ ሰነዶች።',
                am: 'የባህላዊ ልምዶቻችን እና ወጎቻችን ሰፊ ሰነዶች።'
              })}</p>
            </div>
            <div className="news-item video-item">
              <h3>{t('featured_video', {
                en: 'Featured Video',
                ag: 'ተመራጭ ቪዲዮ',
                am: 'ተመራጭ ቪዲዮ'
              })}</h3>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/SNZ8PpCSnsk"
                  title="Cultural Heritage Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{t('video_description', {
                en: 'Watch our latest video showcasing traditional ceremonies and cultural practices.',
                ag: 'ባህላዊ ሥነ ሥርዓቶችን እና ባህላዊ ልምዶችን የሚያሳይ የቅርብ ጊዜ ቪዲዮአችንን ይመልከቱ።',
                am: 'ባህላዊ ሥነ ሥርዓቶችን እና ባህላዊ ልምዶችን የሚያሳይ የቅርብ ጊዜ ቪዲዮአችንን ይመልከቱ።'
              })}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home