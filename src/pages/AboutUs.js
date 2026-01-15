import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <main>
      <PageHeader title="About Us" subtitle="Meet Your Healthcare Partner" />

      {/* Doctor Profile */}
      <section className="doctor-profile">
        <div className="container">
          <div className="profile-layout">
            <div className="profile-image">
              <div className="image-placeholder-large">Doctor Profile Photo</div>
            </div>
            <div className="profile-content">
              <h2>Dr. [Your Name]</h2>
              <p className="credentials">MD | General Medicine | Wellness Specialist</p>
              <p>Welcome to my practice. I am dedicated to providing exceptional healthcare that goes beyond treating symptoms. My approach combines clinical expertise with a deep commitment to your overall well-being.</p>
              <p>With [X] years of experience in general medicine, I have developed a passion for preventive care and wellness. I believe that every patient deserves personalized attention and a healthcare partner who listens, understands, and collaborates with them towards optimal health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-values">
        <div className="container">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>To provide compassionate, comprehensive medical care that empowers patients to achieve optimal health and well-being through a combination of evidence-based medicine and holistic wellness practices.</p>
          </div>
          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>A healthcare practice where every patient feels heard, valued, and supported in their journey towards a healthier, more balanced life.</p>
          </div>
          <div className="mission-card">
            <h3>Our Values</h3>
            <p>Compassion • Integrity • Excellence • Patient Empowerment • Continuous Learning</p>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="expertise">
        <div className="container">
          <h2>Experience & Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h4>Medical Training</h4>
              <p>Graduated from [Medical School]. Completed residency in General Medicine at [Hospital/Institution].</p>
            </div>
            <div className="expertise-item">
              <h4>Board Certification</h4>
              <p>Board-certified in Internal Medicine with additional certifications in Wellness and Preventive Medicine.</p>
            </div>
            <div className="expertise-item">
              <h4>Clinical Experience</h4>
              <p>Over [X] years of experience treating diverse patient populations and managing complex health conditions.</p>
            </div>
            <div className="expertise-item">
              <h4>Wellness Specialization</h4>
              <p>Specialized training in holistic health, nutrition, and lifestyle medicine to enhance patient outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Patients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="quote">"Dr. [Name] genuinely cares about my health and takes time to understand my concerns. The wellness programs have completely transformed my life."</p>
              <p className="author">— Jane M.</p>
            </div>
            <div className="testimonial-card">
              <p className="quote">"I appreciate the holistic approach to healthcare. It's not just about treating illness, but helping me become the healthiest version of myself."</p>
              <p className="author">— Robert T.</p>
            </div>
            <div className="testimonial-card">
              <p className="quote">"Finally, a doctor who listens and explains everything clearly. The personalized care plan has made all the difference in managing my health."</p>
              <p className="author">— Sarah K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment">
        <div className="container">
          <h2>Our Commitment to You</h2>
          <p>I am committed to:</p>
          <ul className="commitment-list">
            <li>Listening to your concerns and taking time to understand your health goals</li>
            <li>Providing evidence-based medical care with a compassionate approach</li>
            <li>Creating personalized treatment and wellness plans tailored to your needs</li>
            <li>Empowering you with knowledge to make informed health decisions</li>
            <li>Maintaining the highest standards of medical practice and ethics</li>
            <li>Supporting your journey towards a healthier, more balanced life</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
