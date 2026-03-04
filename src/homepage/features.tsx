import './features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Transport Facilities',
      description: 'Private chauffeur & premium transfers',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18C18.5523 18 19 17.5523 19 17C19 16.4477 18.5523 16 18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 18C6.55228 18 7 17.5523 7 17C7 16.4477 6.55228 16 6 16C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H4M4 12H20M4 12V17M20 12V17M20 12H22M20 8H19L17 4H7L5 8H4M20 8V12M4 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Tour Guides',
      description: 'Licensed private sakura specialists',
      icon: (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#3f927d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#3f927d" fill-rule="evenodd" d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.75.75 0 001.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C16 2.56 15.44 2 14.75 2H11c-1.154 0-2.106.354-2.772 1-.081.08-.157.161-.228.246A3.131 3.131 0 007.772 3C7.106 2.354 6.154 2 5 2H1.25zm7.5 9.967c.61-.309 1.372-.467 2.25-.467h3.5v-8H11c-.846 0-1.394.253-1.728.577-.335.325-.522.787-.522 1.34v6.55zm-1.5 0v-6.55c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467z" clip-rule="evenodd"></path></g></svg>

        //<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#3f927d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
      )
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Dedicated luxury travel concierge',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Negotiable Rates',
      description: 'Tailored pricing for private stays',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#3f927d" stroke-width="1.5"></circle> <path d="M12 6V18" stroke="#3f927d" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#3f927d" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
      )
    },
    {
      id: 5,
      title: 'Reserve Now Pay Later',
      description: 'Book now with flexible deposit',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="3" y="6" width="18" height="13" rx="2" stroke="#3f927d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M3 10H20.5" stroke="#3f927d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 15H9" stroke="#3f927d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      )
    },
    {
      id: 6,
      title: 'Cancellation 24 Hours Before Tour',
      description: 'Flexible 24hr private tour cancellation',
      icon: (
        <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#3f927d" stroke="#3f927d"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M731.15 584.74c-100.99 0-182.86 81.87-182.86 182.86s81.87 182.86 182.86 182.86 182.86-81.87 182.86-182.86-81.87-182.86-182.86-182.86z m0 292.57c-60.5 0-109.71-49.22-109.71-109.71 0-60.5 49.22-109.71 109.71-109.71 60.5 0 109.71 49.22 109.71 109.71 0.01 60.49-49.21 109.71-109.71 109.71z" fill="#3f927d"></path><path d="M657.76 740.16h146.29v54.86H657.76zM219.51 475.38h219.43v73.14H219.51z" fill="#3f927d"></path><path d="M182.61 366.27h585.62v179.48h73.14V145.62c0-39.96-32.5-72.48-72.46-72.48h-27.36c-29.2 0-55.05 16.73-65.88 42.59-5.71 13.61-27.84 13.64-33.55 0-10.86-25.88-36.71-42.59-65.89-42.59h-18.16c-29.2 0-55.05 16.73-65.88 42.59-5.71 13.61-27.84 13.64-33.55 0-10.86-25.88-36.71-42.59-65.89-42.59h-17.43c-29.2 0-55.05 16.73-65.88 42.59-5.71 13.61-27.84 13.64-33.55 0-10.86-25.88-36.71-42.59-65.89-42.59h-27.57c-39.96 0-72.48 32.52-72.48 72.48v805.12h401.21V877.6H183.04l-0.43-511.33zM208.42 144c14.27 34.07 47.32 56.09 84.23 56.09 36.89 0 69.95-22 82.66-53.8l15.86-2.29c14.27 34.07 47.32 56.09 84.23 56.09 36.89 0 69.95-22 82.66-53.8l16.59-2.29c14.27 34.07 47.32 56.09 84.23 56.09 36.89 0 69.95-22 82.66-53.8l26.68-0.66v147.5H182.54l-0.12-146.84 26-2.29z" fill="#3f927d"></path></g></svg>
      )
    }
  ];

  return (
    <section className="features" aria-label="Our Features and Services">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">Our Features and Services</h2>
          {/* <p className="features__subtitle">
            Everything you need for an unforgettable travel experience
          </p> */}
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article key={feature.id} className="features__card">
              <div className="features__card-icon">
                {feature.icon}
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
