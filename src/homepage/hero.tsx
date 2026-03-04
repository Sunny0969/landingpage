import { useState } from 'react';
import './hero.css';
import OptimizedImage from '../components/OptimizedImage';

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const heroImageUrl = 'https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?w=1600&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfDB8MHx8fDA%3D';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get form data
    const form = e.currentTarget;
    
    // Disable hidden fields before submission to prevent duplicate values
    const hiddenFields = form.querySelectorAll('.hero__form-group--desktop, .hero__form-group--mobile');
    hiddenFields.forEach((field) => {
      const computedStyle = window.getComputedStyle(field as HTMLElement);
      if (computedStyle.display === 'none') {
        const inputs = (field as HTMLElement).querySelectorAll('input, select, textarea');
        inputs.forEach((input) => {
          (input as HTMLInputElement).disabled = true;
        });
      }
    });
    
    const formData = new FormData(form);

    // Submit to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xojnrrvq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        form.reset();
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
      // Re-enable all fields after submission
      hiddenFields.forEach((field) => {
        const inputs = (field as HTMLElement).querySelectorAll('input, select, textarea');
        inputs.forEach((input) => {
          (input as HTMLInputElement).disabled = false;
        });
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero">
      {/* Background Image with Blur */}
      <div className="hero__background">
        <OptimizedImage
          src={heroImageUrl}
          alt="Cherry blossom background"
          className="hero__bg-image"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          priority={true}
          sizes="100vw"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero__container">
        <div className="hero__content">
          {/* Left Side */}
          <div className="hero__left">
            {/* <div className="hero__image-wrapper">
              <img
                src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfDB8MHx8fDA%3D"
                alt="Beautiful cherry blossom"
                className="hero__feature-image"
                loading="eager"
                fetchPriority="high"
              />
            </div> */}
            <h1 className="hero__headline">
            Japan Cherry Blossom Tours Packages - Private Sakura Season Experiences 2026</h1>
            <p className="hero__description">
            Discover premium Japan cherry blossom tours designed around peak bloom dates. Our private cherry blossom tour Japan packages combine expert local guides, seamless transport, and handpicked hotels across Tokyo, Kyoto, and Mount Fuji. Whether you are looking for luxury cherry blossom tours Japan or fully customized sakura season Japan tour packages, we create unforgettable spring experiences with limited availability during peak bloom.
            </p>
            <button 
              className="hero__cta-button"
              onClick={() => {
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new Event('pushstate'));
              }}
            >
              Enquire Now
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="hero__right">
            <form 
              id="quote-form" 
              className="hero__form" 
              onSubmit={handleSubmit}
            >
              <h2 className="hero__form-title">Get a Free Customized Quote</h2>
              
              {/* Desktop Row 1: Name + Email */}
              <div className="hero__form-row hero__form-row-1">
              <div className="hero__form-group hero__form-group--name">
  <label htmlFor="name" className="hero__form-label">
    Full Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    className="hero__form-input"
    placeholder="Karvaan Tours"
    pattern="[A-Za-z\s]+"
    minLength={3}
    title="Name must be at least 3 characters and only contain letters and spaces"
    required
    onKeyPress={(e) => {
      // Prevent numbers from being typed
      if (/\d/.test(e.key)) {
        e.preventDefault();
      }
    }}
  />
</div>
                <div className="hero__form-group hero__form-group--email hero__form-group--desktop">
                  <label htmlFor="email" className="hero__form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="hero__form-input"
                    placeholder="support@karvaantours.com "
                    required
                  />
                </div>
               
              </div>

              {/* Desktop Row 2: Phone + Travel Dates */}
              <div className="hero__form-row hero__form-row-2">
                <div className="hero__form-group hero__form-group--phone hero__form-group--desktop">
                  <label htmlFor="phone-desktop" className="hero__form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-desktop"
                    name="phone"
                    className="hero__form-input"
                    placeholder="+81 80-8357-2662 "
                    required
                    onKeyPress={(e) => {
                      // Only allow numbers, +, -, spaces, and parentheses
                      const allowedChars = /[0-9+\-\s()]/;
                      if (!allowedChars.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      // Remove any alphabetic characters, keep only numbers and formatting chars
                      let value = e.target.value.replace(/[a-zA-Z]/g, '');
                      
                      // Count only digits
                      const digits = value.match(/\d/g);
                      const digitCount = digits ? digits.length : 0;
                      
                      // Limit to 15 digits maximum
                      if (digitCount > 15) {
                        // Keep only first 15 digits
                        const first15Digits = digits?.slice(0, 15) || [];
                        // Rebuild value with only first 15 digits
                        let newValue = '';
                        let digitIndex = 0;
                        for (let i = 0; i < value.length && digitIndex < 15; i++) {
                          if (/\d/.test(value[i])) {
                            newValue += first15Digits[digitIndex] || '';
                            digitIndex++;
                          } else {
                            newValue += value[i];
                          }
                        }
                        value = newValue;
                      }
                      
                      e.target.value = value;
                      
                      // Set custom validity
                      if (digitCount < 10 && digitCount > 0) {
                        e.target.setCustomValidity('Phone number must contain at least 10 digits');
                      } else if (digitCount > 15) {
                        e.target.setCustomValidity('Phone number must contain maximum 15 digits');
                      } else {
                        e.target.setCustomValidity('');
                      }
                    }}
                    onBlur={(e) => {
                      const digits = e.target.value.match(/\d/g);
                      const digitCount = digits ? digits.length : 0;
                      if (digitCount < 10) {
                        e.target.setCustomValidity('Phone number must contain at least 10 digits');
                      } else if (digitCount > 15) {
                        e.target.setCustomValidity('Phone number must contain maximum 15 digits');
                      } else {
                        e.target.setCustomValidity('');
                      }
                    }}
                  />
                </div>
                <div className="hero__form-group hero__form-group--travel-dates">
                  <label htmlFor="travel-dates" className="hero__form-label">
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    id="travel-dates"
                    name="travelDates"
                    className="hero__form-input hero__form-date-input"
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

              {/* Desktop Row 3: Destinations + Travelers */}
              <div className="hero__form-row hero__form-row-3">
                <div className="hero__form-group hero__form-group--destinations">
                  <label htmlFor="destinations" className="hero__form-label">
                    Desired Destinations/ Tours
                  </label>
                  <select
                    id="destinations"
                    name="destinations"
                    className="hero__form-input hero__form-select"
                    required
                  >
                    <option value="">Select a tour package</option>
                    <option value="Tokyo Cherry Blossom Tour">Tokyo Cherry Blossom Tour</option>
                    <option value="Nagano Cherry Blossom Tour">Nagano Cherry Blossom Tour</option>
                    <option value="Kanazawa Cherry Blossom Tour">Kanazawa Cherry Blossom Tour</option>
                    <option value="Sendai Cherry Blossom Tour">Sendai Cherry Blossom Tour</option>
                    <option value="Kyoto Cherry Blossom Tour">Kyoto Cherry Blossom Tour</option>
                  </select>
                </div>
                <div className="hero__form-group hero__form-group--travelers">
                  <label htmlFor="travelers" className="hero__form-label">
                    Number of Travelers
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    className="hero__form-input hero__form-select"
                    required
                  >
                    <option value="">Select number of travelers</option>
                    <option value="2">2 person</option>
                    <option value="3">3 person</option>
                    <option value="4">4 person</option>
                    <option value="5">5 person</option>
                    <option value="6">6 person</option>
                    <option value="6+">6+ person</option>
                  </select>
                </div>
              </div>

              <div className="hero__form-group">
                <label htmlFor="special-requests" className="hero__form-label">
                  Any Special Requests/ Interests
                </label>
                <textarea
                  id="special-requests"
                  name="specialRequests"
                  className="hero__form-textarea"
                  placeholder="I want to customize this package based on my interests and preferences. Please guide me with the options."
                  rows={4}
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="hero__form-message hero__form-message--success">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="hero__form-message hero__form-message--error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button 
                type="submit" 
                className="hero__form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
