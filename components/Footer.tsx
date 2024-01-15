import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <section id='footer' className='bg-[#D9D9D9] '>
      <div className='flex justify-between p-6 items-center'>
        <div className='flex flex-col'>
          <Image src='/logo.svg' width={110} height={69} alt='logo' />
        </div>
        <div className='font-[500] text-[15px]'>Ми віримо в твій успіх!</div>
      </div>
      <div className='flex justify-between px-6 pt-2 items-start pb-8'>
        <div className=''>
          <div className='flex flex-col text-[15px] font-[700] gap-2'>
            <Link href='/sign'>Записатися</Link>
            <Link href='/test'>Тестування</Link>
            <Link href='/teachers'>Для вчителів</Link>
          </div>
          <div className='flex flex-col mt-6 p-2 bg-[#E8E8E8]'>
            <h3>Контакти</h3>
            <div className='flex gap-2 mb-1 text-xs items-center'>
              <div className='bg-[#b6b6b6] w-[14px] h-[14px] rounded-full'></div>
              +380 99 321 47 89
            </div>
            <div className='flex gap-2 mb-1 text-xs items-center'>
              <div className='bg-[#b6b6b6] w-[14px] h-[14px] rounded-full'></div>
              +380 99 321 47 89
            </div>
            <div className='flex gap-2 mb-1 text-xs items-center'>
              <div className='bg-[#b6b6b6] w-[14px] h-[14px] rounded-full'></div>
              studybdy@gmail.com
            </div>
          </div>
        </div>
        <div className='font-[500] text-[15px]'>
          <ul className='list-none flex flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.url}
                className={`ursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-2'
                } text-black`}
              >
                <a href={`#${nav.url}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='bg-[#aaaaaa] h-[147px] flex items-end text-center justify-center pb-4'>
        <p>design end development: Ryabohorses studio</p>
      </div>
    </section>
  );
};

export default Footer;
