'use client';

import { Disclosure } from '@headlessui/react';
import { BsArrowDown } from 'react-icons/bs';

const FAQ = () => {
  return (
    <section id='faq' className='mt-6'>
      <h2 className='text-[22px] font-semibold mb-2 text-center'>
        Часті питання
      </h2>
      <div>
        <div className='w-full '>
          <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями Бібера?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-2'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями Мадони?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-2'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями Бобера?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-2'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями Бората?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-2'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями Біби?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as='div' className='mt-2'>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg bg-[#FFD3A1] px-4 py-4 text-left text-sm font-medium text-black hover:bg-[#F2C899] focus:outline-none focus-visible:ring focus-visible:ring-[#F2C899] focus-visible:ring-opacity-75'>
                    <span className='font-[500] text-[14px]'>
                      Чи можна вивчити мову за піснями. Борщ?
                    </span>
                    <BsArrowDown
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                    Так, можна.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
