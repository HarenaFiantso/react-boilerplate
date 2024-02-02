import Headset from '../../assets/landing/headset.svg';
import VrPano from '../../assets/landing/vrpano.svg';
import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

const newFeatures = [
  {
    imgUrl: VrPano,
    title: 'test 1',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus eius et quam, aspernatur veniam recusandae quos officiis reiciendis beatae ipsum provident dolore ratione harum reprehenderit nihil quo ipsa porro!',
  },
  {
    imgUrl: Headset,
    title: 'test 2',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus eius et quam, aspernatur veniam recusandae quos officiis reiciendis beatae ipsum provident dolore ratione harum reprehenderit nihil quo ipsa porro!',
  },
];

export default function WhatsNew() {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className='flex flex-[0.95] flex-col justify-center'
        >
          <TypingText title="| What's new" />
          <TitleText title={<>What's new with this boilerplate ?</>} />
          <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
