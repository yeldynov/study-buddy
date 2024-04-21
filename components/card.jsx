'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Card = ({ content }) => {
  const {
    title,
    description,
    details,
    benefits,
    icons,
    image,
    subscribeLink,
    btnText,
  } = content

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className='flex flex-col-reverse lg:flex-row w-full px-7 py-8 bg-background'
    >
      <div className='flex-1 flex flex-col justify-between 2xl:py-6 lg:m-3 m-1 lg:mr-10 mr-0'>
        <h2 className='font-lora text-2xl font-semibold mb-3'>{title}</h2>
        <p className='text-sm leading-[110%]'>{description}</p>
        <div className='flex gap-4 p-2 my-6'>
          <div className='flex flex-1 flex-col gap-6 text-sm'>
            {details.map((detail, index) => (
              <p
                key={index}
                className={`flex items-center gap-2 ${
                  index === details.length - 1 ? 'font-bold' : ''
                }`}
              >
                <img src={icons[index]} alt='' className='w-4 h-4' /> {detail}
              </p>
            ))}
          </div>
          <div className='flex flex-1 flex-col gap-6 text-sm leading-[15.4px]'>
            {benefits.map((benefit, index) => (
              <p key={index} className='flex items-center gap-2'>
                <img
                  src='icons/icon_checkmark-12px.svg'
                  alt=''
                  className='w-4 h-4 inline-block'
                />{' '}
                {benefit}
              </p>
            ))}
          </div>
        </div>
        <Link
          href={subscribeLink}
          className='flex bg-white gap-2 h-6 p-5 items-center justify-center text-lg text-[#818181]  leading-6 border border-[#FAAF41] rounded-lg shadow-[2px_2px_0px_0px_rgba(255,184,0)] hover:bg-[#FEE9CAB3] active:bg-[#FAAF41] active:text-black w-fit mx-auto'
        >
          <span aria-hidden='true'>
            <img className='h-6 w-6 ' src='/icons/icon_pen.svg' alt='' />
          </span>
          {btnText}
        </Link>
      </div>
      <div className='flex-1 self-end mb-3'>
        <img src={image} alt='Course' className='object-cover w-full' />
      </div>
    </motion.div>
  )
}

export default Card
