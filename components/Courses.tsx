import React from 'react';
import { Button } from '@/components';
// ADD CAROUSEL
const Courses = () => {
  return (
    <section id='courses' className='mt-6 w-[90%] mx-6'>
      <h2 className='text-[22px] font-semibold mb-2 text-center'>Курси</h2>

      <div className=''>
        <div className='bg-[#FFBB6E] p-8 rounded-t-xl leading-[22px]'>
          <h2 className='text-center font-semibold text-lg mx-16'>
            Граматика базовий
          </h2>
        </div>
        <div className='bg-[##F0F0F0] flex flex-col gap-3 px-4 pt-4'>
          <div className='flex justify-between items-center'>
            <span className='font-[500]'>Рівень</span>
            <span>початковий-просунутий</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-[500]'>Кількість учнів у групі</span>
            <span>1-5</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-[500]'>Час</span>
            <span>55 хв</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-[500]'>Додатково</span>
            <span>набір відкрито</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-[700]'>Вартість</span>
            <span className='font-[700]'>600 грн/урок</span>
          </div>
        </div>
        <Button
          title='Записатися на курс'
          textStyles='font-semibold'
          containerStyles='justify-center my-8 mx-auto'
        />
      </div>
    </section>
  );
};

export default Courses;
