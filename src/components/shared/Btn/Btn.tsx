'use client';

import React from 'react';

import clsx from 'clsx';

const Btn = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        'px-8 py-3 border-none cursor-pointer bg-primary outline-none font-sans text-base text-bg hover:opacity-75',
        className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Btn;
