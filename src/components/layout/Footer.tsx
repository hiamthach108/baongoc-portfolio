import Link from 'next/link';

import React from 'react';

import { EMAIL, PHONE } from '@/config/constants/social.const';

const Footer = () => {
  return (
    <footer className="text-center py-10 bg-gray-200">
      <h1 className="font-heading text-3xl font-semibold">tran minh bao ngoc</h1>
      <Link href={`mailto:${EMAIL}`} className=" text-primary my-2 block">
        {EMAIL}
      </Link>
      <p>{PHONE}</p>
    </footer>
  );
};

export default Footer;
