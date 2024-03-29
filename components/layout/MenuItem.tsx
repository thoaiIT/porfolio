import * as React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/lib/motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i }: { i: string }) => {
  return (
    <motion.li
      variants={variants}
      className="my-5 text-8xl font-bold"
    >
      <a href="/">{i}</a>
    </motion.li>
  );
};
