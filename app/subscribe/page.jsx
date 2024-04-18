'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

const Subscribe = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    console.log('sending form...')

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
          console.log(error)
        }
      )
  }

  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      <h2 className='font-lora underline-offset-8 text-3xl font-medium '>
        Записатися на безкоштовний перший урок
      </h2>
      {/* TOP CARD */}
      <div className='flex flex-col lg:flex-row w-full lg:px-40 px-3 py-8 bg-background'>
        {/* left */}
        <div className='flex-1 self-center'>
          <img src='girl.png' alt='Lusty Girl' />
        </div>
        {/* right */}
        <div className='flex-1 lg:m-3 m-1 lg:mr-10 mr-0'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col lg:gap-8 gap-4 py-6'
          >
            <input
              className='h-10 w-full max-w-[350px] p-2 rounded-md'
              type='text'
              placeholder="Ім'я"
              name='user_name'
            />
            <input
              className='h-10 max-w-[350px] p-2 rounded-md'
              type='text'
              placeholder='Телефон'
              name='user_phone'
            />
            <input
              className='h-10 max-w-[350px] p-2 rounded-md'
              type='email'
              placeholder='E-mail'
              name='user_email'
            />
            <button
              type='submit'
              className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit ;lg:ml-auto mx-auto lg:mr-5'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </button>
            {success && (
              <span className='text-green-600 font-semibold'>
                Ваше повідомлення відправлено, очікуйте дзвінок.
              </span>
            )}
            {error && (
              <span className='text-red-600 font-semibold'>
                Щось пішло не так, спробуйте знову.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* BOTTOM CARD */}
      <div className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'>
        {/* left */}
        <div className='flex-1 lg:m-3 m-1 lg:mr-10 mr-0'>
          <h2 className='font-lora text-2xl font-semibold mb-3'>Тестування</h2>
          <p className='text-sm leading-[110%]'>
            Ви можете пройти тестуваннякурс для тих хто володіє базовими
            знаннями та хоче підвищити свій рівень комунікації, влаштуватися в
            іноземну компанію, працювати з іноземними клієнтами etc.
          </p>
          <div className='flex gap-4 p-2 my-6'>
            <div className='flex flex-1 flex-col gap-6 text-sm'>
              <p className='flex gap-2 text-base'>
                <img src='icons/icon_certificate-24px.svg' alt='' /> Рівень: від
                B1
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
                позавершенню курсу ви зможете говорити на англійскій на будь-які
                теми на роботі
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
            Пройти тест
          </Link>
        </div>
        {/* right */}
        <div className='flex-1 self-end mb-3'>
          <img src='testing.png' alt='Study Buddy Course' />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
