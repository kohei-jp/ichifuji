import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react'

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '-30px',
    triggerOnce: true,
  });

  const BottomIn = keyframes({
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.6,
    },
    '100%': {
      opacity: 1,
    },
  });

  return (
    <div
      ref={ref}
      css={{
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn