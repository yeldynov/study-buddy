import Image from 'next/image';
import React from 'react';

const Tutors = () => {
  return (
    <section id='tutors'>
      <h2 className='text-[22px] font-semibold mb-2 text-center'>
        Наші тьютори
      </h2>
      {/* Carousel with Tutors */}
      <div className='relative overflow-hidden'>
        <Image src='/tutor.jpg' alt='tutor' height={400} width={300} />
        <div className='absolute bottom-0 left-0 w-[1000px] h-32 bg-[#FFB054] -rotate-6' />
        <h2 className='z-20 absolute bottom-8 left-20 text-xl font-semibold'>
          Nikita Yeldynov
        </h2>
      </div>
    </section>
  );
};

export default Tutors;
