import React from 'react';

const WhyUs = () => {
  return (
    <section id='why-us' className='mt-6'>
      <h2 className='text-[22px] font-semibold mb-2 text-center'>
        Чому саме Study Buddy:
      </h2>

      <div className='bg-[#ffd3a1]/70 rounded-xl mx-2 px-6 py-4 mb-4'>
        <h2 className='flex gap-4 font-semibold text-lg mb-2'>
          <div className='bg-[#b6b6b6] w-[28px] h-[28px]'></div>
          Новітній підхід до викладання
        </h2>
        <p className='leading-[17px]'>
          Ми використовуємо методи, що використовуються в школах Кембриджу та
          Оксворду. Цей підхід здатен змінити все.
        </p>
      </div>

      <div className='bg-[#ffd3a1]/70 rounded-xl mx-2 px-6 py-4 mb-4'>
        <h2 className='flex gap-4 font-semibold text-lg mb-2'>
          <div className='bg-[#b6b6b6] w-[28px] h-[28px]'></div>
          Ви навчаєтеся у зручний для
        </h2>
        <p className='leading-[17px]'>
          Ми використовуємо методи, що використовуються в школах Кембриджу та
          Оксворду. Цей підхід здатен змінити все.
        </p>
      </div>

      <div className='bg-[#ffd3a1]/70 rounded-xl mx-2 px-6 py-4 mb-4'>
        <h2 className='flex gap-4 font-semibold text-lg mb-2'>
          <div className='bg-[#b6b6b6] w-[28px] h-[28px]'></div>
          Ми не ставимо оцінок
        </h2>
        <p className='leading-[17px]'>
          Ми використовуємо методи, що використовуються в школах Кембриджу та
          Оксворду. Цей підхід здатен змінити все.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
