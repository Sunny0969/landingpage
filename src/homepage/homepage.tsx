import { lazy } from 'react';
import Header from './header';
import Hero from './hero';
import LazySuspense from '../components/LazySuspense';
import './homepage.css';
import WhatsAppButton from "./WhatsAppButton";

// Homepage slug
export const HOMEPAGE_SLUG = '/japan-cherry-blossom-tour-packages';

// Lazy load non-critical components (below the fold)
const Packages = lazy(() => import('./packages'));
const Gallery = lazy(() => import('./gallery'));
const Reviews = lazy(() => import('./GoogleReviews'));
const Features = lazy(() => import('./features'));
const FAQ = lazy(() => import('./faq'));
const Contact = lazy(() => import('./contact'));
const Footer = lazy(() => import('./footer'));


const Homepage = () => {
  return (
    <div className="homepage">
      {/* Critical above-the-fold content - loaded immediately */}
      <Header />
      <Hero />
      
      {/* Non-critical content - lazy loaded */}
      <LazySuspense>
      <Packages />
      </LazySuspense>
      
      <LazySuspense>
      <Gallery />
      </LazySuspense>
      
      <LazySuspense>
      <Reviews />
      </LazySuspense>
      
      <LazySuspense>
      <Features />
      </LazySuspense>
      
      <LazySuspense>
      <FAQ />
      </LazySuspense>
      
      <LazySuspense>
      <Contact />
      </LazySuspense>
      
      <LazySuspense>
      <Footer />
      </LazySuspense>
      <WhatsAppButton />
    </div>
  );
};

export default Homepage;
