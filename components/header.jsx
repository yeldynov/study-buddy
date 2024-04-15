import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className='h-[488px] bg-[#FEEFD9] bg-opacity-30 flex relative'>
        <Link href='/'>
          <img
            src='hero-image.png'
            alt=''
            className='self-center px-5 lg:px-0 lg:m-[92px] lg:ml-[236px] lg:mr-[273px] lg:mb-[106px] object-contain'
          />
        </Link>
      </div>
      <Navbar />
    </div>
  )
}

export default Header
