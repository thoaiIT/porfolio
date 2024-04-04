import React from 'react';
import { motion } from 'framer-motion';

interface HoverBarProps {
  isHover: boolean;
}

const HoverBar = ({ isHover }: HoverBarProps) => {
  return (
    <div className="min-h-[3px] w-full bg-[#5d6c83] mt-[6px]">
      <motion.div
        initial={false}
        animate={{
          width: isHover ? '100%' : 0,
          transition: { duration: 0.3 },
        }}
        className="w-0 h-[3px] min-h-[3px] bg-white"
      />
    </div>
  );
};

export default HoverBar;
