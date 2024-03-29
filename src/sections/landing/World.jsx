import MapImg from '../../assets/landing/map.png';
import People1 from '../../assets/landing/people-01.png';
import People2 from '../../assets/landing/people-02.png';
import People3 from '../../assets/landing/people-03.png';
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

          <div className='absolute bottom-20 right-20 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]'>
            <img src={People1} alt='people' className='h-full w-full' />
          </div>

          <div className='absolute left-20 top-10 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]'>
            <img src={People2} alt='people' className='h-full w-full' />
          </div>

          <div className='absolute left-[45%] top-1/2 h-[70px] w-[70px] rounded-full bg-[#5D6680] p-[6px]'>
            <img src={People3} alt='people' className='h-full w-full' />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
