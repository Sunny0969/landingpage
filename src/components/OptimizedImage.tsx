import { useMemo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  priority?: boolean; // For hero images
}

/**
 * Optimizes Unsplash URL with proper parameters
 */
const optimizeUnsplashUrl = (url: string, targetWidth: number, quality: number = 70): string => {
  if (!url.includes('unsplash.com')) return url;

  try {
    const urlObj = new URL(url);
    
    // Update or add parameters
    urlObj.searchParams.set('w', targetWidth.toString());
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');
    urlObj.searchParams.set('q', quality.toString());
    
    // Ensure ixlib is present
    if (!urlObj.searchParams.has('ixlib')) {
      urlObj.searchParams.set('ixlib', 'rb-4.1.0');
    }

    return urlObj.toString();
  } catch (e) {
    // If URL parsing fails, return original
    return url;
  }
};

/**
 * OptimizedImage Component
 * Optimizes Unsplash images with proper parameters and responsive srcset
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false
}: OptimizedImageProps) => {
  // Check if it's an Unsplash image
  const isUnsplash = src.includes('unsplash.com');

  // Generate responsive srcset for Unsplash images
  const srcset = useMemo(() => {
    if (!isUnsplash) return undefined;

    // Generate responsive widths based on base width
    const baseWidth = width;
    const widths: number[] = [];
    
    // Add smaller sizes for mobile
    if (baseWidth >= 400) widths.push(400);
    if (baseWidth >= 800) widths.push(800);
    // Add base width if not already included
    if (!widths.includes(baseWidth) && baseWidth > 400) {
      widths.push(baseWidth);
    }
    // Add larger sizes for retina displays (up to 2x)
    if (baseWidth * 1.5 <= 1600) widths.push(Math.min(1600, Math.round(baseWidth * 1.5)));
    if (baseWidth * 2 <= 1600) widths.push(Math.min(1600, baseWidth * 2));
    
    // Remove duplicates and sort
    const uniqueWidths = [...new Set(widths)].sort((a, b) => a - b);
    
    return uniqueWidths
      .map(w => `${optimizeUnsplashUrl(src, w, 70)} ${w}w`)
      .join(', ');
  }, [src, width, isUnsplash]);

  // Optimized src
  const optimizedSrc = useMemo(() => {
    return optimizeUnsplashUrl(src, width, 70);
  }, [src, width]);

  // Default sizes for different use cases
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <img
      src={optimizedSrc}
      srcSet={srcset}
      sizes={defaultSizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : fetchPriority}
      decoding="async"
    />
  );
};

export default OptimizedImage;
