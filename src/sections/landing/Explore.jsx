import Planet_1 from '../../assets/landing/planet-01.png';
import Planet_2 from '../../assets/landing/planet-02.png';
import Planet_3 from '../../assets/landing/planet-03.png';
import Planet_4 from '../../assets/landing/planet-04.png';
import Planet_5 from '../../assets/landing/planet-05.png';
import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import { staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: Planet_1,
    title: 'Lorem',
  },
  {
    id: 'world-2',
    imgUrl: Planet_2,
    title: 'Lorem',
  },
  {
    id: 'world-3',
    imgUrl: Planet_3,
    title: 'Lorem',
  },
  {
    id: 'world-4',
    imgUrl: Planet_4,
    title: 'Lorem',
  },
  {
    id: 'world-5',
    imgUrl: Planet_5,
    title: 'Lorem',
  },
];

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
        <div className='mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row'>
          {exploreWorlds.map((world, index) => (
            <h1>Explore the world</h1>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
