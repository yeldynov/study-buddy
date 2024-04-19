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
      <div className='h-[488px] items-center bg-[#FEEFD9] bg-opacity-30 flex relative'>
        <Link href='/'>
          <img
            src='hero-image.png'
            alt=''
            className='self-center px-5 lg:px-0 lg:m-[92px] xl:ml-[236px] lg:mr-[273px] lg:mb-[106px] object-contain'
          />
        </Link>
      </div>
      <Navbar />
    </motion.div>
  )
}

export default Header
