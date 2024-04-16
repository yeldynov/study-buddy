import React from 'react'

const About = () => {
  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      {/* TOP */}
      <div className=''>
        <h2 className='font-lora text-3xl font-medium mb-[26px]'>
          Наша історія та місія
        </h2>
        <p className=' leading-[20.8px]'>
          Ми використовуємо методи, що використовуються в школах Кембриджу та
          Оксворду. Цей підхід здатен змінити все. Ми використовуємо методи, що
          використовуються в школах. Ми використовуємо методи, більше про
          нагороди. Ми використовуємо методи, що використовуються в школах
          Кембриджу та Оксворду. Цей підхід здатен змінити все. Ми
          використовуємо методи, що використовуються в школах. Ми використовуємо
          методи, більше про нагороди. Ми використовуємо методи, що
          використовуються в школах Кембриджу та Оксворду. Цей підхід здатен
          змінити все. Ми використовуємо методи, що використовуються в школах.
          Ми використовуємо методи, більше про нагороди...
          <span className='text-[#818181]'>читати</span>
        </p>
      </div>
      {/* VIDEO */}
      <div>
        <h2 className='font-lora text-3xl font-medium mb-[26px]'>
          Відео про школу
        </h2>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            src='https://www.youtube.com/embed/r9jwGansp1E'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* COACHES */}
      <div>
        <h2 className='font-lora text-3xl font-medium mb-[26px]'>Наші коучі</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* COACH CARD */}
          <div className='flex flex-col lg:flex-row p-2.5 bg-[#FFE4BB4D]'>
            <img
              className='object-cover w-full'
              src='/сoach.png'
              alt='Main Coach'
            />
            <div className='p-2.5 flex flex-col'>
              <div className='p-2.5'>
                {/* heading */}
                <h3 className='text-2xl font-lora mb-5'>Вікторія</h3>
                <p className='text-sm '>
                  Засновниця студії англійскої мови StudyBuddy, методист,
                  ментор.
                </p>
              </div>
              {/* skills */}
              <div className='flex flex-col gap-5 p-2.5'>
                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Сертифікат BAFTHS
                    вищого ступеня
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_medal.svg' alt='' /> Досвід 10 років
                  </p>
                </div>

                <div className='flex flex-col gap-2.5'>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' />
                    індивідуальні заняття
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> для
                    спеціалістів
                  </p>
                  <p className='flex gap-2 text-[10px]'>
                    <img src='/icons/icon_checkmark-12px.svg' alt='' /> коучинг
                  </p>
                </div>

                <div className='italic text-[10px] w-3/4'>
                  “Ми використовуємо методи, що використовуються в школах
                  Кембриджу та Ми використовуємо методи, що використовуються в
                  школах.”
                </div>
                <div className='flex gap-2'>
                  <img src='/icons/icon_whats-12px.svg' alt='' />
                  <img src='/icons/icon_inst-12px.svg' alt='' />
                  <img src='/icons/icon_FB-12px.svg' alt='' />
                  <img src='/icons/icon_email-12px.svg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About