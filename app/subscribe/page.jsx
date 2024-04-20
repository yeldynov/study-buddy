'use client'

import { motion } from 'framer-motion'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Subscribe = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)

    const formData = new FormData(form.current)
    const data = {}
    let hasError = false

    formData.forEach((value, key) => {
      if (!value) {
        hasError = true
      }
      data[key] = value
    })

    if (hasError) {
      setError(true)
      return
    }

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
          setTimeout(() => {
            router.push('/')
          }, 5000)
        },
        (error) => {
          setError(true)
          console.log(error)
        }
      )
  }

  return (
    <div className='p-6 lg:p-20 2xl:px-40 flex flex-col gap-[60px]'>
      <motion.h2
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='font-lora text-2xl lg:text-3xl font-medium mb-[26px]'
      >
        Записатися на безкоштовний перший урок
      </motion.h2>
      {/* TOP CARD */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='flex flex-col lg:flex-row w-full lg:px-40 px-3 py-8 bg-background'
      >
        {/* left */}
        <div className='flex-1 self-center'>
          <img src='girl.png' alt='Lusty Girl' />
        </div>
        {/* right */}
        <div className='flex-1 lg:m-3 m-1 lg:mr-10 mr-0'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col items-center lg:gap-8 gap-4 pt-6 pb-1'
          >
            <input
              className='h-10 w-full lg:w-[350px] p-2 rounded-md'
              type='text'
              placeholder="Ім'я"
              name='user_name'
              onChange={() => setError(false)}
            />
            <input
              className='h-10 w-full lg:w-[350px] p-2 rounded-md'
              type='text'
              placeholder='Телефон'
              name='user_phone'
              onChange={() => setError(false)}
            />
            <input
              className='h-10 w-full lg:w-[350px] p-2 rounded-md'
              type='email'
              placeholder='E-mail'
              name='user_email'
              onChange={() => setError(false)}
            />
            <button
              type='submit'
              className='flex bg-white gap-2 h-6 p-5 mt-4 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit lg:ml-auto mx-auto'
            >
              <span aria-hidden='true'>
                <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
              </span>
              Записатися на урок
            </button>
            {success && (
              <span className='text-green-600 font-semibold'>
                Ваше повідомлення відправлено. Ви будете перенаправлені на
                головну сторінку...
              </span>
            )}
            {error && (
              <span className='text-red-600 font-semibold'>
                Щось пішло не так, спробуйте знову.
              </span>
            )}
          </form>
        </div>
      </motion.div>

      {/* BOTTOM CARD */}
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
          <img
            src='testing.png'
            alt='Study Buddy Course'
            className='object-cover w-full'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Subscribe
