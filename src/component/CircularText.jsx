import React from 'react';
import { useState } from 'react';

export default function CircularText() {
  const text = "thirtysixstudios";
  const letters = text.split('');
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Toggle animation on click
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  
  return (
    <div className="fixed right-60 flex flex-col items-center">
      <div 
        className={`relative w-32 h-32 cursor-pointer ${isAnimating ? 'animate-spin' : ''}`}
        style={{ animationDuration: '8s' }}
        onClick={toggleAnimation}
      >
        {letters.map((letter, index) => {
          const angle = (360 / letters.length) * index;
          return (
            <div 
              key={index}
              className="absolute inset-0 text-lg font-medium text-blue-500"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <span
                className="absolute left-1/2 bottom-0 -translate-x-1/2"
              >
                {letter}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-gray-600">Click to {isAnimating ? 'stop' : 'start'}</p>
    </div>
  );
}