import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import { staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Explore() {
  return (
    <section className='xs:p-8 px-6 py-12 sm:p-16' id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hiddent'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
      >
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              This is the Boilerplate <br className='hidden md:block' /> to
              explore
            </>
          }
          textStyles='text-center'
        />
      </motion.div>
    </section>
  );
}
