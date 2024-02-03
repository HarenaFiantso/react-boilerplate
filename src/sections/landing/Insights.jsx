import Planet1 from '../../assets/landing/planet-06.png';
import Planet2 from '../../assets/landing/planet-07.png';
import Planet3 from '../../assets/landing/planet-08.png';
import { TitleText, TypingText } from '../../components/landing/CustomTexts';
import { staggerContainer } from '../../utils/motion';
import { motion } from 'framer-motion';

export const insights = [
  {
    imgUrl: Planet1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere dignissimos quis, neque velit odio impedit praesentium aperiam porro soluta ipsa dolores modi officia quod architecto corporis? Ratione, perspiciatis dignissimos?',
  },
  {
    imgUrl: Planet2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere dignissimos quis, neque velit odio impedit praesentium aperiam porro soluta ipsa dolores modi officia quod architecto corporis? Ratione, perspiciatis dignissimos?',
  },
  {
    imgUrl: Planet3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere dignissimos quis, neque velit odio impedit praesentium aperiam porro soluta ipsa dolores modi officia quod architecto corporis? Ratione, perspiciatis dignissimos?',
  },
];

export default function Insights() {
  return (
    <section className='xs:p-8 relative z-10 px-6 py-12 sm:p-16'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='mx-auto flex w-full flex-col 2xl:max-w-[1280px]'
      >
        <TypingText title='| Insight' textStyles='text-center' />
        <TitleText
          title={<>Insight about this boilerplate</>}
          textStyles='text-center'
        />
        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((item, index) => {
            <InsightCard
              key={`insight-${index}`}
              {...item}
              index={index + 1}
            />;
          })}
        </div>
      </motion.div>
    </section>
  );
}
