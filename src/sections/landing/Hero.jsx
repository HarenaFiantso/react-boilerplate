import { staggerContainer } from '../../utils/motion';
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
          <motion.h1 variants={}>Boilerplate</motion.h1>
        </div>
      </motion.div>
    </section>
  );
}
