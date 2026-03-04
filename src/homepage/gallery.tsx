import { useState, useEffect } from 'react';
import './gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/Images/1.webp',
      alt: 'Cherry blossom tree in full bloom'
    },
    {
      id: 2,
      src: '/Images/2.webp',
      alt: 'Beautiful pink cherry blossoms'
    },
    {
      id: 3,
      src: '/Images/3.webp',
      alt: 'Cherry blossom petals falling'
    },
    {
      id: 4,
      src: '/Images/4.webp',
      alt: 'Mount Fuji with cherry blossoms'
    },
    {
      id: 5,
      src: '/Images/5.webp',
      alt: 'Cherry blossom garden path'
    },
    {
      id: 6,
      src: '/Images/6.webp',
      alt: 'Close-up of cherry blossom flowers'
    },
    {
      id: 7,
      src: '/Images/7.webp',
      alt: 'Cherry blossom festival scene'
    },
    {
      id: 8,
      src: '/Images/8.webp',
      alt: 'Sunset with cherry blossoms'
    },
    {
      id: 9,
      src: '/Images/9.webp',
      alt: 'Cherry blossom tree in full bloom'
    },
    {
      id: 10,
      src: '/Images/10.webp',
      alt: 'Beautiful pink cherry blossoms'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll every 5 seconds (only when not paused)
  useEffect(() => {
    if (autoScrollPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (isMobile) {
          return (prev + 1) % images.length;
        } else {
          const nextIndex = prev + 4;
          return nextIndex >= images.length - 3 ? 0 : nextIndex;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, images.length, autoScrollPaused]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
    setAutoScrollPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diffX = startX - currentX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swipe left (finger goes right→left) = go NEXT
        if (isMobile) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        } else {
          setCurrentIndex((prev) => {
            const nextIndex = prev + 4;
            return nextIndex >= images.length - 3 ? 0 : nextIndex;
          });
        }
      } else {
        // Swipe right (finger goes left→right) = go PREV
        if (isMobile) {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
          setCurrentIndex((prev) => Math.max(prev - 4, 0));
        }
      }
    }
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
    
    // Resume auto-scroll after 2 seconds
    setTimeout(() => {
      setAutoScrollPaused(false);
    }, 2000);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setAutoScrollPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diffX = startX - currentX;
    const threshold = 50; // Minimum drag distance

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swipe left (finger goes right→left) = go NEXT
        if (isMobile) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        } else {
          setCurrentIndex((prev) => {
            const nextIndex = prev + 4;
            return nextIndex >= images.length - 3 ? 0 : nextIndex;
          });
        }
      } else {
        // Swipe right (finger goes left→right) = go PREV
        if (isMobile) {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        } else {
          setCurrentIndex((prev) => Math.max(prev - 4, 0));
        }
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
    
    // Resume auto-scroll after 2 seconds
    setTimeout(() => {
      setAutoScrollPaused(false);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setStartX(0);
      setCurrentX(0);
      setTimeout(() => {
        setAutoScrollPaused(false);
      }, 2000);
    }
  };

  return (
    <section className="gallery" aria-label="Cherry Blossom Gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <h2 className="gallery__title">Gallery – Real Experiences from Our Japan Cherry Blossom Tours
          </h2>
          <p className="gallery__subtitle">See how our travelers experienced peak sakura season in Tokyo, Kyoto, and beyond.</p>
        </div>

        <div className="gallery__slider-wrapper">
          <div 
            className="gallery__slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="gallery__track"
              style={{
                transform: `translateX(calc(-${currentIndex * (isMobile ? 85 : 25)}% - ${isDragging ? (startX - currentX) : 0}px))`,                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {images.map((image) => (
                <div key={image.id} className="gallery__slide">
                  <div className="gallery__image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery__image"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                    {/* <div className="gallery__image-overlay">
                      <div className="gallery__image-content">
                        <p className="gallery__image-text">{image.alt}</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator for Mobile */}
        {isMobile && (
          <div className="gallery__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery__dot ${index === currentIndex ? 'gallery__dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
