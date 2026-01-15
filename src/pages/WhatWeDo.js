import React from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/WhatWeDo.css';

function WhatWeDo() {
  return (
    <main>
      <PageHeader title="What We Do" subtitle="Comprehensive Healthcare & Wellness Services" />

      {/* Medical Services */}
      <section className="services-section">
        <div className="container">
          <h2>General Medical Services</h2>
          <div className="services-detail-grid">
            <div className="service-detail-card">
              <div className="service-icon-large">🏥</div>
              <h3>Primary Care</h3>
              <p>Comprehensive physical examinations, health screenings, and management of acute and chronic conditions. We provide continuity of care and serve as your first point of contact for all medical concerns.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-icon-large">💉</div>
              <h3>Preventive Medicine</h3>
              <p>Vaccinations, health screenings, and preventive care strategies tailored to your age, health history, and lifestyle. Early detection is key to maintaining optimal health.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-icon-large">📋</div>
              <h3>Chronic Disease Management</h3>
              <p>Expert management of conditions such as hypertension, diabetes, and heart disease. We create personalized treatment plans and monitor your progress regularly.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-icon-large">🔬</div>
              <h3>Lab & Diagnostics</h3>
              <p>On-site laboratory testing and diagnostic services to quickly identify and address health concerns. Fast results mean faster treatment decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="wellness-programs">
        <div className="container">
          <h2>Wellness Programs</h2>
          <p className="section-intro">Beyond treating illness, we focus on building a foundation of optimal health through holistic wellness programs.</p>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🧘‍♀️</div>
              <h3>Mindfulness & Stress Management</h3>
              <p>Guided meditation, stress reduction techniques, and mindfulness practices to improve mental health and resilience.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🥗</div>
              <h3>Nutrition Counseling</h3>
              <p>Personalized dietary guidance and meal planning to support your health goals and manage conditions naturally.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏃‍♀️</div>
              <h3>Fitness & Exercise Coaching</h3>
              <p>Customized exercise programs designed for your fitness level and health objectives.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">😴</div>
              <h3>Sleep Optimization</h3>
              <p>Strategies and guidance to improve sleep quality, essential for overall health and recovery.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🧠</div>
              <h3>Mental Health Support</h3>
              <p>Counseling and referrals to support your emotional and psychological well-being.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">💪</div>
              <h3>Lifestyle Transformation</h3>
              <p>Comprehensive programs to help you achieve sustainable lifestyle changes for long-term health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-list">
            <div className="feature">
              <h4>Patient-Centered Care</h4>
              <p>Your needs and preferences guide our treatment decisions</p>
            </div>
            <div className="feature">
              <h4>Integrated Approach</h4>
              <p>We combine traditional medicine with preventive and wellness strategies</p>
            </div>
            <div className="feature">
              <h4>Personalized Plans</h4>
              <p>Every treatment and wellness plan is customized to your unique needs</p>
            </div>
            <div className="feature">
              <h4>Compassionate Service</h4>
              <p>We listen, care, and work collaboratively with you towards better health</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;
