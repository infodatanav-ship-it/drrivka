import VideoIntro from '../components/VideoIntro';
import WellnessFocus from '../components/WellnessFocus';
import '../styles/Home.css';

function Home() {
  const handleScheduleClick = () => {
    window.location.href = '/contact-us';
  };

  return (
    <main>
      <VideoIntro />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, Our Priority, Always</h1>
          <p>Modern Medical Care Combined with Holistic Wellness</p>
          <button className="cta-button" onClick={handleScheduleClick}>Schedule an Appointment</button>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">Healthcare Excellence for YOU</div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive Care for Your Wellbeing</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>General Medicine</h3>
            <p>Expert care for all your primary healthcare needs</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧘</div>
            <h3>Wellness Programs</h3>
            <p>Holistic approaches to preventive health and well-being</p>
          </div>
          <div className="service-card">
            <div className="service-icon">❤️</div>
            <h3>Health Coaching</h3>
            <p>Personalized guidance for optimal lifestyle choices</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Preventive Care</h3>
            <p>Proactive health management and disease prevention</p>
          </div>
        </div>
      </section>

      {/* Wellness Focus Section */}
      <WellnessFocus />

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Start Your Wellness Journey?</h2>
        <p>Take the first step towards a healthier you today</p>
        <button className="cta-button-large" onClick={handleScheduleClick}>Book Your Visit Now</button>
      </section>
    </main>
  );
}

export default Home;
