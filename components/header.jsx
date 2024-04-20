'use client'

import Navbar from './navbar'
import Link from 'next/link'

import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='h-[488px] items-center bg-[#FEEFD9] bg-opacity-30 flex justify-center'>
        <Link href='/' className='flex items-center'>
          <img src='hero-image.png' alt='' className='object-contain' />
        </Link>
      </div>
      <Navbar />
    </motion.div>
  )
}

export default Header
