import { textContainer, textVariant2 } from '../../utils/motion';
import { motion } from 'framer-motion';

export const TypingText = ({ title, textStyles }) => {
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>;
};
