'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      {/* TOP */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=''
      >
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='font-lora text-3xl font-medium mb-[26px]'
        >
          Про наших студентів
        </motion.h2>
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
      </motion.div>
      {/* TESTIMONIALS */}
      <div>
        <h2 className='font-lora text-3xl font-medium mb-[26px]'>
          Відгуки студентів
        </h2>

        {/* GRID */}

        <div className='grid grid-cols-3 grid-rows-6 gap-5'>
          {/* CARD */}
          <div className='row-span-2 bg-background'>
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації
                  etc.
                </p>
              </div>
            </div>
          </div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='col-span-2 bg-background'
          >
            <div className='flex p-3'>
              <div className='flex-1 mr-4'>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.
                </p>
              </div>
              <div className='flex-1'>
                <img
                  className='object-contain h-full'
                  src='/testimonials/testimonial-1.png'
                  alt='Student Image'
                />
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='col-start-2 row-start-2 bg-background'
          >
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='col-start-3 row-start-2 bg-background'
          >
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                  className='object-contain'
                  src='testimonials/testimonial-6.png'
                  alt=''
                />
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='row-start-3 bg-background'
          >
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='row-start-3 bg-background'
          >
            {' '}
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                  className='object-contain'
                  src='testimonials/testimonial-6.png'
                  alt=''
                />
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='col-span-2 col-start-1 row-start-4 bg-background'
          >
            {' '}
            <div className='flex p-3'>
              <div className='flex-1 mr-4'>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації
                  etc.
                </p>
              </div>
              <div className=' flex-1'>
                <img
                  className='object-contain h-full'
                  src='/testimonials/testimonial-3.png'
                  alt='Student Image'
                />
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='row-span-2 col-start-3 row-start-3 bg-background'
          >
            {' '}
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації
                  etc.
                </p>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='row-span-2 row-start-5 bg-background'
          >
            {' '}
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтамиetc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації
                  etc.
                </p>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='col-span-2 row-start-5 bg-background'
          >
            {' '}
            <div className='flex p-3'>
              <div className='flex-1 mr-4'>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
                <p className='text-sm pr-5 p-2 leading-[15.4px]'>
                  Спеціально розроблений курс для тих хто володіє базовими
                  знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.Спеціально розроблений курс для тих хто володіє
                  базовими знаннями та хоче підвищити свій рівень комунікації,
                  влаштуватися в іноземну компанію, працювати з іноземними
                  клієнтами etc.
                </p>
              </div>
              <div className=' flex-1'>
                <img
                  className='object-contain h-full'
                  src='/testimonials/testimonial-1.png'
                  alt='Student Image'
                />
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='col-start-2 row-start-6 bg-background'
          >
            {' '}
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='col-start-3 row-start-6 bg-background'
          >
            {' '}
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                  className='object-contain'
                  src='testimonials/testimonial-6.png'
                  alt=''
                />
              </div>
              <div className=''>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TODO: This is testimonials on mobile screens
         * Need to be hidden on large screens and shown on small, and vice versa.
         */}
        {/* <div className='border grid grid-cols-1 grid-rows-12 gap-0'>
          <div className='border col-span-1 row-span-1'>1</div>
          <div className='border col-span-1 row-span-1'>2</div>
          <div className='border col-span-1 row-span-1'>3</div>
          <div className='border col-span-1 row-span-1'>4</div>
          <div className='border col-span-1 row-span-1'>5</div>
          <div className='border col-span-1 row-span-1'>6</div>
          <div className='border col-span-1 row-span-1'>7</div>
          <div className='border col-span-1 row-span-1'>8</div>
          <div className='border col-span-1 row-span-1'>9</div>
          <div className='border col-span-1 row-span-1'>10</div>
          <div className='border col-span-1 row-span-1'>11</div>
          <div className='border col-span-1 row-span-1'>12</div>
        </div> */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
          {/* STUDENT CARD */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
