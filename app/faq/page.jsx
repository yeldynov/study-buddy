'use client'

import { motion } from 'framer-motion'

const FAQ = () => {
  return (
    <div className='p-0 lg:p-20 flex flex-col gap-10'>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='px-6 font-lora text-3xl font-medium  '
      >
        Часті Питання
      </motion.h2>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='m-2 space-y-5'
      >
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={1}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити?
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Так! Спеціально розроблений курс для тих хто володіє базовими
            знаннями тa хоче підвищити свій рівень комунікації, влаштуватися в
            іноземну компанію, працювати з іноземними клієнтами. Спеціально
            розроблений курс для тих хто володіє базовими знаннями тa хоче
            підвищити свій рівень комунікації, влаштуватися в іноземну компанію,
            працювати з іноземними клієнтами. Спеціально розроблений курс для
            тих хто володіє базовими знаннями тa хоче підвищити свій рівень
            комунікації, влаштуватися в іноземну компанію, працювати з
            іноземними клієнтами. Так! Спеціально розроблений курс для тих хто
            володіє базовими знаннями тa хоче підвищити свій рівень комунікації,
            влаштуватися в іноземну компанію, працювати з іноземними клієнтами.
            Спеціально розроблений курс для тих хто володіє базовими знаннями тa
            хоче підвищити свій рівень комунікації, влаштуватися в іноземну
            компанію, працювати з іноземними клієнтами. Спеціально розроблений
            курс для тих хто володіє базовими знаннями тa хоче підвищити свій
            рівень комунікації, влаштуватися в іноземну компанію, працювати з
            іноземними клієнтами.
          </div>
        </div>

        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={2}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>

        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={3}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={4}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={5}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={6}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={7}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div
          className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
          tabIndex={8}
        >
          <div className='flex cursor-pointer items-center justify-between'>
            <span className='font-semibold pr-2'>
              {' '}
              Спеціально розроблений курс для тих хто володіє базовими знаннями
              тa хоче підвищити свій рівень комунікації, влаштуватися в іноземну
              компанію, працювати з іноземними клієнтами?{' '}
            </span>
            <img
              src='icons/icon_player_down-40px.svg'
              className='h-8 w-8 transition-all duration-500 group-focus:-rotate-180'
            />
          </div>
          <div className='invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 pr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FAQ
