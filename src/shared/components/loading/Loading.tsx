// components/Loading.tsx
import React, { useEffect, useState } from 'react';
import './Loading.css';
import { Flex, Progress } from 'antd';
import type { ProgressProps } from 'antd';

interface LoadingProps {
  duration?: number;
}

const Loading: React.FC<LoadingProps> = () => {
  const tenColors: ProgressProps['strokeColor'] = {
    '0%': '#ff4d4f',
    '10%': '#ff7a45',
    '20%': '#ffa940',
    '30%': '#ffc53d',
    '40%': '#ffec3d',
    '50%': '#bae637',
    '60%': '#73d13d',
    '70%': '#52c41a',
    '80%': '#389e0d',
    '100%': '#237804',
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-container">
      <Flex gap="small" wrap>
        <Progress type="circle" percent={progress} strokeColor={tenColors} />
      </Flex>
    </div>
  );
};

export default Loading;
