import React, { useState, useEffect } from 'react'
import './Events.css'

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showMap, setShowMap] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const upcomingEvents = [
    {
      id: 1,
      title: 'Stadium Cultural Event',
      date: '2026-01-31',
      time: '8:30 AM',
      location: 'እንጂባራ ሁለገብ ስታዲየም (Injibara Multi-Purpose Stadium)',
      description: 'Special cultural event at Injibara Stadium. Keep tuned for more details. Tir 23, 2018 (Ethiopian Calendar).',
      category: 'Cultural Event',
      status: 'Keep Tuned',
      mapLink: 'https://www.google.com/maps/search/Stadium+near+Injibara/@10.9632224,36.9248162,17z?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D',
      coordinates: { lat: 10.9632224, lng: 36.9248162 }
    },
    {
      id: 2,
      title: 'Annual Heritage Festival',
      date: '2025-10-15',
      time: '09:00 AM',
      location: 'Sebet Bet Cultural Center',
      description: 'A grand celebration of Agew culture featuring traditional horsemanship demonstrations, cultural performances, and community festivities.',
      category: 'Cultural Festival',
      status: 'Open Registration'
    },
    {
      id: 3,
      title: 'Youth Horsemanship Training',
      date: '2025-09-20',
      time: '02:00 PM',
      location: 'Association Training Grounds',
      description: 'Hands-on training session for young people interested in learning traditional horsemanship skills from experienced masters.',
      category: 'Training',
      status: 'Limited Spots'
    },
    {
      id: 4,
      title: 'Traditional Wedding Ceremony',
      date: '2025-11-02',
      time: '11:00 AM',
      location: 'Community Hall',
      description: 'Celebration of traditional Agew wedding customs with horse processions and cultural ceremonies.',
      category: 'Ceremony',
      status: 'By Invitation'
    },
    {
      id: 5,
      title: 'Quarterly Community Meeting',
      date: '2025-09-30',
      time: '06:00 PM',
      location: 'Association Headquarters',
      description: 'Regular meeting for association members to discuss upcoming projects, events, and community initiatives.',
      category: 'Meeting',
      status: 'Members Only'
    }
  ]

  const pastEvents = [
    {
      id: 5,
      title: 'Summer Cultural Exhibition',
      date: '2025-07-20',
      location: 'City Cultural Center',
      description: 'Three-day exhibition showcasing Agew art, crafts, and traditions.',
      photos: 15,
      videos: 3
    },
    {
      id: 6,
      title: 'Traditional Horse Competition',
      date: '2025-06-10',
      location: 'Regional Sports Complex',
      description: 'Annual competition featuring various traditional horsemanship disciplines.',
      photos: 28,
      videos: 5
    },
    {
      id: 7,
      title: 'Cultural Music Festival',
      date: '2025-05-15',
      location: 'Open Air Amphitheater',
      description: 'Festival celebrating traditional Agew music and dance performances.',
      photos: 22,
      videos: 4
    },
    {
      id: 8,
      title: 'Community Harvest Celebration',
      date: '2025-04-25',
      location: 'Village Center',
      description: 'Traditional harvest festival with community feast and cultural activities.',
      photos: 18,
      videos: 2
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const isEventSoon = (dateString) => {
    const eventDate = new Date(dateString)
    const today = new Date()
    const timeDiff = eventDate.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return daysDiff <= 7 && daysDiff > 0
  }

  const handleEventClick = (event) => {
    if (event.coordinates) {
      setSelectedEvent(event)
      setShowMap(true)
    }
  }

  const closeMap = () => {
    setShowMap(false)
    setSelectedEvent(null)
  }

  // Countdown calculation
  useEffect(() => {
    const calculateCountdown = () => {
      const stadiumEventDate = new Date('2026-01-31T08:30:00')
      const now = new Date()
      const difference = stadiumEventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setCountdown({ days, hours, minutes, seconds })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateCountdown()
    const timer = setInterval(calculateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="events">
      <div className="container">
        <header className="events-header">
          <h1>Events</h1>
          <p>Stay updated with our cultural activities and community gatherings</p>
        </header>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events Archive
          </button>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div className="upcoming-events">
            {/* Stadium Location Map */}
            <div className="stadium-map-section">
              <h3>🏟️ Event Location - Injibara Stadium</h3>
              
              {/* Countdown Timer */}
              <div className="countdown-container">
                <h4>⏰ Time Remaining Until Event</h4>
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <span className="countdown-number">{countdown.days}</span>
                    <span className="countdown-label">Days</span>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <span className="countdown-number">{String(countdown.hours).padStart(2, '0')}</span>
                    <span className="countdown-label">Hours</span>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <span className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</span>
                    <span className="countdown-label">Minutes</span>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <span className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</span>
                    <span className="countdown-label">Seconds</span>
                  </div>
                </div>
              </div>
              
              <div className="stadium-info">
                <div className="stadium-details">
                  <div className="detail-item">
                    <span className="icon">📅</span>
                    <span>{formatDate('2026-01-31')} - Tir 23, 2018 (Ethiopian Calendar)</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">📍</span>
                    <span>እንጂባራ ሁለገብ ስታዲየም (Injibara Multi-Purpose Stadium)</span>
                  </div>
                  <div className="detail-item">
                    <span className="icon">🕐</span>
                    <span>8:30 AM</span>
                  </div>
                </div>
                <div className="stadium-map">
                  <iframe
                    src="https://www.google.com/maps/place/%E1%8A%A5%E1%8A%95%E1%8C%82%E1%89%A3%E1%88%AB+%E1%88%81%E1%88%88%E1%8C%88%E1%89%A5+%E1%88%B5%E1%89%B3%E1%8B%B2%E1%8B%A8%E1%88%9D/@10.9632224,36.9248162,17z/data=!4m10!1m2!2m1!1sStadium+near+Injibara!3m6!1s0x165a9fd97006cbfb:0x6409f94c66741e4d!8m2!3d10.9632224!4d36.9293223!15sChVTdGFkaXVtIG5lYXIgSW5qaWJhcmGSAQdzdGFkaXVtqgFLEAEqCyIHc3RhZGl1bSgAMh8QASIbrMVYi1sLtHAjF_7txutdEw92sVwZat--H5KjMhkQAiIVc3RhZGl1bSBuZWFyIGluampiYXJh4AEA!16s%2Fg%2F11t2r1rbm9?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Injibara Stadium Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Event Information */}
        {activeTab === 'upcoming' && (
          <div className="event-info">
            <h2>Event Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>🎫 Registration</h3>
                <p>Most events are free for association members. Non-members may have a small registration fee.</p>
              </div>
              <div className="info-item">
                <h3>📧 Stay Updated</h3>
                <p>Subscribe to our newsletter to receive event notifications and updates.</p>
              </div>
              <div className="info-item">
                <h3>🤝 Volunteer</h3>
                <p>Interested in helping with events? Contact us to join our volunteer team.</p>
              </div>
              <div className="info-item">
                <h3>📱 Contact</h3>
                <p>For event inquiries: events@sebetbetagew.org or +251-11-XXX-XXXX</p>
              </div>
            </div>
          </div>
        )}

        {/* Past Events Archive */}
        {activeTab === 'past' && (
          <div className="past-events">
            <h2>Past Events Archive</h2>
            <div className="archive-grid">
              {pastEvents.map(event => (
                <div key={event.id} className="archive-card">
                  <div className="archive-header">
                    <h3>{event.title}</h3>
                    <span className="event-date">{formatDate(event.date)}</span>
                  </div>
                  <div className="archive-details">
                    <div className="detail-item">
                      <span className="icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="archive-description">{event.description}</p>
                  <div className="media-info">
                    <div className="media-item">
                      <span className="icon">📸</span>
                      <span>{event.photos} Photos</span>
                    </div>
                    <div className="media-item">
                      <span className="icon">🎥</span>
                      <span>{event.videos} Videos</span>
                    </div>
                  </div>
                  <button className="view-media-btn">View Media</button>
                </div>
              ))}
            </div>
          </div>
        )}



        {/* Map Modal */}
        {showMap && selectedEvent && (
          <div className="map-modal">
            <div className="map-modal-content">
              <div className="map-header">
                <h3>{selectedEvent.title}</h3>
                <button className="close-btn" onClick={closeMap}>×</button>
              </div>
              <div className="event-info-bar">
                <div className="event-detail">
                  <span className="icon">📅</span>
                  <span>{formatDate(selectedEvent.date)}</span>
                </div>
                <div className="event-detail">
                  <span className="icon">🕐</span>
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="event-detail">
                  <span className="icon">📍</span>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src={selectedEvent.mapLink}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${selectedEvent.title}`}
                ></iframe>
              </div>
              <div className="map-footer">
                <p>{selectedEvent.description}</p>
                <div className="map-actions">
                  <a 
                    href={selectedEvent.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="open-maps-btn"
                  >
                    Open in Google Maps
                  </a>
                  <button className="close-map-btn" onClick={closeMap}>
                    Close Map
                  </button>
                </div>
              </div>
            </div>
            <div className="map-overlay" onClick={closeMap}></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events