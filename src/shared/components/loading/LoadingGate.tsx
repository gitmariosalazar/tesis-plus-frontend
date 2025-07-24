// components/LoadingGate.tsx
import { useEffect, useState, ReactNode } from 'react';
import Loading from './Loading';

interface LoadingGateProps {
  duration?: number;
  children?: ReactNode;
}

const LoadingGate = ({ duration = 1000, children }: LoadingGateProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return <>{ready ? children : <Loading />}</>;
};

export default LoadingGate;
