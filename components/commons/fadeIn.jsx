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
      // transform: `translateY(${sizes[4]})`,
    },
    '50%': {
      opacity: 0.5,
      // transform: `translateY(${sizes[2]})`,
    },
    '100%': {
      opacity: 1,
      // transform: `translateY(0)`,
    },
  });

  return (
    <div
      ref={ref}
      css={{
        // margin: `${sizes[16]} auto 0`,
        textAlign: 'center',
        // color: colors.blue,
        opacity: inView ? 1 : 0,
        animation: inView ? `${BottomIn} 0.5s ease-out` : 0,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn