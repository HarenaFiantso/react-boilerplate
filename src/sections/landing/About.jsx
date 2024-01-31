import { TypingText } from '../../components/landing/CustomTexts';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
      <div className='gradient-02 z-0'>
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

          <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}></motion.p>
        </motion.div>
      </div>
    </section>
  );
}
