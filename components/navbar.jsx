'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  }

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex items-center justify-center p-6 bg-transparent lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex absolute top-[28px] right-3 items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setIsOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden items-center lg:flex lg:gap-x-12'>
          {/* Navlinks */}

          <Link
            href='/'
            className={`${
              pathname === '/'
                ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                : ''
            } text-lg text-[#818181]  hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6`}
          >
            Про Школу
          </Link>
          <Link
            href='/courses'
            className={`${
              pathname === '/courses'
                ? 'bg-[#FCCF8D] hover:bg-[#FCCF8D] text-black '
                : ''
            } text-lg text-[#818181]  hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6`}
          >
            Курси
          </Link>
          <Link
            href='/testimonials'
            className={`${
              pathname === '/testimonials'
                ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                : ''
            } text-lg text-[#818181]  hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 `}
          >
            Відгуки студентів
          </Link>
          <Link
            href='/faq'
            className={`${
              pathname === '/faq'
                ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                : ''
            } text-lg text-[#818181]  hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 `}
          >
            Часті питання
          </Link>
          <Link
            href='/testing'
            className={`${
              pathname === '/testing'
                ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                : ''
            } text-lg text-[#818181]  hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 `}
          >
            Тестування
          </Link>
          <Link
            href='/subscribe'
            className={` ${
              pathname === '/subscribe'
                ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                : ''
            } flex gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black `}
          >
            <span aria-hidden='true'>
              <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
            </span>
            Записатися на урок
          </Link>
        </Popover.Group>
      </nav>

      {/* Mobile Nav  */}
      <AnimatePresence>
        <Dialog
          as='div'
          className='lg:hidden'
          open={isOpen}
          onClose={setIsOpen}
        >
          <motion.div
            initial='hidden'
            animate={isOpen ? 'visible' : 'hidden'}
            exit='hidden'
            variants={navContainer}
          >
            <div className='fixed inset-0 z-10' />
            <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <Link href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Study Buddy</span>
                  <img className='h-8 w-auto' src='/logo.png' alt='' />
                </Link>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  onClick={() => setIsOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    <Link
                      href='/'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setIsOpen(false)}
                    >
                      Про Школу
                    </Link>
                    <Link
                      href='/courses'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setIsOpen(false)}
                    >
                      Курси
                    </Link>
                    <Link
                      href='/testimonials'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setIsOpen(false)}
                    >
                      Відгуки студентів
                    </Link>
                    <Link
                      href='/faq'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setIsOpen(false)}
                    >
                      Часті Питання
                    </Link>
                    <Link
                      href='/testing'
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      onClick={() => setIsOpen(false)}
                    >
                      Тестування
                    </Link>
                  </div>
                  <div className='py-6'>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href='/subscribe'
                      className={` ${
                        pathname === '/subscribe'
                          ? 'bg-[#FCCF8D] text-black hover:bg-[#FCCF8D]'
                          : ''
                      } flex gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black `}
                    >
                      <span aria-hidden='true'>
                        <img
                          className='h-6 w-6 '
                          src='/icons/icon_pen.svg'
                          alt=''
                        />
                      </span>
                      Записатися на урок
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      </AnimatePresence>
    </header>
  )
}
