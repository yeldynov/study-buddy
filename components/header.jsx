import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div>
      <div className='h-[488px] bg-[#FEEFD9] bg-opacity-30 flex relative'>
        <img
          src='hero-image.png'
          alt=''
          className='self-center px-5 lg:px-0 lg:m-[92px] lg:ml-[236px] lg:mr-[273px] lg:mb-[106px] object-contain'
        />
      </div>
      {/* Navbar */}
      <Navbar />
    </div>
  )
}

export default Header
