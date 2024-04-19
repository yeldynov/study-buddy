'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div className='p-6 lg:p-20 flex flex-col gap-[60px]'>
      {/* TOP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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

        {/* GRID 1 */}
        <div className='flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:gap-10 gap-5'>
          {/* CARD 1 */}
          <div className='row-span-2 bg-background'>
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div>
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
          {/* CARD 2 */}
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
            <div className='flex lg:flex-row flex-col-reverse p-3'>
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
          {/* CARD 3 */}
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
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD 4 */}
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
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD 5 */}
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
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD 6 */}
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
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                  className='object-contain'
                  src='testimonials/testimonial-6.png'
                  alt=''
                />
              </div>
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD 7 */}
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
            <div className='flex lg:flex-row flex-col-reverse p-3'>
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
          {/* CARD 8 */}
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
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div>
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
          {/* CARD 9 */}
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
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div>
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
          {/* CARD 10 */}
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
            <div className='flex lg:flex-row flex-col-reverse p-3'>
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
          {/* CARD 11 */}
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
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <iframe
                  src='https://www.youtube.com/embed/r9jwGansp1E'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
          {/* CARD 12 */}
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
            <div className='flex flex-col w-full p-3 '>
              <div className='aspect-w-3 aspect-h-4'>
                <img
                  className='object-contain'
                  src='testimonials/testimonial-6.png'
                  alt=''
                />
              </div>
              <div>
                <h2 className='text-xl font-semibold my-1 p-2 text-center'>
                  Ганна, маркетолог
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
          {/* STUDENT CARD */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
