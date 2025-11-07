import { useState } from 'react';
import Spline from '@splinetool/react-spline';

function ErrorBoundary({ children, fallback = null }) {
  const [hasError, setHasError] = useState(false);
  if (hasError) return fallback;
  return (
    <div
      // Use an error boundary via event handler since functional boundaries aren't native.
      // Spline internally may throw; we defensively catch render errors.
      onError={() => setHasError(true)}
    >
      {children}
    </div>
  );
}

export default function SafeSpline({ scene }) {
  return (
    <ErrorBoundary fallback={null}>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
    </ErrorBoundary>
  );
}
