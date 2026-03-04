import './packages.css';
import OptimizedImage from '../components/OptimizedImage';

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: 'Tokyo Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1743493255923-9b7a06d3f0fb?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9reW8lMjBDaGVycnklMjBCbG9zc29tJTIwVG91ciUyMDIwMjZ8ZW58MHx8MHx8fDA%3D',
      originalPrice: '$402',
      discountedPrice: '$350',
      description: 'Witness the breathtaking cherry blossoms in Tokyo, Japan iconic capital city. Stroll through world-famous parks and riverside promenades blanketed in delicate pink blooms for an unforgettable sakura experience.'
    },
    {
      id: 2,
      title: 'Nagano Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1682917596339-365a78750109?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmFnYW5vJTIwQ2hlcnJ5JTIwQmxvc3NvbSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D',
      originalPrice: '$459',
      discountedPrice: '$399',
      description: 'Enjoy a unique cherry blossom experience in Nagano, where sakura blooms against a dramatic backdrop of the Japanese Alps. Explore scenic mountain towns, ancient temples, and pristine nature at their most beautiful.'
    },
    {
      id: 3,
      title: 'Kanazawa Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1714997177229-b44004464aa5?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FuYXphd2ElMjBDaGVycnklMjBCbG9zc29tJTIwVG91cnxlbnwwfHwwfHx8MA%3D%3D',
      originalPrice: '$459',
      discountedPrice: '$399',
      description: 'Uncover the magic of cherry blossom season in Kanazawa, one of Japan best-preserved historic cities. Marvel at sakura blooms surrounding stunning samurai districts, geisha quarters, and the celebrated Kenroku-en Garden.'
    },
    {
      id: 4,
      title: 'Sendai Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1712292623186-2b210b731329?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VuZGFpJTIwQ2hlcnJ5JTIwQmxvc3NvbSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D',
      originalPrice: '$459',
      discountedPrice: '$399',
      description: 'Experience the enchanting cherry blossom season in Sendai, lovingly known as the City of Trees. Discover breathtaking sakura-lined boulevards and lush green parks in the heart of Japans Tohoku region.'
    },
    {
      id: 5,
      title: 'Kyoto Cherry Blossom Tour',
      image: 'https://images.unsplash.com/photo-1649727986079-03ba68c5cf57?w=800&auto=format&fit=crop&q=70&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEt5b3RvJTIwQ2hlcnJ5JTIwQmxvc3NvbSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D',
      originalPrice: '$459',
      discountedPrice: '$399',
      description: 'Experience sakura season in Kyoto, Japan cultural heart. Walk beneath canopies of pink blossoms framing historic shrines, traditional geisha districts, and serene zen gardens for a truly magical hanami experience.'
    }

  ];

  const handleGetQuote = (_packageId: number) => {
    // Scroll to form or open modal
    const formSection = document.getElementById('quote-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = (_packageId: number) => {
    window.location.href = 'tel:+81 80-8357-2662';
  };
  const handleWhatsApp = (packageId: number) => {
    const message = encodeURIComponent(`Hi, I'm interested in package ${packageId}`);
    window.open(`https://wa.me/818083572662?text=${message}`, '_blank');
  };
  return (
    <section className="packages" aria-label="Best Cherry Blossom Packages">
      <div className="packages__container">
        <div className="packages__header">
          <h2 className="packages__title">Explore Our Japan Cherry Blossom Tour Packages</h2>
          <p className="packages__subtitle">Flexible cherry blossom tour packages designed for couples, families, and luxury travelers during Japan’s iconic sakura season.
          </p>
        </div>

        <div className="packages__grid">
          {packages.map((pkg, index) => (
            <article key={pkg.id} className="packages__card">
              <div className="packages__card-image-wrapper">
                <OptimizedImage
                  src={pkg.image}
                  alt={pkg.title}
                  className="packages__card-image"
                  width={800}
                  height={600}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="packages__card-content">
                <h3 className="packages__card-title">{pkg.title}</h3>
                
                {/* Features Grid 2x2 */}
                <div className="packages__card-features">
                  <div className="packages__card-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M5 12L9 8M5 12L9 16M19 12L15 8M19 12L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Pick and Drop</span>
                  </div>
                  <div className="packages__card-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3M16 7V3M3 11H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Pay After Tour</span>
                  </div>
                  <div className="packages__card-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>Flexible Cancel</span>
                  </div>
                  <div className="packages__card-feature">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#37937b" stroke="#37937b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#37937b" d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25 118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3-48.43-34.3-19.05 54.5 22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23zm-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75l-2.4-17.82zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67l-6.7-16.66zM116.4 69.5a234.139 234.139 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57-5.9-7.77zm69.5 8.58l-4.4 17.44 217 55.48 4.4-17.4-217-55.52zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3l-13.97-11.2zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2 6.4 13.4 14.2 25.2 21.9 33.8 4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7-10.9 3.8-23.4 10.4-35.4 19.1-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2-6.4-13.4-14.2-25.2-21.9-33.8-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7 10.9-3.8 23.4-10.4 35.4-19.1 21.6-15.6 41.4-37.9 50.4-62.6l-167.5-42.9zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2l-16.43-7.3zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6l-17.75-2.9zM113.5 361l-4.4 17.4 217 55.5 4.4-17.4-217-55.5z"></path></g></svg>
                    <span>10 Hours</span>
                  </div>
                </div>
                
                <div className="packages__card-price-row">
                  <div className="packages__card-price-wrapper">
                    <span className="packages__card-original-price">{pkg.originalPrice}</span>
                    <span className="packages__card-price">{pkg.discountedPrice}</span>
                  </div>
                  <button
                    className="packages__card-call-btn"
                    onClick={() => handleCallNow(pkg.id)}
                    aria-label={`Call now for ${pkg.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Call Now
                  </button>
                </div>

                <div className="packages__card-action-row">
                <button
                    className="packages__card-quote-btn"
                    onClick={() => handleGetQuote(pkg.id)}
                    aria-label={`Get quote for ${pkg.title}`}
                  >
                    Get a Quote
                  </button>
                  <button
                    className="packages__card-whatsapp-btn"
                    onClick={() => handleWhatsApp(pkg.id)}
                    aria-label={`WhatsApp for ${pkg.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
