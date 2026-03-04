import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDates: '',
    destinations: '',
    numberOfTravelers: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Submit to Formspree
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('travelDates', formData.travelDates);
      formDataToSend.append('destinations', formData.destinations);
      formDataToSend.append('numberOfTravelers', formData.numberOfTravelers);
      formDataToSend.append('specialRequests', formData.specialRequests);

      const response = await fetch('https://formspree.io/f/xojnrrvq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          travelDates: '',
          destinations: '',
          numberOfTravelers: '',
          specialRequests: ''
        });
        // Redirect to thanks page after 1.5 seconds
        setTimeout(() => {
          window.history.pushState({}, '', '/thanks');
          window.dispatchEvent(new Event('pushstate'));
        }, 1500);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contactus-page">
      <Header />
      <main className="contactus-main">
        <section className="contactus-section">
          <div className="contactus-container">
            <div className="contactus-header">
              <h1 className="contactus-title">Contact Us</h1>
              <p className="contactus-subtitle">
                Fill out the form below and we'll get back to you as soon as possible to help plan your perfect journey.
              </p>
            </div>

            <form 
              className="contactus-form" 
              action="https://formspree.io/f/xojnrrvq"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Karvaan Tours"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="support@karvaantours.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+81 80-8357-2662"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="travelDates" className="form-label">
                    Travel Dates <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="travelDates"
                    name="travelDates"
                    value={formData.travelDates}
                    onChange={handleChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                    required
                    onClick={(e) => {
                      const dateInput = e.currentTarget;
                      // Show calendar picker on click (works on mobile)
                      if ('showPicker' in dateInput && typeof dateInput.showPicker === 'function') {
                        try {
                          dateInput.showPicker();
                        } catch (err) {
                          // Fallback: just focus if showPicker fails
                          dateInput.focus();
                        }
                      }
                    }}
                    onFocus={(e) => {
                      const dateInput = e.currentTarget;
                      // Also show picker on focus for better mobile experience
                      if ('showPicker' in dateInput && typeof dateInput.showPicker === 'function') {
                        try {
                          dateInput.showPicker();
                        } catch (err) {
                          // Ignore if showPicker is not supported
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="destinations" className="form-label">
                  Desired Destinations / Tours <span className="required">*</span>
                </label>
                <select
                  id="destinations"
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a tour package</option>
                  <option value="Tokyo Cherry Blossom Tour 2026">Tokyo Cherry Blossom Tour 2026</option>
                  <option value="Nagano Cherry Blossom Tour">Nagano Cherry Blossom Tour</option>
                  <option value="Kanazawa Cherry Blossom Tour">Kanazawa Cherry Blossom Tour</option>
                  <option value="Sendai Cherry Blossom Tour">Sendai Cherry Blossom Tour</option>
                  <option value="Kyoto Cherry Blossom Tour">Kyoto Cherry Blossom Tour</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="numberOfTravelers" className="form-label">
                  Number of Travelers <span className="required">*</span>
                </label>
                <select
                  id="numberOfTravelers"
                  name="numberOfTravelers"
                  value={formData.numberOfTravelers}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select number of travelers</option>
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4">4 Travelers</option>
                  <option value="5">5 Travelers</option>
                  <option value="6+">6+ Travelers</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests" className="form-label">
                  Any Special Requests / Interests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or interests..."
                  rows={5}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-message form-message--success">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message form-message--error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                {!isSubmitting && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
