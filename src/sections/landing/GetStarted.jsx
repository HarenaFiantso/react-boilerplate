import { staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function GetStarted() {
  return (
    <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col gap-8 lg:flex-row 2xl:max-w-[1280px]'
      >
        <motion.div></motion.div>
      </motion.div>
    </section>
  );
}
