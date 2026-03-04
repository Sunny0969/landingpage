import Header from './header';
import './thanks.css';

const Thanks = () => {
  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('pushstate'));
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <div className="thanks-page">
      <Header />
      <main className="thanks-main">
        <section className="thanks-section">
          <div className="thanks-container">
            <div className="thanks-content">
              <div className="thanks-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#37937b" fillOpacity="0.1"/>
                  <path d="M40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60C51.0457 60 60 51.0457 60 40C60 28.9543 51.0457 20 40 20ZM35 47.5L25 37.5L27.5 35L35 42.5L52.5 25L55 27.5L35 47.5Z" fill="#37937b"/>
                </svg>
              </div>
              <h1 className="thanks-title">Thank You!</h1>
              <p className="thanks-message">
                Thank you for submitting the form. We have received your request and will get back to you soon.
              </p>
              <div className="thanks-buttons">
              <a
  href="https://www.karvaantours.com/tour-packages"
  target="_blank"
  rel="noopener noreferrer"
  className="thanks-button thanks-button--primary"
>
  Browse Tours
</a>
                <button 
                  className="thanks-button thanks-button--secondary"
                  onClick={() => handleNavigate('/')}
                >
                  Go to Homepage
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Thanks;
