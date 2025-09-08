import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <header className="about-header">
          <h1>About Us</h1>
          <p className="subtitle">Sebet Bet Agew Horsemen Association</p>
        </header>

        {/* Background/History Section */}
        <section className="history">
          <h2>Our Background & History</h2>
          <div className="content-grid">
            <div className="text-content">
              <p>
                The Sebet Bet Agew Horsemen Association was founded to preserve and celebrate 
                the rich cultural heritage of the Agew people, particularly their traditional 
                relationship with horses and horsemanship.
              </p>
              <p>
                For centuries, the Agew people have maintained a deep connection with horses, 
                using them not only for transportation but as symbols of pride, tradition, and 
                cultural identity. Our association serves as a bridge between these ancient 
                traditions and the modern world.
              </p>
              <p>
                Established by community elders and cultural enthusiasts, we have grown from 
                a small local group to a recognized cultural organization that promotes Agew 
                heritage through various events, educational programs, and community initiatives.
              </p>
            </div>
            <div className="image-placeholder">
              <p>🏛️ Historical Photo</p>
              <small>Traditional Ceremonies</small>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mission-vision-grid">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To preserve, promote, and celebrate the traditional horsemanship and cultural 
                heritage of the Agew people through community engagement, cultural events, 
                educational programs, and the fostering of intergenerational knowledge transfer.
              </p>
              <ul>
                <li>Preserve traditional horsemanship skills and knowledge</li>
                <li>Organize cultural events and celebrations</li>
                <li>Support community development initiatives</li>
                <li>Promote cultural awareness and education</li>
              </ul>
            </div>
            
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be the leading organization in preserving and promoting Agew cultural heritage, 
                ensuring that future generations maintain their connection to traditional values 
                while embracing positive change and development.
              </p>
              <ul>
                <li>Cultural heritage preservation for future generations</li>
                <li>Strong, united Agew community worldwide</li>
                <li>Recognition of Agew traditions on national and international levels</li>
                <li>Youth engagement in cultural activities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team/Leadership Section */}
        <section className="leadership">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <p>👤</p>
              </div>
              <h3>Ato Bekele Tessema</h3>
              <p className="role">Chairman</p>
              <p className="bio">
                A respected elder and traditional horseman with over 30 years of experience 
                in preserving Agew cultural practices.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <p>👤</p>
              </div>
              <h3>W/ro Almaz Getachew</h3>
              <p className="role">Vice Chairwoman</p>
              <p className="bio">
                Cultural historian and community organizer dedicated to promoting 
                women's participation in traditional activities.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <p>👤</p>
              </div>
              <h3>Ato Mulugeta Ayele</h3>
              <p className="role">Secretary General</p>
              <p className="bio">
                Former educator with extensive experience in cultural documentation 
                and community outreach programs.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <p>👤</p>
              </div>
              <h3>Ato Desta Worku</h3>
              <p className="role">Event Coordinator</p>
              <p className="bio">
                Skilled horseman and event organizer responsible for coordinating 
                traditional ceremonies and competitions.
              </p>
            </div>
          </div>
        </section>

        {/* Historical Photos Section */}
        <section className="historical-photos">
          <h2>🏛️ Historical Photos</h2>
          <p className="section-subtitle">Traditional Ceremonies</p>
          <div className="photos-grid">
            <div className="photo-item">
              <img 
                src="/home-images/Ginr_9aXAAAxIq8.jpg" 
                alt="Traditional Horsemen in ceremonial attire"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Traditional Horsemen</h4>
                <p>Ceremonial gathering showcasing traditional horsemanship</p>
              </div>
            </div>
            
            <div className="photo-item">
              <img 
                src="/home-images/oaah_a_2231705_f0005_oc.jpg" 
                alt="Cultural heritage ceremony"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Cultural Heritage</h4>
                <p>Traditional ceremony preserving Agew cultural practices</p>
              </div>
            </div>
            
            <div className="photo-item">
              <img 
                src="/home-images/download.jfif" 
                alt="Community event celebration"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Community Event</h4>
                <p>Celebrating together as one unified community</p>
              </div>
            </div>
            
            <div className="photo-item">
              <img 
                src="/home-images/download (1).jfif" 
                alt="Traditional ceremony rituals"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Traditional Ceremony</h4>
                <p>Ancient rituals passed down through generations</p>
              </div>
            </div>
            
            <div className="photo-item">
              <img 
                src="/home-images/download (2).jfif" 
                alt="Horse training traditions"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Horse Training</h4>
                <p>Traditional methods of horse training and care</p>
              </div>
            </div>
            
            <div className="photo-item">
              <img 
                src="/home-images/download (3).jfif" 
                alt="Cultural festival celebration"
                loading="lazy"
              />
              <div className="photo-caption">
                <h4>Cultural Festival</h4>
                <p>Annual celebration of Agew heritage and traditions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🏛️ Heritage</h3>
              <p>Preserving and honoring our ancestral traditions and cultural practices</p>
            </div>
            <div className="value-item">
              <h3>🤝 Community</h3>
              <p>Building strong bonds and fostering unity among our people</p>
            </div>
            <div className="value-item">
              <h3>📚 Education</h3>
              <p>Sharing knowledge and teaching traditional skills to younger generations</p>
            </div>
            <div className="value-item">
              <h3>🌟 Excellence</h3>
              <p>Striving for the highest standards in all our cultural and community activities</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About