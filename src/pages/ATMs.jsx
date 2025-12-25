import React, { useState } from 'react'
import './ATMs.css'

const ATMs = () => {
  const [locationFilter, setLocationFilter] = useState('all')

  const atmLocations = [
    {
      id: 1,
      bankName: 'Commercial Bank of Ethiopia',
      location: 'City Center',
      address: 'Main Street, near Cultural Center',
      distance: '2 min walk from Cultural Center',
      services: ['ATM Withdrawal', 'Balance Inquiry', 'Currency Exchange', 'International Cards'],
      hours: '24/7 ATM Service',
      bankHours: '8:00 AM - 5:00 PM (Mon-Fri)',
      fees: 'No fees for local cards, 2% for international cards',
      languages: ['Amharic', 'English'],
      accessibility: 'Wheelchair accessible',
      status: 'active'
    },
    {
      id: 2,
      bankName: 'Dashen Bank',
      location: 'Downtown',
      address: 'Commercial District, near Sebet Grand Lodge',
      distance: '5 min walk from downtown hotels',
      services: ['ATM Withdrawal', 'Mobile Banking', 'Cash Deposit', 'Mini Statements'],
      hours: '24/7 ATM Service',
      bankHours: '8:00 AM - 4:30 PM (Mon-Fri)',
      fees: 'Standard bank fees apply',
      languages: ['Amharic', 'English'],
      accessibility: 'Ground floor access',
      status: 'active'
    },
    {
      id: 3,
      bankName: 'Bank of Abyssinia',
      location: 'Business District',
      address: 'Business Plaza, 2nd Floor',
      distance: '10 min drive from event venues',
      services: ['ATM Withdrawal', 'Foreign Exchange', 'Credit Card Services', 'Wire Transfers'],
      hours: '24/7 ATM Service',
      bankHours: '8:00 AM - 4:30 PM (Mon-Fri), 9:00 AM - 1:00 PM (Sat)',
      fees: 'Competitive exchange rates',
      languages: ['Amharic', 'English', 'Arabic'],
      accessibility: 'Elevator access available',
      status: 'active'
    },
    {
      id: 4,
      bankName: 'Awash Bank',
      location: 'Near Guest Houses',
      address: 'Community Road, opposite Guest House',
      distance: '1 min walk from Community Guest House',
      services: ['ATM Withdrawal', 'Balance Inquiry', 'Fund Transfer', 'Bill Payment'],
      hours: '24/7 ATM Service',
      bankHours: '8:00 AM - 5:00 PM (Mon-Fri)',
      fees: 'Low transaction fees',
      languages: ['Amharic', 'English'],
      accessibility: 'Street level access',
      status: 'active'
    },
    {
      id: 5,
      bankName: 'Cooperative Bank of Oromia',
      location: 'Cultural District',
      address: 'Heritage Avenue, near Traditional Market',
      distance: '3 min walk from cultural sites',
      services: ['ATM Withdrawal', 'Savings Account', 'Money Transfer', 'Mobile Banking'],
      hours: '6:00 AM - 11:00 PM',
      bankHours: '8:00 AM - 4:00 PM (Mon-Fri)',
      fees: 'Member discounts available',
      languages: ['Amharic', 'Oromifa', 'English'],
      accessibility: 'Ramp access available',
      status: 'active'
    },
    {
      id: 6,
      bankName: 'United Bank',
      location: 'Airport Route',
      address: 'Airport Road, Terminal Building',
      distance: '20 min drive from city center',
      services: ['ATM Withdrawal', 'Currency Exchange', 'Travel Cards', 'International Services'],
      hours: '24/7 ATM Service',
      bankHours: '7:00 AM - 9:00 PM (Daily)',
      fees: 'Airport service charges apply',
      languages: ['Amharic', 'English', 'French'],
      accessibility: 'Full accessibility compliance',
      status: 'active'
    }
  ]

  const filteredATMs = locationFilter === 'all' 
    ? atmLocations 
    : atmLocations.filter(atm => atm.location.toLowerCase().includes(locationFilter.toLowerCase()))

  return (
    <div className="atms">
      <div className="container">
        <header className="atms-header">
          <h1>ATM & Banking Services</h1>
          <p>Find convenient banking and ATM locations near event venues and accommodations</p>
        </header>

        {/* Location Filter */}
        <div className="location-filter">
          <label>Filter by Location:</label>
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="all">All Locations</option>
            <option value="center">City Center</option>
            <option value="downtown">Downtown</option>
            <option value="business">Business District</option>
            <option value="cultural">Cultural District</option>
            <option value="guest">Near Guest Houses</option>
            <option value="airport">Airport Route</option>
          </select>
        </div>

        {/* ATM Grid */}
        <div className="atm-grid">
          {filteredATMs.map(atm => (
            <div key={atm.id} className="atm-card">
              <div className="atm-header">
                <h3>🏦 {atm.bankName}</h3>
                <span className={`status-badge ${atm.status}`}>Active</span>
              </div>
              
              <div className="atm-info">
                <div className="location-info">
                  <p><strong>📍 Location:</strong> {atm.location}</p>
                  <p><strong>📮 Address:</strong> {atm.address}</p>
                  <p><strong>🚶 Distance:</strong> {atm.distance}</p>
                </div>
                
                <div className="service-info">
                  <h4>Services Available:</h4>
                  <div className="services-list">
                    {atm.services.map((service, index) => (
                      <span key={index} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
                
                <div className="hours-info">
                  <p><strong>🕐 ATM Hours:</strong> {atm.hours}</p>
                  <p><strong>🏪 Bank Hours:</strong> {atm.bankHours}</p>
                </div>
                
                <div className="additional-info">
                  <p><strong>💰 Fees:</strong> {atm.fees}</p>
                  <p><strong>🗣️ Languages:</strong> {atm.languages.join(', ')}</p>
                  <p><strong>♿ Accessibility:</strong> {atm.accessibility}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banking Tips */}
        <div className="banking-tips">
          <h2>Banking Tips for Visitors</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>💳 Card Acceptance</h3>
              <p>Most ATMs accept Visa, MasterCard, and local banking cards. International cards may have additional fees.</p>
            </div>
            <div className="tip-card">
              <h3>💰 Cash Recommendations</h3>
              <p>Carry sufficient cash as smaller vendors and rural areas may not accept card payments.</p>
            </div>
            <div className="tip-card">
              <h3>🔒 Security Tips</h3>
              <p>Use ATMs during daylight hours, cover your PIN, and be aware of your surroundings when withdrawing cash.</p>
            </div>
            <div className="tip-card">
              <h3>📱 Mobile Banking</h3>
              <p>Download bank mobile apps for balance checking, transfers, and finding nearby ATM locations.</p>
            </div>
            <div className="tip-card">
              <h3>💱 Exchange Rates</h3>
              <p>Banks typically offer better exchange rates than currency exchange shops. Check rates before exchanging money.</p>
            </div>
            <div className="tip-card">
              <h3>📞 Emergency Numbers</h3>
              <p>Save your bank's customer service number in case of lost cards or ATM issues during your visit.</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="emergency-contact">
          <h2>Emergency Banking Support</h2>
          <p>If you encounter any banking issues during your visit, contact our local support team:</p>
          <div className="contact-details">
            <p>📧 Email: banking-support@agewhorsmen.org</p>
            <p>📱 Phone: +251-11-XXX-XXXX (24/7 Support)</p>
            <p>🏢 Office: Association Headquarters, City Center</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ATMs