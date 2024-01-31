import ArrowDown from '../../assets/landing/arrow-down.svg';
import { TypingText } from '../../components/landing/CustomTexts';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
      <div className='gradient-02 z-0' />
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-[1280px]'
        >
          <TypingText
            title='| About this boilerplate'
            textStyles='text-center'
          />

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className='mt-[8px] text-center font-normal text-secondary-white sm:text-[32px]'
          >
            <span className='font-extrabold text-white'>Boilerplate</span> Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Modi ut
            excepturi eveniet exercitationem nam iusto ipsam eaque, incidunt
            alias voluptas ducimus repellendus ipsum tempore nostrum soluta
            fugiat cumque. Ipsum, unde.{' '}
            <span className='font-extrabold text-white'>full of dream</span>{' '}
          </motion.p>

          <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src={ArrowDown}
            alt='arrow down'
            className='mt-[28px] h-[28px] w-[18px] object-contain'
          />
        </motion.div>
    </section>
  );
}
