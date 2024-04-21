'use client'

import { motion } from 'framer-motion'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation'
import Card from '@/components/card'
import { SUBSCRIBE_BOTTOM_CARD } from '../constants'

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

      <Card content={SUBSCRIBE_BOTTOM_CARD} />
    </div>
  )
}

export default Subscribe
