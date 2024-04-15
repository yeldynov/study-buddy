'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-center p-6 bg-transparent lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex absolute top-[28px] right-6 items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden items-center lg:flex lg:gap-x-12'>
          {/* Navlinks */}

          <a
            href='#'
            className='text-lg text-[#818181] hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black font-ibmplex leading-6 '
          >
            Про Школу
          </a>
          <a
            href='#'
            className='text-lg text-[#818181] hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 '
          >
            Курси
          </a>
          <a
            href='#'
            className='text-lg text-[#818181] hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 '
          >
            Відгуки студентів
          </a>
          <a
            href='#'
            className='text-lg text-[#818181] hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 '
          >
            Часті питання
          </a>
          <a
            href='#'
            className='text-lg text-[#818181] hover:bg-[#FEE9CAB3] p-2 px-3 rounded-lg active:bg-[#FBBF67] active:text-black leading-6 '
          >
            Тестування
          </a>
          <a
            href='#'
            className='flex gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181] leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black  '
          >
            <span aria-hidden='true'>
              <img className='h-6 w-6 ' src='/icon_pen.svg' alt='' />
            </span>
            Записатися на урок
          </a>
        </Popover.Group>
      </nav>

      {/* Mobile Nav  */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Study Buddy</span>
              <img className='h-8 w-auto' src='/logo.png' alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Про Школу
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Курси
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Відгуки студентів
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Часті Питання
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Тестування
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  <span aria-hidden='true'>&rarr;</span> Записатися на урок
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
