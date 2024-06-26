'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Testing = () => {
  return (
    <div className='p-6 lg:p-20 2xl:px-40 flex flex-col gap-[60px]'>
      {/* TOP */}
      <Link
        target='_blank'
        href='https://docs.google.com/forms/d/e/1FAIpQLSdTAM5FRGowwW3YQoiH6MBWxJEqHqOoYPUq17xj2QsElrbdbQ/viewform?usp=sf_link'
      >
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='font-lora underline underline-offset-8 text-3xl font-medium mb-[26px] hover:text-blue-800'
        >
          Пройти тестування
        </motion.h2>
      </Link>
    </div>
  )
}

export default Testing
