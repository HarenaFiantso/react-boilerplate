import MapImg from '../../assets/landing/map.png';
import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function World() {
  return (
    <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
      >
        <TypingText title='| Boilerplate world' textStyles='text-center' />
        <TitleText
          title={
            <>
              Track your friends around you and invite them to this boilerplate
              platform
            </>
          }
          textStyles='text-center'
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className='relative mt-[68px] flex h-[550px] w-full'
        >
          <img src={MapImg} alt='map' className='h-full w-full object-cover' />
        </motion.div>
      </motion.div>
    </section>
  );
}
