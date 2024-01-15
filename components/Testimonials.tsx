import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  return (
    <section id='testimonials' className='my-6'>
      <h2 className='text-[22px] font-semibold mb-2 text-center'>
        Відгуки учнів
      </h2>
      {/* Carousel with testimonials */}
      <div className='bg-[#F2F2F2] w-full text-center flex flex-col items-center gap-4 px-4 my-4 '>
        <div className='rounded-full overflow-hidden w-[150px] h-[150px] border-2 border-orange-500 mt-5	 '>
          <Image
            src='/tutor.jpg'
            height={150}
            width={150}
            alt='testimonial'
            className='bg-transparent'
          />
        </div>
        <h2 className='text-xl font-[500]'>Рейчел</h2>
        <p className='text-[13px] leading-[16px] pb-6'>
          Я в захваті! Англійська це кайф. Такого зі мною ніколи не траплялось.
          Це краще ніж грушевий сидр. Я в захваті. Окремо дякую вчителям...
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
