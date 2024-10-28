'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconMail,
  IconMailFilled,
  IconMenu,
  IconPhone,
  IconX,
} from '@tabler/icons-react';
import { useState } from 'react';

import { EMAIL, YOUTUBE } from '@/config/constants/social.const';

import AnimSlide from '../features/animation/AnimSlide';

import clsx from 'clsx';

const NAV_LINKS = [
  {
    id: 'home',
    name: 'Home',
    url: '/',
  },
  { id: 'talent', name: 'Talent', url: '/talent' },
  { id: 'leadership', name: 'Leadership', url: '/leadership' },
  { id: 'honor', name: 'Honor', url: '/honor' },
];

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full max-w-xs h-screen border-r border-solid border-gray-200 border-l-0 border-t-0 border-b-0 flex flex-col justify-between gap-10">
        <h1 className="font-heading text-3xl font-semibold text-center pt-12">
          {/* Tran Minh Bao Ngoc */}
        </h1>
        <div className="flex flex-col justify-center gap-5 text-left pl-12">
          {NAV_LINKS.map((navLink) => (
            <Link
              key={navLink.url}
              href={navLink.url}
              className={clsx(
                'no-underline mt-4 text-base whitespace-nowrap',
                navLink.url === pathname
                  ? 'font-bold text-black'
                  : 'text-[#919191] font-normal',
              )}
            >
              {navLink.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-between md:hidden p-3">
          <Link href={'/'} className="no-underline">
            <h2 className="font-heading text-xl font-semibold  text-black">
              tran minh bao ngoc
            </h2>
          </Link>

          <IconMenu
            size={32}
            className="cursor-pointer"
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        </div>
        <div className="flex items-center gap-2 w-full h-auto max-md:hidden pb-12 pl-12">
          {/* <Link href={`mailto:${EMAIL}`} target="_blank">
            <IconMailFilled
              size={28}
              className="cursor-pointer text-primary hover:text-bg-sky"
            />
          </Link>
          <Link href={YOUTUBE} target="_blank">
            <IconBrandYoutubeFilled
              size={28}
              className="cursor-pointer text-primary hover:text-bg-sky"
            />
          </Link> */}
        </div>
      </header>

      {isMenuOpen && (
        <AnimSlide
          direction="right"
          className="fixed top-0 right-0 left-0 bg-bg h-screen w-full z-50"
        >
          <div className="flex justify-end p-4">
            <IconX
              size={32}
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {NAV_LINKS.map((navLink) => (
              <Link
                key={navLink.url}
                href={navLink.url}
                className="no-underline text-gray-800 mt-4 font-normal text-lg whitespace-nowrap"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {navLink.name}

                {pathname === navLink.url && <div className="h-[1px] w-full bg-black" />}
              </Link>
            ))}
          </div>
        </AnimSlide>
      )}
    </>
  );
};

export default Header;
