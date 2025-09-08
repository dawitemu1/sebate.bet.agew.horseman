import React, { useState } from 'react'
import './Hotels.css'

const Hotels = () => {
  const [priceFilter, setPriceFilter] = useState('all')
  const [locationFilter, setLocationFilter] = useState('all')

  const hotels = [
    {
      id: 1,
      name: 'Agew Heritage Hotel',
      location: 'City Center',
      priceRange: 'budget',
      pricePerNight: '$45-65',
      rating: 4.2,
      facilities: ['Free WiFi', 'Restaurant', 'Parking', 'Traditional Decor'],
      description: 'A charming hotel with traditional Agew decorations and modern amenities. Perfect for visitors attending cultural events.',
      distance: '5 min walk to Cultural Center',
      contact: {
        phone: '+251-11-123-4567',
        email: 'info@agewheritage.com',
        website: 'www.agewheritagehotel.com'
      },
      bookingInfo: 'Direct booking available. Group discounts for event attendees.'
    },
    {
      id: 2,
      name: 'Sebet Grand Lodge',
      location: 'Downtown',
      priceRange: 'luxury',
      pricePerNight: '$120-180',
      rating: 4.8,
      facilities: ['Spa Services', 'Fitness Center', 'Conference Rooms', 'Fine Dining', 'Concierge'],
      description: 'Luxury accommodation with premium services and elegant rooms. Ideal for special occasions and extended stays.',
      distance: '10 min drive to event venues',
      contact: {
        phone: '+251-11-234-5678',
        email: 'reservations@sebetgrand.com',
        website: 'www.sebetgrandlodge.com'
      },
      bookingInfo: 'Online booking system. Wedding packages available.'
    },
    {
      id: 3,
      name: 'Community Guest House',
      location: 'Near Cultural Center',
      priceRange: 'budget',
      pricePerNight: '$25-40',
      rating: 3.9,
      facilities: ['Shared Kitchen', 'Common Room', 'Free WiFi', 'Laundry'],
      description: 'Budget-friendly accommodation with a community atmosphere. Popular among young travelers and volunteers.',
      distance: '2 min walk to Cultural Center',
      contact: {
        phone: '+251-11-345-6789',
        email: 'stay@communityguesthouse.com',
        website: 'www.communityguesthouse.com'
      },
      bookingInfo: 'Walk-in welcome. Volunteer discounts available.'
    },
    {
      id: 4,
      name: 'Horseman\'s Inn',
      location: 'Outskirts',
      priceRange: 'mid-range',
      pricePerNight: '$70-95',
      rating: 4.5,
      facilities: ['Horse Stables', 'Traditional Restaurant', 'Garden', 'Event Space'],
      description: 'Unique hotel with horse boarding facilities. Perfect for visitors bringing their own horses to events.',
      distance: '15 min drive to city center',
      contact: {
        phone: '+251-11-456-7890',
        email: 'welcome@horsemansinn.com',
        website: 'www.horsemansinn.com'
      },
      bookingInfo: 'Horse boarding requires advance booking. Traditional meal packages available.'
    },
    {
      id: 5,
      name: 'Cultural Suites',
      location: 'Cultural District',
      priceRange: 'mid-range',
      pricePerNight: '$60-85',
      rating: 4.3,
      facilities: ['Kitchenette', 'Cultural Library', 'Meeting Room', 'Tour Desk'],
      description: 'Apartment-style suites with cultural themes. Great for families and longer stays during festival periods.',
      distance: '3 min walk to main venues',
      contact: {
        phone: '+251-11-567-8901',
        email: 'book@culturalsuites.com',
        website: 'www.culturalsuites.com'
      },
      bookingInfo: 'Extended stay discounts. Cultural tour packages included.'
    },
    {
      id: 6,
      name: 'Modern Business Hotel',
      location: 'Business District',
      priceRange: 'luxury',
      pricePerNight: '$100-140',
      rating: 4.6,
      facilities: ['Business Center', 'Airport Shuttle', 'Gym', 'Restaurant', 'Bar'],
      description: 'Contemporary hotel with business amenities. Convenient for corporate guests and international visitors.',
      distance: '20 min drive to cultural sites',
      contact: {
        phone: '+251-11-678-9012',
        email: 'info@modernbusinesshotel.com',
        website: 'www.modernbusinesshotel.com'
      },
      bookingInfo: 'Corporate rates available. Airport transfer included.'
    }
  ]

  const filteredHotels = hotels.filter(hotel => {
    const priceMatch = priceFilter === 'all' || hotel.priceRange === priceFilter
    const locationMatch = locationFilter === 'all' || hotel.location.toLowerCase().includes(locationFilter.toLowerCase())
    return priceMatch && locationMatch
  })

  const getRatingStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    return '⭐'.repeat(fullStars) + (hasHalfStar ? '⭐' : '')
  }

  const getPriceRangeColor = (priceRange) => {
    switch(priceRange) {
      case 'budget': return '#28a745'
      case 'mid-range': return '#ffc107'
      case 'luxury': return '#dc3545'
      default: return '#6c757d'
    }
  }

  return (
    <div className="hotels">
      <div className="container">
        <header className="hotels-header">
          <h1>Recommended Hotels</h1>
          <p>Find comfortable accommodations for your visit to our events and cultural sites</p>
        </header>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label>Price Range:</label>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="budget">Budget ($25-65)</option>
              <option value="mid-range">Mid-Range ($60-95)</option>
              <option value="luxury">Luxury ($100+)</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Location:</label>
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="all">All Locations</option>
              <option value="center">City Center</option>
              <option value="cultural">Cultural District</option>
              <option value="downtown">Downtown</option>
              <option value="business">Business District</option>
            </select>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-grid">
          {filteredHotels.map(hotel => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-header">
                <h3>{hotel.name}</h3>
                <div className="hotel-rating">
                  <span className="stars">{getRatingStars(hotel.rating)}</span>
                  <span className="rating-number">({hotel.rating})</span>
                </div>
              </div>
              
              <div className="hotel-info">
                <div className="location-price">
                  <span className="location">📍 {hotel.location}</span>
                  <span 
                    className="price-range" 
                    style={{ color: getPriceRangeColor(hotel.priceRange) }}
                  >
                    {hotel.pricePerNight}
                  </span>
                </div>
                <div className="distance">🚶 {hotel.distance}</div>
              </div>

              <p className="hotel-description">{hotel.description}</p>

              <div className="facilities">
                <h4>Facilities:</h4>
                <div className="facilities-list">
                  {hotel.facilities.map((facility, index) => (
                    <span key={index} className="facility-tag">{facility}</span>
                  ))}
                </div>
              </div>

              <div className="contact-info">
                <h4>Contact Information:</h4>
                <div className="contact-details">
                  <p>📞 {hotel.contact.phone}</p>
                  <p>📧 {hotel.contact.email}</p>
                  <p>🌐 {hotel.contact.website}</p>
                </div>
              </div>

              <div className="booking-info">
                <h4>Booking Information:</h4>
                <p>{hotel.bookingInfo}</p>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="booking-tips">
          <h2>Booking Tips & Information</h2>
          <div className="tips-grid">
            <div className="tip-item">
              <h3>🎉 Event Periods</h3>
              <p>Book early during major cultural events and festivals as accommodations fill up quickly.</p>
            </div>
            <div className="tip-item">
              <h3>💰 Group Discounts</h3>
              <p>Many hotels offer special rates for association members and group bookings.</p>
            </div>
            <div className="tip-item">
              <h3>🐎 Horse Boarding</h3>
              <p>If you're bringing horses, Horseman's Inn offers specialized boarding facilities.</p>
            </div>
            <div className="tip-item">
              <h3>🚗 Transportation</h3>
              <p>Most hotels can arrange transportation to event venues. Ask about shuttle services.</p>
            </div>
          </div>
        </div>

        {/* ATM & Banking Services */}
        <div className="atm-services">
          <h2>ATM & Banking Services</h2>
          <div className="atm-grid">
            <div className="atm-item">
              <h3>🏦 Commercial Bank of Ethiopia</h3>
              <p><strong>Location:</strong> City Center, 2 min walk from Cultural Center</p>
              <p><strong>Services:</strong> ATM, Currency Exchange, International Cards Accepted</p>
              <p><strong>Hours:</strong> 24/7 ATM, Bank: 8:00 AM - 5:00 PM</p>
            </div>
            <div className="atm-item">
              <h3>🏧 Dashen Bank ATM</h3>
              <p><strong>Location:</strong> Downtown Area, near Sebet Grand Lodge</p>
              <p><strong>Services:</strong> ATM, Mobile Banking, Cash Withdrawal</p>
              <p><strong>Hours:</strong> 24/7 ATM Service</p>
            </div>
            <div className="atm-item">
              <h3>💳 Bank of Abyssinia</h3>
              <p><strong>Location:</strong> Business District, 5 min from Modern Business Hotel</p>
              <p><strong>Services:</strong> ATM, Foreign Exchange, Credit Card Services</p>
              <p><strong>Hours:</strong> 24/7 ATM, Bank: 8:00 AM - 4:30 PM</p>
            </div>
            <div className="atm-item">
              <h3>🏪 Awash Bank ATM</h3>
              <p><strong>Location:</strong> Near Community Guest House</p>
              <p><strong>Services:</strong> ATM, Balance Inquiry, Mini Statements</p>
              <p><strong>Hours:</strong> 24/7 ATM Service</p>
            </div>
          </div>
          <div className="atm-tips">
            <h3>💡 Banking Tips for Visitors</h3>
            <div className="tips-list">
              <div className="tip">
                <strong>💰 Cash Recommendations:</strong> Carry some cash as smaller vendors may not accept cards.
              </div>
              <div className="tip">
                <strong>💳 International Cards:</strong> Visa and MasterCard are widely accepted at major ATMs.
              </div>
              <div className="tip">
                <strong>⏰ Best Times:</strong> Use ATMs during daylight hours for safety and avoid peak times.
              </div>
              <div className="tip">
                <strong>📱 Mobile Banking:</strong> Most banks offer mobile apps for balance checking and transfers.
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="additional-services">
          <h2>Additional Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Cultural Tours</h3>
              <p>Many hotels can arrange guided tours of local cultural sites and historical locations.</p>
            </div>
            <div className="service-item">
              <h3>Event Tickets</h3>
              <p>Hotel concierges can help you purchase tickets for cultural events and performances.</p>
            </div>
            <div className="service-item">
              <h3>Traditional Meals</h3>
              <p>Experience authentic Agew cuisine at hotel restaurants and nearby traditional eateries.</p>
            </div>
          </div>
        </div>

        {/* Contact for Assistance */}
        <div className="assistance">
          <h2>Need Assistance?</h2>
          <p>
            Our association can help you find the perfect accommodation for your visit. 
            Contact us for personalized recommendations and assistance with bookings.
          </p>
          <div className="assistance-contact">
            <p>📧 Email: accommodations@sebetbetagew.org</p>
            <p>📱 Phone: +251-11-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels