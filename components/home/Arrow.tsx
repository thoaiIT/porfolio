'use client';

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

const Arrow = () => {
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: [20, 0, -20] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <IoIosArrowDown />
    </motion.div>
  );
};

export default Arrow;
