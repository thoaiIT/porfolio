'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import HoverBar from '../layout/HoverBar';

const More = ({ content }: { content: string }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.a
      href="/about"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="text-[16px] font-semibold flex items-center">
        <span className="uppercase">{content}</span>
        <motion.div
          className="ml-[6px]"
          animate={{ translateX: isHovered ? 8 : 0, transition: { duration: 0.3 } }}
        >
          <FaArrowRight />
        </motion.div>
      </div>
      <HoverBar isHover={isHovered} />
    </motion.a>
  );
};

export default More;
