'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <div className='bg-[#DCDCDC] px-20'>
      {/* FIRST ROW */}
      <div className='lg:p-10 p-0 py-10 items-start flex flex-col lg:flex-row gap-5 justify-around'>
        <div className='flex flex-col gap-7 self-center'>
          <img className='w-[110px]' src='/logo.png' alt='' />
          <p className='hidden lg:block'>
            English for <span className='font-medium'>your life</span>
          </p>
        </div>
        <div className='hidden lg:flex flex-col gap-3 mt-3 text-[#4E4E4E]'>
          <h5 className='font-semibold mb-4 text-xl'>Курси та програми</h5>
          <Link
            href='/courses/business-english'
            className='my-2.5 border-transparent border-b hover:border-yellow-400 w-fit'
          >
            Business English
          </Link>
          <Link
            href='/courses/business-english'
            className='my-2.5 border-transparent border-b hover:border-yellow-400 w-fit'
          >
            Business English English
          </Link>
          <Link
            href='/courses/business-english'
            className='my-2.5 border-transparent border-b hover:border-yellow-400 w-fit'
          >
            Business English
          </Link>
          <Link
            href='/courses/business-english'
            className='my-2.5 border-transparent border-b hover:border-yellow-400 w-fit'
          >
            Business English English
          </Link>
          <Link
            href='/courses/business-english'
            className='my-2.5 border-transparent border-b hover:border-yellow-400 w-fit'
          >
            Business English
          </Link>
        </div>
        <div className='hidden lg:flex flex-col gap-4 mt-3 text-xl text-[#4E4E4E]'>
          <Link
            href='/'
            className={`${
              pathname === '/' ? 'border-yellow-400 text-black' : ''
            } font-semibold border-b border-transparent  pb-2.5 hover:border-yellow-400 w-fit hover:text-black`}
          >
            Про Школу
          </Link>
          <Link
            href='/testimonials'
            className={`${
              pathname === '/testimonials' ? 'border-yellow-400 text-black' : ''
            } font-semibold border-b border-transparent  pb-2.5 hover:border-yellow-400 w-fit hover:text-black`}
          >
            Відгуки студентів
          </Link>
          <Link
            href='/faq'
            className={`${
              pathname === '/faq' ? 'border-yellow-400 text-black' : ''
            } font-semibold border-b border-transparent  pb-2.5 hover:border-yellow-400 w-fit hover:text-black`}
          >
            Часті питання
          </Link>
          <Link
            href='/testing'
            className={`${
              pathname === '/testing' ? 'border-yellow-400 text-black' : ''
            } font-semibold border-b border-transparent  pb-2.5 hover:border-yellow-400 w-fit hover:text-black`}
          >
            Тестування
          </Link>
          <Link
            href='/subscribe'
            className={`${
              pathname === '/subscribe' ? 'border-yellow-400 text-black' : ''
            } font-semibold border-b border-transparent  pb-2.5 hover:border-yellow-400 w-fit hover:text-black`}
          >
            Записатися на урок
          </Link>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-4 mt-3 text-[#4E4E4E]'>
          <h5 className='hidden lg:block font-semibold mb-4 text-xl'>
            Контакти
          </h5>

          <Link
            target='_blank'
            href='callto:099-987-65-43'
            className='flex gap-2 text-lg hover:border-yellow-400 hover:text-black border-b border-transparent w-fit'
          >
            <img src='/icons/icon_whats-12px.svg' alt='' />
            099-987-65-43
          </Link>
          <Link
            target='_blank'
            href='https://instagram.com/study_buddy'
            className='flex gap-2 text-lg hover:border-yellow-400 hover:text-black border-b border-transparent w-fit'
          >
            <img src='/icons/icon_inst-12px.svg' alt='' />
            study_buddy
          </Link>
          <Link
            target='_blank'
            href='https://facebook.com/study_buddy'
            className='flex gap-2 text-lg hover:border-yellow-400 hover:text-black border-b border-transparent w-fit'
          >
            <img src='/icons/icon_fb-12px.svg' alt='' />
            study_buddy
          </Link>
          <Link
            target='_blank'
            href='mailto:study_buddy@gmail.com'
            className='flex gap-2 text-lg hover:border-yellow-400 hover:text-black border-b border-transparent w-fit'
          >
            <img src='/icons/icon_email-12px.svg' alt='' />
            study_buddy@gmail.com
          </Link>
        </div>
      </div>
      {/* SECOND ROW */}
      <Link
        target='_blank'
        href='https://github.com/yeldynov'
        className='lg:flex block text-center flex-col items-center justify-center pb-10 gap-1 lg:flex-row text-[#A2A2A2] text-xl border-t-[#A2A2A2] border-t lg:w-1/2 w-full mx-auto pt-3 hover:font-semibold'
      >
        <span className='text-[#FF390080]'>Red </span>{' '}
        <span className='text-[#818181]'>Horses </span> studio, 2024
      </Link>
    </div>
  )
}

export default Footer
