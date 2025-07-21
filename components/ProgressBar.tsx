import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const progressPercentage = Math.round(progress);
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
        gsap.to(barRef.current, {
            width: `${progressPercentage}%`,
            duration: 0.7,
            ease: 'power3.out'
        });
    }
  }, [progressPercentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-dark-foreground">Overall Plan Progress</span>
        <span className="text-sm font-medium text-dark-muted-foreground">{progressPercentage}%</span>
      </div>
      <div className="w-full bg-dark-secondary rounded-full h-2.5">
        <div
          ref={barRef}
          className="bg-cyan-500 h-2.5 rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;