import { staggerContainer, textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='xs:py-8 py-12 pl-6 sm:py-16 sm:pl-16'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
      >
        <div className='relative z-10 flex flex-col items-center justify-center'>
          <motion.h1
            variants={textVariant(1.1)}
            className='text-[44px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[74.4px] md:text-[100px] md:leading-[114.4px] lg:text-[144px] lg:leading-[158.4px]'
          >
            Boilerplate
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className='flex flex-row items-center justify-center'
          >
            <h1 className='text-[40px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[54.4px] md:text-[80px] md:leading-[104.4px] lg:text-[134px] lg:leading-[138.4px]'>
              full
            </h1>
            <div className='mx-[6px] h-[38px] w-[60px] rounded-r-[50px] border-[9px] border-white sm:mx-2 sm:h-[48px] sm:w-[80px] md:h-[108px] md:w-[212px] md:border-[18px]' />
            <h1 className='text-[40px] font-bold uppercase leading-[64.4px] text-white sm:text-[60px] sm:leading-[54.4px] md:text-[80px] md:leading-[104.4px] lg:text-[134px] lg:leading-[138.4px]'>
              ream
            </h1>
            <div></div>
          </motion.div>
        </div>

        <motion.div variants={}>
          <div className='hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]'></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
