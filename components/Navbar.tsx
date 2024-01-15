'use client';

import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='w-full absolute z-10 bg-[#F0F0F0]'>
      <nav className='max-w-[1440px] relative mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/'>
          <Image
            src='/icon-phone.svg'
            alt='Car Hub Logo'
            width={31}
            height={38}
            className='object-contain'
          />
        </Link>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='Car Hub Logo'
            width={62}
            height={38}
            className='object-contain'
          />
        </Link>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <GrClose size={40} color='#554F4F' />
          ) : (
            <GiHamburgerMenu size={40} color='#554F4F' />
          )}
        </button>
      </nav>
      <div
        className={`${
          open ? 'flex' : 'hidden'
        }  absolute top-18 w-full items-center justify-center`}
      >
        <ul className='list-none flex flex-col items-center pt-10 bg-white h-screen w-full'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.url}
              className={`font-bold cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mb-6'
              } text-black`}
            >
              <a onClick={() => setOpen(!open)} href={`#${nav.url}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
