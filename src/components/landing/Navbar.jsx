import Menu from '../../assets/landing/menu.svg';
import Search from '../../assets/landing/search.svg';
import { navVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className='relative px-6 py-8 sm:px-16'
    >
      <div className='gradient-01 absolute inset-0 w-[50%]' />
      <div className='mx-auto flex w-full justify-between gap-8 2xl:max-w-[1280px]'>
        <img
          src={Search}
          alt='search'
          className='h-[24px] w-[24px] object-contain'
        />
        <h2 className='text-[24px] font-extrabold leading-[30.24px] text-white'>
          BOILERPLATE
        </h2>
        <img
          src={Menu}
          alt='menu'
          className='h-[24px] w-[24px] object-contain'
        />
      </div>
    </motion.nav>
  );
}
