'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ACCORDION_ITEMS } from '../constants'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className='p-0 lg:p-20 2xl:px-40 flex flex-col gap-10'>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='px-6 font-lora text-3xl font-medium'
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
        {ACCORDION_ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            activeIndex={activeIndex}
            onItemClick={handleItemClick}
          />
        ))}
      </motion.div>
    </div>
  )
}

const AccordionItem = ({
  index,
  question,
  answer,
  activeIndex,
  onItemClick,
}) => {
  return (
    <div
      className='group flex flex-col gap-2 rounded-lg bg-background p-5 text-black'
      tabIndex={index}
    >
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => onItemClick(index)}
      >
        <span className='font-semibold pr-2'>{question}</span>
        <img
          src='icons/icon_player_down-40px.svg'
          className={`h-8 w-8 transition-all duration-500 ${
            activeIndex === index ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`${
          activeIndex === index
            ? 'visible max-h-screen opacity-100 duration-1000'
            : 'invisible max-h-0 opacity-0'
        } transition-all h-auto items-center pr-10`}
      >
        {answer}
      </div>
    </div>
  )
}

export default FAQ
