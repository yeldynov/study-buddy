'use client'

import { motion } from 'framer-motion'
import { COURSES } from '../constants'
import Card from '@/components/card'

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
        {COURSES.map((course, index) => (
          <Card key={index} content={course} />
        ))}
      </div>
    </div>
  )
}

export default Courses
