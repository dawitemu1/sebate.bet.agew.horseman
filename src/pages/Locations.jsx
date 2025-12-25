import React, { useState } from 'react'
import './Locations.css'

const Locations = () => {
  const [activeLocation, setActiveLocation] = useState('stadium')

  const locations = {
    stadium: {
      name: 'እንጂባራ ሁለገብ ስታዲየም',
      nameEn: 'Injibara Multi-Purpose Stadium',
      description: 'Main venue for cultural events and community gatherings',
      address: 'Injibara, Awi Zone, Amhara Region, Ethiopia',
      coordinates: { lat: 10.9632224, lng: 36.9248162 },
      mapEmbed: 'https://www.google.com/maps/place/%E1%8A%A5%E1%8A%95%E1%8C%82%E1%89%A3%E1%88%AB+%E1%88%81%E1%88%88%E1%8C%88%E1%89%A5+%E1%88%B5%E1%89%B3%E1%8B%B2%E1%8B%A8%E1%88%9D/@10.9632224,36.9248162,17z/data=!4m10!1m2!2m1!1sStadium+near+Injibara!3m6!1s0x165a9fd97006cbfb:0x6409f94c66741e4d!8m2!3d10.9632224!4d36.9293223!15sChVTdGFkaXVtIG5lYXIgSW5qaWJhcmGSAQdzdGFkaXVtqgFLEAEqCyIHc3RhZGl1bSgAMh8QASIbrMVYi1sLtHAjF_7txutdEw92sVwZat--H5KjMhkQAiIVc3RhZGl1bSBuZWFyIGluampiYXJh4AEA!16s%2Fg%2F11t2r1rbm9?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D',
      features: ['Multi-purpose sports facility', 'Cultural event venue', 'Community gatherings', 'Traditional ceremonies'],
      capacity: 'Large capacity for community events',
      parking: 'Available on-site',
      accessibility: 'Wheelchair accessible entrances'
    },
    injibara: {
      name: 'እንጂባራ ከተማ',
      nameEn: 'Injibara City Center',
      description: 'Capital city of Awi Zone and cultural hub',
      address: 'Injibara, Awi Zone, Amhara Region, Ethiopia',
      coordinates: { lat: 10.9667, lng: 36.9333 },
      mapEmbed: 'https://www.google.com/maps/place/Injibara,+Ethiopia/@10.9667,36.9333,13z',
      features: ['Administrative center', 'Cultural sites', 'Traditional markets', 'Hotels and restaurants'],
      services: ['Government offices', 'Banking services', 'Healthcare facilities', 'Educational institutions'],
      attractions: ['Traditional markets', 'Cultural centers', 'Historical sites', 'Local crafts']
    },
    culturalCenter: {
      name: 'የባህል ማዕከል',
      nameEn: 'Sebet Bet Cultural Center',
      description: 'Main cultural center for Agew heritage activities',
      address: 'City Center, Injibara',
      features: ['Exhibition halls', 'Traditional craft workshops', 'Cultural performances', 'Heritage displays'],
      services: ['Guided tours', 'Cultural education', 'Traditional craft sales', 'Event hosting'],
      hours: '8:00 AM - 6:00 PM (Mon-Sat)'
    }
  }

  const handleLocationChange = (locationKey) => {
    setActiveLocation(locationKey)
  }

  const currentLocation = locations[activeLocation]

  return (
    <div className="locations">
      <div className="container">
        <header className="locations-header">
          <h1>📍 Important Locations</h1>
          <p>Key venues and places for cultural events and community activities</p>
        </header>

        {/* Location Navigation */}
        <div className="location-nav">
          <button
            className={`nav-btn ${activeLocation === 'stadium' ? 'active' : ''}`}
            onClick={() => handleLocationChange('stadium')}
          >
            🏟️ Stadium
          </button>
          <button
            className={`nav-btn ${activeLocation === 'injibara' ? 'active' : ''}`}
            onClick={() => handleLocationChange('injibara')}
          >
            🏛️ City Center
          </button>
          <button
            className={`nav-btn ${activeLocation === 'culturalCenter' ? 'active' : ''}`}
            onClick={() => handleLocationChange('culturalCenter')}
          >
            🎭 Cultural Center
          </button>
        </div>

        {/* Location Details */}
        <div className="location-details">
          <div className="location-info">
            <h2>{currentLocation.name}</h2>
            <h3>{currentLocation.nameEn}</h3>
            <p className="description">{currentLocation.description}</p>
            
            <div className="address-info">
              <h4>📮 Address</h4>
              <p>{currentLocation.address}</p>
            </div>

            {currentLocation.features && (
              <div className="features-info">
                <h4>✨ Features</h4>
                <ul>
                  {currentLocation.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {currentLocation.services && (
              <div className="services-info">
                <h4>🛠️ Services</h4>
                <ul>
                  {currentLocation.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {currentLocation.attractions && (
              <div className="attractions-info">
                <h4>🎯 Attractions</h4>
                <ul>
                  {currentLocation.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </div>
            )}

            {currentLocation.hours && (
              <div className="hours-info">
                <h4>🕐 Hours</h4>
                <p>{currentLocation.hours}</p>
              </div>
            )}

            {currentLocation.capacity && (
              <div className="capacity-info">
                <h4>👥 Capacity</h4>
                <p>{currentLocation.capacity}</p>
              </div>
            )}

            {currentLocation.parking && (
              <div className="parking-info">
                <h4>🚗 Parking</h4>
                <p>{currentLocation.parking}</p>
              </div>
            )}

            {currentLocation.accessibility && (
              <div className="accessibility-info">
                <h4>♿ Accessibility</h4>
                <p>{currentLocation.accessibility}</p>
              </div>
            )}
          </div>

          {/* Map Section */}
          {currentLocation.mapEmbed && (
            <div className="location-map">
              <h4>🗺️ Location Map</h4>
              <div className="map-container">
                <iframe
                  src={currentLocation.mapEmbed}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${currentLocation.nameEn}`}
                ></iframe>
              </div>
              <div className="map-actions">
                <a 
                  href={currentLocation.mapEmbed} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="open-maps-btn"
                >
                  📱 Open in Google Maps
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access Section */}
        <div className="quick-access">
          <h2>🚀 Quick Access</h2>
          <div className="quick-links">
            <div className="quick-link-card">
              <h3>🎪 Upcoming Events</h3>
              <p>Check events happening at these locations</p>
              <a href="/events" className="quick-btn">View Events</a>
            </div>
            <div className="quick-link-card">
              <h3>🏨 Nearby Hotels</h3>
              <p>Find accommodation near event venues</p>
              <a href="/hotels" className="quick-btn">Find Hotels</a>
            </div>
            <div className="quick-link-card">
              <h3>🏦 ATM Locations</h3>
              <p>Banking services near these locations</p>
              <a href="/atms" className="quick-btn">Find ATMs</a>
            </div>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="transportation-info">
          <h2>🚌 Getting There</h2>
          <div className="transport-grid">
            <div className="transport-card">
              <h3>🚗 By Car</h3>
              <p>Parking available at most venues. Follow main roads to city center.</p>
            </div>
            <div className="transport-card">
              <h3>🚌 Public Transport</h3>
              <p>Local buses and minibuses serve major locations throughout the day.</p>
            </div>
            <div className="transport-card">
              <h3>🚶 Walking</h3>
              <p>Most cultural sites are within walking distance of each other in the city center.</p>
            </div>
            <div className="transport-card">
              <h3>🏍️ Local Transport</h3>
              <p>Bajaj (three-wheelers) and motorcycles available for short distances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations