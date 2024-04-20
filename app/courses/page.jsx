'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Courses = () => {
  return (
    <div className='p-6 lg:p-20 2xl:px-40 flex flex-col'>
      <motion.h2
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='font-lora text-3xl font-medium mb-[26px]'
      >
        Курси та програми
      </motion.h2>
      <div className='flex flex-col gap-8'>
        {/* COURSE CARD */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
        >
          {/* left */}
          <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
            <h2 className='font-lora text-2xl font-semibold mb-3'>
              Business English
            </h2>
            <p className='text-sm leading-[110%]'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              та хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами etc.
            </p>
            <div className='flex gap-4 p-2 my-6'>
              <div className='flex flex-1 flex-col gap-6 text-sm'>
                <p className='flex gap-2 text-base'>
                  <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень:
                  від B1
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_user.svg' alt='' /> Кількість студентів:
                  від 2 до 5
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_clock-40px.svg' alt='' /> Тривалість
                  заняття: 60 хвилин
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_bullseye.svg' alt='' /> Тривалість курсу:
                  2-3 місяці
                </p>
                <p className='flex gap-2 font-bold'>
                  <img src='icons/icon_credit-1card.svg' alt='' /> Вартість
                  заняття: 500₴/15 usd
                </p>
              </div>
              <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Спілкування
                  на англійскій, граматика, аудіювання, пропрацювання основних
                  тем.
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> В
                  позавершенню курсу ви зможете говорити на англійскій на
                  будь-які теми на роботі
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Також
                  отримаєте всі методичні матеріали та менторську сесію з
                  провідним викладачем
                </p>
              </div>
            </div>
            <Link
              href='/subscribe'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </Link>
          </div>
          {/* right */}
          <div className='flex-1 self-end mb-3'>
            <img
              src='courses/courses-0.png'
              alt='Study Buddy Course'
              className='object-cover w-full'
            />
          </div>
        </motion.div>
        {/* COURSE CARD */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
        >
          {/* left */}
          <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
            <h2 className='font-lora text-2xl font-semibold mb-3'>
              Business English
            </h2>
            <p className='text-sm leading-[110%]'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              та хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами etc.
            </p>
            <div className='flex gap-4 p-2 my-6'>
              <div className='flex flex-1 flex-col gap-6 text-sm'>
                <p className='flex gap-2 text-base'>
                  <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень:
                  від B1
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_user.svg' alt='' /> Кількість студентів:
                  від 2 до 5
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_clock-40px.svg' alt='' /> Тривалість
                  заняття: 60 хвилин
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_bullseye.svg' alt='' /> Тривалість курсу:
                  2-3 місяці
                </p>
                <p className='flex gap-2 font-bold'>
                  <img src='icons/icon_credit-1card.svg' alt='' /> Вартість
                  заняття: 500₴/15 usd
                </p>
              </div>
              <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Спілкування
                  на англійскій, граматика, аудіювання, пропрацювання основних
                  тем.
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> В
                  позавершенню курсу ви зможете говорити на англійскій на
                  будь-які теми на роботі
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Також
                  отримаєте всі методичні матеріали та менторську сесію з
                  провідним викладачем
                </p>
              </div>
            </div>
            <Link
              href='/subscribe'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </Link>
          </div>
          {/* right */}
          <div className='flex-1 self-end mb-3'>
            <img
              src='courses/courses-1.png'
              alt='Study Buddy Course'
              className='object-cover w-full'
            />
          </div>
        </motion.div>
        {/* COURSE CARD */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
        >
          {/* left */}
          <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
            <h2 className='font-lora text-2xl font-semibold mb-3'>
              Business English
            </h2>
            <p className='text-sm leading-[110%]'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              та хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами etc.
            </p>
            <div className='flex gap-4 p-2 my-6'>
              <div className='flex flex-1 flex-col gap-6 text-sm'>
                <p className='flex gap-2 text-base'>
                  <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень:
                  від B1
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_user.svg' alt='' /> Кількість студентів:
                  від 2 до 5
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_clock-40px.svg' alt='' /> Тривалість
                  заняття: 60 хвилин
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_bullseye.svg' alt='' /> Тривалість курсу:
                  2-3 місяці
                </p>
                <p className='flex gap-2 font-bold'>
                  <img src='icons/icon_credit-1card.svg' alt='' /> Вартість
                  заняття: 500₴/15 usd
                </p>
              </div>
              <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Спілкування
                  на англійскій, граматика, аудіювання, пропрацювання основних
                  тем.
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> В
                  позавершенню курсу ви зможете говорити на англійскій на
                  будь-які теми на роботі
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Також
                  отримаєте всі методичні матеріали та менторську сесію з
                  провідним викладачем
                </p>
              </div>
            </div>
            <Link
              href='/subscribe'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </Link>
          </div>
          {/* right */}
          <div className='flex-1 self-end mb-3'>
            <img
              src='courses/courses-2.png'
              alt='Study Buddy Course'
              className='object-cover w-full'
            />
          </div>
        </motion.div>
        {/* COURSE CARD */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
        >
          {/* left */}
          <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
            <h2 className='font-lora text-2xl font-semibold mb-3'>
              Business English
            </h2>
            <p className='text-sm leading-[110%]'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              та хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами etc.
            </p>
            <div className='flex gap-4 p-2 my-6'>
              <div className='flex flex-1 flex-col gap-6 text-sm'>
                <p className='flex gap-2 text-base'>
                  <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень:
                  від B1
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_user.svg' alt='' /> Кількість студентів:
                  від 2 до 5
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_clock-40px.svg' alt='' /> Тривалість
                  заняття: 60 хвилин
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_bullseye.svg' alt='' /> Тривалість курсу:
                  2-3 місяці
                </p>
                <p className='flex gap-2 font-bold'>
                  <img src='icons/icon_credit-1card.svg' alt='' /> Вартість
                  заняття: 500₴/15 usd
                </p>
              </div>
              <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Спілкування
                  на англійскій, граматика, аудіювання, пропрацювання основних
                  тем.
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> В
                  позавершенню курсу ви зможете говорити на англійскій на
                  будь-які теми на роботі
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Також
                  отримаєте всі методичні матеріали та менторську сесію з
                  провідним викладачем
                </p>
              </div>
            </div>
            <Link
              href='/subscribe'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </Link>
          </div>
          {/* right */}
          <div className='flex-1 self-end mb-3'>
            <img
              src='courses/courses-3.png'
              alt='Study Buddy Course'
              className='object-cover w-full'
            />
          </div>
        </motion.div>
        {/* COURSE CARD */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
        >
          {/* left */}
          <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
            <h2 className='font-lora text-2xl font-semibold mb-3'>
              Business English
            </h2>
            <p className='text-sm leading-[110%]'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              та хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами etc.
            </p>
            <div className='flex gap-4 p-2 my-6'>
              <div className='flex flex-1 flex-col gap-6 text-sm'>
                <p className='flex gap-2 text-base'>
                  <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень:
                  від B1
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_user.svg' alt='' /> Кількість студентів:
                  від 2 до 5
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_clock-40px.svg' alt='' /> Тривалість
                  заняття: 60 хвилин
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_bullseye.svg' alt='' /> Тривалість курсу:
                  2-3 місяці
                </p>
                <p className='flex gap-2 font-bold'>
                  <img src='icons/icon_credit-1card.svg' alt='' /> Вартість
                  заняття: 500₴/15 usd
                </p>
              </div>
              <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Спілкування
                  на англійскій, граматика, аудіювання, пропрацювання основних
                  тем.
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> В
                  позавершенню курсу ви зможете говорити на англійскій на
                  будь-які теми на роботі
                </p>
                <p className='flex gap-2'>
                  <img src='icons/icon_checkmark-12px.svg' alt='' /> Також
                  отримаєте всі методичні матеріали та менторську сесію з
                  провідним викладачем
                </p>
              </div>
            </div>
            <Link
              href='/subscribe'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </Link>
          </div>
          {/* right */}
          <div className='flex-1 self-end mb-3'>
            <img
              src='courses/courses-4.png'
              alt='Study Buddy Course'
              className='object-cover w-full'
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Courses
