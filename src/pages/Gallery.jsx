import React, { useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Cultural Events' },
    { id: 'horsemen', name: 'Traditional Horsemen' },
    { id: 'ceremonies', name: 'Ceremonies' },
    { id: 'community', name: 'Community Activities' }
  ]

  const photos = [
    { id: 1, category: 'events', title: 'Annual Cultural Festival', description: 'Community gathering celebrating Agew traditions' },
    { id: 2, category: 'horsemen', title: 'Traditional Horse Show', description: 'Skilled horsemen demonstrating traditional riding techniques' },
    { id: 3, category: 'ceremonies', title: 'Blessing Ceremony', description: 'Traditional blessing of horses and riders' },
    { id: 4, category: 'community', title: 'Youth Training', description: 'Young people learning traditional horsemanship' },
    { id: 5, category: 'events', title: 'Heritage Day Celebration', description: 'Annual celebration of Agew heritage and culture' },
    { id: 6, category: 'horsemen', title: 'Master Horseman', description: 'Veteran horseman in traditional attire' },
    { id: 7, category: 'ceremonies', title: 'Wedding Procession', description: 'Traditional wedding ceremony with horses' },
    { id: 8, category: 'community', title: 'Community Meeting', description: 'Association members planning upcoming events' },
    { id: 9, category: 'events', title: 'Competition Day', description: 'Annual horsemanship competition' },
    { id: 10, category: 'horsemen', title: 'Traditional Attire', description: 'Horsemen in colorful traditional clothing' },
    { id: 11, category: 'ceremonies', title: 'Harvest Festival', description: 'Celebrating the harvest season with traditional customs' },
    { id: 12, category: 'community', title: 'Cultural Workshop', description: 'Teaching traditional crafts and skills' }
  ]

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  return (
    <div className="gallery">
      <div className="container">
        <header className="gallery-header">
          <h1>Photo Gallery</h1>
          <p>Explore our collection of memorable moments and cultural activities</p>
        </header>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="photo-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="photo-item">
              <div className="photo-placeholder">
                <span className="photo-icon">📸</span>
                <p className="photo-number">Photo {photo.id}</p>
              </div>
              <div className="photo-info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
                <span className="category-tag">{categories.find(cat => cat.id === photo.category)?.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="gallery-stats">
          <div className="stat-item">
            <h3>Total Photos</h3>
            <p>{photos.length}</p>
          </div>
          <div className="stat-item">
            <h3>Categories</h3>
            <p>{categories.length - 1}</p>
          </div>
          <div className="stat-item">
            <h3>Latest Update</h3>
            <p>September 2025</p>
          </div>
        </div>

        {/* Upload Info */}
        <div className="upload-info">
          <h2>Share Your Photos</h2>
          <p>
            Have photos from our events or activities? We'd love to include them in our gallery! 
            Contact us to share your memories with the community.
          </p>
          <div className="contact-info">
            <p>📧 Email: gallery@sebetbetagew.org</p>
            <p>📱 Phone: +251-11-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery