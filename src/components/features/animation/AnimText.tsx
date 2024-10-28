'use client';

import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { HTMLMotionProps, animate, m, useMotionValue, useTransform } from 'framer-motion';

interface Props extends HTMLMotionProps<'span'> {
  text: string;
  delay?: number;
  textStyle?: string;
}

const AnimText = ({ text, delay, textStyle, ...rest }: Props) => {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      delay: delay,
      duration: 2,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
      <m.span {...rest}>{displayText}</m.span>
      {/* <CursorBlinker textStyle={textStyle} /> */}
    </span>
  );
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export function CursorBlinker({ textStyle }: { textStyle?: string }) {
  return (
    <m.div
      variants={cursorVariants}
      animate="blinking"
      className={clsx(
        textStyle ?? 'inline-block h-[50px] w-[1px] translate-y-1 bg-white',
      )}
    />
  );
}

export default AnimText;
