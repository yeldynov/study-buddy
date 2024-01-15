'use client';

import { useState } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='about' className='mt-8 bg-[#f0f0f0] w-full text-center pt-6'>
      <div className='mx-10 relative pb-2'>
        <h2 className='text-[22px] font-semibold mb-2'>Про школу</h2>
        {!open ? (
          <p className='text-left text-base leading-[19px]'>
            Ми використовуємо методи, що вистовуються в школах Кембриджу та
            Оксворду. Цей підхід здатен змінити все...Ми використовуємо тоди, що
            використовуються в школах Кембриджу та Оксворду. Цей підхід здатен
            змінити все в школах Кембриджу в школах...
          </p>
        ) : (
          <p className='text-left text-base leading-[19px]'>
            Ми використовуємо методи, що ристовуються в школах Кембриджу та
            Оксворду. Цей підхід здатен змінити все...Ми використовуємо тоди, що
            використовуються в школах Кембриджу та Оксворду. Цей підхід здатен
            змінити Ми використовуємо методи, що ристовуються в школах Кембриджу
            та Оксворду. Цей підхід здатен змінити все...Ми використовуємо тоди,
            що використовуються в школах Кембриджу та Оксворду. Цей підхід
            здатен змінити Ми використовуємо методи, що ристовуються в школах
            Кембриджу та Оксворду. Цей підхід здатен змінити все...Ми
            використовуємо тоди, що використовуються в школах Кембриджу та
            Оксворду. Цей підхід здатен!
          </p>
        )}
        <button
          className='absolute bottom-2 right-0'
          onClick={() => setOpen(!open)}
        >
          {!open ? <BsArrowDown /> : <BsArrowUp />}
        </button>
      </div>
    </section>
  );
};

export default About;
