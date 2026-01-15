import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    reason: '',
    message: ''
  });

  const [formMessage, setFormMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.reason || !formData.message) {
      setFormMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      setFormMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    // Log form data (in a real app, send to server)
    console.log('Form Data:', formData);

    // Show success message
    setFormMessage({ 
      text: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 
      type: 'success' 
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      reason: '',
      message: ''
    });

    // Clear message after 5 seconds
    setTimeout(() => {
      setFormMessage({ text: '', type: '' });
    }, 5000);
  };

  return (
    <main>
      <PageHeader title="Contact Us" subtitle="Get in Touch With Our Team" />

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-box">
              <div className="contact-icon">📍</div>
              <h3>Office Location</h3>
              <p>123 Medical Center Drive<br />Suite 200<br />Wellness City, ST 12345</p>
            </div>
            <div className="contact-box">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>Main Line: (555) 123-4567<br />Appointments: (555) 123-4568<br />Emergency: (555) 123-4569</p>
            </div>
            <div className="contact-box">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>General Inquiries: info@drmedicalcare.com<br />Appointments: appointments@drmedicalcare.com<br />Support: support@drmedicalcare.com</p>
            </div>
            <div className="contact-box">
              <div className="contact-icon">⏰</div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <h2>Send us a Message</h2>
          <p className="form-intro">Have questions or want to schedule an appointment? Fill out the form below and we'll get back to you within 24 hours.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason for Contact *</label>
              <select 
                id="reason" 
                name="reason" 
                value={formData.reason}
                onChange={handleChange}
                required
              >
                <option value="">-- Select a reason --</option>
                <option value="appointment">Schedule an Appointment</option>
                <option value="wellness">Wellness Program Inquiry</option>
                <option value="medical">Medical Consultation</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>

          {formMessage.text && (
            <div className={`form-message show ${formMessage.type}`}>
              {formMessage.text}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I schedule an appointment?</h4>
              <p>You can schedule an appointment by calling us at (555) 123-4568 or by filling out the contact form with your appointment request.</p>
            </div>
            <div className="faq-item">
              <h4>Do you accept insurance?</h4>
              <p>Yes, we accept most major insurance plans. Please contact us to verify your coverage or for billing inquiries.</p>
            </div>
            <div className="faq-item">
              <h4>What should I bring to my first appointment?</h4>
              <p>Please bring a valid ID, insurance card, and any relevant medical records. Also, arrive 15 minutes early to complete intake forms.</p>
            </div>
            <div className="faq-item">
              <h4>Can I get prescriptions refilled?</h4>
              <p>Yes, you can request prescription refills by calling us or through our patient portal. Allow 24-48 hours for processing.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer telehealth appointments?</h4>
              <p>Yes, we offer virtual consultations for follow-ups and non-emergency medical advice. Ask about availability when scheduling.</p>
            </div>
            <div className="faq-item">
              <h4>Are wellness programs covered by insurance?</h4>
              <p>Coverage varies by insurance plan. Contact us for information about your specific plan's coverage of wellness services.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
