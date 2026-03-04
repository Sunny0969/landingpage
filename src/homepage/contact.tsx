import './contact.css';

const Contact = () => {
  return (
    <section className="contact" aria-label="Contact Us">
      <div className="contact__container">
        <div className="contact__row">
          <h2 className="contact__title">Contact Us</h2>
          <div className="contact__info">
            <a href="tel:+1234567890" className="contact__phone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08V3.08C5.16 3.68 4.68 4.16 4.08 4.16H2.08C2.08 12.6 9.4 19.92 17.84 19.92H16.84C16.24 19.92 15.76 20.4 15.76 21V22.92C15.76 23.52 16.24 24 16.84 24H19.84C20.44 24 20.92 23.52 20.92 22.92V19.92C20.92 19.32 20.44 18.84 19.84 18.84H16.84C16.24 18.84 15.76 19.32 15.76 19.92V16.92C15.76 16.32 16.24 15.84 16.84 15.84H19.84C20.44 15.84 20.92 16.32 20.92 16.92Z" fill="currentColor"/>
              </svg>
              +81 80-8357-2662
            </a>
            <a href="mailto:info@karvaan.com" className="contact__email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
support@karvaantours.com            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
