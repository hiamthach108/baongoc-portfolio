'use client';

import React from 'react';

import { HTMLMotionProps, m } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {}

const ANIM_DURATION = 8;

const AnimZoomSlow = ({ children, ...rest }: Props) => {
  return (
    <m.div
      // start on scroll
      initial={{ scale: 1 }}
      whileInView={{ scale: [1, 1.15] }}
      transition={{
        duration: ANIM_DURATION,
      }}
      {...rest}
    >
      {children}
    </m.div>
  );
};

export default AnimZoomSlow;
