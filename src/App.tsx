import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import Homepage from './homepage/homepage'
import { HOMEPAGE_SLUG } from './homepage/homepage'

// Lazy load ContactUs and Thanks pages
const ContactUs = lazy(() => import('./homepage/contactus'))
const Thanks = lazy(() => import('./homepage/thanks'))

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);
    
    // Listen for custom navigation events
    window.addEventListener('pushstate', handleLocationChange);
    window.addEventListener('replacestate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
      window.removeEventListener('replacestate', handleLocationChange);
    };
  }, []);

  // Update canonical link dynamically based on current path
  useEffect(() => {
    const baseUrl = 'https://karvaantours.cloud';
    let canonicalUrl = baseUrl;
    
    if (currentPath === '/contact') {
      canonicalUrl = `${baseUrl}/contact`;
    } else if (currentPath === '/thanks') {
      canonicalUrl = `${baseUrl}/thanks`;
    } else {
      // Homepage - use the slug
      canonicalUrl = `${baseUrl}${HOMEPAGE_SLUG}`;
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [currentPath]);

  // Intercept link clicks for client-side navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/"]');
      
      if (link && link.getAttribute('href')?.startsWith('/')) {
        const href = link.getAttribute('href');
        if (href && href !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentPath(href);
          window.dispatchEvent(new Event('pushstate'));
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Redirect root "/" to SEO slug (only on initial load)
  useEffect(() => {
    if (currentPath === '/' && window.location.pathname === '/') {
      window.history.replaceState({}, '', HOMEPAGE_SLUG);
      setCurrentPath(HOMEPAGE_SLUG);
    }
  }, [currentPath]);

  if (currentPath === '/contact') {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <ContactUs />
      </Suspense>
    );
  }

  if (currentPath === '/thanks') {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <Thanks />
      </Suspense>
    );
  }

  // Handle homepage routes: both '/' and '/japan-cherry-blossom-tour-packages' show Homepage
  // Canonical link is always set to the slug URL for SEO
  if (currentPath === HOMEPAGE_SLUG || currentPath === '/') {
    return <Homepage />;
  }

  // Fallback: show homepage for any other route
  return <Homepage />;
}
export default App;
