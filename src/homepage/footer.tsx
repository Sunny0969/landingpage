import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} Karvaan Tours. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
