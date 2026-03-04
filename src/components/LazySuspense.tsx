import { Suspense, type ReactNode } from 'react';

interface LazySuspenseProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * LazySuspense Component
 * Wrapper for lazy-loaded components with a loading fallback
 */
const LazySuspense = ({ 
  children, 
  fallback = <div style={{ minHeight: '200px' }} aria-label="Loading content..." /> 
}: LazySuspenseProps) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default LazySuspense;
