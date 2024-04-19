'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Testing = () => {
  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      {/* TOP */}
      <Link href='/'>
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
