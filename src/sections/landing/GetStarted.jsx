import GetStartedImg from '../../assets/landing/get-started.png';
import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import StartSteps from '../../components/landing/StartSteps';
import { fadeIn, planetVariants, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

const startingFeatures = [
  'Lorem Ipsum dolor sit amet consectur adisciping 1',
  'Lorem Ipsum dolor sit amet consectur adisciping 2',
  'Lorem Ipsum dolor sit amet consectur adisciping 3',
];

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
        <motion.div
          variants={planetVariants('left')}
          className='flex flex-1 items-center justify-center'
        >
          <img
            src={GetStartedImg}
            alt='get-started'
            className='h-[90%] w-[90%] object-contain'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='flex flex-[0.75] flex-col justify-center'
        >
          <TypingText title='| How this boilerplate works' />
          <TitleText title={<>Get started with this boilerplate</>} />
          <div className='mt-[31px] flex max-w-[370px] flex-col gap-[24px]'>
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
